import { Component, OnInit } from '@angular/core';
import { AddItemService } from '../services/add-item.service';
import { AllItemsService } from '../services/all-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
    items$;
  constructor(private router:Router,
              private additemService:AddItemService,
              private allitemsService:AllItemsService) {
    this.items$ = this.additemService.getCategories();
   }
    
  ngOnInit() {
  }

  submit(items){
    console.log(items);
    this.allitemsService.storeData(items);
    alert('Cheers your item has been added !!');
    this.router.navigate(['/home']);
  }
}
