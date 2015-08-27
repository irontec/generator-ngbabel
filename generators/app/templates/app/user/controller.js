'use strict';

class UserController {
  constructor(UserService) {
      this.userSvc = UserService;
      this.init();
  }

  init(){
    this.userSvc
    .getUsers()
    .success(users => {
        console.log('Got Users!', users);
        this.users = users;
    })
    .error(err => {
        console.log('Got Error!', err);
    });

  }
}

UserController.$inject = ['UserService'];

export { UserController };
