import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public totleItem: number =0;
public searchTerm:string ='';
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res=>{
      this.totleItem =res.length;
    })
  }
  search($event:any){
    this.searchTerm = ($event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cart.search.next(this.searchTerm);
  }
}
