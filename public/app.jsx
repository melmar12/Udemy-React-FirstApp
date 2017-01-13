var React = require('react');
var ReactDOM = require('react-dom');
//var GreeterMessage = require('./components/GreeterMessage');
//var GreeterForm = require('./components/GreeterForm');
var Greeter = require('Greeter');



var firstName = 'Melissa';
var message = 'Hello hey um hi how are you';
ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
