// (1) Add Document Elements with D3

//d3.select()-d3.select() method will select the first element that matches in the DOM (from top to bottom).

//d3.selectAll()

//apend() - method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node

//text() - method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.

//ans:
/*
d3.select("body").append("h1").text("Learning D3");
*/


// (2) Select a Group of Elements with D3

// d3.selectAll() 
//  method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string

//ans:
/*
    d3.selectAll("li").text("list item")
*/
