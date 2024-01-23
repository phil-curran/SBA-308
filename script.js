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

// get an iterable list of students from LearnerSubmissions
const studentList = (() => {
  let temp = [];
  LearnerSubmissions.forEach((submission) => {
    temp.push(submission.learner_id);
  });
  return Array.from(new Set(temp));
})();

// console.log(studentList);

// iterates through student list and gets list of student submissions by student id
// returns array of objects with student submissions
const getStudentGrades = (id) => {
  return LearnerSubmissions.filter((submission) => {
    return submission.learner_id === id;
  });
};

// console.log(getStudentGrades(125));

/*
returns:
[
  {
    learner_id: 125,
    assignment_id: 1,
    submission: { submitted_at: '2023-01-25', score: 47 }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: { submitted_at: '2023-02-12', score: 150 }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: { submitted_at: '2023-01-25', score: 400 }
  }
]
*/

// test with one students info:
let temp = getStudentGrades(125);

// gets assignment object from AssignmentGroup.assignments array by id
let getAssignmentInfo = (id) => {
  return AssignmentGroup.assignments.find((assignment) => {
    return assignment.id === id;
  });
};

console.log(getAssignmentInfo(2));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const getLearnerData = (CourseInfo, AssignmentGroup, LearnerSubmissions) => {};

// console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions));
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
