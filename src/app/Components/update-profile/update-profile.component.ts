import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../../Services/auth.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import * as firebase from 'firebase';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private authService:AuthService) {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.firebaseConfig);
    }
  }

  registerForm : FormGroup;
  public imageFile: any[];
  userData:any;

  firebaseConfig = {
    apiKey: "AIzaSyC8XWoHy5Ta81vIwwH5ZwTRrXgWd6GEQZ4",
    authDomain: "sewwas.firebaseapp.com",
    databaseURL: "https://sewwas.firebaseio.com",
    projectId: "sewwas",
    storageBucket: "sewwas.appspot.com",
    messagingSenderId: "254553004836",
    appId: "1:254553004836:web:27125b7992ce46f7"
  };
    

  ngOnInit() {
  
    this.registerForm = this.formBuilder.group({
      phone:[null, Validators.required],
      address:[null, Validators.required],
      eamil:[null, Validators.required],
      website:[null, Validators.required],
      birthday:[null, Validators.required],
      gender:[null, Validators.required],
      userId:[null, Validators.required],
      picture:[null, Validators.required]
    });

    this.authService.getUserDetail().subscribe((data:any)=>{
      console.log(data.data);
      this.userData=data.data;
      this.updateFormData();
    });
  }

  uploadAll(){

    var currntDate = Date.now().toString();
    var storageRef = firebase.storage().ref();
    var imageRef = storageRef.child("images/" + currntDate);

    if(this.imageFile[0]==null){
      this.saveUpdate(null);
      return
    }

    imageRef.put(this.imageFile[0]).then((snapshot)=> {
      snapshot.ref.getDownloadURL().then((downloadURL) =>{
        console.log('File available at', downloadURL);
        this.saveUpdate(downloadURL);
      });
      console.log('Uploaded a blob or file!');
    });


    //console.log(this.imageFile)
  }

  onFileChange(event){
    this.imageFile = event.target.files;
  }

  saveUpdate(url){
    this.registerForm.value.userId=localStorage.getItem("sewwasUserId");
    this.registerForm.value.picture=url;
    console.log(this.registerForm.value);
    this.authService.saveUpdate(this.registerForm.value).subscribe((data:any)=>{
      console.log(data);
      if(data.success==true){
        window.location.reload();
      }
    })
  }

  updateFormData(){
    this.registerForm.patchValue({
      phone:this.userData.phone,
      address:this.userData.address,
      eamil:this.userData.local.userMail,
      website:this.userData.website,
      birthday:this.userData.birthday,
      gender:this.userData.gender,
      picture:this.userData.picture
    });
  }

}
