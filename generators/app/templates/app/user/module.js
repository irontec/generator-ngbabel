'use strict';

import { UserController } from './controller';
import { UserService } from './service';

let components = [
    {
        type: 'factory',
        name: 'UserService',
        fn: UserService.factory
    },
    {
        type: 'controller',
        name: 'UserController',
        fn: UserController
    }
]


class UserModule {
    constructor(components) {
        if (!this instanceof UserModule) {
            return new UserModule(components);
        }

        this.name = '<%= ngApp %>.users';
        this.components = components;
    }

    init(angular) {
        console.log(this.name);
        angular.module(this.name, []);
    }

    register(angular) {
        console.log('Registering', this.components);
        this.init(angular);

        this.components.forEach(function(component) {
            angular.module(this.name)
            [component.type](component.name, component.fn);
        }.bind(this));
    }
}

let userModule = new UserModule(components);

export default userModule;
