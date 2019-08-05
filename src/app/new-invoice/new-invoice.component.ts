import { Component, OnInit, Input } from '@angular/core'
import {ItemsService, Item} from '../items.service'
import { FormsModule } from '@angular/forms'
import { InvoicesService } from '../invoices.service';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss']
})
export class NewInvoiceComponent implements OnInit {

  items$ : Item[]
  CurrentItem : Item = {
    ID:0,
    Name:"",
    Price:0,
    Qty:0
  }
  CurrentQty : Number = 0
  addedItems$ : Item[] = Array()
  discount : Number = 0

  constructor(private itemsSvc : ItemsService, private invoiceSvc : InvoicesService) { }

  ngOnInit() {
    this.itemsSvc.getItems().subscribe(
      data => this.setData(data)
    )
  }

  setData(data){
    this.items$ = data;
    this.CurrentItem = data[0];
  }

  onSubmit(){
    debugger;
    this.CurrentItem.Qty = this.CurrentQty;
    this.addedItems$.push(this.CurrentItem);
    this.CurrentQty = 0;
  }

  saveInvoice(){
    debugger;
    var obj = {
      InvoiceDate : new Date(),
      Discount : this.discount,
      Items : this.addedItems$
    }
    this.invoiceSvc.saveInovoice(obj).subscribe(
      data => console.log(data)
    );
  }

}
