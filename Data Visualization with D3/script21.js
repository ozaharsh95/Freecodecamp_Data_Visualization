// [21] Create a Scatterplot with SVG Circles

// It usually uses circles to map data points
// A scatter plot is another type of visualization

// Task :

// Use the data(), enter(), and append() methods to bind dataset to new circle elements that are appended to the SVG.

// Note :

//Note: The circles won't be visible because we haven't set their attributes yet. We'll do that in the next challenge.

// Solution :


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
    .append("circle");
// Add your code below this line



// Add your code above this line