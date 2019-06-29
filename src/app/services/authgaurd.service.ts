import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot,CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate{

  constructor(private auth:AuthService,
              private router:Router) { }

  canActivate(){
    return this.auth.AfAuth.user.pipe(map(user => {
        if(user){
          return true;
        }
       else{
        this.router.navigate(['/login']);
        return false;
       }
    }));
  }
}
