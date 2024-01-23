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
const getAssignmentInfo = (id) => {
  return AssignmentGroup.assignments.find((assignment) => {
    return assignment.id === id;
  });
};
// console.log(getAssignmentInfo(1));

// get list of students from LearnerSubmissions
const studentList = (() => {
  let temp = [];
  LearnerSubmissions.forEach((submission) => {
    temp.push(submission.learner_id);
  });
  return Array.from(new Set(temp));
})();
// console.log("Student List: , ", studentList);

// use student id to get list of student submissions from LearnerSubmissions
const getStudentGrades = (id) => {
  return LearnerSubmissions.filter((submission) => {
    return submission.learner_id === id;
  });
};
console.log(getStudentGrades(125));

// main function: build student info
// takes one of the students ids
const buildStudentInfo = (studentIdNumber) => {
  // create empty student object
  let student = {};

  // add student id to student object:
  student.id = studentIdNumber;
  //   console.log("Student id: ", student);

  // uses the getStudentGrades function to get an array of student submissions
  // returns array of objects
  let studentGrades = getStudentGrades(studentIdNumber);
  //   console.log("Student grades: ", studentGrades);

  let earnedPoints = 0;
  let possiblePoints = 0;

  // iterate through array of student assignments
  studentGrades.forEach((studentAssignment) => {
    // console.log("student assignment: ", studentAssignment);
    // for each assignment, use getAssignmentInfo function to get assignment details
    // returns an assigment object
    let assignmentDetails = getAssignmentInfo(studentAssignment.assignment_id);
    // console.log("Temp assignment: ", assignmentDetails);

    // compare the student assignment to the assignment parameters
    if (studentAssignment.submission.submitted_at < assignmentDetails.due_at) {
      //   console.log("assignment score: ", studentAssignment.submission.score);
      earnedPoints += studentAssignment.submission.score;
      possiblePoints += assignmentDetails.points_possible;
      let keyValue = parseInt(studentAssignment.assignment_id);
      student[keyValue] =
        studentAssignment.submission.score / assignmentDetails.points_possible;
    }
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
console.log("Result: ", result);
