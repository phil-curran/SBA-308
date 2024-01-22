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
