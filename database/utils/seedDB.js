const { Instructor, Course } = require('../models');

const seedDB = async () => {
	const dummyInstructor = await Instructor.create({
    firstname: "Patrice",
    lastname: "O'Neal",
    department: "Comedy",
    imageUrl:
      "https://pyxis.nymag.com/v1/imgs/8bd/400/e8c600db78df18e6f90d02d5b125c4e717-22-patrice-oneal.2x.rsquare.w330.jpg",
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
  	const dummyCourse4 = await Course.create({
      title: "Comedy 101",
      location: "The Comedy Cellar",
      timeslot: "M,W,F 8PM-12PM",
    });

	await dummyCourse.setInstructor(dummyInstructor2);
	await dummyCourse2.setInstructor(dummyInstructor2);
	await dummyCourse3.setInstructor(dummyInstructor2);
	await dummyCourse4.setInstructor(dummyInstructor);

	
}

module.exports = seedDB;