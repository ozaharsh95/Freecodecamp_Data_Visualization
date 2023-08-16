// [7] Add Classes with D3


// Learning :

// dar vakhate inline style apavi muskel chhe 
// too many style gets hard to manage 
// so it's easier to use add a class to element

// attr() -> adds HTML attribute to an element

// Task:

/**
 * Add the attr() method to the code in the editor and put a class of bar on the div elements.
 */

// Solution:

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class","bar");