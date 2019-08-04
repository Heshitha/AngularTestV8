import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getPost(postId){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+postId)
  }

  savePost(){
    var obj = {
      InvoiceDate : new Date(),
      Discount : 12,
      Items : [{
        ID : 1
      },
      {
        ID : 2
      }]
    }
    return this.http.post('http://localhost:58506/api/invoice', obj, this.httpOptions).pipe();
  }
}
