import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private teachersUrl = 'http://localhost:2000/api/teachers';

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<Teacher[]>  {
    return this.http.get<Teacher[]>(this.teachersUrl);
  }

}
