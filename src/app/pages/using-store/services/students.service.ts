import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Student } from '../models/student.model';
import { STUDENTS } from '../data/students-mock-data';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getStudents(): Observable<Student[]>  {
    return of(STUDENTS);
  }
}
