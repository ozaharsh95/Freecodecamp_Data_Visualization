const URL = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

let dataset = [];

async function getData(URL) {
    try {
        const response = await fetch(URL);
        const res = await response.json();
        dataset = res.data.map((e) => ({
            date: e[0],
            gdp: e[1]
        }));
    } catch (e) {
        console.log(e);
        console.log("Something went wrong....!!!!");
    }
}


async function func() {
    await getData(URL);

    console.log(dataset);

    // Declare the chart dimensions and margins.
    const width = 800;
    const height = 400;
    const padding = 45;


    // Create the SVG container.
    var svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "max-width: 100%; height: auto;");

    var minDate = new Date(dataset[0].date);
    var maxDate = new Date(dataset[dataset.length - 1].date);
    var maxGDP = d3.max(dataset,(obj)=>{return obj.gdp});

    // console.log(minDate,maxDate,maxGDP);

    // Declare the x (horizontal position) scale.
    const xScale = d3.scaleTime()
        .domain([minDate, maxDate])
        .range([padding, width - padding]);

    // Declare the y (vertical position) scale.
    const yScale = d3.scaleLinear()
        .domain([0,maxGDP])
        .range([height - padding, padding]);


    // Add the x-axis.
    svg.append("g")
    .attr("transform", `translate(0,${height - padding})`)
    .attr("class","tick")
    .attr('id', 'x-axis')
    .call(d3.axisBottom(xScale));

    // Add the y-axis.
    svg.append("g")
    .attr("transform", `translate(${padding},0)`)
    .attr("class","tick")
    .attr('id', 'y-axis')
    .call(d3.axisLeft(yScale));

    //setting up bars in chart
    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr('x', (d) => {return xScale(new Date(d.date))})
        .attr('y', (d) => {return yScale(d.gdp)})
        .attr("width", 2)
        .attr("height", (d,i) => {return height - yScale(d.gdp) - padding})
        .attr("data-date",(d) => {return  d.date})
        .attr("data-gdp", (d) => { return d.gdp})
        .attr("class", "bar");


    //setting toolip for each bars
    var bars = document.querySelectorAll(".bar");
    console.log(bars);
    bars.forEach((bar)=>{
        bar.addEventListener(
            'mouseenter',function(){
                let date = bar.getAttribute('data-date');
                let gdp = bar.getAttribute('data-gdp');
                console.log(date,gdp);
                svg.append('text')
                .text(date + " : $"+gdp+" B")
                .attr('x',100)
                .attr('y',100)
                .attr('data-date',date)
                .attr('data-gdp',gdp)
                .attr("id","tooltip");
            }
        )
        bar.addEventListener('mouseleave',function(){
            svg.select("#tooltip").remove();
        })
    })
}

func();