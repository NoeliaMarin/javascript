class Rectangle {

    constructor(height, width) {
      this.height = height;
      this.width = width;
    };
  
    getArea() {
      return this.height * this.width;
    }
  };
  
module.exports = Rectangle;


// const Rectangle = require('./rectangle');

// const rect = new Rectangle(4, 10);

// rect.getArea(); 
// 40