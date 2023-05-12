-- selecting the student's name from the students table, and the and the total submissions from the assignment_submissions table where the student has no end_date.

SELECT students.name as student, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING count(assignment_submissions.*) < 100;