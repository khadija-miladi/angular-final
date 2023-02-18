import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup ;
  errorMessage: any;
  constructor(private router:Router,private fb:FormBuilder,private authservice:AuthService) { }
  

  ngOnInit(): void {
    this.initForm()
  }
  
  initForm() {
    this.registerForm=this.fb.group({
      firstname:new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
  
      ]),
      lastname:new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
  
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      repeatpassword:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }
  get firstname(){
    return this.registerForm.get('firstname')
  }
  get lastname(){
    return this.registerForm.get('lastname')
  }
   get email(){
    return this.registerForm.get('email')
  }
  get password() {
    return this.registerForm.get('password')
  }
  get repeatpassword(){
    return this.registerForm.get('repeatpassword')
  }
  register(){
    const email=this.registerForm.get('email').value
    const password=this.registerForm.get('password').value
    this.authservice.createNewUser(email,password).then(
      ()=>{
        this.router.navigate(['/'])
      },
      (error)=>{
        this.errorMessage=error
      }
    )
  }
}


