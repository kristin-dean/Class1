
var dataB = d3.csv("breast.csv");

dataB.then(function(data)
{
  console.log("data",data);
  drawChart(data, "#breast", "pink", "#breastLabel");
  drawLegend(data, "#breastLabel")
},
function(err)
{
  console.log(err);
});


//************************************** function to create chart ******************************************//

var drawChart = function(colorData, idname, color, idname2)
{
  var width = 800;
  var height = 600;
  var barWidth = width/colorData.length - 10;
  var svg = d3.select(idname)
              .attr("height", height)
              .attr("width", width);
  svg.selectAll("rect")
     .data(colorData)
     .enter()
     .append("rect")
     .attr("x", function(d,i)
      { return i*barWidth + 10;})
    .attr("y", function (d)
      { return height - d.Count/800;})
    .attr("width", barWidth - 4)
    .attr("height", function(d)
      { return d.Count;})
    .attr("fill", function(d)
          { return d.Color;})
    .attr("stroke", function(d)
          { return d.Color;})
    .attr("stroke-width", "1");
  
  svg.selectAll("text")
   .data(colorData)
   .enter()
   .append("text")
   .text(function(d)
      { return d.Count;})
   .attr("x", function(d,i)
      { return i*barWidth + 45;})
   .attr("y", function(d)
      { return height - 15;})
   .attr("fill", "black")
   .attr("font-family", "sans-serif")
   .attr("font-size", "13px")
   .attr("text-anchor", "middle")
   .attr("text-weight", "bold");
};
  
var drawLegend = function(colorData, idname)
{
  var width = 200;
  var height = 600;
  var boxWidth = 15;
  var svg = d3.select(idname)
              .attr("height", height)
              .attr("width", width);
  svg.selectAll("rect")
     .data(colorData)
     .enter()
     .append("rect")
     .attr("x", function(d,i)
      { return 25;})
    .attr("y", function (d, i)
      { return (i+1)*15 + 10;})
    .attr("width", boxWidth)
    .attr("height", boxWidth-3)
    .attr("fill", function(d)
      { return d.Color;})

svg.selectAll("text")
   .data(colorData)
   .enter()
   .append("text")
   .text(function(d)
      { return d.Age;})
   .attr("x", function(d,i)
      { return 45})
   .attr("y", function(d, i)
      { return (i+1)*15 + 22;})
   .attr("fill", "black")

}
