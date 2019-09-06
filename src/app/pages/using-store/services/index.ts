import { StudentsService } from './students.service';
import { TeachersService } from './teachers.service';
import { SubjectsService } from './subjects.service';

export const services: any[] = [ StudentsService, TeachersService, SubjectsService ];

export * from './students.service';
export * from './teachers.service';
export * from './subjects.service';
