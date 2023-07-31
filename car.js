// function init() {
// let selecter = d3.select("#selDataset");
d3.csv("../../Resources/electric_car_data.csv").then((data) => {
  console.log(data);
  const dropdown = document.getElementById("carMakeDropdown");

  // // Put hardcoded list here.
  // data.forEach((sample)=>{
  //     selecter.append("option").text(sample).property("value", sample);
  // });

  // Load and parse the CSV data using D3.js
  // d3.csv('your_csv_file.csv').then(data => {
  // const dropdown = document.getElementById('carMakeDropdown');

  // Helper function to filter unique car makes
  function getUniqueCarMakes(data) {
    const uniqueMakes = new Set();
    data.forEach((car) => uniqueMakes.add(car.Make));
    return Array.from(uniqueMakes);
  }

  // Get unique car makes
  const uniqueMakes = getUniqueCarMakes(data);

  // Populate the dropdown menu
  uniqueMakes.forEach((make) => {
    const option = document.createElement("option");
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
      carCount[makeModel]=(carCount[makeModel]||0)+1;

    })
    return carCount;
  }
  // Count the number of each car in the dataset
  const carCountData = countCars(data);

  // Extract car makes and counts for plotting
  const makes = Object.keys(carCountData);
  const counts = Object.values(carCountData);

  // Create the Plotly bar chart
  const barChart = document.getElementById('barChart');
  const trace = {
    x: makes,
    y: counts,
    type: 'bar'
  };
  const layout = {
    title: 'Number of Cars by Make',
    xaxis: {
      title: 'Car Make and Model',
      tickangle: -45
    },
    yaxis: {
      title: 'Number of Cars'
    }
  };
  Plotly.newPlot('bar', [trace], layout);

  

});
// Your existing code...

// Function to create and update the bubble chart
function createBubbleChart(data, selectedMake) {
  // Filter data based on the selected make
  const filteredData = data.filter(car => car.Make === selectedMake);

  // Calculate average sale price for each model
  const modelAvgPrice = {};
  filteredData.forEach(car => {
    const makeModel = `${car.Make} ${car.Model}`;
    if (!modelAvgPrice[makeModel]) {
      modelAvgPrice[makeModel] = {
        count: 0,
        totalSalePrice: 0
      };
    }
    modelAvgPrice[makeModel].count++;
    modelAvgPrice[makeModel].totalSalePrice += car["Sale Price"];
  });

  const makesModels = Object.keys(modelAvgPrice);
  const avgSalePrices = makesModels.map(makeModel => modelAvgPrice[makeModel].totalSalePrice / modelAvgPrice[makeModel].count);

  // Create the Plotly bubble chart
  const bubbleChart = document.getElementById('bubbleChart');
  const trace = {
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
  const layout = {
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
  const selectedMake = this.value;
  createBubbleChart(data, selectedMake);
});

// Your existing code...

//  }
// init();
