select id, name, email, cohort_id
from students
where github = NULL
ORDER by cohort_id;