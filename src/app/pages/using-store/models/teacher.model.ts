import { Subject } from './subject.model';

export class Teacher {
  _id: string;
  name: string;
  subjects?: Subject[];
  gender: string;
  age: number;
  email: string;
  phone: string;
  about: string;
}
