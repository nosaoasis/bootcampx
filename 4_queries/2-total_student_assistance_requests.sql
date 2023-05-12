-- We need to be able to see how many assistance requests any student has requested.

-- Instruction
-- Get the total number of assistance_requests for a student.

-- Select the student's name and the total assistance requests.


SELECT count(assistance_requests.*) as total_assistances, students.name
FROM assistance_requests
JOIN students ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY students.name;