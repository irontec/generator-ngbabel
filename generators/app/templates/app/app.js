'use strict';

// Load Angular and some utils
import angular from 'angular';
import registerModule from './helpers/registerModule.js';
angular.registerModule = registerModule.bind(angular);

// Load Modules
import userModule from './user/module';
angular.registerModule(userModule);

// Initialize the app
angular.module('<%= ngApp %>', [
    userModule.name
]);
