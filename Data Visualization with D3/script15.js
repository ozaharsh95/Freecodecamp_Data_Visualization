// [15] Invert SVG Elements

// You may have noticed the bar chart looked like it's upside-down, or inverted. 
// This is because of how SVG uses (x, y) coordinates.

// In SVG, the origin point for the coordinates is in the upper-left corner. An x coordinate of 0 places a shape on the left edge of the SVG area. A y coordinate of 0 places a shape on the top edge of the SVG area. Higher x values push the rectangle to the right. Higher y values push the rectangle down.

// to make normal
// y coordinate = height_of_svg - height_of_bar

// Task :

/*
 * Change the callback function for the y attribute to set the bars right-side-up.

   Remember that the height of the bar is 3 times the data value d. 
 * */


const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body")
              .append("svg")
              .attr("width",w)
              .attr("height",h);

        svg.selectAll("rect")
              .data(dataset)
              .enter()
              .append("rect")
              .attr("width",25)
              .attr("height",(d,i)=>{
                return d*3;
              })
              .attr("y",(d)=>{
                return h-3*d;
              })
              .attr("x",(d,i)=>{
                    return i*30;
              });    