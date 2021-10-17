import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cloths',
  templateUrl: './cloths.component.html',
  styleUrls: ['./cloths.component.css']
})
export class ClothsComponent implements OnInit {
public product : any = [];
public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe( res =>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}
