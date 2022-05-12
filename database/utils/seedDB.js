const { Instructor, Course } = require('../models');

const seedDB = async () => {
	const dummyInstructor = await Instructor.create({
    firstname: "Melissa",
    lastname: "Lynch",
    department: "Computer Science",
    imageUrl: "https://avatars.githubusercontent.com/u/14899603?v=4",
  });
	const dummyInstructor2 = await Instructor.create({
    firstname: "Bat",
    lastname: "Man",
    department: "Computer Science",
    imageUrl:
      "https://www.indiewire.com/wp-content/uploads/2021/08/Robert-Pattinson-Batman.jpeg?w=780",
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

  	const dummyCourse3 = await Course.create({
      title: "CSCI 5000",
      location: "HN1000",
      timeslot: "T 5:35 - 8:15 PM",
    });

	await dummyCourse.setInstructor(dummyInstructor);
	await dummyCourse2.setInstructor(dummyInstructor2);
	await dummyCourse3.setInstructor(dummyInstructor2);

	
}

module.exports = seedDB;