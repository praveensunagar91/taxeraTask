import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  fetchUrl:string="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getData():Observable<User[]>{
    return this.http.get<User[]>(this.fetchUrl);
  }


}
