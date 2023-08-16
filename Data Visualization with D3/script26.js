// [26] Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset

// use of min() or max()

// Often when you set the domain, you'll want to use the minimum and maximum values within the data set. Trying to find these values manually, especially in a large data set, may cause errors.

//D3 has two methods - min() and max() to return this information. Here's an example:

//eg1
/*
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
*/

//eg2
/*
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
*/


// Task :
// The positionData array holds sub arrays of x, y, and z coordinates. Use a D3 method to find the maximum value of the z coordinate (the third value) from the arrays and save it in the output variable.



// Solution :

const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line

    const output = d3.max(positionData,(d)=>d[2]); // Change this line

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output)