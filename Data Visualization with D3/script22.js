// [22] Add Attributes to the Circle Elements

// Learning :

// (cx,cy) -> (x,y) coordinate for circle
// r attribute -> radius of circle
// all 3 attribute can use a callback function

// Task :

/*
    Add cx, cy, and r attributes to the circle elements. The cx value should be the first number in the array for each item in dataset. 
    The cy value should be based off the second number in the array, but make sure to show the chart right-side-up and not inverted. The r value should be 5 for all circles.

*/

// Learning :



const dataset = [
    [ 34,    78 ],
    [ 109,   280 ],
    [ 310,   120 ],
    [ 79,    411 ],
    [ 420,   220 ],
    [ 233,   145 ],
    [ 333,   96 ],
    [ 222,   333 ],
    [ 78,    320 ],
    [ 21,    123 ]
  ];


const w = 500;
const h = 500;

const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx",(d)=>d[0])
    .attr("cy",(d)=>h-d[1])
    .attr("r",5);