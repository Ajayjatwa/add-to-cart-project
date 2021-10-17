import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOrderComponent } from './orders/list-order/list-order.component';
import { HeaderComponent } from './HFfolder/header/header.component';
import { FooterComponent } from './HFfolder/footer/footer.component';
import { HomeComponent } from './HFfolder/home/home/home.component';
import { ClothMenComponent } from './products/cloth-men/cloth-men.component';
import { ClothWomenComponent } from './products/cloth-women/cloth-women.component';
import { ClothKidsComponent } from './products/cloth-kids/cloth-kids.component';
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { BooksComponent } from './products/books/books.component';
import { FruitsComponent } from './products/fruits/fruits.component';
import { VegetablesComponent } from './products/vegetables/vegetables.component';
import { ClothsComponent } from './products/cloths/cloths.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOrderComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClothMenComponent,
    ClothWomenComponent,
    ClothKidsComponent,
    MobilesComponent,
    BooksComponent,
    FruitsComponent,
    VegetablesComponent,
    ClothsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
