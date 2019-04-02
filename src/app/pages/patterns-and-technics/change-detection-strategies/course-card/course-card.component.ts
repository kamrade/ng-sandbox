import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course = {} as Course;

  ngOnInit() {
  }

}
