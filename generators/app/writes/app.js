'use strict';

module.exports = function() {

  this.fs.copy(
    this.templatePath('_package.json'),
    this.destinationPath('package.json')
  );

  this.fs.copy(
    this.templatePath('_bower.json'),
    this.destinationPath('bower.json')
  );
}
