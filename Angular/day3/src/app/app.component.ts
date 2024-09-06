import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  ListProductComponent } from './list-product/list-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListProductComponent,ReactiveFormsModule,CategoryComponent] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day 3';
}
