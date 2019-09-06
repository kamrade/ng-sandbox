import { Subject } from './subject.model';

export class Student {
  _id: string;
  name: string;
  subjects?: Subject[];
  gender: string;
  age: number;
  email: string;
  phone: string;
  about: string;
}
