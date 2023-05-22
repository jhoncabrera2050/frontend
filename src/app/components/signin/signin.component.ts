import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {
  user = {
    email:'',
    password:''
  };
  constructor(private authService:AuthService, private router:Router){}
  signIn(){
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token',res.token);
          this.router.navigate(['/dashboard']);
        },
        err => console.log(err)
      )
  }
}
