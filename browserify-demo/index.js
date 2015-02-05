var shouter = require('./shouter');
var name = 'Sana';
var str = "Hello world, ${name}";


console.log(shouter(str));
// console.log(process.env.NODE_ENV); // THIS IS THE WAY OF PASSING ENVIRONMENT (ENV) VARIABLES

if (process.env.NODE_ENV === 'development') {
  console.log('debug info', process.env.NODE_ENV);
}