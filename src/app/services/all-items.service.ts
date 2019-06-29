import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AllItemsService {

  constructor(private db:AngularFireDatabase) { }

  storeData(items){
    return this.db.list('/items').push(items);
  }
  
  getdata(){
    return this.db.list('/items').snapshotChanges();
  }

   retrieveall(itemsId){ //retrieving items with id
     return this.db.object('/items/'+itemsId).valueChanges();
   }
}
