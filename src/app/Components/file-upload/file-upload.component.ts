import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import * as firebase from 'firebase'


const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  public imageFile: any[];
  constructor() { }

  firebaseConfig = {
    apiKey: "AIzaSyC8XWoHy5Ta81vIwwH5ZwTRrXgWd6GEQZ4",
    authDomain: "sewwas.firebaseapp.com",
    databaseURL: "https://sewwas.firebaseio.com",
    projectId: "sewwas",
    storageBucket: "sewwas.appspot.com",
    messagingSenderId: "254553004836",
    appId: "1:254553004836:web:27125b7992ce46f7"
  };
  // Initialize Firebase
  

  ngOnInit() {
    firebase.initializeApp(this.firebaseConfig);
    
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //      console.log('ImageUpload:uploaded:', item, status, response);
    //      alert('File uploaded successfully');
    //  };
  }

  uploadAll(){

    var currntDate = Date.now().toString();
    var storageRef = firebase.storage().ref();
    var imageRef = storageRef.child("images/" + currntDate);

    imageRef.put(this.imageFile[0]).then(function(snapshot) {
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
      });
      console.log('Uploaded a blob or file!');
    });


    console.log(this.imageFile)
  }

  onFileChange(event){
    this.imageFile = event.target.files;
  }

}
