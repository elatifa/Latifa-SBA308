

const CourseInfo = {
    id: 308,
    name: "Introduction To Java"
  };
  
  const AssignmentGroup = {
    id: 1234,
    name: "JavaScript as a Programming Language", // Changed 'Name' to 'name'
    course_id: 308,
    group_weight: 23,
    assignments: [
      { id: 1, name: "Basic JavaScript Grammar", due_at: "2024-04-15T9:30", points_possible: 25 },
      { id: 2, name: "Functions", due_at: "2024-04-16T9:30", points_possible: 50 },
      { id: 3, name: "JavaScript Restrictions", due_at: "2024-04-17T9:30", points_possible: 150 },
    ]
  };
  
  const learnersubmissions = [
    { "learner_id": 125, "assignment_id": 1, "submission": { "submitted_at": "2024-08-15", "score": 90 } },
    { "learner_id": 125, "assignment_id": 2, "submission": { "submitted_at": "2024-08-10", "score": 170 } },
    { "learner_id": 125, "assignment_id": 3, "submission": { "submitted_at": "2024-08-11", "score": 180 } },
    { "learner_id": 126, "assignment_id": 1, "submission": { "submitted_at": "2024-08-15", "score": 120 } },
    { "learner_id": 126, "assignment_id": 2, "submission": { "submitted_at": "2024-08-10", "score": 160 } },
    { "learner_id": 126, "assignment_id": 3, "submission": { "submitted_at": "2024-08-11", "score": 170 } },
  ];
  
  let learnerId = 125;
  const assignmentId = 1;
  let score = 90;
  let submissionDate = "2024-08-15";
  let dueDate = "2024-04-15T9:30";
  let pointsPossible = 25;
  let groupWeight = 23;
  
  let weightedScore = (score / pointsPossible) * (pointsPossible / groupWeight);
  
  let isLate = new Date(submissionDate) > new Date(dueDate);
  let isPassing = score >= pointsPossible * 0.6;
  
  
  let assignments = [
    { id: 1, name: "Basic JavaScript Grammar", points_possible: 25 },
    { id: 2, name: "Functions", points_possible: 50 },
    { id: 3, name: "JavaScript Restrictions", points_possible: 150 }
  ];
  
  for (let i = 0; i < assignments.length; i++) {
    console.log(assignments[i].name);
  }
  
  let learnerSubmissions = [
    { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2024-08-15", score: 90 } },
    { learner_id: 125, assignment_id: 2, submission: { submitted_at: "2024-08-10", score: 170 } },
    { learner_id: 125, assignment_id: 3, submission: { submitted_at: "2024-08-11", score: 180 } }
  ];
  
  for (let submission of learnerSubmissions) {
    console.log(submission.submission.score);
  }
  
  for (let i = 0; i < assignments.length; i++) {
    if (assignments[i].id === 2) {
      continue;
    }
    console.log(assignments[i].name);
  }
  
  let learnerData = {
    id: learnerId,
    assignments: {}
  };
  
  for (let submission of learnerSubmissions) {
    learnerData.assignments[submission.assignment_id] = submission.submission.score;
  }
  
  console.log(learnerData); 
  function getLearnerData(learnerId, assignments, learnerSubmissions) 
    let learnerData = { id: learnerId, assignments: {} };
    for (let submission of learnerSubmissions) 
      if (submission.learner_id === learnerId) 
        learnerData.assignments[submission.assignment_id] = submission.sub