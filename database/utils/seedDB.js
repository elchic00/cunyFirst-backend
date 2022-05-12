const { Instructor, Course } = require('../models');

const seedDB = async () => {
	const dummyInstructor = await Instructor.create({
    firstname: "Melissa",
    lastname: "Lynch",
    department: "Computer Science",
    imageUrl:"https://thumbs.dreamstime.com/b/print-badass-stamp-white-background-labels-stickers-series-142797021.jpg",
  });
	const dummyInstructor2 = await Instructor.create({
    firstname: "Bat",
    lastname: "Man",
    department: "Computer Science",
    imageUrl:'https://thumbs.dreamstime.com/b/print-badass-stamp-white-background-labels-stickers-series-142797021.jpg'
  });

	const dummyCourse = await Course.create({
		title: "CSCI 39548",
        location: "C107",
        timeslot: "W 5:35 - 8:15 PM"
	});
	const dummyCourse2 = await Course.create({
      title: "CSCI 45000",
      location: "C100",
      timeslot: "M 5:35 - 8:15 PM",
    });

	await dummyCourse.setInstructor(dummyInstructor);
	await dummyCourse2.setInstructor(dummyInstructor2);

	
}

module.exports = seedDB;