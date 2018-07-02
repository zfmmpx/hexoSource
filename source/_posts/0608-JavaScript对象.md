---
title: JavaScript对象
comments: true
categories:
  - 前端
  - JavaScript基础
language:
  - zh-cn
date: 2018-06-08 19:23:11
updated: 2018-06-08 19:23:11
tags:
---
# 数字
- 通过`new Number()`创建一个数字对象
- 与基本类型的数字,对象类型的数字,拥有跟多的属性和方法
- Number对象的最小值:5e-324
Number对象的最大值:1.7976931348623157e+308
- `var a = new Number("123abc")`
通过非数字字符串'123abc'创建出来的Number对象a的值是: NaN
但是, `a ==Number.NaN`会返回:false
正确判断是否是NaN的方式是调用isNaN函数`isNaN(a)`: true
- ```javascript
var a = new Number("12345.6789");
a.toFixed(2) // 12345.68
a.toExponential(2) // 1.23e+4

// 方法 valueOf() 返回一个基本类型的数字 
typeof a.valueOf() //number
```

# 字符串
- 与数字类似，基本类型String也有一个对应的String 对象，并且提供了很多有用的方法。
- 通过`new String()`创建一个数字对象
```javascript
	function w(args) {
		document.write(args + "</br>")
	}

	var x = new String("Hello JavaScript");
	w(x.length); // 16
	w(x.charAt(0)); // H
	w(x.charCodeAt(0)); //72

	// concat用于进行字符串拼接
	var y = new String("你好");
	w(x.concat(y)); // 你好Hello JavaScript

	// indexOf 返回子字符串第一次出现的位置 lastIndexOf 返回子字符串最后一次出现的位置
	w(x.indexOf("a")); // 7
	w(x.lastIndexOf("a")); // 9

	// localeCompare 比较两段字符串是否相同，0即表示相同，非0表示不同
	var a = "Eello JavaScript";
	var b = "Hello JavaScript";
	var c = "Iello JavaScript";
	w(x.localeCompare(a)); //1 表示字母顺序靠后
	w(x.localeCompare(b)); // 0 表示相同
	w(x.localeCompare(c)); // -1 表示字母顺序靠前

	// substring 截取一段字符串[) ,第二个参数取不到
	w(x.substring(0, 3));

	// split 根据分隔符，把字符串转换为数组。 注： 第二个参数可选，表示返回数组得长度
	var d = "Hello This Is JavaScript";
	console.log(d.split(" "));// ["Hello", "This", "Is", "JavaScript"]
	console.log(d.split(" ", 2));// ["Hello", "This"]

	// 替换字符串
	w(x.replace(/a/g, "O")); // Hello JOvOScript
	// 或者
	var regS = new RegExp("a", "g");
	w(x.replace(regS, "O")); // Hello JOvOScript

	// 返回基本类型,需要注意的是,所有返回字符串类型的方法,返回的都是基本类型的String
	var temp = x.charAt(0);
	w(temp); // charAt返回的值: H
	w(typeof temp); // string
	w(typeof x); // object

	var temp = x.concat("!!!");
	w(temp)	// Hello JavaScript!!!
	w(typeof temp); // string

	var temp = x.substring(0, 5);
	w(temp); // Hello
	w(typeof temp); //string
```

# 数组
- 通过`var x = new Array(5)`创建长度为5的数组, 但其中每个元素都是undefined
```javascript
function w(args) {
	document.write(args);
	document.write("</br>");
}
function l(args) {
	console.log(args);
}
var x = new Array(5);
l(x); // [empty * 5]

// 根据参数创建数组
var y = new Array(1, 2, 3, "4", 5); // 姑且认为这种方法和 var y = [1, 2, 3, "4", 5] 是一样的
l(y[4]);
l(y[3]);
l(y); // [5, 1, 2, 3, 4]

// 属性length获取一个数组的长度
l(y.length); // 5 在chrome的console里面,数字是蓝色,字符串是黑色

// 用for in循环或者for循环遍历数组
for (abc in y) {
	l(y[abc]);
}

// 方法concat连接两个数组
var a = new Array(2, 3, 5);
var b = new Array(7, 9, 8);
l(a.concat(b)); // [2,3,5,7,9,8]
l(a); // [2,3,5]
l(b); // [7,9,8]

// 通过指定的分隔符,返回一个数组的字符串表达:join方法
l('--------------------------')
l(a.join("哈哈")); // 2哈哈3哈哈5
l(typeof join); // strint
var c = [1, 3, 2];

// 方法push pop分别在最后的位置插入数据和获取数据(获取后删除)
// 就像先入后出的栈一样
l("====================")
l(y) // [1,2,3,"4",5]
l(y.push("你好")); // 6
l(y); // [1,2,3,"4",5,"你好"]
l(y.pop()); // 你好
l(y); // [1, 2, 3, "4", 5]

// 方法unshift shift 分别在最开始的位置插入数据和获取数据(获取后删除)
l('--------------------------')
l(y.unshift("你好")); // 6
l(y) // ["你好", 1, 2, 3, "4", 5]
l(y.shift());
l(y) // [1, 2, 3, "4", 5]

// 方法sort对数组的内容进行排序
l("====================")
var newArr = new Array(1, 5, 2, 6, 3, 2, 7, 9, 11);
l(newArr.sort()); // [1, 11, 2, 2, 3, 5, 6, 7, 9]
l(newArr); // [1, 11, 2, 2, 3, 5, 6, 7, 9]

l('sort()默认采用正排序，即小的数排在前面。 如果需要采用自定义排序的算法，就把比较器函数作为参数传递给sort()')
function comparator(v1, v2) {
	return v2 - v1;
}

l(newArr.sort(comparator)); // [11, 9, 7, 6, 5, 3, 2, 2, 1]
l(newArr) // [11, 9, 7, 6, 5, 3, 2, 2, 1]

l('方法reverse,对数组内容进行反转 ')
var aa = new Array(3, 1, 4, 1, 5, 9, 2, 6);
l(aa) // [3, 1, 4, 1, 5, 9, 2, 6]
l(aa.reverse()); // [6, 2, 9, 5, 1, 4, 1, 3]
l(aa); // [6, 2, 9, 5, 1, 4, 1, 3]

l("方法slice获取子数组, 注意:第二个参数取不到")
l('++++++++++++++++++++++++++++++++++++')
l(aa.slice(1, 3)); // [2, 9]
l(aa); // [6, 2, 9, 5, 1, 4, 1, 3]

l("方法splice(start, length)删除和插入元素")
l(y); // [1, 2, 3, "4", 5]
l(y.splice(3, 2)) // ["4", 5]
l(y); // [1, 2, 3]
l(y.push("4", 5)); // 5
l(y); // [1, 2, 3, "4", 5]
l(y.splice(3, 0, "新人", "新人二")) // []
l(y); // [1, 2, 3, "新人", "新人二", "4", 5]
l(y.splice(3, 2)) // [1, 2, 3, "新人", "新人二", "4", 5]
```

# 日期
```javascript
	function w(args) {
		document.write(args);
		document.write("</br>");
	}
	var d = new Date();
	w(d.getMonth() + 1); // 6(月份是基0)
	w(d.getFullYear()); // 2018
	w(d.getDate()); // 9
	w(d.getHours()); // 16
	w(d.getMinutes()); // 47
	w(d.getSeconds()); // 21
	w(d.getMilliseconds()); // 657

	var day = new Date().getDay(); // 6 基0
	var weeks = new Array("星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	w(weeks[day]); // 星期六

	// 获取从1970/1/1 08:00:00 至今的毫秒数
	var time = new Date().getTime();
	w(time); // 1528534354715

	// 修改日期和时间
	var d = new Date();
	document.write("修改日期对象的值为世界末日: <br>");
	d.setFullYear(2012);
	d.setMonth(11);
	d.setDate(12);

	d.setHours(0);
	d.setMinutes(0);
	d.setSeconds(0);
	w(d); // Wed Dec 12 2012 00:00:00 GMT+0800 (CST)
```

# Math
```JavaScript
	function w(arg) {
		document.write(arg);
		document.write('<br>');
	}

	w(Math.E); // 2.718281828459045
	w(Math.PI); // 3.141592653589793
	w(Math.abs(-1)); // 1
	w(Math.max(-111, 100)); // 100
	w(Math.min(-111, 100)); // -111
	w(Math.pow(3, 3)) // 27

	// 四舍五入
	w(Math.round(3.4)); // 3
	w(Math.round(3.5)); // 4

	// 随机数
	w(Math.random()) // 0-1之间的随机数
	w(Math.random() * 5 + 5) // 5-10之间的随机数
	w(Math.round(Math.random() * 5 + 5)) // 5-10之间的整数(5,10都可以取到)
```

# 自定义对象
```javascript
	function w(arg) {
		document.write(arg);
		document.write('<br>');
	}

	// 通过new Object()创建一个对象
	var hero = new Object();
	hero.name = "盖伦";

	hero.kill = function () {
		w(hero.name + "正在杀敌");
	}

	hero.kill();

	// 通过new Object创建对象有个问题，就是每创建一个对象，都得重新定义属性和函数。这样代码的重用性不好
	// 那么，采用另一种方式，通过function设计一种对象。 然后实例化它 。
	// 这种思路很像Java里的设计一种类，但是 javascript没有类，只有对象，所以我们叫设计一种对象
	function Hero(name) {
		this.name = name;
		this.kill = function () {
			w(this.name + "正在杀敌");
		}
	}

	var gareen = new Hero("盖伦");
	gareen.kill();

	var teemo = new Hero("提莫");
	teemo.kill();

	// 现在Hero对象已经设计好了，但是我们发现需要追加一个新的方法keng(),那么就需要通过prototype实现这一点
	Hero.prototype.keng = function(){
		w(this.name + "正在坑队友");
	}

	gareen.keng();
```