const express = require('express');
const router = require('express-promise-router')();

const StudentsController = require('../controllers/students');

router.route('/')
  .get( StudentsController.getStudents );

module.exports = router;
