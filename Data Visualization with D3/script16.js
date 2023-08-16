// [16] Change the Color of an SVG Element

// Learning :

// SVG has a way to change the color of the bars
// fill attribute to color shapes in svg.


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