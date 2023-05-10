-- REQUIREMENT FOUR => Non Gmail Students
-- Get all of the students without a gmail.com account and a phone number.
SELECT
  id,
  name,
  email,
  cohort_id
FROM
  students
WHERE
  email NOT LIKE '%@gmail'
  AND phone IS NULL