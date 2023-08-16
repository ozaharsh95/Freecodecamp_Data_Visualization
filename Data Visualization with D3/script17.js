// [17] Add Labels to D3 Elements

// Learning : 

/**
 * Like the rect element, a text element needs to have x and y attributes, to place it on the SVG. It also needs to access the data to display those values.

    D3 gives you a high level of control over how you label your bars.
 */

// Task :

/**
 * The code in the editor already binds the data to each new text element. 
 * First, append text nodes to the svg. 
 * Next, add attributes for the x and y coordinates. 
 * They should be calculated the same way as the rect ones, except the y value for the text should make the label sit 3 units higher than the bar. 
 * Finally, use the D3 text() method to set the label equal to the data point value.

 */

// Solution :


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
              })
              .attr("fill","tomato");    
              
        svg.selectAll("text")
              .data(dataset)
              .enter()
              .append("text")
              .attr("x",(d,i)=>{
                return i*30;
               })
               .attr("y",(d)=>{
                return h-3 -3*d;
               })
               .text((d)=>d);