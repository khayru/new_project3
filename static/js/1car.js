
//let car_data = data;
//Nissan total sale price year 2022


let data1= "http://127.0.0.1:5000/get_data"
d3.json(data1).then((data) => {
console.log(data)
var bar_data = [{
  type: 'bar',
  x: [20, 14, 23, 25],
  y: ['NISSAN', 'JEEP', 'VOLVO','TESLA'],
  orientation: 'h'
}];

Plotly.newPlot('bar', bar_data);

});
//Jeep total sale price 2022
let dataN= "http://127.0.0.1:5000/get_car"
d3.json(dataN).then((data) => {
console.log(data)
var bar_data = [{
  type: 'bar',
  x: [20, 14, 23, 25],
  y: ['NISSAN', 'JEEP', 'VOLVO','TESLA'],
  orientation: 'h'
}];

Plotly.newPlot('bar', bar_data);

});

//Volovo total sale price 2022
let tesla= "http://127.0.0.1:5000/get_car_data"
d3.json(tesla).then((data) => {
console.log(data)
var bar_data = [{
  type: 'bar',
  x: [20, 14, 23, 25],
  y: ['NISSAN', 'JEEP', 'VOLVO','TESLA'],
  orientation: 'h'
}];

Plotly.newPlot('bar', bar_data);

});
///Tesla total sale price
let data= "http://127.0.0.1:5000/get_car_car"
d3.json(data).then((data) => {
console.log(data)
var bar_data = [{
  type: 'bar',
  x: [20, 14, 23, 25],
  y: ['NISSAN', 'JEEP', 'VOLVO','TESLA'],
  orientation: 'h'
}];

Plotly.newPlot('bar', bar_data);

});

// type of car Tesla,city  made year 22
let dataType= "http://127.0.0.1:5000/get_car_type"
d3.json(dataType).then((data) => {
console.log(data)
var bar_data = [{
  type: 'bar',
  x: [20, 14, 23, 25],
  y: ['NISSAN', 'JEEP', 'VOLVO','TESLA'],
  orientation: 'h'
}];

Plotly.newPlot('bar', bar_data);

});

/// get car Volvo by year 22
let dataYear= "http://127.0.0.1:5000/get_car_year"
d3.json(dataYear).then((data) => {
console.log(data)
var bar_data = [{
  type: 'bar',
  x: [20, 14, 23, 25],
  y: ['NISSAN', 'JEEP', 'VOLVO','TESLA'],
  orientation: 'h'
}];

Plotly.newPlot('bar', bar_data);

});

///// get car by year jeep 22
let data_Year_data= "http://127.0.0.1:5000/get_car_year_data"
d3.json(data_Year_data).then((data) => {
console.log(data)
var bar_data = [{
  type: 'bar',
  x: [20, 14, 23, 25],
  y: ['NISSAN', 'JEEP', 'VOLVO','TESLA'],
  orientation: 'h'
}];

Plotly.newPlot('bar', bar_data);

});

//// 

///// get car by year Nissan  22
let data_data= "http://127.0.0.1:5000/car_year_data"
d3.json(data_data).then((data) => {
console.log(data)
var bar_data = [{
  type: 'bar',
  x: [20, 14, 23, 25],
  y: ['NISSAN', 'JEEP', 'VOLVO','TESLA'],
  orientation: 'h'
}];

Plotly.newPlot('bar', bar_data);

});


///// get car by year Nissan  22
let allData= "http://127.0.0.1:5000/all_data"
d3.json(allData).then((data) => {
console.log(data)
var bar_data = [{
  type: 'bar',
  x: [20, 14, 23, 25],
  y: ['NISSAN', 'JEEP', 'VOLVO','TESLA'],
  orientation: 'h'
}];

Plotly.newPlot('bar', bar_data);

});