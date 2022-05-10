const express = require('express');
const router = express.Router();
const { Course, Instructor } = require('../database/models');

// helper function so we don't need to wrap our
// handler functions in try-catch blocks;
// the async handler will catch any errors and pass
// them to the error-handling middleware (defined in app.js)
const ash = require('express-async-handler');

/** GET ALL INSTRUCTORS */
router.get('/', ash(async(req, res) => {
  let courses = await Course.findAll({include: [Instructor]});
  res.status(200).json(courses);
}));

/** GET INSTRUCTOR BY ID*/
router.get('/:id', ash(async(req, res) => {
  let course = await Course.findByPk(req.params.id, {include: [Instructor]});
  res.status(200).json(course);
}));

// Delete instructor
router.delete('/:id', ash(async(req, res) => {
  await Course.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json("Course deleted");
}));

// Add new Course
router.post('/', ash(async(req, res) => {
  let newCourse = await Course.create(req.body);
  res.status(200).json(newCourse);
}));

// Edit Course
router.put('/:id', ash(async(req, res) => {
  await Course.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  let course = await Course.findByPk(req.params.id, {include: [Instructor]});
  res.status(201).json(course);
}))

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;