const eduData = " https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json"

const countyData = "https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json"

const svgHeight = 650
const svgWidth = 1000

const path = d3.geoPath()




d3.queue()
    .defer(d3.json, countyData)
    .defer(d3.json, eduData)
    .await(onComplete);

function onComplete(error, county, edu) {
    if (error) throw error

    const colors = ["#f8f8ff", "#dbd2ed", "#bdaedb", "#9f8ac9", "#8167b7", "#6146a4", "#3f2592", "#000080"]

    function getColor(eduValue, colorScheme) {
        if (eduValue < 80) {
            return colorScheme[Math.floor(eduValue / 10)]
        }
        else return colors[7]
    }
    const eduMax = d3.max(edu, (d) => d.bachelorsOrHigher)
    const eduMin = d3.min(edu, (d) => d.bachelorsOrHigher)

    const tooltip = d3.select("#container")
        .append("div")
        .attr("id", "tooltip")

    d3.select("#container")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .append("g")
        .selectAll("path")
        .data(topojson.feature(county, county.objects.counties).features)
        .enter()
        .append("path")
        .attr("data-fips", (d) => d.id)
        .attr("data-education", (d) => edu.filter(obj => obj.fips == d.id)[0].bachelorsOrHigher)
        .attr("d", path)
        .attr("fill", (d) => getColor(edu.filter(obj => obj.fips == d.id)[0].bachelorsOrHigher, colors))
        .attr("class", "county")
        .on("mouseover", function (d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", 0.8)
                .style("left", d3.event.pageX + 25 + "px")
                .style("top", d3.event.pageY + "px")
                .attr("data-education", edu.filter(obj => obj.fips == d.id)[0].bachelorsOrHigher)

            tooltip.html(edu.filter(obj => obj.fips == d.id)[0].area_name + "<br/>" + edu.filter(obj => obj.fips == d.id)[0].bachelorsOrHigher + "%")
        })
        .on("mouseout", function () {
            tooltip.transition()
                .style("opacity", 0)
            tooltip.html("")
        })

    d3.select("svg")
        .append("path")
        .datum(topojson.mesh(county, county.objects.states))
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("class", "states")

    d3.select("#container")
        .append("div")
        .attr("id", "legend")

    const legendData = [0, 10, 20, 30, 40, 50, 60, 70]

    const legendScale = d3.scaleLinear()
        .domain([0, 80])
        .range([0, 240])
    const legendAxis = d3.axisRight(legendScale)
        .tickValues([0, 10, 20, 30, 40, 50, 60, 70, 80])
        .tickFormat((d) => d + "%")


    const offset = 50

    d3.select("#legend")
        .append("svg")
        .attr("id", "svg")
        .attr("height", 300)
        .attr("width", 100)
        .selectAll("rect")
        .data(legendData)
        .enter()
        .append("rect")
        .attr("fill", (d) => getColor(d, colors))
        .attr("x", 20)
        .attr("y", (d, i) => offset + i * 30)
        .attr("height", 30)
        .attr("width", 30)

    d3.select("#legend").select("svg")
        .append("g")
        .call(legendAxis)
        .attr("transform", "translate(" + offset + "," + offset + ")")

}
document.querySelector("#sliderValue").textContent = "Show counties with % greater than: " + document.querySelector("#slider").value

function sliderChange() {

    const colors = ["#f8f8ff", "#dbd2ed", "#bdaedb", "#9f8ac9", "#8167b7", "#6146a4", "#3f2592", "#000080"]

    function getColor(eduValue, colorScheme) {
        if (eduValue < 80) {
            return colorScheme[Math.floor(eduValue / 10)]
        }
        else return colors[7]
    }

    let x = document.querySelector("#slider").value
    document.querySelector("#sliderValue").textContent = "Show counties with % greater than: " + x;


    let nodes = document.querySelectorAll("path")
    for (let i = 0; i < nodes.length; i++) {
        if (parseFloat(nodes[i].dataset.education) < x) {
            nodes[i].setAttribute("display", "none")
        }
        else if (nodes[i].dataset.education > x) {
            nodes[i].setAttribute("display", "visible")
        }
    }
}
