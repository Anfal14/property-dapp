import { Component, OnInit } from '@angular/core';

import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { from } from 'rxjs';
import { Bill } from '../bill';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor() { }
  public bill = new Bill('', 0, 0, 0);
  public billlist: Bill[] = [];

  public onAdd() {

    this.billlist.push(this.bill);
    this.bill = new Bill('', 0, 0, 0);
  }

  ngOnInit() {
  }

  public calcTotal() {

    let total = 0;

    for (let b of this.billlist) {
      total += (b.price * b.quantity - b.discount);
    }
    return total;

  }

}
