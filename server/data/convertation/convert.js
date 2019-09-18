'use strict';

const fs = require('fs');
const getRandom = require('./func/get-random');
const getRandomNumbers = require('./func/get-random-numbers');

const rawDataSubjects = require('../subjects-mock-data');
const rawDataStudents = require('../students-mock-data');
const rawDataTeachers = require('../teachers-mock-data');

const convertedStudents = rawDataStudents.map((student, i) => {
  let totalSubjects = getRandom(1,3);
  let randomSubjects = getRandomNumbers(totalSubjects, rawDataSubjects.length - 1);
  student.subjects = randomSubjects.map((s, i) => {
    return rawDataSubjects[s].id;
  });
  return student;
});

let studentsConvertedJSON = JSON.stringify({ "students": convertedStudents }, null, 2);
fs.writeFile('students-converted.json', studentsConvertedJSON, 'utf8', () => {
  console.log(':: students file wrote');
});

const convertedTeachers = rawDataTeachers.map((teacher, i) => {
  teacher.subject = rawDataSubjects[ getRandom(0, rawDataSubjects.length - 1) ].id;
  return teacher;
})

let teachersConvertedJSON = JSON.stringify({ "teachers": convertedTeachers }, null, 2);
fs.writeFile('teachers-converted.json', teachersConvertedJSON, 'utf-8', () => {
  console.log(':: teachers file wrote');
})
