// instantiate result variable to hold output
let result = [];

// iterate through studentList & output data
studentList.forEach((student) => {
  // empty object to hold student info:
  let temp = {};
  temp.id = student;
  result.push(temp);
});

// console.log(result);

// const getLearnerData = (CourseInfo, AssignmentGroup, LearnerSubmission) => {};

// console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions));

/* Create a function named getLearnerData() that accepts these values as parameters,
in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), 
and returns the formatted result, which should be an array of objects as described above. */

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

const findAssignment = (id) => {
  return AssignmentGroup.assignments.find((assignment) => {
    return assignment.id === id;
  });
};

// console.log(findAssignment(1));
// console.log(findAssignment(1).name);
// console.log(findAssignment(1).due_at);
// console.log(findAssignment(1).points_possible);

const getStudentGrades = (id) => {
  let temp = LearnerSubmissions.filter((submission) => {
    return submission.learner_id === id;
  });
  //   let earnedPoints = 0;
  temp.forEach((submission) => {
    console.log(
      submission.submitted_at < findAssignment(submission.assignment_id).due_at
    );
  });
  //   return earnedPoints;
  return temp;
};

console.log(getStudentGrades(125));

// console.log(findAssignment(1).due_at);

// helper functions
// converts date string to date object so they can be compared
const dateConverter = (string) => {
  return new Date(string);
};

// checks if an assignment was submitted on time
const turnedInOnTime = (due, submitted) => {
  return dateConverter(due) <= dateConverter(submitted) ? true : false;
};

// get list of students in LearnerSubmissions as array so it's iterable:
const studentList = (() => {
  let temp = [];
  LearnerSubmissions.forEach((submission) => {
    temp.push(submission.learner_id);
  });
  return Array.from(new Set(temp));
})();

// expected output
// [
//   {
//     id: 125,
//     avg: 0.985, // (47 + 150) / (50 + 150)
//     1: 0.94, // 47 / 50
//     2: 1.0, // 150 / 150
//   },
//   {
//     id: 132,
//     avg: 0.82, // (39 + 125) / (50 + 150)
//     1: 0.78, // 39 / 50
//     2: 0.833, // late: (140 - 15) / 150
//   },
// ];
