import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DefaultComponent } from './components/default/default.component';
import { ItemComponent } from './components/Items/Item/item.component';
import { ItemsComponent } from './components/Items/items.component';
import { ProductComponent } from './components/Product/product.component';
import { MainComponent } from './components/root/root.component';
import { ProductService } from './Services/Product.service';

@NgModule({
  declarations: [
    DefaultComponent,
    ProductComponent,
    MainComponent,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
