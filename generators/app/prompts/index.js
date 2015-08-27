'use strict';

var yosay = require('yosay');
var chalk = require('chalk');

var prompts = require('./prompts');

module.exports = function() {

  var done = this.async();

  // Have Yeoman greet the user.
  this.log(yosay(
    'Welcome to the priceless ' + chalk.red('GeneratorSample') + ' generator!'
  ));

  this.prompt(prompts, function (props) {
    this.props = props;
    // To access props later use this.props.someOption;

    done();
  }.bind(this));

}
