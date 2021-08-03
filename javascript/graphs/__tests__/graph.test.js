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

// console.log('🐌adjacency list: ', graph.adjacencyList);

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


  test('A collection of all nodes can be properly retrieved from the graph', () => {
    const l = graph.addVertex('L');
    const m = graph.addVertex('M');
    graph.addDirectedEdge(l, m);
    graph.addDirectedEdge(m, l);
    graph.breadthFirst(l);
    graph.breadthFirst(m);


    const test1 = graph.adjacencyList.get(l);
    const test2 = graph.adjacencyList.get(m);

    const returnValue = [{ 'vertex': { 'value': 'M' }, 'weight': 0 }];
    // console.log('Ⓜ', returnValue);
    const returnValue2 = [{ 'vertex': { 'value': 'L' }, 'weight': 0 }];
    // console.log('🍗', returnValue2);

    expect(test1).toEqual(returnValue);
    expect(test2).toEqual(returnValue2);
  });


  test('All appropriate neighbors can be retrieved from the graph', () => {
    const n = graph.addVertex('N');
    const o = graph.addVertex('O');
    const p = graph.addVertex('P');
    graph.addDirectedEdge(n, o);
    graph.addDirectedEdge(n, p);
    graph.addDirectedEdge(o, p);
    graph.breadthFirst(n);
    graph.breadthFirst(o);
    graph.breadthFirst(p);


    const pleaseReturnThis = graph.getNeighbors(n);
    const returnValue = [{ 'vertex': { 'value': 'O' }, 'weight': 0 }, { 'vertex': { 'value': 'P' }, 'weight': 0 }];

    // console.log('🎪', graph.getNeighbors(n));
    expect(pleaseReturnThis).toEqual(returnValue);
  });


  test('Neighbors are returned with the weight between nodes included', () => {
    const n = graph.addVertex('N');
    const o = graph.addVertex('O');
    const p = graph.addVertex('P');
    graph.addDirectedEdge(n, o);
    graph.addDirectedEdge(n, p);
    graph.addDirectedEdge(o, p);
    graph.breadthFirst(n);
    graph.breadthFirst(o);
    graph.breadthFirst(p);


    const returnValue = [{ 'vertex': { 'value': 'O' }, 'weight': 0 }, { 'vertex': { 'value': 'P' }, 'weight': 0 }];

    // console.log('📣', returnValue[0].weight);
    expect(returnValue[0].weight).toEqual(0);
    expect(returnValue[1].weight).toEqual(0);
  });

  // to do tests:
  // The proper size is returned, representing the number of nodes in the graph
  // A graph with only one node and edge can be properly returned
  // An empty graph properly returns null

});



// === === BREADTH FIRST TESTS === === //
describe('Tests breadth-first functionality', () => {
  const pandora = graph.addVertex('pandora');
  const arendelle = graph.addVertex('arendelle');
  const metroville = graph.addVertex('metroville');
  const monstropolis = graph.addVertex('monstropolis');
  const narnia = graph.addVertex('narnia');
  const naboo = graph.addVertex('naboo');

  graph.addDirectedEdge(pandora, arendelle);
  graph.addDirectedEdge(arendelle, metroville);
  graph.addDirectedEdge(arendelle, monstropolis);
  graph.addDirectedEdge(metroville, monstropolis);
  graph.addDirectedEdge(metroville, naboo);
  graph.addDirectedEdge(metroville, narnia);
  graph.addDirectedEdge(monstropolis, naboo);
  graph.addDirectedEdge(narnia, naboo);


  test('Should traverse breadth-first', () => {
    let check = graph.breadthFirst(pandora);
    console.log('🎀', graph.breadthFirst(pandora));


    expect(check.has(pandora)).toBeTruthy();
    expect(check.has(arendelle)).toBeTruthy();
    expect(check.has(metroville)).toBeTruthy();
  });


  test('Tests number of nodes/vertices', () => {
    let check = graph.breadthFirst(pandora);

    expect(check.size).toEqual(6);
  });


});
