// [11] Display Shapes with SVG

// Learning :

// The next step is to create a shape to put in the svg area.
// shapes supported in svg : 
// <react> - rectangle
// <circle> - circle
// <ellipse> - ellipse
// <line> - line
// <polyline> - polyline
// <polygon> - polygon

// (x,y) -> (0,0) (By default) (is in the upper-left corner)
// +ve x -> pushes shape to right
// +ve y -> pushes shape to bottom

// Task :

/*
*
Add a rect shape to the svg using append(), and give it a width attribute of 25 and height attribute of 100. Also, give the rect x and y attributes each set to 0. 
* 
*/


// Solution :


const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width",w)
                  .attr("height",h);

    const rect = d3.select("svg")
                .append("rect")
                .attr("width",25)
                .attr("height",100)
                .attr("x",0)
                .attr("y",0);