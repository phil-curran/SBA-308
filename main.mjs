// import data
import { CourseInfo, AssignmentGroup, LearnerSubmissions } from "./data.mjs";

// import helper functions
import * as utilities from "./utility.mjs";

// main function: build student info
// takes one of the students ids
const createGradebook = (studentIdNumber) => {
  // create empty student object
  let student = {};

  // add student id to student object:
  student.id = studentIdNumber;

  // uses the getStudentGrades function to get an array of student submissions
  let studentGrades = utilities.getStudentGrades(student.id);

  // set temp variables for avg value
  let earnedPoints = 0;
  let possiblePoints = 0;

  // iterate through array of student assignments
  studentGrades.forEach((studentAssignment) => {
    // destructure studentAssignment object for readability
    let { assignment_id } = studentAssignment;
    let { submitted_at, score } = studentAssignment.submission;

    // use getAssignmentInfo function to get assignment details object
    let assignmentDetails = utilities.getAssignmentInfo(assignment_id);

    // destructure assignmentDetails object for readability
    let { id: assignmentID, due_at, points_possible } = assignmentDetails;

    // compare the student assignment to the assignment parameters
    // ignore assignments that aren't due yet
    if (utilities.dueDateHasPassed(due_at)) {
      // calculate if assignment submitted on time AND due date has passed
      if (utilities.submittedOnTime(submitted_at, due_at)) {
        earnedPoints += score;
        possiblePoints += points_possible;
        student[assignmentID] = parseFloat(
          (score / points_possible).toFixed(2)
        );
      } else {
        // calculate if submitted late
        earnedPoints += score -= 15;
        possiblePoints += points_possible;
        student[assignmentID] = parseFloat(
          (score / points_possible).toFixed(2)
        );
      }
    }
  });

  // add averaged grade to student object
  student.avg = parseFloat((earnedPoints / possiblePoints).toFixed(3));

  // push new student object to results array
  result.push(student);
};

// run the program
// instantiate the result variable
let result = [];

// call the main function
utilities.studentList().forEach((student) => createGradebook(student));

// return the result
console.log("Result: ", result);
