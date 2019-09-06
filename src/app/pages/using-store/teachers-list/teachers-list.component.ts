import { Component, OnInit } from '@angular/core';

import { TeachersService } from '../services';
import { Teacher } from '../models/student.model';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent implements OnInit {

  teachers: Teacher[];

  constructor(private teachersService: TeachersService) { }

  ngOnInit() {
    this.getTeachers();
    console.log(this.teachers);
  }

  getTeachers(): void {
    this.teachersService.getTeachers()
      .subscribe(teachers => this.teachers = teachers);
  }

}
