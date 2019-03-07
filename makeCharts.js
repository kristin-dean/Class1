
var dataB = d3.csv("breast.csv");
var dataP = d3.csv("prostate.csv");

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

dataP.then(function(dataName)
{
  console.log("data",dataName);
  drawChart(dataName, "#prostate", "blue", "#prostateLabel");
  drawLegend(dataName, "#prostateLabel")
},
function(err)
{
  console.log(err);
});


//************************************** function to create charts ******************************************//

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
      { return height - d.Count/400;})
    .attr("width", barWidth - 4)
    .attr("height", function(d)
      { return d.Count/200;})
    .attr("fill", color);
  
  svg.selectAll("text")
   .data(colorData)
   .enter()
   .append("text")
   .text(function(d)
      { return d.Count;})
   .attr("x", function(d,i)
      { return i*barWidth + 31;})
   .attr("y", function(d)
      { return height - 20})
   .attr("fill", "black")
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("text-anchor", "middle");
};
  
var drawLegend = function(colorData, idname)
{
  var width = 125;
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
      { return 15;})
    .attr("y", function (d, i)
      { return (i+1)*15 + 10;})
    .attr("width", boxWidth)
    .attr("height", boxWidth-3)
    .attr("fill", "pink");

svg.selectAll("text")
   .data(colorData)
   .enter()  
   .append("text")
   .text(function(d) 
      { return d.Age;})
   .attr("x", function(d,i)
      { return 15})
   .attr("y", function(d,i)
      { return (i+1)*15 + 10;})
   .attr("fill", "black")
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
};
