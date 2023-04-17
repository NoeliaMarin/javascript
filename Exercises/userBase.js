const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

class UserBase {
    constructor(users) {
        this.users = users;
    };

    count() {
        return this.users.length;
    };

    getNames() {
        return this.users.map(user => user.getName());
    };

    getIntroductions() {
        return this.users.map(user => user.getIntroduction());
    };
};

module.exports = UserBase;

// const UserBase = require('./userBase');

// const userBase = new UserBase(users);

// userBase.count();
// 3

// userBase.getNames();
// [ 'Uma', 'Josh', 'Ollie' ]

// userBase.getIntroductions();
// [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
//   'Hi, my name is Ollie'
// ]



//  const User = require('./user');
//  const UserBase = require('./userBase');
//  const users = [
//     new User('Uma'),
//     new User('Josh'),
//     new User('Ollie')
//   ];
//   const userBase = new UserBase(users);
