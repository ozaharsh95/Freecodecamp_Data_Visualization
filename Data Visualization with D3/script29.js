// [29] Add Axes to a Visualization

// Learning:
// y-axis -> axisLeft()
// x-axis -> axisBottom()
// "g" element for rendering axis because axis is just straight line

// x-axis 
/*
    const xAxis = d3.axisBottom(xScale);

    svg.append("g")
    .attr("transform", "translate(0, " + (h - padding) + ")")
    .call(xAxis);
*/


// TAsk :

// The scatter plot now has an x-axis. Create a y-axis in a variable named yAxis using the axisLeft() method. Then render the axis using a g element. Make sure to use a transform attribute to translate the axis by the amount of padding units right, and 0 units down. Remember to call() the axis.


// Solution :

const dataset = [
    [ 34,     78 ],
    [ 109,   280 ],
    [ 310,   120 ],
    [ 79,   411 ],
    [ 420,   220 ],
    [ 233,   145 ],
    [ 333,   96 ],
    [ 222,    333 ],
    [ 78,    320 ],
    [ 21,   123 ]
  ];

const w = 500;
const h = 500;
const padding = 60;

const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[0])])
    .range([padding, w - padding]);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([h - padding, padding]);

const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", (d) => xScale(d[0]))
.attr("cy",(d) => yScale(d[1]))
.attr("r", (d) => 5);

svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text((d) =>  (d[0] + "," + d[1]))
.attr("x", (d) => xScale(d[0] + 10))
.attr("y", (d) => yScale(d[1]))

const xAxis = d3.axisBottom(xScale);
// Add your code below this line
const yAxis = d3.axisLeft(yScale);
// Add your code above this line

svg.append("g")
.attr("transform", "translate(0," + (h - padding) + ")")
.call(xAxis);

// Add your code below this line

svg.append("g")
  .attr("transform","translate("+padding+",0)")
  .call(yAxis);


// Add your code above this line