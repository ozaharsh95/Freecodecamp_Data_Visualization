// [3] Work with Data in D3

// Learning:

// data()  - is used on a selection of DOM elements to attach the data to those elements. The data set is passed as an argument to the method.
// enter() - to create a new element in the document for each piece of data in the set


// task:

/**
 * Select the body node, then select all h2 elements. Have D3 create and append an h2 tag for each 
 * item in the  dataset array. The text in the h2 should say New Title. 
 * Your code should use the data() and enter() methods.
 * 
 */

//solution:

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2").data(dataset).enter().append("h2").text("Mai d3 sikhuga");