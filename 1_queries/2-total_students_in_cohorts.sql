-- REQUIREMENT TWO => Non Gmail Students
-- Select the total number of students who were in the first 3 cohorts.
-- ======================================
-- Select the total number of students who were in the first 3 cohorts. 
-- =======================================
SELECT
  COUNT(*)
FROM
  Students
WHERE
  cohort_id BETWEEN '1'
  AND '3';