import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from 'src/app/model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  // sử dụng ReactiveForm
  productForm: FormGroup = new FormGroup({ // Khai báo FormGroup + FormControl + Validation tại file typescript
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
    // formState có thể nhập thông tin nào đó nếu muốn hiển thị thông tin đó khi khởi tạo
    // sử dụng ngoặc vuông để có thể khai báo nhiều validator
  })

  constructor() { }
// Xây dựng phương thức "get" để lấy ra các thuộc tính của FormGroup. Nếu không có thì sẽ không thể setValue
  get idControl() { return this.productForm.get('id');}

  get nameControl() { return this.productForm.get('name');}

  get priceControl() { return this.productForm.get('price');}

  get descriptionControl() { return this.productForm.get('description');}

  ngOnInit() {
    this.idControl.setValue(this.product.id);
    this.nameControl.setValue(this.product.name);
    this.priceControl.setValue(this.product.price);
    this.descriptionControl.setValue(this.product.description);
    // Sử dụng phương thức setValue để gán các giá trị thuộc tính của product cho các thuộc tính của productForm
    // phương thức setValue là của FormControl
  }

  submitChange() { // sử dụng function emit của EventEmitter để gửi 1 value object từ component con -> cha
    // this.editEvent.emit(this.product);
    this.editEvent.emit(this.productForm.value);
  }

}
