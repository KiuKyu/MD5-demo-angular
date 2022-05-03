import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input() // nhận vào 1 object product từ component cha
  product: Product = {};

  @Output() // sử dụng @Output. tạo 1 sự kiện là editEvent có KDL là EventEmitter
  editEvent = new EventEmitter<Product>();


  constructor() { }

  ngOnInit() {
  }

  submitChange() { // sử dụng function emit của EventEmitter để gửi 1 object từ component con -> cha
    this.editEvent.emit(this.product);
  }
}
