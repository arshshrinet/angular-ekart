import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  @ViewChild(ProductListComponent) productListComponent:ProductListComponent;
  searchText:string='';
  setSearchText(value:string){
    this.searchText=value;
  }

addToCart:number=0;
  product = {
    name : 'iPhone 15',
    price : 789,
    color : 'Blue',
    discount : 8.5,
    inStock : 1,
    pImage : '/assets/images/iphone.jpg'
  }  
  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount/100 )
  }
  onNameChange(event:any){
    //this.name=event.target.value;
  }
  decrementCartValue(){
    if(this.addToCart >0){
      this.addToCart--;
    }    
  }
  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
    
  }
}
