import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  // providedIn: 'root' sử dụng để cho phép Service này được tiêm phụ thuộc phạm vi toàn bộ dự án
  // nếu không muốn thì cần phải khai báo Service trong providers: [] tại file module
})
export class ProductService {

  constructor() { }
}
