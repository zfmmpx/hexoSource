---
title: JavascriptBOM
comments: true
categories:
  - 前端
  - JavaScript基础
language:
  - zh-cn
date: 2018-06-09 18:19:15
updated: 2018-06-09 18:19:15
tags:
---
# BOM
BOM即 浏览器对象模型(Brower Object Model) 

浏览器对象包括 
Window(窗口) 
Navigator(浏览器) 
Screen (客户端屏幕) 
History(访问历史) 
Location(浏览器地址) 

本章节从 Window(窗口)开始讲起

# window
- 一旦页面加载,就会自动创建window对象, 所以无需手动创建window对象
通过window对象可以获取文档显示区域的高度和宽度
```javascript
	function w(arg) {
		document.write(arg);
		document.write("<br>");
	}

	// 获取文档像是区域的高度和宽度
	w(window.innerHeight); // 1275
	w(window.innerWidth); // 2560

	// 获取外部窗体的宽度和高度(意思是整个chrome的宽高)
	w(window.outerHeight); // 1417
	w(window.outerWidth); // 2560

	// 打开一个新的网页
	// 不建议使用，如果需要打开一个新的网站，应该通过超级链接等方式让用户主动打开
	// 在没有告知用户的前提下就打开一个新的网站会影响用户的体验
	function openNewWindow() {
		myWindow = window.open("/");
	}
```

# navigator
- Navigator即浏览器对象，提供浏览器相关的信息
```javascript
	function w(args) {
		document.write(args);
		document.write("<br>");
	}

	document.write("浏览器产品名称：");
	w(navigator.appName);
	document.write("浏览器版本号：");
	w(navigator.appVersion);
	document.write("浏览器内部代码：");
	w(navigator.appCodeName);
	document.write("操作系统：");
	w(navigator.platform)
	document.write("是否启用Cookies：");
	w(navigator.cookieEnabled);
	document.write("浏览器的用户代理报头：");
	w(navigator.userAgent);
```

# screen
- Screen对象表示用户的屏幕相关信息
```javascript
	function w(args) {
		document.write(args);
		document.write("<br>");
	}

	w("用户的屏幕分辨率: ");
	w(screen.width + "*" + screen.height); // 2560*1440
	w("可用区域大小: ");
	w(screen.availWidth + "*" + screen.availHeight); // 2560*1417
```

# history
- History用于记录访问历史
```javascript
	function w(arg){
		document.write(arg);
		document.write("<br>");
	}
	
	// 返回上上次的访问
	function goBack(){
		history.go(-2); // -1表示上次,-2表示上上次,以此类推
	}
```

# location
- Location表示浏览器中的地址栏
```html
<script>
	function w(arg) {
		document.write(arg);
		document.write("<br>");
		document.write("<br>");
	}

	var date = new Date();
	w(date);

	function refresh() {
		location.reload()
	}

	function jump() {
		// location = "/";
		// 方法二
		location.assign("/");
	}

	w("协议 location.protocol: " + "<br>" + location.protocol);
	w("主机名 location.hostname: " + "<br>" + location.hostname);
	w("端口号 (默认是80，没有即表示80端口)location.port:" + "<br>" + location.port);

	w("主机加端口号 location.host:" + "<br>" + location.host);
	w("访问的路径  location.pathname:" + "<br>" + location.pathname);

	w("锚点 location.hash:" + "<br>" + location.hash);
	w("参数列表 location.search" + "<br>" + location.search);
</script>
<button onclick="refresh()">刷新</button>
<button onclick="jump()">跳转到另一个页面</button>
```

# 弹出框
浏览器上常见的弹出框有 
警告框，确认框，提示框 这些都是通过调用window的方法实现的。 
比如警告框用的是window.alert("警告内容")，因为很常用，所以就把window省略掉，直接使用alert
```html
<script>
	function register() {
		window.alert("注册成功");
	}

	function del() {
		var d = confirm("是否要删除");
		alert(typeof d + " " + d);
	}

	// 输入框 prompt，用于弹出一个输入框，供用户输入相关信息。 
	// 因为弹出的界面并不好看，很有可能和网站的风格不一致，所以很少会在实际工作中用到。
	function prom() {
		var name = prompt("请输入用户名:");
		alert("您输入的用户名是: " + name)
	}
</script>
<button onclick="register()">注册</button>
<button onclick="del()">删除</button>
<button onclick="prom()">prompt</button>
```

# 计时器
- 不要在setInterval调用的函数中使用document.write();
注：部分浏览器，比如firefox有这个问题，其他浏览器没这个问题。
假设setInterval调用的函数是printTime, 在printTime中调用document.write();
只能看到一次打印时间的效果。
这是因为document.write，会创建一个新的文档，而新的文档里，只有打印出来的时间字符串，并没有setInterval这些javascript调用，所以只会看到执行一次的效果。
```html
<p>每隔1秒钟，打印当前时间</p>
<div id="time"></div>
<script>
	var t = setInterval(printTime, 1000);
	function printTime() {
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
		if (s % 5 == 0)
			clearInterval(t);
	}
</script>
<br>
```
