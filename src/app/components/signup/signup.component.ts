import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    email:'',
    password:''
  };

  constructor(private authService:AuthService, private router:Router){}

  signUp() {
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token',res.token)
          this.router.navigate(['/task']);
        },
        err => console.log(err)
      )
  }
}
