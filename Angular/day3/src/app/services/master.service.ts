import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../model/interface/category';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  getAllCategory(){
    return this.http.get<ICategory>('https://fakestoreapi.com/products/categories')
  }
}
