// [10] Learn About SVG in D3

// Learning :

// SVG (Scalable Vector Graphics)

// Here "scalable" means that, if you zoom in or out on an object, it would not appear pixelated. It scales with the display system, whether it's on a small mobile screen or a large TV monitor

// D3 uses svg to visualize data

// <svg> - html tag 

// CSS can be scalable when we use relative units (vh,vw,%), but svg are more flexible to build data visualizations


// Task:

/** 
 * Add an svg node to the body using append(). Give it a width attribute set to the provided w constant and a  height attribute set to the provided h constant using the attr() or style() methods for each. You'll see it in the output because there's a background-color of pink applied to it in the style tag.
*/

// Solution :

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width",w)
                  .attr("height",h);