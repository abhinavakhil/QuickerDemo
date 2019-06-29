import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularFire2/auth';
import { environment } from '../environments/environment'; 
import * as firebase from 'firebase';
import { AddItemsComponent } from './add-items/add-items.component';
import { AddItemService } from './services/add-item.service';
import { FormsModule } from '@angular/forms';
import { AllItemsService } from './services/all-items.service';
import { HomeComponent } from './home/home.component';
import { ShoppingcartService } from './services/shoppingcart.service';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthgaurdService } from './services/authgaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    AddItemsComponent,
    HomeComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
  ],
  providers: [AddItemService,
              AllItemsService,
              ShoppingcartService,
              AuthService,
              AuthgaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
