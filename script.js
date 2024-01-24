// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};
// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};
// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

// helper functions:
//get assignment from AssignmentGroup.assignments by id for comparison
const getAssignmentInfo = (id) =>
  AssignmentGroup.assignments.find((assignment) => assignment.id === id);

// get list of students from LearnerSubmissions
const studentList = (() => {
  let temp = [];
  LearnerSubmissions.forEach((submission) => {
    temp.push(submission.learner_id);
  });
  return Array.from(new Set(temp));
})();

// use student id to get list of student submissions from LearnerSubmissions
const getStudentGrades = (id) =>
  LearnerSubmissions.filter((submission) => submission.learner_id === id);

// check if assignment was submitted on time AND due date has passed
const checkOnTimeAndDue = (submitted_at, due_at) => {
  return due_at <= "2024-1-2" && submitted_at <= due_at;
};

// main function: build student info
// takes one of the students ids
const buildStudentInfo = (studentIdNumber) => {
  // create empty student object
  let student = {};

  // add student id to student object:
  student.id = studentIdNumber;

  // uses the getStudentGrades function to get an array of student submissions
  let studentGrades = getStudentGrades(studentIdNumber);

  // set temp variables
  let earnedPoints = 0;
  let possiblePoints = 0;

  // iterate through array of student assignments
  studentGrades.forEach((studentAssignment) => {
    // destructure objects for readability
    let { learner_id, assignment_id } = studentAssignment;
    let { submitted_at, pointsEarned } = studentAssignment.submission;

    // use getAssignmentInfo function to get assignment details
    let assignmentDetails = getAssignmentInfo(assignment_id);

    // destructure object for readability
    let { id: assignmentID, name, due_at, points_possible } = assignmentDetails;

    checkOnTimeAndDue(submitted_at, due_at);

    // compare the student assignment to the assignment parameters
    // if (studentAssignment.submission.submitted_at < assignmentDetails.due_at) {
    //   // console.log(
    //   //   "Assignment submitted at: ",
    //   //   studentAssignment.submission.submitted_at
    //   // );
    //   // console.log("Now: ", Date.now());
    //   // console.log("assignment due at: ", assignmentDetails.due_at);
    //   // console.log(
    //   //   "assignment submitted on time: ",
    //   //   studentAssignment.submission.submitted_at < assignmentDetails.due_at
    //   // );
    //   // console.log(
    //   //   "assignment due date passed: ",
    //   //   assignmentDetails.due_at < "2024-1-2"
    //   // );
    //   // console.log("assignment score: ", studentAssignment.submission.score);
    //   earnedPoints += studentAssignment.submission.score;
    //   possiblePoints += assignmentDetails.points_possible;
    //   let keyValue = parseInt(studentAssignment.assignment_id);
    //   student[keyValue] =
    //     studentAssignment.submission.score / assignmentDetails.points_possible;
    // }
  });
  student.avg = (earnedPoints / possiblePoints).toFixed(2);

  result.push(student);
};

// run the program
// instantiate the result variable
let result = [];

// call the main function
result.push(buildStudentInfo(125));

// return the result
// console.log("Result: ", result);
