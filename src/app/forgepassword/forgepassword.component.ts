import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-forgepassword',
  templateUrl: './forgepassword.component.html',
  styleUrls: ['./forgepassword.component.css']
})
export class ForgepasswordComponent implements OnInit {
  
  errorMessage: any;
  email:string;

  constructor(private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {
  
  }
  

  forgetpassword(email:string){
    this.authservice.forgetpassword(email).then(
      ()=>{
        this.router.navigate(['/'])
      },
      (error)=>{
        this.errorMessage=error
      }
    )
  }
}