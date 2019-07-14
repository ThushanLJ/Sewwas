import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import * as firebase from 'firebase';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from "@angular/common/http";
import {BlogService} from '../../services/blog.service';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private formBuilder: FormBuilder ,
              private blogService: BlogService) { }

  public Editor = ClassicEditor;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  public imageFile: any[];
  blogForm : FormGroup;

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
    firebase.initializeApp(this.firebaseConfig);

    this.blogForm = this.formBuilder.group({
      title:[null, Validators.required],
      text:[null, Validators.required],
      type:[null],
      username:[null],
      email:[null],
      imageUrl:[null]
    });
  }
  uploadAll(){

    var currntDate = Date.now().toString();
    var storageRef = firebase.storage().ref();
    var imageRef = storageRef.child("images/" + currntDate);

    imageRef.put(this.imageFile[0]).then((snapshot)=> {
      snapshot.ref.getDownloadURL().then((downloadURL) =>{
        console.log('File available at', downloadURL);
        this.publishBlog(downloadURL);
      });
      console.log('Uploaded a blob or file!');
    });


    console.log(this.imageFile)
  }

  onFileChange(event){
    this.imageFile = event.target.files;
  }

  publishBlog(url){
    this.blogForm.value.email=localStorage.getItem('sewwasEmail');
    this.blogForm.value.username=localStorage.getItem('sewwasUserName');
    this.blogForm.value.imageUrl=url;
    console.log(this.blogForm.value);
    this.blogService.publishBlog(this.blogForm.value).subscribe((data:any)=>{
      console.log(data);
      window.location.reload();
    },(err : HttpErrorResponse)=>{
      console.log(err);
    })

  }

}
