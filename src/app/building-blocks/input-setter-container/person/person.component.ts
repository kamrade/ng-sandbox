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
    name: 'John Lennon',
    id: '111',
  }, {
    name: 'Ringo Starr',
    id: '222'
  }, {
    name: 'Paul McCartney',
    id: '333'
  }, {
    name: 'George Harrison',
    id: '444'
  }];

  currentPerson: number = 0;
  outputName: string = 'Nobody';

  @Input()
  set cubicleId(val: string) {
    this.hydratePerson(val);
  }

  get cubicleId() {
    return this.currentPerson.toString();
  }

  hydratePerson(id) {
    const pid = parseInt(id, 10)
    if (pid < this.persons.length + 1) {
      this.currentPerson = pid - 1;
      this.outputName = this.persons[this.currentPerson] ? this.persons[this.currentPerson].name : 'Nobody';
    } else {
      this.currentPerson = -1;
      this.outputName = 'Nobody';
    }
  }

  getCurrentId() {
    return this.persons[this.currentPerson] ? this.persons[this.currentPerson].id : 'Wrong person id';
  }

  constructor() { }

  ngOnInit() {
  }

}
