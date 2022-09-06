import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  title = 'test-angular';

  @Input() product: IProduct;

  details: boolean = false;
}
