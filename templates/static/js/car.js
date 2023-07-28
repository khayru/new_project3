//let car_data = data;
//volovo
let data1= "http://127.0.0.1:5000/get_car_data"
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
//NISSAN
let dataN= "http://127.0.0.1:5000/get_data"
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

//Tesla
let tesla= "http://127.0.0.1:5000/get_car_car"
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
///JEEP
let data= "http://127.0.0.1:5000/get_car"
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

// car_type
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




    
   
    
