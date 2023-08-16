
function f1() {
  draw("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json", "Video Game Sales", "Top 100 Most Sold Video Games Grouped by Platform");
}

function f2() {
  draw(" https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json", "Movie Sales", "Top 100 Highest Grossing Movies Grouped By Genre");
}

function f3() {
  draw("  https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json", "Kickstarter Pledges", "Top 100 Most Pledged Kickstarter Campaigns Grouped By Category");
}

function draw(URL, heading1, desc) {
  document.querySelector("#my_dataviz").innerHTML = "";
  document.querySelector("#title").innerHTML = heading1;
  document.querySelector("#description").innerHTML = desc;
  // set the dimensions and margins of the graph
  const margin = { top: 10, right: 10, bottom: 10, left: 10 },
    width = 1200 - margin.left - margin.right,
    height = 1200 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      `translate(${margin.left}, ${margin.top})`);

  // read json data
  d3.json(URL).then(function (data) {

    // Give the data to this cluster layout:
    const root = d3.hierarchy(data).sum(function (d) {
      return d.value
    }) // Here the size of each leave is given in the 'value' field in input data

    // Then d3.treemap computes the position of each element of the hierarchy
    d3.treemap()
      .size([width, height])
      .padding(2)
      (root)

    const colors = [
      '#1C1832', '#9E999D',
      '#F2259C', '#347EB4',
      '#08ACB6', '#91BB91',
      '#BCD32F', '#75EDB8',
      "#89EE4B", '#AD4FE8',
      '#D5AB61', '#BC3B3A',
      '#F6A1F9', '#87ABBB',
      '#412433', '#56B870',
      '#FDAB41', '#64624F'];

    const categories = data.children.map(d => d.name);
    const colorScale = d3.scaleOrdinal() // the scale function
      .domain(categories) // the data
      .range(colors);    // the way the data should be shown

    // use this information to add rectangles:
    svg
      .selectAll("rect")
      .data(root.leaves())
      .join("rect")
      .attr('x', function (d) { return d.x0; })
      .attr('y', function (d) { return d.y0; })
      .attr('width', function (d) {
        return d.x1 - d.x0;
      })
      .attr('height', function (d) { return d.y1 - d.y0; })
      .style("fill", (d) => colorScale(d.data.category))
      .style("stroke", "black")
      .attr("class", "tile")
      .attr('data-name', function (d) {
        console.log(d.data);
        return d.data.name;
      })
      .attr('data-category', function (d) {
        return d.data.category;
      })
      .attr('data-value', function (d) {
        return d.data.value;
      });





    // and to add the text labels
    svg
      .selectAll("text")
      .data(root.leaves())
      .join("text")
      .attr("x", function (d) { return d.x0 + 5 })    // +10 to adjust position (more right)
      .attr("y", function (d) { return d.y0 + 20 })    // +20 to adjust position (lower)
      .text(function (d) { return d.data.name })
      .attr("font-size", "9px")
      .attr("fill", "white")
      .style("overflow", "auto");


    const tileArr = document.querySelectorAll(".tile");
    tileArr.forEach((tile) => {
      tile.addEventListener("mouseenter", function (e) {
        const footer = document.querySelector("#footer");
        const Name = this.getAttribute("data-name");
        const category = this.getAttribute("data-category");
        const value = this.getAttribute("data-value");
        footer.innerHTML = `<h3>Name : ${Name}</h3>
                        <h3>Category : ${category}</h3>
                        <h3>Value : ${value}</h3> 
      `;
      })
      tile.addEventListener("mouseleave", (e) => {
        footer.innerHTML = "";
      })
    })

  })
}