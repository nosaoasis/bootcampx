require("dotenv").config()
const { Pool } = require('pg');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE} = process.env

const pool = new Pool({
  user: DB_USER,
  password: `${DB_PASSWORD}`,
  host: DB_HOST,
  database: DB_DATABASE
});

pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));

// ==================================================================

const sqlQuery = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `;
  const values = [`%${process.argv[2]}%`, process.argv[3] || 5];
pool
  .query(sqlQuery, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(
        `=== ${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch(err => console.error("query error", err.stack));


  // ==================================================================

  pool.query(`
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
  ORDER BY teacher;
  `)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    })
  });