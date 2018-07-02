function Cat(name, color) {
    this.name = name;
    this.color = color;
  }
  var cat1 = new Cat("大毛", "黄色");
  var cat2 = new Cat("二毛", "黑色");

  console.log(Cat.prototype.isPrototypeOf(cat1));
  console.log(Function.prototype.isPrototypeOf(cat1));
  console.log(Object.prototype.isPrototypeOf(cat1));
