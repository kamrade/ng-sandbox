import { Component, OnInit } from '@angular/core';

import { TeachersService } from '../services';
import { Teacher } from '../models/teacher.model';

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
  }

  getTeachers(): void {
    this.teachersService.getTeachers()
      .subscribe(teachers => this.teachers = teachers);
  }

}
