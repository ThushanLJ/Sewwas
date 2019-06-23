import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  
  constructor(public auth: AuthService , private formBuilder: FormBuilder,private router : Router) { 
    firebase.initializeApp(this.firebaseConfig);
  }

   registerForm : FormGroup;
   loginForm : FormGroup;
   load:boolean=false;

  logoutNow(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("Success")
      localStorage.removeItem('sewwasUserToken');
      localStorage.removeItem('sewwasUserName');
      localStorage.removeItem('sewwasUserId');
    }).catch(function(error) {
      console.log(error)
    });
  }

  loginUsingFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    var fbuser=null;
    firebase.auth().signInWithPopup(provider).then((result)=> {
      // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // var token = result.credential.accessToken;
      // // The signed-in user info.
      // var user = result.user;
      // ...
      
      // if(result != null){
      //   var user={
      //     'name':result.additionalUserInfo.profile.name,
      //     'userMail':result.additionalUserInfo.profile.email,
      //     'firstName':result.additionalUserInfo.profile.first_name,
      //     'lastName':result.additionalUserInfo.profile.last_name,
      //     'picture':result.additionalUserInfo.profile.picture.data.url
      //   }
      // }

      fbuser=result;
      var user;
        if(fbuser != null){
        user={
          'name':fbuser.additionalUserInfo.profile.name,
          'userMail':fbuser.additionalUserInfo.profile.email,
          'firstName':fbuser.additionalUserInfo.profile.first_name,
          'lastName':fbuser.additionalUserInfo.profile.last_name,
          'picture':fbuser.additionalUserInfo.profile.picture.data.url
        }
      }
      
     this.auth.fbRegister(user).subscribe((data:any)=>{
       console.log(data);
       if(data.data.user != null){
        console.log(data);
        localStorage.setItem('sewwasUserToken', data.data.token);
        localStorage.setItem('sewwasUserName', data.data.user.local.username);
        localStorage.setItem('sewwasUserId', data.data.user._id);
        //this.router.navigate(['/home']);
      }
      else{
        //
      }
     },(err : HttpErrorResponse)=>{
      //
    })
      //console.log(fbuser)
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
    
    // function servicecall(){
    //   if(fbuser != null){
    //     var user={
    //       'name':fbuser.additionalUserInfo.profile.name,
    //       'userMail':fbuser.additionalUserInfo.profile.email,
    //       'firstName':fbuser.additionalUserInfo.profile.first_name,
    //       'lastName':fbuser.additionalUserInfo.profile.last_name,
    //       'picture':fbuser.additionalUserInfo.profile.picture.data.url
    //     }
      
    // }
    // }
  }
  loginUsingGoogleAuth(){

    var provider = new firebase.auth.GoogleAuthProvider();
    var guser=null;
    firebase.auth().signInWithPopup(provider).then((result)=> {
      // This gives you a Google Access Token. You can use it to access the Google API.

      console.log(result)

      guser=result;
      var user;
        if(guser != null){
        user={
          'name':guser.additionalUserInfo.profile.name,
          'userMail':guser.additionalUserInfo.profile.email,
          'firstName':guser.additionalUserInfo.profile.given_name,
          'lastName':guser.additionalUserInfo.profile.family_name,
          'picture':guser.additionalUserInfo.profile.picture
        }
      }

      this.auth.googleRegister(user).subscribe((data:any)=>{
        console.log(data);
        if(data.data.user != null){
          console.log(data);
          localStorage.setItem('sewwasUserToken', data.data.token);
          localStorage.setItem('sewwasUserName', data.data.user_name);
          localStorage.setItem('sewwasUserId', data.data.user_id);
          this.router.navigate(['/home']);
        }
        else{
          //
        }
      },(err : HttpErrorResponse)=>{
        //
      })
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
      email:[null, Validators.required],
      password:[null, Validators.required],
    });

    if(localStorage.getItem('sewwasUserToken')==null ){
      this.load=true;
    }
  }


  register(){
    console.log(this.registerForm.value);
    this.auth.registerUser(this.registerForm.value).subscribe((data:any)=>{
      if(data.data != null){
        //
      }
      else{
        //
      }
    },(err : HttpErrorResponse)=>{
      //
    })
  }

  login(){
    console.log(this.loginForm.value);
    this.auth.loginUser(this.loginForm.value).subscribe((data:any)=>{
      if(data.data.user_id != null){
        console.log(data);
        localStorage.setItem('sewwasUserToken', data.data.token);
        localStorage.setItem('sewwasUserName', data.data.user_name);
        localStorage.setItem('sewwasUserId', data.data.user_id);
        this.router.navigate(['/home']);
      }
      else{
        //
      }
    },(err : HttpErrorResponse)=>{
      //
    })
  }

}
