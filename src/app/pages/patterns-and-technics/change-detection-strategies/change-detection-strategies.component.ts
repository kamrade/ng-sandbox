import { Component } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-change-detection-strategies',
  templateUrl: './change-detection-strategies.component.html',
  styleUrls: ['./change-detection-strategies.component.scss']
})
export class ChangeDetectionStrategiesComponent {

  teachersName = 'Leo Burns';

  course: Course = {
    title: 'Angular',
    description: 'Develop with Angular',
    teacher: `${this.teachersName}`
  }

  updateCourseLink() {
    let newCourse: Course = { ...this.course };
    this.course = newCourse;
  }

  changeValue() {
    this.course.teacher = `Dr. ${this.teachersName}`;
  }


}
