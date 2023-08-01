// function init() {
// let selecter = d3.select("#selDataset");
d3.json("/get_data").then((data) => {
  console.log(data);
  let dropdown = document.getElementById("carMakeDropdown");

  // // Put hardcoded list here.
  // data.forEach((sample)=>{
  //     selecter.append("option").text(sample).property("value", sample);
  // });

  // Load and parse the CSV data using D3.js
  // d3.csv('your_csv_file.csv').then(data => {
  // let dropdown = document.getElementById('carMakeDropdown');

  // Helper function to filter unique car makes
  function getUniqueCarMakes(data) {
    let uniqueMakes = new Set();
    data.forEach((car) => uniqueMakes.add(car.Make));
    return Array.from(uniqueMakes);
  }

  // Get unique car makes
  let uniqueMakes = getUniqueCarMakes(data);

  // Populate the dropdown menu
  uniqueMakes.forEach((make) => {
    let option = document.createElement("option");
    option.text = make;
    option.value = make;
    //console.log(make)
    dropdown.appendChild(option);

  });

  function countCars(data)
  {
    let carCount ={};
    data.forEach(car=>{
      let makeModel=`${car.Make} ${car.Model}`;
      carCount[makeModel]=car.SalePrice//(carCount[makeModel]||0)+1;

    })
    return carCount;
  }
  // Count the number of each car in the dataset
  let carCountData = countCars(data);

  // Extract car makes and counts for plotting
  let makes = Object.keys(carCountData);
  let counts = Object.values(carCountData);

  // Create the Plotly bar chart
  let barChart = document.getElementById('barChart');
  let trace = {
    x: makes,
    y: counts,
    type: 'bar'
  };
  let layout = {
    title: 'Total Sales',
    xaxis: {
      title: 'Car Make and Model',
      tickangle: -45
    },
    yaxis: {
      title: 'Sum of Sales'
    }
  };
  Plotly.newPlot('bar', [trace], layout);

  

});
// Your existing code...

// Function to create and update the bubble chart
function createBubbleChart(data, selectedMake) {
  // Filter data based on the selected make
  let filteredData = data.filter(car => car.Make === selectedMake);

  // Calculate average sale price for each model
  let modelAvgPrice = {};
  filteredData.forEach(car => {
    let makeModel = `${car.Make} ${car.Model}`;
    if (!modelAvgPrice[makeModel]) {
      modelAvgPrice[makeModel] = {
        count: 0,
        totalSalePrice: 0
      };
    }
    modelAvgPrice[makeModel].count++;
    modelAvgPrice[makeModel].totalSalePrice += car["Sale Price"];
  });

  let makesModels = Object.keys(modelAvgPrice);
  let avgSalePrices = makesModels.map(makeModel => modelAvgPrice[makeModel].totalSalePrice / modelAvgPrice[makeModel].count);

  // Create the Plotly bubble chart
  let bubbleChart = document.getElementById('bubbleChart');
  let trace = {
    x: makesModels,
    y: avgSalePrices,
    mode: 'markers',
    marker: {
      size: avgSalePrices.map(price => Math.sqrt(price)), // Scaled bubble size based on sale price
      sizemode: 'area',
      sizeref: 0.01,
      sizemin: 5,
      color: avgSalePrices,
      colorscale: 'Viridis'
    },
    text: makesModels,
    hovertemplate: '<b>%{text}</b><br>Average Sale Price: $%{y:.2f}<extra></extra>',
  };
  let layout = {
    title: 'Average Sale Price by Model',
    xaxis: {
      title: 'Car Model',
      tickangle: -45
    },
    yaxis: {
      title: 'Average Sale Price ($)'
    }
  };
  Plotly.newPlot('bubbleChart', [trace], layout);
}

// Event listener for the dropdown selection
document.getElementById('carMakeDropdown').addEventListener('change', function () {
  let selectedMake = this.value;
  console.log(selectedMake)

  createBubbleChart(data, selectedMake);
});

// Your existing code...

//  }
 //init();
