'use strict';

var yeoman = require('yeoman-generator');

var prompts = require('./prompts');
var writes = require('./writes');

module.exports = yeoman.generators.Base.extend({

  // Ask the user
  prompting: function () {
    prompts.apply(this);
  },

  // Write files
  writing: function() {
    writes.project.apply(this);
    writes.app.apply(this);
  },

  // Install dependencies
  install: function () {
    this.installDependencies();
  }
});
