import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from './user.class';
import { JsonResp } from '../jsonresponse.class';

const url = 'http://localhost:5000/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<JsonResp> {
    return this.http.get(url + 'list') as Observable<JsonResp>;
  }

  get(id: number): Observable<JsonResp> {
    return this.http.get(url + 'get/' + id) as Observable<JsonResp>;
  }

  create(user:User): Observable<JsonResp> {
    return this.http.post(url + 'create',user) as Observable<JsonResp>;
  }

  change(user:User): Observable<JsonResp> {
    return this.http.post(url + 'change',user) as Observable<JsonResp>;
  }

  remove(user:User): Observable<JsonResp> {
    return this.http.post(url + 'remove',user) as Observable<JsonResp>;
  }
  constructor(private http: HttpClient) { }
}
