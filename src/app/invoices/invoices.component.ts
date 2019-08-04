import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../invoices.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  pageIndex$ : Number = 1;
  pageSize$ : Number = 10;
  invoices$ : Object;

  constructor(private invoiceService : InvoicesService) { }

  ngOnInit() {
    this.invoiceService.getInvoices(this.pageIndex$, this.pageSize$).subscribe(
      data => this.invoices$ = data
    )
  }

}
