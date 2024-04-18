const fs = require("fs");
const findCheapestRoute = require("./findRoute");

const graph = JSON.parse(fs.readFileSync("data/cities.json", "utf8"));

// Find the cheapest route based on command line arguments
function findAndPrintCheapestRoute() {
  const args = process.argv.slice(2);
  let start = "Pitesti"; // Default start point
  let end = "Fagaras"; // Default end point

  if (args.length === 2) {
    start = args[0];
    end = args[1];
  } else if (args.length !== 0) {
    console.log(
      "Please, use this structure to call the program: node index.js [start] [end]"
    );
    return;
  }

  // Check if start and end cities are valid
  if (!graph[start] || !graph[end]) {
    console.log(
      "(!) Warning (!): One or both of the cities provided as arguments were not found in the graph data, so default cities are going to be used instead."
    );
    start = "Pitesti"; // Default start point
    end = "Fagaras"; // Default end point
  }

  const { route, cost } = findCheapestRoute(graph, start, end);
  console.log(
    `The cheapest route from ${start} to ${end} is the following:\n${route.join(
      " -> "
    )}, with an optimal cost of ${cost}.`
  );
}

// Call the function to find and print the cheapest route
findAndPrintCheapestRoute();
