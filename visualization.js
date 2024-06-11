const visualize = (result) => {
  // set the dimensions and margins of the graph
  var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  // append the svg object to the div container
  var svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Convert result array into suitable data format
  const data = result.map((d, i) => ({ step: i, value: d }));

  // Add X axis
  var x = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([0, width]);

  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(
      d3.axisBottom(x).ticks(data.length).tickFormat(d3.format("d")) // Format ticks as integers
    );

  // Add Y axis
  var y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .range([height, 0]);

  svg.append("g").call(d3.axisLeft(y));

  // Add the line
  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#69b3a2")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x((d) => x(d.step))
        .y((d) => y(d.value))
    );

  // Add the points
  svg
    .append("g")
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.step))
    .attr("cy", (d) => y(d.value))
    .attr("r", 5)
    .attr("fill", "#69b3a2");

  // Add a border around the chart
  svg
    .append("rect")
    .attr("x", -margin.left)
    .attr("y", -margin.top)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("fill", "none")
    .attr("stroke-width", 5);
};
