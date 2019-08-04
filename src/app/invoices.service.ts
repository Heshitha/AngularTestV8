import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http : HttpClient) { }

  getInvoices(pageIndex : Number, pageSize : Number){
    return this.http.get('http://localhost:58506/api/Invoice/'+pageIndex+'/'+pageSize)
  }

  getInvoice(id : Number){
    return this.http.get('http://localhost:58506/api/Invoice/'+id)
  }
}
