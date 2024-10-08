import { Component, Input } from '@angular/core';
import { IProcduct } from '../model/interface/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input()
  product!: IProcduct;

}
