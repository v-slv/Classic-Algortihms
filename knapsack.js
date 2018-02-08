function knapsack(maxW, wt, val, count) {
  let m = new Array(count + 1);
  for (let i = 0; i < m.length; i++) {
    m[i] = new Array(maxW + 1);
  }

  for (let i = 0; i <= count; i++) {
    for (let w = 0; w <= maxW; w++) {
      if (i == 0 || w == 0) {
        m[i][w] = 0;
      }
      else if (w >= wt[i - 1]) {
        m[i][w] = Math.max(m[i - 1][w - wt[i - 1]] + val[i - 1], m[i - 1][w]);
      } else {
        m[i][w] = m[i - 1][w];
      }
    }
  }
  console.log(m[count][maxW]);
}

let maxW = 50;
let wt = [10, 20, 30];
let val = [60, 100, 120];

knapsack(maxW, wt, val, 3);
