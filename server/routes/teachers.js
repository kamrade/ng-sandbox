const express = require('express');
const router = require('express-promise-router')();

const TeachersController = require('../controllers/teachers');

router.route('/')
  .get( TeachersController.getTeachers );

module.exports = router;
