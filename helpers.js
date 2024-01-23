// find and return assignment object by id
const findAssignment = (id) => {
  return AssignmentGroup.assignments.find((assignment) => {
    return assignment.id === id;
  });
};

// get all assignments for a student
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

// checks if an assignment was submitted on time
const turnedInOnTime = (due, submitted) => {
  return dateConverter(due) <= dateConverter(submitted) ? true : false;
};

// get an iterable list of students from LearnerSubmissions
const studentList = (() => {
  let temp = [];
  LearnerSubmissions.forEach((submission) => {
    temp.push(submission.learner_id);
  });
  return Array.from(new Set(temp));
})();
