// [8] Update the Height of an Element Dynamically

// Learning :

// Task :
/**
 * 
 *  1. Create a div for each data point in the array

    2. Give each div a dynamic height, using a callback function in the style() method that sets height equal to the data value


    Add the style() method to the code in the editor to set the height property for each element. Use a callback function to return the value of the data point with the string px added to it.

 */


// Solution :


const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class","bar")
  .style("height",(d)=>d+"px");