// [5] Add Inline Styling to Elements

// Learning :

// style() - inline css apava mate vapray 

// Task:

/**
 * Add the style() method to the code in the editor to make all the displayed text have a font-family of verdana.
 */

// Solution:


const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2").data(dataset).enter().append("h2").text((d)=>d+" USD").style("font-family","verdana");