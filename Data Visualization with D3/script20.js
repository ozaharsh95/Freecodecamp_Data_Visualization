// [20] Add a Tooltip to a D3 Element

/*
Add a Tooltip to a D3 Element
A tooltip shows more information about an item on a page when the user hovers over that item. There are several ways to add a tooltip to a visualization. This challenge uses the SVG title element.


*/


// Task :
// title pairs with the text() method to dynamically add data to the bars.

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
              .attr("class","bar")
              .append("title")
              .text((d)=>d);    
              
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