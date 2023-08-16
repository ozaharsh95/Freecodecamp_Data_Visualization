// [6] Change Styles Based on Data :

// Learning :

// You can use a callback function in the style() method and include the conditional logic. 

// Task :

/**
 * Add the style() method to the code in the editor to set the color of the h2 elements conditionally. Write the callback function so if the data value is less than 20, it returns red, otherwise it returns green.
 */

// Solution :


const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
    .text((d)=>d+" USD")
    .style("font-family","verdana")
    .style("color",(d)=>{
        if(d<20){
            return "red";
        }else{
            return "green";
        }
    });