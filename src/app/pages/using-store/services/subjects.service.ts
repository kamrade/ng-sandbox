import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Subject } from '../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private subjectsUrl = 'http://localhost:2000/api/subjects';

  constructor(private http: HttpClient) {}

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectsUrl);
  }
}
