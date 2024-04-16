import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../models/login';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup 
  email!:Login
  password!:Login
  ngOnInit(): void {

  }
  constructor(private fb: FormBuilder, private loginService:LoginService)
  {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onLogin(){
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value
      const password = this.loginForm.get('password')?.value
      const formData: Login = this.loginForm.value;


      this.loginService.addUser(formData).subscribe(res=>{
        if(res.result){
          alert("success")
        } else{
          alert("error")
        }
      })
  }
}
}
