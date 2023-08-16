// [19] Add a Hover Effect to a D3 Element

/**You set the CSS class on the SVG elements with the attr() method. Then the :hover pseudo-class for your new class holds the style rules for any hover effects.

Use the attr() method to add a class of bar to all the rect elements. This changes the fill color of the bar to brown when you mouse over it. */

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
              .attr("fill","tomato")
              .attr("class","bar");    
              
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
               .text((d)=>d)
               .style("font-size",25+"px")
               .attr("fill","red");