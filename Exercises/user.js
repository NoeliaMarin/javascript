class User {

    constructor(name) {
        this.name = name;
    };

    getName() {
        return this.name;
    };

    getIntroduction() {
        return 'Hi, my name is ' + this.name;
    //  return `Hi, my name is ${this.name}`;
    };
};

module.exports = User;


// const User = require('./user');

// const user = new User('Uma');

// user.getName(); 
// 'Uma'

// user.getIntroduction();
// 'Hi, my name is Uma'