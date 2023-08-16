// [25] Set a Domain and a Range on a Scale


// Learing :

// By default, scales use the identity relationship. This means the input value maps to the output value. However, scales can be much more flexible and interesting.

// You want to map dataset values ranging from 50 to 480. to x axis on the svg b/w 10 units and 500 units.

// input -> datset values -> domain
// output -> x axis values -> range

// The domain() and range() methods set these values for the scale. Both methods take an array of at least two elements as an argument. Here's an example:

/*
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)               // 10
scale(480)              // 500
scale(325)              //323.37
scale(750)              //807.67
d3.scaleLinear()
*/

//In order, the following values would be displayed in the console: 10, 500, 323.37, and 807.67.


// Task :

// Create a scale and set its domain to [250, 500] and range to [10, 150].



// Solution :

const scale = d3.scaleLinear(); 

scale.domain([250,500]);
scale.range([10,150]);

const output = scale(50); 

d3.select("body")
    .append("h2")
    .text(output);

// output -> -102