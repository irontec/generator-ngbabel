'use strict';

function writePackageFiles() {

  this.fs.copyTpl(
    this.templatePath('project/_package.json'),
    this.destinationPath('package.json'),
    {
      packageName: this.props.projectName.dasherized,
      packageDescription: this.props.projectDescription,
      username: this.props.username
    }
  );

}

function writeProjectTasks() {

    this.fs.copy(
        this.templatePath('project/_gulpfile.js'),
        this.destinationPath('gulpfile.js')
    );

}

function writeProjectDefaults() {

  this.fs.copyTpl(
    this.templatePath('project/readme.md'),
    this.destinationPath('README.md'),
    {
      projectName: this.props.projectName.original
    }
  );

  this.fs.copy(
    this.templatePath('project/readme.md'),
    this.destinationPath('README.md')
  );

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
