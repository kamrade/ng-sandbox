import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Subject } from '../models/subject.model';
import { SUBJECTS } from '../data/subjects-mock-data';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }

  getSubjects(): Observable<Subject[]> {
    return of(SUBJECTS);
  }
}
