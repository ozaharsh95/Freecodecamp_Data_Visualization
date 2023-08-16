// [4] Work with Dynamic Data in D3

// Learning:

// The D3 text() method can take a string or a callback function as an argument:
// e.g:
// selection.text((d) => d)

// Task:

/**
 * Change the text() method so that each h2 element displays the corresponding value from the dataset 
 * array with a single space and the string USD. 
 * For example, the first heading should be 12 USD.
 */

// Solution:

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2").data(dataset).enter().append("h2").text((d)=>d+" USD");