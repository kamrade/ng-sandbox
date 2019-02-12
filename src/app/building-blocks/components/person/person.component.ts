import { Component, OnInit, Input } from '@angular/core';

export class Person {
  id: string;
  name: string;
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  persons: Person[] = [{
    name: 'John',
    id: '1',
  }, {
    name: 'Ringo',
    id: '2'
  }, {
    name: 'Paul',
    id: '3'
  }, {
    name: 'George',
    id: '4'
  }];

  currentPerson: number = 0;
  outputName: string = 'Nobody';

  @Input()
  set cubicleId(val: string) {
    if (!this.currentPerson || this.currentPerson !== parseInt(val, 10)) {
      this.hydratePerson(val);
    }
  }

  get cubicleId() {
    return this.currentPerson.toString();
  }

  hydratePerson(id) {
    const pid = parseInt(id, 10)
    if (pid <= this.persons.length) {
      this.currentPerson = pid - 1;
      this.outputName = this.persons[this.currentPerson] ? this.persons[this.currentPerson].name : 'Nobody';
    } else {
      this.outputName = 'Nobody';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
