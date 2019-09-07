const SUBJECTS = require('../data/subjects-mock-data');

module.exports = {
  getSubjects: (req, res, next) => {
    res.status(200).json({ 'SUBJECTS': SUBJECTS });
  }
}
