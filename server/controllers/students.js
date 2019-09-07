const STUDENTS = require('../data/students-mock-data');

module.exports = {
  getStudents: (req, res, next) => {
    res.status(200).json( STUDENTS );
  }
}
