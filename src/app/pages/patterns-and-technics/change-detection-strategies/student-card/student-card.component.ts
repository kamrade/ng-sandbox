import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../course.model';


@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentCardComponent implements OnInit {

  @Input()
  course: Course = {} as Course;

  ngOnInit() {}

}
