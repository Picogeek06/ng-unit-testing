import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from 'src/app/common/constants/constants-api';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers(): Observable<any> {
    return this.http.get(users);
  }

  createUser(body: any): Observable<any> {
    return this.http.post(users, body);
  }

}
