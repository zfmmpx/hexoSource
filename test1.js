// 现在有一个“动物”对象的构造函数
function Animal() {
    this.species = "动物";
}

// 还有一个“猫”对象的构造函数
function Cat(name, color){
    this.name = name;
    this.color = color;
}


// 怎样才能使“猫”继承“动物”呢？



// 一、构造函数绑定
function Cat(name, color){
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物
// 一、构造函数绑定



// 二、prototype模式，
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物
// 二、prototype模式，



// 三、直接继承prototype
function Animal(){ }
Animal.prototype.species = "动物";
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species);
// 三、直接继承prototype



// 四、利用空对象作为中介
function Animal(){ }
Animal.prototype.species = "动物";
var F = function(){};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species);
// 四、利用空对象作为中介






// 比如，现在有一个对象，叫做"中国人"。
var Chinese = {
    nation:'中国'
  };
  var Doctor ={
    career:'医生'
  }
  // 这里要注意，这两个对象都是普通对象，不是构造函数，无法使用构造函数方法实现"继承"。
  

　　function object(o) {

    　　　　function F() {}
    
    　　　　F.prototype = o;
    
    　　　　return new F();
    
    　　}