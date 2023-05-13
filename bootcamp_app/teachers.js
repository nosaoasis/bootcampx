require("dotenv").config()
const { Pool } = require('pg');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE} = process.env

const pool = new Pool({
  user: DB_USER,
  password: `${DB_PASSWORD}`,
  host: DB_HOST,
  database: DB_DATABASE
});

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
        `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch(err => console.error("query error", err.stack));
