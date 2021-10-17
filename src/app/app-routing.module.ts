import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOrderComponent } from './orders/list-order/list-order.component';
import { BooksComponent } from './products/books/books.component';
import { ClothsComponent } from './products/cloths/cloths.component';



const routes: Routes = [
  {path: '', redirectTo:'books', pathMatch:'full'},
  {path:'books',component:BooksComponent},
  {path: 'cloth', component:ClothsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
