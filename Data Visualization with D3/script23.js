// [23] Add Labels to Scatter Plot Circles

// Learning :

// The text nodes need x and y attributes to position it on the SVG. In this challenge, the y value (which determines height) can use the same value that the circle uses for its cy attribute. The x value can be slightly larger than the cx value of the circle, so the label is visible. This will push the label to the right of the plotted point.

// Task :

// Label each point on the scatter plot using the text elements. The text of the label should be the two values separated by a comma and a space. For example, the label for the first point is 34, 78. Set the x attribute so it's 5 units more than the value you used for the cx attribute on the circle. Set the y attribute the same way that's used for the cy value on the circle.

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
    .append("circle")
    .attr("cx",(d)=>d[0])
    .attr("cy",(d)=>h-d[1])
    .attr("r",5);

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .attr("y",(d)=>h-d[1])
    .attr("x",(d)=>d[0]+5)
    .text((d)=>d[0]+", "+d[1])