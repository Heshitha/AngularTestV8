import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;
  post$: Object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );

    //this.data.savePost().subscribe(
    //  data => this.WriteToConsole(data)
    //);
  }

  WriteToConsole(data){
    console.log(data);
  }

}
