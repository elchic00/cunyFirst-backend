const express = require('express');
const router = express.Router();

// Subrouters;
const instructorsRouter = require('./instructors');
const coursesRouter = require('./courses')

// Mount our subrouters to assemble our apiRouter;
//router.use('/courses', coursesRouter);
router.use('/instructors', instructorsRouter);
router.use('/courses', coursesRouter);

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;