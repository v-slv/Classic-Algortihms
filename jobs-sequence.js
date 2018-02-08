/**
 * @author Vilcu Silviu Ioan
 */

/**
 * Job class
 */
function Job(id, deadline, profit) {
  this.id = id;
  this.deadline = deadline;
  this.profit = profit;
}

let jobs = [];

jobs.push(new Job("a", 4, 20));
jobs.push(new Job("b", 1, 10));
jobs.push(new Job("c", 1, 40));
jobs.push(new Job("d", 1, 30));

function schedule(jobs) {
  let set = new Array(jobs.length);
  let result = new Array(jobs.length);
  for (let i = 0; i < jobs.length - 1; i++) {
    set[i] = false;
    for (let j = i + 1; j < jobs.length; j++) {
      if (jobs[j].profit > jobs[i].profit) {
        let aux = jobs[i];
        jobs[i] = jobs[j];
        jobs[j] = aux;
      }
    }
  }
  for (let i = 0; i < jobs.length; i++) {
    for (let j = Math.min(jobs[i].deadline, jobs.length) - 1; j >= 0; j--) {
      if (set[j] == false) {
        set[j] = true;
        result[j] = jobs[i].id;
        break;
      }
    }
  }
  console.log(result);
}

schedule(jobs);
