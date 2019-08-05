import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  constructor(private http : HttpClient) { }

  getInvoices(pageIndex : Number, pageSize : Number){
    return this.http.get('http://localhost:58506/api/Invoice/'+pageIndex+'/'+pageSize)
  }

  getInvoice(id : Number){
    return this.http.get('http://localhost:58506/api/Invoice/'+id)
  }

  saveInovoice(obj){
    return this.http.post('http://localhost:58506/api/invoice', obj, this.httpOptions).pipe();
  }
}
