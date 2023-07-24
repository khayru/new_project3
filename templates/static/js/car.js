

let data1="localhost:3001/get_data"
d3.json(data1).then((data) => {
  console.log(data)
});
  // function(d){
  //   console.log(data)=>
  //   // document.getElementById("d3-write-here").innerHTML = d;
  // });

//  function myCar(vars){
//   return vars
//  }

  
// function metaTable(sample) {
//     //  git the url from api 
//     d3.json("http/localhost:5000/electric_cars").then((data) => {
//       console.log(data)
//       let metadata = data.metadata;
//       console.log(metadata);
//       let metaArry = metadata.filter(sampleObj => sampleObj.id == sample)
//       let metaResult = metaArry[0]
  
//       let metaTableData = d3.select("#sample-metadata")
//       metaTableData.html("")
//       for (key in metaResult) {
//         metaTableData.append('h6').text(`${key.toUpperCase()}: ${metaResult[key]}`)
//       }
//     })
//   }

// // get how many cars
// car.length;
// ///loob and print ou all the prices of cars
    
   
    