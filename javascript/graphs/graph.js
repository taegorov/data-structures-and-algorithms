'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}


class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map(); // I want a key that isn't a string, so I'm using a Map
  }

  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);

    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw Error('Invalid Vertices');
    }

    let edgesArray = this.adjacencyList.get(startVertex);
    edgesArray.push(new Edge(endVertex, weight));
    // console.log('⚖', weight);
  }

  getNodes() {
    return this.adjacencyList;
  }

  breadthFirst(startVertex) {
    // use a queue to track my ordering of adjacencies
    let queue = [];
    // Set of visited Nodes, to avoid cycles / duplicated nodes.
    let visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);
    while (queue.length) {
      // take from the top of the queue while the queue had Nodes.
      const current = queue.shift();
      // console.log(current.value);
      // get the neighbors from the adjacency list
      const neighbors = this.getNeighbors(current);

      // iterate through the neighbors
      for (let neighbor of neighbors) {
        let neighborNode = neighbor.vertex;
        // check if neighbor is visited -> skip this iteration
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          // if not push into visitedNodes
          visitedNodes.add(neighborNode);
          // queue neighbor node.
          queue.push(neighborNode);
        }
      }
    }

    return visitedNodes;
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      // console.log(vertex);
      throw Error('Invalid Vertex', vertex);
    }

    return [...this.adjacencyList.get(vertex)];
  }


  businessTrip(graph, array) {
    // console.log('🏴‍☠️', array);
    let total = 0;

    for (let i = 0; i < array.length - 1; i += 1) {
      let neighbors = graph.getNeighbors(array[i]);

      // console.log('🤿graph:', graph, '🧨array:', array);

      for (let j = 0; j < neighbors.length; j += 1) {
        let nextValue = array[i + 1].value;
        if (neighbors[j].vertex.value === nextValue) {
          total += neighbors[j].weight;
        }
      }
      // return `false, $${total}`;
    }
    return `true, $${total}`;
  }


  depthFirst(graph, vertex) {
    const alreadyTraversed = new Set();
    alreadyTraversed.add(vertex);

    const traversal = (current, visited) => {
      visited.add(current);
      const neighbors = graph.getNeighbors(current);

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          traversal(neighbor.vertex, visited);
        }
      }
    };
    traversal(vertex, alreadyTraversed);

    return alreadyTraversed;
  }


}



module.exports = {
  Vertex,
  Edge,
  Graph,
};
