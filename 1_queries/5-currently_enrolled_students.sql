-- REQUIREMENT FIVE => Non Gmail Students
-- Get all of the students currently enrolled.
SELECT
  id,
  name,
  cohort_id
FROM
  students
WHERE
  end_date IS NULL
ORDER BY cohort_id;