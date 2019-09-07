import { Action } from '@ngrx/store';
import { NAMESPACE_PREFIX } from '../../const/namespace-prefix';

// load students
export const LOAD_STUDENTS         = `${NAMESPACE_PREFIX} Load Students`;
export const LOAD_STUDENTS_FAIL    = `${NAMESPACE_PREFIX} Load Students Fail`;
export const LOAD_STUDENTS_SUCCESS = `${NAMESPACE_PREFIX} Load Students Success`;
