'use strict';

function writePackageFiles() {

  this.fs.copy(
    this.templatePath('project/_package.json'),
    this.destinationPath('package.json')
  );

}

function writeProjectTasks() {

    this.fs.copy(
        this.templatePath('project/_gulpfile.js'),
        this.destinationPath('gulpfile.js')
    );

}

function writeProjectDefaults() {

  this.fs.copy(
    this.templatePath('project/editorconfig'),
    this.destinationPath('.editorconfig')
  );

  this.fs.copy(
    this.templatePath('project/jshintrc'),
    this.destinationPath('.jshintrc')
  );

}

module.exports = function(){

  writeProjectDefaults.apply(this);
  writePackageFiles.apply(this);
  writeProjectTasks.apply(this);

};
