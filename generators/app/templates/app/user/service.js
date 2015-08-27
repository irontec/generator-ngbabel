'use strict';

class UserService {
  constructor($http){
    this.$http = $http;
  }

  getUsers(){
    return this.$http.get('https://api.github.com/users');
  }

  static factory($http){
    return new UserService($http);
  }
};

UserService.factory.$inject = ['$http'];

export { UserService };
