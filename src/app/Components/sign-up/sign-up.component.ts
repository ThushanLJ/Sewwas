import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  closed=false;
  show1=false;
  goHome=false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router:Router,private auth:AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
    validator: MustMatch('password', 'confirmPassword')
})
  }
  get f() { return this.registerForm.controls; }
 

  //onSubmit() {
  //  this.submitted = true;
    // stop here if form is invalid
    ///if (this.registerForm.invalid) {
   //     return;
    //}
    //this.show1=true
//}
onSubmit() {
  this.submitted = true;
  // if(this.form.password!=this.form.confirmPassword){
  //   this.mustMatch=true;
  // }
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  console.log(this.registerForm.value)
  this.auth.registerUser(this.registerForm.value).subscribe((data:any)=>{
    console.log(data);
    if(data.success ==true){
      this.show1=true
      console.log(data.data);
    }
    else{
      console.log("fuck");
      
    }
  },(err : HttpErrorResponse)=>{
    console.log(err);
    
  })
}





close(){
  this.closed=true
  this.show1=false
  this.goHome=true
  if(this.goHome){
    this.router.navigateByUrl("/")}
}

}
