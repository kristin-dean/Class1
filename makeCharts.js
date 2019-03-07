
var dataB = d3.csv("breast.csv");
var dataP = d3.csv("prostate.csv");

dataB.then(function(data)
{
  console.log("data",data);
},
function(err)
{
  console.log(err);
});

dataP.then(function(dataName)
{
  console.log("data",dataName);
},
function(err)
{
  console.log(err);
});


//************************************** function to create charts ******************************************//

