const visualize = (result) => {
  // Set up SVG canvas
  var width = 500;
  var height = 300;
  var svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create bars
  svg
    .selectAll("rect")
    .data(result)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 70)
    .attr("y", (d) => height - d)
    .attr("width", 65)
    .attr("height", (d) => d)
    .attr("fill", "blue");
};
