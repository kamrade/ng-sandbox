import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-reactive-forms-basic-widget',
  templateUrl: './reactive-forms-basic-widget.component.html',
  styleUrls: ['./reactive-forms-basic-widget.component.scss']
})
export class ReactiveFormsBasicWidgetComponent implements OnInit {

  student: Student = {
    firstName: 'Leo',
    secondName: 'Burns',
    course: 'Angular'
  }

  ngOnInit() {
  }


}
