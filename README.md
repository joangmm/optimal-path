# Technical Test - Route Finder

This code is a solution to a technical test completed by Joan Garcia on April 18, 2024, for the company "einatec".

## Overview

This project aims to find the cheapest route between two cities in a given graph. It utilizes Dijkstra's algorithm to find the shortest path between two nodes in a graph. The main script (`index.js`) reads the graph data from a JSON file, accepts two city names as command line arguments, and then calculates and prints the cheapest route between those cities.

## Usage

To use this code, follow these steps:

1. Clone and navigate to the project directory in your terminal.

2. Run `npm install` to install any dependencies.

3. Run the main script `index.js` with the following command:

`node index.js [start] [end]`

Replace `[start]` and `[end]` with the names of the cities between which you want to find the cheapest route. If no cities are provided, the default route from Pitesti to Fagaras will be calculated.

## Example

To find the cheapest route from Bucarest to Fagaras, run the following command:

`node index.js Bucarest Fagaras`

## Author

This code was written by Joan Garcia.
