import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // khai báo 1 biến product mới
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 12',
      price: 120000,
      description: 'new'
    },
    {
      id: 2,
      name: 'iPhone 13',
      price: 230000,
      description: 'new'
    },
    {
      id: 3,
      name: 'iPhone 6',
      price: 5000000,
      description: '90%'
    }
  ];

  currentProduct: Product = {};
  // object sản phẩm hiện tại dùng cho function editProduct

  isShowCreatedForm = false;
  isShowEditedForm = false;
  // 2 boolean dùng cho button toggleCreate/Edit

  constructor() { }

  toggleCreateForm() {
    this.isShowCreatedForm = !this.isShowCreatedForm;
    // đổi true / false
  }

  toggleEditForm(product) {
    this.isShowEditedForm = !this.isShowEditedForm;
    this.currentProduct = product;
    // đổi true / false + gán sản phẩm hiện tại
  }
  ngOnInit() {
  }

  editProduct(product) {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == product.id) {
        index = i;
        break;
        // duyệt mảng products để tìm sản phẩm cần edit
      }
    }
    this.products[index] = product; // lưu lại sản phẩm đã edit vào mảng
  }
}
