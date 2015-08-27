'use strict';

var yosay = require('yosay');
var chalk = require('chalk');

module.exports = function() {

  var done = this.async();

  // Have Yeoman greet the user.
  this.log(yosay(
    'Welcome to the priceless ' + chalk.red('GeneratorSample') + ' generator!'
  ));

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.props = props;
    // To access props later use this.props.someOption;

    done();
  }.bind(this));

}
