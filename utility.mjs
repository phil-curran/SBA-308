// import data
import { CourseInfo, AssignmentGroup, LearnerSubmissions } from "./data.mjs";

//get assignment from AssignmentGroup.assignments by id for comparison
export function getAssignmentInfo(id) {
  return AssignmentGroup.assignments.find((assignment) => assignment.id === id);
}

// get list of students by id# from LearnerSubmissions
export function studentList() {
  let temp = LearnerSubmissions.map((submission) => {
    return submission.learner_id;
  });
  return Array.from(new Set(temp));
}

// use student id to get list of student submissions from LearnerSubmissions
export function getStudentGrades(id) {
  return LearnerSubmissions.filter(
    (submission) => submission.learner_id === id
  );
}

// check if assignment was submitted at or before due date
export function submittedOnTime(submitted_at, due_at) {
  return submitted_at <= due_at;
}

// checks whether the assignment due date has passed
export function dueDateHasPassed(due_at) {
  return due_at <= "2024-1-2";
}
