import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllItemsService } from '../services/all-items.service';
import { take } from 'rxjs/operators';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { AngularFireDatabase } from 'angularfire2/database';

 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product = {};
  id:any;
  comments:any;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private allitemService:AllItemsService,
              private cartService:ShoppingcartService,
              ) {

              this.id = this.route.snapshot.paramMap.get('id');
              if(this.id)
                this.allitemService.retrieveall(this.id).pipe(take(1)).subscribe(p => this.product = p);
              }




  ngOnInit() { 
      this.comments = this.cartService.getComments();
  }

  save(comments){
      this.cartService.create(comments);
  }
   

   
  delete(){
    if(!confirm('are you sure to delete the item?')){
      return ;
    }
   else 
    {
      const id = this.route.snapshot.paramMap.get('id');
      this.cartService.deleteitem(id);
      this.router.navigate(['/home']);
    }
  }
    
  x:any = document.getElementsByClassName("fa-thumbs-up");

  changeColor(){
   this.x[0].classList.toggle("fa-thumbs-down");
  }

}

