import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from 'angularFire2/auth';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs';
//import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:User;
  constructor(public AfAuth:AngularFireAuth,
              public router: Router) {
               this.AfAuth.authState.subscribe(user =>{
                 if(user){
                   this.user = user;
                   localStorage.setItem('user',JSON.stringify(this.user));
                 }else{
                   localStorage.setItem('user', null);
                 }
               })
               }

  async login(email: string, password: string){
       try{
         await this.AfAuth.auth.signInWithEmailAndPassword(email,password);
         alert("welcome to QuickrDemo");
         this.router.navigate(['/add-items']);
       }catch(e){
         alert('Error!' + e.message);
       }
     }

  async logout(){
    await this.AfAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    alert("you have been logged out!!");
  }

  get isLoggedIn():boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  
}
