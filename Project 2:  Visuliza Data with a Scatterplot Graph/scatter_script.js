const URL = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

var dataset = [];


async function getData(URL) {
    try {
        const response = await fetch(URL);
        const res = await response.json();
        res.forEach(element => {
            dataset.push(element);
        });
    } catch (e) {
        console.error(e);
        console.log("Something went wrong....!!!!");
    }
}

async function start(){
    await getData(URL);
    console.log(dataset);

    dataset.forEach((obj)=>{
        let oldTime = obj.Time +"";
        let str="";
        for(let i=0;i<oldTime.length;i++){
            if(oldTime[i]!=":"){
                str+=oldTime[i];
            }
        }
        obj.Time=str;
    })

    console.log(dataset);

    // Declare the chart dimensions and margins.
    var margin = {top: 10, right: 30, bottom: 30, left: 60};
   
    let width = 900 - margin.left - margin.right;
    let height = 500 - margin.top - margin.bottom;
    
    
    // Create the SVG container.
    var svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "max-width: 100%; height: auto;");
    
    
    var minTime = d3.min(dataset,(obj)=>{return obj.Time});
    var maxTime = d3.max(dataset,(obj)=>{return obj.Time});
    var maxYear = d3.max(dataset,(obj)=>{return obj.Year});
    var minYear = d3.min(dataset,(obj)=>{return obj.Year});

    console.log(minTime);
    console.log(maxTime);
    console.log(maxYear);
    console.log(minYear);



    // Declare the x (horizontal position) scale.
    const xScale = d3.scaleLinear()
        .domain([minYear,maxYear])
        .range([margin.left, width-margin.right-margin.left]);
       
    // Declare the y (vertical position) scale.
    const yScale = d3.scaleLinear()
        .domain([Number(minTime),Number(maxTime)])
        .range([margin.top, height-margin.bottom]);
    

    //Setting tickformat for x - axis
    var xAxis = d3.axisBottom(xScale)
    .tickFormat((d)=>d);


    //Setting tickFormat for y - axis
    function temp(str){
        return str.substring(0,2)+":"+str.substring(2,5);
    }

    var yAxis = d3.axisLeft(yScale)
    .tickFormat((str)=>{
        str+="";
        return temp(str)});
    
    // Add the x-axis.
    svg.append("g")
    .attr("transform", `translate(0,${height-margin.bottom})`)
    .attr("class","tick")
    .attr('id', 'x-axis')
    .call(xAxis);
    

    // Add the y-axis.
    svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .attr("class","tick")
    .attr('id', 'y-axis')
    .call(yAxis);


    //Setting up dots in charts
    svg.append('g')
    .selectAll("dot")
    .data(dataset)
    .enter()
    .append("circle")
      .attr("cx", function (obj) { return xScale(obj.Year) } )
      .attr("cy", function (d) { return yScale(d.Time); } )
      .attr("r", 6)
      .style("fill",function (obj){
        if(obj.Doping==''){
            return 'green';
        }else{
            return 'red';
        }
      })
      .attr("class","dot")
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .attr("data-xvalue",(obj)=>obj.Year)
      .attr("data-yvalue",(obj)=>obj.Time)
      .attr("Name", (d) => d.Name)
      .attr("Nationality", (d) => d.Nationality)
      .attr("Year", (d) => d.Year)
      .attr("Time", (d) => d.Time)
      .attr("Doping", (d) => d.Doping);


    //setting up legends
    svg.append("circle")
        .attr("cx", 600)
        .attr("cy", 130)
        .attr("r", 6)
        .style("fill", "red")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("id","legend");
    svg.append("circle")
        .attr("cx", 600)
        .attr("cy", 160)
        .attr("r", 6)
        .style("fill", "green")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("id","legend");
    svg.append("text")
        .attr("x", 620)
        .attr("y", 130)
        .text("Riders with doping allegations")
        .style("font-size", "13px")
        .attr("alignment-baseline", "middle")
        .attr("id","legend");
    svg.append("text")
        .attr("x", 620)
        .attr("y", 160)
        .text("No doping allegations")
        .style("font-size", "13px")
        .attr("alignment-baseline", "middle")
        .attr("id","legend");

    //setting up tooltip

    var circles = document.querySelectorAll(".dot")
    console.log(circles);
    circles.forEach((circle)=>{
        let name = circle.getAttribute("Name");
        let nationality = circle.getAttribute("Nationality");
        let year = circle.getAttribute("Year");
        let time = circle.getAttribute("Time");
        let doping = circle.getAttribute("Doping");
        let x = Number(circle.getAttribute("cx"));
        let y = Number(circle.getAttribute("cy"));

        circle.addEventListener("mouseenter",function(){
            svg.append("text")
                .attr("id","tooltip")
                .attr("data-year",year)
                .append("tspan")
                .text(name+" :"+nationality)
                .attr("y",y+10)
                .attr("x",x+10)
                .append("tspan")
                .text("Year :"+year+" Time :"+temp(time))
                .attr("x",x+10)
                .attr("y",y+30)
                .append("tspan")
                .text(doping)
                .attr("x",x+10)
                .attr("y",y+50)
                


        })

        circle.addEventListener('mouseleave',function(){
            svg.select("#tooltip").remove();
        })
    })
      
}

start();