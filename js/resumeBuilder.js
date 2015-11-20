/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$('#main').append("Karun Siddana");

 // var awesomeThoughts = "I am Karun and I am AWESOME!";
 // console.log(awesomeThoughts);

 // //var funThoughts = "FUN";
 // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 // console.log(funThoughts);
 // console.log(awesomeThoughts);
 // $("#main").append(funThoughts);

var bio = {
	name: "Karun Siddana",
	role: "Full Stack Engineer",
	contact: {
		mobile: 3124047507,
		email: "ksiddana@gmail.com"
	},
	picture: "https://d1qb2nb5cznatu.cloudfront.net/users/908934-medium_jpg?1418426239",
	welcome_msg: "Let me tell you something about me",
	skills: ["Teaching", "Programming", "Music", "Skateboarding"]
};

var work = {
  job1: {
    employer: "Rockwell Collins",
    position: "Back-end Developer",
    years: "5 years",
    location: "Cedar Rapids, IA",
    description: "Developed Flight Control Application for the Autopilot and Flight Guidance Systems."
  },
  job2: {
    employer: "Harris Communications",
    position: "Systems Engineer",
    years: "3 years",
    location: "San Francisco, CA",
    description: "Developed a Network topology for the MPLS ring"
  }
};

var education = {};
  education["name"] = "University of Wisconsin Madison";
  education["degree"] = "Electrical and Computer Engineering";
  education["dates"] = "2001 - 2006";
  education["location"] = "Wisconsin, Madison";

console.log(education.name);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
//var formattedContactInfo = HTMLcontactGeneric.replace("%contact%", )
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_msg);

if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $('#skills').append(formattedSkill);
  
}

for (var key in work) {
  
  var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work[key].employer);
  var formattedWorkTitle = HTMLworkTitle.replace("%data%", work[key].position);
  
  var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
  var formattedWorkDates = HTMLworkDates.replace("%data%", work[key].years);
  var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[key].location);
  var formatttedWorkDescription = HTMLworkDescription.replace("%data%", work[key].description);
 
  $('#workExperience').append(HTMLworkStart);
  $('.work-entry:last').append(formattedEmployerTitle);
  $('.work-entry:last').append(formattedWorkDates);
  $('.work-entry:last').append(formattedWorkLocation);
  $('.work-entry:last').append(formatttedWorkDescription);
  
}

var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.location);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').prepend(formattedBioPic);
$('#header').append(formattedMobile);
$('#topContacts').append(formattedWelcomeMsg);




// $('#')



$('#main').append(formattedSchoolName);
$('#main').append(formattedSchoolDegree);
$('#main').append(formattedSchoolDates);
$('#main').append(formattedSchoolLocation);


//$('#header').append(bio.contact);

