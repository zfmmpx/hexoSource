---
title: JavaScript语言基础
comments: true
categories:
  - 前端
  - JavaScript基础
language:
  - zh-cn
date: 2018-06-06 04:04:54
updated: 2018-06-06 04:04:54
tags:
---
- 完整的javascript 由语言基础, BOM和DOM组成
- BOM即浏览器对象模型(Browser Object Model)
  - 浏览器对象包括
    - Window(窗口)
    - Screen(客户端屏幕)
    - History(访问历史)
    - Location(浏览器地址)
- DOM 是Document Object Model( 文档对象模型 )的缩写。 
DOM是把html里面的各种数据当作对象进行操作的一种思路。 
比如一个超链，作为一个DOM对象，就可以使其隐藏，修改其href指向的地址。

- 基本数据类型 underfined Boolean Number String null
- 与java不同的是，javascript中没有字符的概念，只有字符串，所以单引号和双引号，都用来表示字符串。
- 变量的类型是动态的，当值是整数的时候，就是Number类型，当值是字符串的时候，就是String类型
- 用`typeof a`来查看a变量的类型
- null表示一个对象不存在
- javascript是一门很有意思的语言，即便是基本类型，也是伪对象，所以他们都有属性和方法。变量a的类型是字符串，通过调用其为伪对象的属性length获取其长度
- 无论是Number,Boolean还是String都有一个**toString**方法，用于转换为字符串
- javascript分别提供内置函数 **parseInt()**和**parseFloat()**，转换为数字
- 使用内置函数Boolean() 转换为Boolean值
  当转换字符串时：
  非空即为true
  当转换数字时：
  非0即为true
  当转换对象时：
  非null即为true
  - 总结: null 0 "" undefined false 为false,其他为true
- Number()和parseInt()一样，都可以用来进行数字的转换
区别在于，当转换的内容包含非数字的时候，Number() 会返回NaN(Not a Number)
parseInt() 要看情况，如果以数字开头，就会返回开头的合法数字部分，如果以非数字开头，则返回NaN
- \+运算符 具备多态特征 
当两边都是数字的时候 ，表现为算数运算符 
当任意一边是字符串的时候，表现为字符串连接符

