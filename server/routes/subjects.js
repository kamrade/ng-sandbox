const express = require('express');
const router = require('express-promise-router')();

const SubjectsController = require('../controllers/subjects');

router.route('/')
  .get( SubjectsController.getSubjects );

module.exports = router;
