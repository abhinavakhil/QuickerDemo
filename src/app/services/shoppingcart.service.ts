import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  constructor(private db:AngularFireDatabase) { }
   //creating comment node
   create(comments){
     return this.db.list('/comments').push(comments);
 }
  //fetching data of comments
  getComments(){
    return this.db.list('/comments').valueChanges();
  }
  //delete items
  deleteitem(itemsId){
    return this.db.object('/items/'+ itemsId).remove();
  }
}
