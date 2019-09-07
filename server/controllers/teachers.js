const TEACHERS = require('../data/teachers-mock-data');

module.exports = {
  getTeachers: (req, res, next) => {
    res.status(200).json({ 'TEACHERS': TEACHERS });
  }
}
