import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { LoginComponent } from './login/login.component';
import { AuthgaurdService } from './services/authgaurd.service';

const routes: Routes = [
  {path :'' , component : HomeComponent},
  {path :'cart' , component : CartComponent},
  {path :'cart/:id' , component : CartComponent},
  {path :'home' , component : HomeComponent},
  {path :'login' , component : LoginComponent},
  {path :'add-items' , component : AddItemsComponent ,canActivate:[AuthgaurdService]},
  {path :'**' , component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
