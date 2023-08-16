// [13] Dynamically Set the Coordinates for Each Bar

// Learning :

/*
The last challenge created and appended a rectangle to the svg element for each point in dataset to represent a bar. Unfortunately, they were all stacked on top of each other.


The placement of a rectangle is handled by the x and y attributes. They tell D3 where to start drawing the shape in the svg area. The last challenge set them each to 0, so every bar was placed in the upper-left corner.


for bar chart all bars should sit on the same vertical level => y=0 for all bars

x value -> larger -> pushes item further to the right

attr() with callback function

*/

// Task :

/* Change the x attribute callback function so it returns the index times 30. */


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
                  .attr("height",100)
                  .attr("y",0)
                  .attr("x",(d,i)=>{
                        return i*30;
                  });        