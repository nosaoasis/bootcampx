-- We need to be able to see how many assistance requests any teacher has completed.

-- Instruction
-- Get the total number of assistance_requests for a teacher.

-- Select the teacher's name and the total assistance requests.

SELECT count(assistance_requests.*) as total_assistances, teachers.name
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.name;