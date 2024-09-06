import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import { ICategory } from '../model/interface/category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],

  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categoryList: any[] = [];
  masterService = inject(MasterService)
  ngOnInit() {
    this.masterService.getAllCategory().subscribe((res: any) => {
      this.categoryList = res;
      console.log('category',this.categoryList)
    })
  }
}
