import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Item{
  ID : Number,
  Name : string,
  Price : Number,
  Qty : Number
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http : HttpClient) { }

  getItems(){
    return this.http.get<Item[]>('http://localhost:58506/api/items')
  }
}
