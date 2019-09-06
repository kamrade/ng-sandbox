import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../services';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: Student[];

  constructor(private studentsService: StudentsService ) { }

  ngOnInit() {
    this.getStudents();
    console.log(this.students);
  }

  getStudents(): void {
    this.studentsService.getStudents()
      .subscribe(students => this.students = students);
  }

}
