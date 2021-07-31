'use strict';

const { Graph } = require("../graph");

const graph = new Graph();

const a = graph.addVertex('A');
const b = graph.addVertex('B');
const c = graph.addVertex('C');
const d = graph.addVertex('D');
const e = graph.addVertex('E');
const f = graph.addVertex('F');
const g = graph.addVertex('G');
const h = graph.addVertex('H');


graph.addDirectedEdge(a, c);
graph.addDirectedEdge(a, b);
graph.addDirectedEdge(c, b);
graph.addDirectedEdge(b, f);
graph.addDirectedEdge(f, e);
graph.addDirectedEdge(f, h);
graph.addDirectedEdge(e, h);
graph.addDirectedEdge(c, g);
graph.addDirectedEdge(d, b);
graph.addDirectedEdge(d, e);
graph.addDirectedEdge(d, f);

console.log('🐌adjacency list: ', graph.adjacencyList);

describe('Tests graph functionality', () => {

  test('Node can be successfully added to the graph', () => {
    const i = graph.addVertex('I');
    const test = graph.breadthFirst(i);

    expect(test.size).toEqual(1);
  });


  test('An edge can be successfully added to the graph', () => {
    const j = graph.addVertex('J');
    const k = graph.addVertex('K');

    graph.addDirectedEdge(d, j);
    graph.addDirectedEdge(j, k);

    graph.breadthFirst(j);

    expect(graph.breadthFirst(j).has(k)).toEqual(true);
  });


  // to do tests:
  // A collection of all nodes can be properly retrieved from the graph
  // All appropriate neighbors can be retrieved from the graph
  // Neighbors are returned with the weight between nodes included
  // The proper size is returned, representing the number of nodes in the graph
  // A graph with only one node and edge can be properly returned
  // An empty graph properly returns null

});
