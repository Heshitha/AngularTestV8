import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {

  post$ : Object;

  constructor(private route : ActivatedRoute, private data : DataService) {
    this.route.params.subscribe( params => this.post$ = params.id );
  }

  ngOnInit() {
    this.data.getPost(this.post$).subscribe(
      data => this.post$ = data 
    );
  }
}
