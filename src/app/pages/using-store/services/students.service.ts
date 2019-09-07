import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private studentsUrl = 'http://localhost:2000/api/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]>  {
    return this.http.get<Student[]>(this.studentsUrl);
  }
}
