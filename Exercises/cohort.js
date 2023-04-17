const cohort = {
    name: 'May2022',
    id: 1234,
    students: ['Noelia', 'Sonia', 'Jose', 'Jack', 'Mathew']
};

function getCohort() {
    console.log(cohort.id + ' - ' + cohort.name + ' - ' + cohort.students.length + ' students in this cohort.')
};