import { Component, OnInit } from '@angular/core';
import { products as data } from 'src/app/Data/products';
import { items as itemsData } from 'src/app/Data/Items';
import { IItems } from 'src/app/Models/Item';
import { IProduct } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/Product.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
})
export class MainComponent implements OnInit {
  title = 'test-angular';

  //hardcoded data
  products: IProduct[] = data;
  
  //to work with apis
  //products: IProduct[] = [];
  
  items: IItems[] = itemsData;

  constructor(private prService: ProductService){}

  ngOnInit(): void {
    // this.prService.GetAll()
    //   .subscribe(product => {
    //     this.products = product
    //   });
  }
}
