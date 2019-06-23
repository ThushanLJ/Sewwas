import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service'
import * as firebase from 'firebase'
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firebaseConfig = {
    apiKey: "AIzaSyB3w_iqDDxDfDuTisBHFLg2bEED66giA_Q",
    authDomain: "testnio123.firebaseapp.com",
    databaseURL: "https://testnio123.firebaseio.com",
    projectId: "testnio123",
    storageBucket: "testnio123.appspot.com",
    messagingSenderId: "506694270836",
    appId: "1:506694270836:web:3b0f5a1bb3a48ae5"
  };

  
  constructor(private auth: AuthService , private formBuilder: FormBuilder) { 
    firebase.initializeApp(this.firebaseConfig);
  }

   registerForm : FormGroup;
   loginForm : FormGroup;

  logoutNow(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("Success")
    }).catch(function(error) {
      console.log(error)
    });
  }

  loginUsingFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // var token = result.credential.accessToken;
      // // The signed-in user info.
      // var user = result.user;
      // ...

      console.log(result)
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // // ...
    });
  }
  loginUsingGoogleAuth(){

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.

      console.log(result)
      // var token = result.credential.accessToken;
      // // The signed-in user info.
      // var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });


  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName:[null, Validators.required],
      lastName:[null, Validators.required],
      username:[null, Validators.required],
      email:[null, Validators.required],
      password:[null, Validators.required],
    });

    this.loginForm = this.formBuilder.group({
      username:[null, Validators.required],
      password:[null, Validators.required],
    });
  }


  register(){
    console.log(this.registerForm.value);
    this.auth.registerUser(this.registerForm.value).subscribe((data:any)=>{
      console.log(data);
    })
  }

  login(){
    console.log(this.loginForm.value);
    this.auth.loginUser(this.loginForm.value).subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem('sewwasUserToken', data.data.token);
      localStorage.setItem('sewwasUserName', data.data.user_name);
      localStorage.setItem('sewwasUserId', data.data.user_id);
    })
  }

}
