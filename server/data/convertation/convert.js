'use strict';
const getRandom = require('./func/get-random');
const getRandomNumbers = require('./func/get-random-numbers');

const rawDataSubjects = require('../subjects-mock-data');
const rawDataStudents = require('../students-mock-data');

for (let i = 0; i < 20; i++) {
  console.log( getRandomNumbers(9, 18) );
}

const convertedStudents = rawDataStudents.map((student, i) => {
  let totalSubjects = getRandom(1,3);
  student.subjects = getRandomNumbers(totalSubjects, rawDataSubjects.length);
  return student;
});

let subjects = JSON.parse(  JSON.stringify({ "subjects": convertedStudents })  );
console.log(convertedStudents);



// FUNCTIONS +++++++++++++++++++++++++




