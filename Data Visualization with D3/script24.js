// [24] Create a Linear Scale with D3

// Learning :

// In D3, there are scales to help plot data. scales are functions that tell the program how to map a set of raw data points onto the pixels of the SVG.

//For example, say you have a 100x500-sized SVG and you want to plot Gross Domestic Product (GDP) for a number of countries. The set of numbers would be in the billion or trillion-dollar range. You provide D3 a type of scale to tell it how to place the large GDP values into that 100x500-sized area.

// D3 has several scale types. For a linear scale (usually used with quantitative data), there is the D3 method scaleLinear():

// const scale = d3.scaleLinear();


// Task :

// Change the scale variable to create a linear scale. Then set the output variable to the scale called with an input argument of 50.

// Solution :

// Add your code below this line

const scale = d3.scaleLinear(); // Create the scale here
const output = scale(50); // Call scale with an argument here

// Add your code above this line

d3.select("body")
    .append("h2")
    .text(output);
