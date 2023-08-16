// [12] Create a Bar for Each Data Point in the Set


// Task :

/**
 * A previous challenge showed the format for how to create and append a div for each item in dataset:

    d3.select("body").selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
    
    There are a few differences working with rect elements instead of div elements. 
    The rect elements must be appended to an svg element, not directly to the body. 
    Also, you need to tell D3 where to place each rect within the svg area. 
    The bar placement will be covered in the next challenge.

 */


// Solution :


const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width",w)
                  .attr("height",h);

            svg.selectAll("rect")
                  .data(dataset)
                  .enter()
                  .append("rect")
                  .attr("width",25)
                  .attr("height",100)
                  .attr("x",0)
                  .attr("y",0);        