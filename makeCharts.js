
var dataB = d3.csv("breast.csv");
var dataP = d3.csv("prostate.csv");

dataP.then(function(data)
{
  console.log("data",data);
},
function(err)
{
  console.log(err);
});

dataG.then(function(dataName)
{
  console.log("data",dataName);
},
function(err)
{
  console.log(err);
});


//************************************** function to create charts ******************************************//

