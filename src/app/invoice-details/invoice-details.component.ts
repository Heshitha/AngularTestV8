import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../invoices.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {

  id$ : Number
  invoice$ : Object

  constructor(private route : ActivatedRoute, private invoiceSvc : InvoicesService) {
    this.route.params.subscribe(params => this.id$ = params.id)
   }

  ngOnInit() {
    this.invoiceSvc.getInvoice(this.id$).subscribe(
      data => this.calculateTotal(data)
    )
  }

  calculateTotal(data){
    debugger;
    var obj = data;
    let runTot = 0;
    for(var i = 0; i < data.Items.length; i++){
      runTot += data.Items[i].Price;
    }
    obj.GrossTotal = runTot;
    let discount = data.Discount;
    let grandTotal = runTot - (runTot * (discount / 100.0));
    obj.GrandTotal = grandTotal;
    this.invoice$ = obj;
  }

}
