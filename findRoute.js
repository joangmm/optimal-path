// Function to find the cheapest route using Dijkstra's algorithm
function findCheapestRoute(graph, start, end) {
  const unvisitedNodes = Object.keys(graph);
  const minCost = {};
  const route = {};
  let currentNode;

  // Initialize minimum costs with infinity and the route as empty
  for (let node in graph) {
    minCost[node] = Infinity;
    route[node] = null;
  }

  minCost[start] = 0;

  while (unvisitedNodes.length !== 0) {
    currentNode = unvisitedNodes.reduce((minNode, node) => {
      return minCost[node] < minCost[minNode] ? node : minNode;
    });

    for (let neighbor in graph[currentNode]) {
      let totalCost = minCost[currentNode] + graph[currentNode][neighbor];
      if (totalCost < minCost[neighbor]) {
        minCost[neighbor] = totalCost;
        route[neighbor] = currentNode;
      }
    }

    unvisitedNodes.splice(unvisitedNodes.indexOf(currentNode), 1);
  }

  // Build the route from the end node back to the start
  const cheapestRoute = [];
  let node = end;
  while (node !== null) {
    cheapestRoute.unshift(node);
    node = route[node];
  }

  return { route: cheapestRoute, cost: minCost[end] };
}

module.exports = findCheapestRoute;
