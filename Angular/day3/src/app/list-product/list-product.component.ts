import { Component,inject,OnInit } from '@angular/core';
import {  ProductItemComponent } from '../product-item/product-item.component';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IProcduct } from '../model/interface/product';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [ProductItemComponent,NgFor],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {
//   habits=[
//   {id:1, name:'Habit 1'},
//   {id:2, name:'Habit 2'},
//   {id:3, name:'Habit 3'},
  
// ]
productList:IProcduct[]=[];
http=inject(HttpClient);
// constructor(private http:HttpClient) { }
ngOnInit(): void {
  this.getAllProduct()
  console.log(this.productList)
}
getAllProduct(){
  this.http.get('https://fakestoreapi.com/products').subscribe((res:any)=>{
    this.productList=res;
    // console.log(res)
  })
}
}
