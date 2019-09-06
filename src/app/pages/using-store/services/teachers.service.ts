import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Teacher } from '../models/teacher.model';
import { TEACHERS } from '../data/teachers-mock-data';
import {Student} from '../models/student.model';
import {STUDENTS} from '../data/students-mock-data';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor() { }

  getTeachers(): Observable<Teacher[]>  {
    return of(TEACHERS);
  }

}
