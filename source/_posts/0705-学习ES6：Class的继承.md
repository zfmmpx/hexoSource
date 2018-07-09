---
title: 学习ES6：Class的继承
comments: true
categories:
  - 前端
  - ES6
tags:
  - 我的笔记
language:
  - zh-cn
date: 2018-07-05 09:31:31
updated: 2018-07-05 09:31:31
---

super既可当做函数调用，又可当做对象使用


一、super作为函数调用时，代表父类的构造函数，
```js
class A{}

class B extends A {
  constructor() {
    super();
  }
}
```
虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，这里的super()相当于`A.prototype.constructor.call(this)`。
而且作为函数时，只能用在子类的构造函数之中，用在其他地方就会报错。

二、super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
ES6 规定，在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。
```js
class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    super.print();
  }
}

let b = new B();
b.m() // 2
```
上面代码中，super.print()虽然调用的是A.prototype.print()，但是A.prototype.print()内部的this指向子类B的实例，导致输出的是2，而不是1。也就是说，实际上执行的是super.print.call(this)。

三、如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有constructor方法。
```js
class ColorPoint extends Point {
}

// 等同于
class ColorPoint extends Point {
  constructor(...args) {
    super(...args);
  }
}
```