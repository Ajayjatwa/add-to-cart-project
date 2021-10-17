import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ApiService } from 'src/app/service /api.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  // Products :any =[];
  msg:string ="";

  constructor(private fakeapi:ApiService, private cart:CartService) { }

  productlist :any =[];
  ngOnInit(): void {
    this.fakeapi.Products().subscribe(res =>{
      this.productlist = res;

      this.productlist.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price});
      });

    })

    // this.fakeapi.Products().subscribe(data => this.productlist = data)
  }

  addtocart(item: any){
    this.cart.addtoCart(item);
  }

}
