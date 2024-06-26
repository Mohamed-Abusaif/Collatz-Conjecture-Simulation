const visualize = (result) => {
  // set the dimensions and margins of the graph
  var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 560 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

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
      d3.axisBottom(x).ticks(10) // Set the number of ticks as per your preference
    );

  // Add Y axis
  var y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .range([height, 0]);

  svg.append("g").call(d3.axisLeft(y));

  // Function to add data point and line with a delay
  const addDataPoint = (index) => {
    // Add the point
    svg
      .append("circle")
      .attr("cx", x(data[index].step))
      .attr("cy", y(data[index].value))
      .attr("r", 5)
      .attr("fill", "#69b3a2");

    // Draw the line
    if (index > 0) {
      svg
        .append("line")
        .attr("x1", x(data[index - 1].step))
        .attr("y1", y(data[index - 1].value))
        .attr("x2", x(data[index].step))
        .attr("y2", y(data[index].value))
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 2);
    }
  };

  // Loop through data array and add points with delay
  let index = 0;
  const interval = setInterval(() => {
    addDataPoint(index);
    index++;
    if (index >= data.length) clearInterval(interval);
  }, 100);

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
