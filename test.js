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
    // 第一种是最简单的，使用call或apply方法，将父对象的构造函数绑定在子对象上，即在子对象构造函数上加上这一行
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物

// 缺点：不能继承原型上的属性和方法；
// 一、构造函数绑定



// 二、prototype模式，
// 如果“猫”的prototype对象，指向一个Animal的实例，那么所有“猫”的实例，就能继承Animal了。
// 代码的第一行，我们将Cat的prototype对象指向一个Animal实例
Cat.prototype = new Animal();
// 它相当于完全删除了Cat.prototype对象原先的值(Object.prototype)，然后赋予了一个新值。但是，第二行又是什么意思呢
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物

console.log(Cat.prototype.constructor == Animal); // false
console.log(Cat.prototype.constructor == Cat); // true
// 注意：
o.prototype = {}; // 编程时务必遵守，如果替换了prototype对象：
o.prototype.constructor = o; // 那么下一步必然是为新的prototype对象加上constructor属性，并将这个属性手动指回原来的构造函数
// 缺点：如果子对象的prototype对象上有属性或方法时，将被删除
// 二、prototype模式，



// 三、直接继承prototype
// 第三种方法是对第二种方法的改进，
// 首先对Animal对象改写
function Animal(){ }
Animal.prototype.species = "动物";
// 然后将Cat的prototype对象，指向Animal的prototype对象，这样就完成了继承
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species);
// 优点：相比第二种效率更高，比较省内存
// 缺点：Cat.prototype = Animal.prototype; 这句实际上将Cat.prototype和Animal.prototype这两个对象指向了同一个对象（在内存上的地址），
// 然后，Cat.prototype.constructor = Cat;这句实际上把Animal.prototype对象的constructor属性也改掉了！
console.log(Animal.prototype.constructor); // Cat
// 三、直接继承prototype



// 四、利用空对象作为中介
// 由于“直接继承prototype”存在上述的缺点，所以就有了第四种方法，利用一个空对象作为中介
var F = function(){};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species);
// F是空对象，所以几乎不占内存。这时，修复Cat的prototype对象，就不会影响到Animal的prototype对象。
console.log(Animal.prototype.constructor); // Cat

// 四、利用空对象作为中介




