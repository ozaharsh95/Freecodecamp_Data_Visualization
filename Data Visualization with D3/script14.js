// [14] Dynamically Change the Height of Each Bar



/*
The height of each bar can be set to the value of the data point in the array, similar to how the x value was set dynamically.

selection.attr("property", (d, i) => {

})
Here d would be the data point value, and i would be the index of the data point in the array.
*/

// Task :
// Change the callback function for the height attribute to return the data value times 3.

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
                  .attr("y",0)
                  .attr("x",(d,i)=>{
                        return i*30;
                  });        