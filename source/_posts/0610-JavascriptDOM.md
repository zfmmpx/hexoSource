---
title: JavascriptDOM
comments: true
categories:
  - 前端
  - JavaScript基础
language:
  - zh-cn
date: 2018-06-10 13:08:27
updated: 2018-06-10 13:08:27
tags:
---
DOM 是Document Object Model( 文档对象模型 )的缩写。 
DOM是把html里面的各种数据当作对象进行操作的一种思路。 
比如一个超链，作为一个DOM对象，就可以使其隐藏，修改其href指向的地址。

# 节点概念
- DOM把所有的html都装换为节点
整个文档 是一个节点 
元素 是节点 
元素属性 是节点 
元素内容 是节点 
注释 也是节点
```html
<html>
<body>
	<div id="d1">hello HTML DOM</div>
</body>
<script>
	function l(s) {
		console.log(s);
	}
	var div1 = document.getElementById("d1");
	l("文档节点"); 
	l(document); // #document
	l("元素节点") 
	l(div1); // <div id="d1">hello HTML DOM</div>
	l("属性节点");
	l(div1.attributes[0]); // id="d1"
	l("内容节点");
	l(div1.childNodes[0]); // "hello HTML DOM"
</script>
</html>
```
# 获取节点
`document.getElementById("d1")`
`document.getElementsByTabName("div")`
`document.getElementsByClassName("d")`
`document.getElementsByName("userName")`
获取属性节点
`var  div1 = document.getElementById("d1");
var content = div1.childNodes[0];`
获取内容节点
`var  div1 = document.getElementById("d1");
var content = div1.childNodes[0];`
# 节点的属性
- 节点的节点属性nodeName表示一个节点的名字
div元素节点的节点名称:`div.nodeName` //DIV
- 节点的节点属性nodeValue表示一个节点的值
document.nodeValue 文档的节点值，是 null
div1.nodeValue 元素的节点值，是null
div1.attributes[0].nodeValue 属性的节点值，是对应的属性值 d1
div1.childNodes[0].nodeValue 内容的节点值，是内容 即： #text

- nodeType表示一个节点的类型
不同的节点类型，对应的节点类型值是不一样的
document.nodeType 文档的节点类型，是 9
div1.nodeType 元素的节点类型，是 1
div1.attributes[0].nodeType 属性的节点类型，是 2
div1.childNodes[0].nodeType 内容的节点类型，是 3
注释的节点类型是8

- 修改与获取内容的值可以通过 childNodes[0].nodeValue进行 
还有个简便办法就是通过innerHTML进行。 效果是一样的。

- 元素上的属性，比如id,value 可以通过 . 直接访问他们的值
如果是自定义属性，那么可以通过如下两种方式来获取

# 事件
```html
<script>
	function l(arg) {
		console.log(arg);
	}
	function g(id) {
		var element = document.getElementById(id);
		return element;
	}

	function loadImg() {
		message.innerHTML = "图片加载成功"
	}
	window.onload = function () {
		var moveTimes = 0;
		var overTimes = 0;
		var outTimes = 0;
		var message = g("message");
		var input1 = g("input1");
		var input2 = g("input2");
		var button1 = g("button1");
		var button2 = g("button2");
		var button3 = g("button3");
		var button4 = g("button4");
		var button5 = g("button5");
		var button6 = g("button6");
		var button7 = g("button7");
		var button8 = g("button8");
		var button9 = g("button9");
		var button10 = g("button10");
		var form1 = g("from1");
		var img1 = g("img1");
		// var body = document.getElementsByTagName("body");
		input1.onblur = function () {
			message.innerHTML = "输入框1失去了焦点";
		};
		input1.onfocus = function () {
			message.innerHTML = "输入框1获得了焦点"
		};
		button1.onmousedown = function () {
			message.innerHTML = "鼠标按下";
		};
		button1.onmouseup = function () {
			message.innerHTML = "鼠标弹起";
		};
		button2.onmousemove = function () {
			message.innerHTML = "鼠标移动次数: " + ++moveTimes;
		};
		button3.onmouseover = function () {
			message.innerHTML = "鼠标进入次数" + (++overTimes);
		};
		button4.onmouseout = function () {
			message.innerHTML = "鼠标离开次数" + ++outTimes;
		};
		button5.onkeydown = function () {
			message.innerHTML = "键盘按下down";
		};
		button6.onkeypress = function () {
			message.innerHTML = "键盘按下press";
		};
		button7.onkeyup = function () {
			message.innerHTML = "键盘弹起up";
		};
		button8.onclick = function () {
			message.innerHTML = "单击按钮";
		};
		input2.onchange = function () {
			message.innerHTML = "输入框2的值变成了: " + input2.value;
		};
		form1.onsubmit = function () {
			alert("提交表单");
		};
		img1.onload = function () {
			message.innerHTML = "图片加载成功"
		};
		button9.onclick = function() {
			message.innerHTML = "被点击的button是: " + this.innerHTML;
			console.log(this);
		}
		button10.onclick = function() {
			message.innerHTML = "被点击的button是: " + this.innerHTML;
			console.log(this);
		}
		button11.onclick = function() {
			message.innerHTML = "被点击的button是: " + this.innerHTML;
			console.log(this);
		}
	}
</script>

<body>
	<input type="text" id="input1" value="输入框1">
	<button id="button1">用于演示按下和弹起来</button>
	<button id="button2">用于演示鼠标经过</button>
	<button id="button3">用于经过鼠标进入</button>
	<button id="button4">用于经过鼠标退出</button>
	<p>记得要先用鼠标选择该组件,然后敲击键盘</p>
	<button id="button5">用于演示键盘按下keydown</button>
	<button id="button6">用于演示键盘按下keypress</button>
	<button id="button7">用于演示键盘弹起up</button>
	<p>注1: 在组件上，按下空格或则回车键也可以造成单击的效果，但是却不能造成双击的效果
		<br>注2: 自定义函数不要使用click()，这是保留函数名。</p>
	<button id="button8">用于演示单击和双击</button>
	<p>当组件的值发生变化的时候，会触发onchange事件
		<br>注：对于输入框而言，只有在失去焦点的时候，才会触发onchange，所以需要点击一下"按钮" 造成输入框失去焦点</p>
	<input type="text" id="input2" value="输入框2">
	<p>可以在form元素上，监听提交事件,当form元素@提交的时候，会触发onsubmit事件,本例使用 提交账号密码 来进行演示</p>
	<form action="/study/login.jsp" onsubmit="login()" id="from1">
		账号:
		<input type="text" name="name">
		<br> 密码:
		<input type="password" name="password">
		<br>
		<input type="submit" value="登录">
	</form>
	<img src="http://how2j.cn/example.gif" alt="" id="img1" onload="loadImg()">
	
	<button id="button9">演示this的按钮1</button>
	<button id="button10">演示this的按钮2</button>
	<button id="button11">演示this的按钮3</button>
	<div id="message"></div>
</body>
```

- 当前组件
```html
<input type="button" onclick="singleClick(this)" value="演示this的按钮1">
<input type="button" onclick="singleClick(this)" value="演示this的按钮2">
<br>
<br>
<div id="message"></div>
<script>
	function singleClick(button) {
		var s = "被点击的按钮上的文本是: " + button.value;
		document.getElementById("message").innerHTML = s;
	}
</script>
```

- 节点关系
childNodes和children都可以获取一个元素节点的子节点。 
childNodes 会包含文本节点 
children 会排除文本节点 