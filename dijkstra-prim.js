function Edge(start, dest, val) {
  this.start = start;
  this.dest = dest;
  this.val = val;
}

let edges = [];
edges.push(new Edge(0, 1, 1));
edges.push(new Edge(1, 2, 1));
edges.push(new Edge(2, 3, 1));
edges.push(new Edge(3, 4, 8));
edges.push(new Edge(0, 4, 56));

function findMin(Q, dist) {
  let min = Number.MAX_VALUE;
  let u = null;

  for (let i of Q) {
    if (dist[i] < min) {
      min = dist[i];
      u = i;
    }
  }
  return u;
}

/**
 * Dijkstra implementation 
 * @param {*} edges 
 * @param {*} source 
 * @param {*} end 
 * @param {*} count 
 */
function dijkstra(edges, source, end, count) {
  let dist = new Array(count);
  let Q = new Array(count);
  let parent = new Array(count);
  for (let i = 0; i < count; i++) {
    dist[i] = Number.MAX_VALUE;
    Q[i] = i;
  }
  dist[source] = 0;
  while (Q.length != 0) {
    u = findMin(Q, dist);
    Q = Q.filter(e => e != u);
    let n = [];

    if (u == end) break;

    for (let e of edges) {
      if (e.start == u) {
        n.push(e);
      }
    }
    for (let ng of n) {
      let alt = dist[u] + ng.val;
      if (alt <= dist[ng.dest]) {
        dist[ng.dest] = alt;
        parent[ng.dest] = u;
      }
    }
  }
  console.log(parent);
}

function findMinKey(mst, count, keys) {
  let min = Number.MAX_VALUE;
  let u = null;

  for(let i =0; i < count; i ++){
    if(!mst.includes(i) && keys[i] < min){
      min = keys[i];
      u = i;
    }
  }

  return u;
}

/**
 * Prim implementaion
 * @param {*} edges 
 * @param {*} start 
 * @param {*} count 
 */
function prim(edges, start, count) {
  let mst = [];
  let parent = new Array(count);
  let keys = new Array(count);

  for (let i = 0; i < count; i++) {
    keys[i] = Number.MAX_VALUE;
    parent[i] = -1;
  }
  keys[start] = 0;
  while (mst.length < count) {
    let u = findMinKey(mst, 5, keys);
    mst.push(u);
    let n = [];
    for (let e of edges) {
      if (e.start == u) {
        n.push(e);
      }
    }
    for (let ng of n) {
      let alt = keys[u] + ng.val;
      if (alt <= keys[ng.dest]) {
        keys[ng.dest] = alt;
        parent[ng.dest] = u;
      }
    }
  }
  console.log(parent)
}

//dijkstra(edges, 0, 4, 5);
prim(edges, 0, 5);