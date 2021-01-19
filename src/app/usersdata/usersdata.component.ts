import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-usersdata',
  templateUrl: './usersdata.component.html',
  styleUrls: ['./usersdata.component.css']
})
export class UsersdataComponent implements OnInit {

  arr:Observable<User[]>;
  searchstr:string;
  constructor(private data:UserserviceService) { }

  ngOnInit(): void {

    this.fetchData();
  }


  fetchData(){
    this.arr=this.data.getData();
    console.log(this.arr);
  }
}
