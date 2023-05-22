import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL='http://localhost:3000'
  constructor(private http: HttpClient,private router: Router) { }



  signUpUser(user: { email: string, password: string }) {
    return this.http.post<any>(this.URL + '/login', user);
  }
  signInUser(user: { email: string, password: string }) {
    return this.http.post<any>(this.URL + '/register', user);
  }
  loggedIn(){
    return !! localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

}
