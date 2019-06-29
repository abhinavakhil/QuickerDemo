import { Component, OnInit } from '@angular/core';
import { AllItemsService } from '../services/all-items.service';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   products$;

  constructor(private allItemService:AllItemsService,
              private shoppingcartService:ShoppingcartService,
              private route:ActivatedRoute) { 
    this.products$ = this.allItemService.getdata();
  }

  ngOnInit() {
  }


  
}
