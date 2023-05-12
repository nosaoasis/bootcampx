-- selecting the student's name from the students table, and the and the total submissions from the assignment_submissions table.

SELECT students.name as student, COUNT(assignment_submissions.*) as total_submisssions
FROM assingmeent_submissions
JOIN students ON students.id = student_id
GROUP BY students.name