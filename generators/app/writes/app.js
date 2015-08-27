'use strict';

function writeApplicationConfig() {

  this.fs.copy(
    this.templatePath('_config.js'),
    this.destinationPath('config.js')
  );

}

function writeApplicationFiles() {

  this.fs.copy(
    this.templatePath('_index.html'),
    this.destinationPath('index.html')
  );

  this.fs.copy(
    this.templatePath('app/app.js'),
    this.destinationPath('app/app.js')
  );

  this.fs.copy(
    this.templatePath('app/helpers/registerModule.js'),
    this.destinationPath('app/helpers/registerModule.js')
  );

}

function writeUserModule() {

  this.fs.copy(
    this.templatePath('app/user/module.js'),
    this.destinationPath('app/user/module.js')
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
