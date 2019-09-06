import { Component, OnInit } from '@angular/core';

import {StudentsService, SubjectsService} from '../services';
import { Subject } from '../models/subject.model';


@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit {

  subjects: Subject[];

  constructor(private subjectsService: SubjectsService ) { }

  ngOnInit() {
    this.getSubjects();
    console.log(this.subjects);
  }

  getSubjects(): void {
    this.subjectsService.getSubjects()
      .subscribe(subjects => this.subjects = subjects);
  }

}
