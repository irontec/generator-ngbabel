'use strict';

function writeApplicationConfig() {

  this.fs.copy(
    this.templatePath('_config.js'),
    this.destinationPath('config.js')
  );

}

function writeApplicationFiles() {

  this.fs.copyTpl(
    this.templatePath('_index.html'),
    this.destinationPath('index.html'),
    {
      title: this.props.projectName.original,
      ngApp: this.props.projectName.camelized
    }
  );

  this.fs.copyTpl(
    this.templatePath('app/app.js'),
    this.destinationPath('app/app.js'),
    {
      ngApp: this.props.projectName.camelized
    }
  );

  this.fs.copy(
    this.templatePath('app/helpers/registerModule.js'),
    this.destinationPath('app/helpers/registerModule.js')
  );

}

function writeUserModule() {

  this.fs.copyTpl(
    this.templatePath('app/user/module.js'),
    this.destinationPath('app/user/module.js'),
    {
      ngApp: this.props.projectName.camelized
    }
  );

  this.fs.copy(
    this.templatePath('app/user/controller.js'),
    this.destinationPath('app/user/controller.js')
  );

  this.fs.copy(
    this.templatePath('app/user/service.js'),
    this.destinationPath('app/user/service.js')
  );

}

module.exports = function() {

  writeApplicationConfig.apply(this);
  writeApplicationFiles.apply(this);
  writeUserModule.apply(this);

}
