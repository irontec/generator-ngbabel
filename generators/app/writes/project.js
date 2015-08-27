'use strict';

module.exports = function(){

  this.fs.copy(
    this.templatePath('editorconfig'),
    this.destinationPath('.editorconfig')
  );

  this.fs.copy(
    this.templatePath('jshintrc'),
    this.destinationPath('.jshintrc')
  );
};
