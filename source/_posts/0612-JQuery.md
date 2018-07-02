---
title: JQuery
comments: true
categories:
  - 前端
  - JQuery
language:
  - zh-cn
date: 2018-06-12 18:35:19
updated: 2018-06-12 18:35:19
tags:
---
- JQuery是一个javascript的框架，是对javascript的一种封装。 
通过JQuery可以非常方便的操作html的元素

- 通过id获取元素
与javascript通过id获取元素节点的方式(document.getElementById )不同
JQuery通过 $("#id") 就可以获取了

需要注意的是，通过 document.getElementById 获取到的是 DOM里的 元素节点
而通过$("#id") 获取到的是一个 JQuery 对象
$("#id")[0]才是一个DOM元素节点

# 常见方法
```javascript
		// 常用方法
		$("#d").hide();
		$("#d").show();
		$("#d").toggle(500); // 动画在500毫秒内完成,toggle隐藏或显示
		$("#b").click(function(){alert("点击了按钮")});
		$("#input").val();
		$("#d").html(); // 如果有子元素,保留标签
		$("#d").text(); // 如果有子元素,不保留标签
		// css
		$("#d").addClass("pink");
		$("#d").removeClass("pink");
		$("#d").toggleClass("pink");
		$("#d").css("background-color", "pink");
		$("#d2").css({"background-color": "lightblue", "color": "red"});
```
# 选择器
```JavaScript
	$("div")
	$(".d")
	$("div.d")
	$("#d1")

	// 层级
	$("table tr")
	// 最先最后
	$("#d1 div:first") // id为d1下面的第一个div
	$("#d1 div:last")
	// 基偶(因为是基零的, 所以第一排的下标其实是0(是偶数))
	$("div:even")
	$("div:dodd")
	// 可见性
	$("div:hidden") // 不可见元素
	$("div:visible") // 可见元素
	// 属性
	$("div[id]") // 有id属性的div
	$("div[id=pink]") // id属性等于pink的div
	$("div[id!=pink]") // id属性不等于pink的div(意味着没有id属性的div也能被选中)
	$("div[id^=p]") // id属性以p开头的div
	$("div[id$=k]") // id属性以k结尾的div
	$("div[id*=k]") // id属性包含*的div

	// 表单对象选择器
	$("div :input") // div下的 所有的输入元素(不仅仅是input标签开始的那些，还包括textarea,select,option和button)
	$("div :button") // div下的 type=button的input元素和button元素[<input type="button" value="input按钮"/>, <button>Button按钮</button>]
	$("div :radio") // div下 单选框[<input type="radio">]
	$("div :checkbox") // div下 复选框[<input type="checkbox">]
	$("div :text") // div下 文本框, 但不会选择文本域[<input type="text" />]
	$("div :password") // div下 属性type="password"的文本框[<input type="password" />]
	$("div file") // div下的[<input type="file" />]
	$("div  :submit") // div下 的提交按钮(??还会包括button??)[<input type="submit" />, <button>Button按钮</button>]
	$("div :image") // div下 的图片型提交按钮[<input type="image" src="http://how2j.cn/example.gif" />]
	$("div :reset") // div下 的重置按钮[<input type="reset" />]

	// 表单对象属性
	$("td[id!=td1] :enabled") // td下id不等于"td1"的表单属性enabled="enabled"的输入元素(input) (输入元素的默认状态都是可用(除非设置了属性enabled="disabled"))
	$(":disable") // 不可用的输入元素
	$(":checked") // 被选中的单选框和复选框 注: 在部分浏览器上(火狐,chrome)也可以选中selected的option 
	$(":selected") // 被选中的option元素

	// 当前元素
	$(this)
```
# 筛选器
筛选器指的是在已经通过选择器选中了元素后，在此基础上进一步选择。
```javascript
// 第一个 最有一个 第几个
$("div").first().toggleClass("pink");
$("div").last().toggleClass("pink");
$("div").eq(4).toggleClass("pink"); // 第五个元素
// 父 祖先
$("#currentDiv").parent().css("border", "10px solid black"); // parent()选取最近的一个父元素
$("#currentDiv").parents().css("border", "10px solid black"); // parents()选取所有的祖先元素
// 儿子 后代
$("#currentDiv").children().css("background-color", "yellow"); // 筛选出紧挨着的子元素
$("#currentDiv").find("div").css("background-color", "yellow"); // find(selector)筛选出后代元素
// 同级
$("#currentDiv").siblings().toggleClass("b");
```

# <a href="#shuxin" id="shuxin">属性</a>
[返回原生js和jq设置元素的属性的4种方法](#原生js和jq设置元素的属性的4种方法)（[或这个本地链接](http://localhost:4000/categories/前端/我遇到的问题/原生js和jq设置元素的属性/#原生js和jq设置元素的属性的4种方法)）（[或这个github链接](http://zfmmpx.github.com/categories/前端/我遇到的问题/原生js和jq设置元素的属性/#原生js和jq设置元素的属性的4种方法)）


```javascript
// 通过attr(attr)获取属性值
console.log($("#h").attr("align")); // 获取属性align的属性值
// 通过attr(attr, value)修改
console.log($("#h").attr("align", "right"));
// 通过removeAttr(attr)删除属性
console.log($("#h").removeAttr("align", "left"));
```
- prop与attr的区别
prop一样attr也可以用来获取与设置元素的属性。
区别在于，对于自定义属性和选中属性的处理。
选中属性指的是 checked,selected 这2种属性
	1. 对于自定义属性 attr能够获取，prop不能获取
	2. 对于选中属性
		attr 只能获取初始值， 无论是否变化
		prop 能够访问变化后的值，并且以true|false的布尔型返回。
		所以在访问表单对象属性的时候，应该采用prop而非attr
		
		```html
		<script src="http://how2j.cn/study/jquery.min.js"></script>
		<style>
			button{
				display:block;
				background-color: pink;
			}
		</style>
		<script>
			$(function(){
				$("#b1").click(function(){
					console.log($("#c").attr("game"));
				});
				$("#b2").click(function(){
					console.log($("#c").prop("game"));
				});
				$("#b3").click(function(){
					console.log($("#c").attr("checked"));
				});
				$("#b4").click(function(){
					console.log($("#c").prop("checked"));
				});
				$("#b5").click(function(){
					console.log($("#i1").prop("value"));
				});
			})
		</script>
		<button id="b1">通过attr获取自定义属性game</button>
		<button id="b2">通过prop获取自定义属性game</button>
		<button id="b3">通过attr获取checked属性</button>
		<button id="b4">通过prop获取checked属性</button>
		<button id="b5">通过prop获取输入框value属性</button>
		<input type="checkbox" id="c" game="LOL" checked="checked"> 选中的复选框
		<input type="text" id="i1">
		```

# 效果
	- `$("#d1").slideUp(2000);`
	show hide toggle 显示 隐藏 切换
	slideUp slideDown slideToggle 向上滑动 向下滑动 滑动切换
	fadeIn fadeOut fadeTaggle 淡入 淡出 淡入淡出切换 淡入(或出)到多少
	```JavaScript
	// fadeTo
	$("#b7").click(function(){
		$("#d1").fadeTo("fast", 0.2);
		$(".d1").fadeTo("slow", 0.2);
		$(".d2").fadeTo("slow", 0.5);
		$(".d3").fadeTo("solw", 0.8);
	});
	```
	- 自定义动画效果
通过animate 可以实现更为丰富的动画效果 
animate()第一个参数为css样式 
animate()第二个参数为延时毫秒 
注： 默认情况下，html中的元素都是固定，并且无法改变的位置的。 为了使用animate()自定义动画效果，需要通过css把元素的position设置为relative、absolute或者fixed。

  - 回调函数
  效果一般需要一定的时间，并且这个时间可长可短，所以就无法精确的确定该效果合适结束。 
好在，效果方法都提供对回调函数callback()的支持。 
只需要在调用效果方法的最后一个参数传入一个function，当效果结束的时候，就会自动调用该function了。
```JavaScript
$(function () {
  var div = $("#d");
  $("#b1").click(function () {
    div.animate({ left: "100px" }, 2000);
    div.animate({ left: "0px", top: "50px", height: "50px" }, 2000, function () {
      alert("动画演示结束");
    })
  });
})
```

# 事件
- 加载
页面加载有两种方式表示 
1. $(document).ready(); 
2. $(); 这种比较常用 
图片加载用load()函数
```JavaScript
$(function(){
  $("#img").load(function(){
    $("#message2").html("图片加载成功");
  });
});
```

- 点击
click() dblclick()

- 键盘
keydown 表示按下键盘
keypress 表示按下键盘
keyup 表示键盘弹起
这三者的区别分别表现在发生的 先后顺序，获取到的键盘按钮值，已经对输入框的文本取值这三方面
先后顺序： 按照 keydown keypress keyup 顺序发生
键盘按钮值：
通过event对象的which属性获取键盘的值
keydown和keyup 能获取所有按键，不能识别大小写
keypress 不能获取功能键，如F1 SHIFT等，能够识别大小写
文本取值：
keydown和keypress：不能获取最后一个字符
keyup： 获取所有字符
如图所例，敲入ab
发生的先后顺序是 keydown,keypress,keyup
keydown和keyup取到大写B的ASCII码表 66,keypress取到小写b的ASCII码表 98.
keydown和keypress只能取到文本值a, keyup可以取到ab

- 鼠标
`$("#downup").mousedown(function(){
   $(this).html("鼠标按下");
});`
mousedown 表示鼠标按下 
mouseup表示鼠标弹起 

mousemove表示鼠标进入 
mouseenter表示鼠标进入 
mouseover表示鼠标进入 

mouseleave表示鼠标离开 
mouseout表示鼠标离开 

进入事件有3个 mousemove mouseenter mouseover 
mousemove ：当鼠标进入元素，每移动一下都会被调用 
mouseenter ：当鼠标进入元素，调用一下，在其中移动，不调用 
mouseover：当鼠标进入元素，调用一下，在其中移动，不调用 

mouseenter 和 mouseover的区别 
mouseenter: 当鼠标经过其子元素不会被调用 
mouseover：当鼠标经过其子元素会被调用 

mouseleave 和 mouseout的区别 
mouseleave: 当鼠标经过其子元素不会被调用 
mouseout：当鼠标经过其子元素会被调用

- 焦点
`$("input").focus(function(){
    $(this).val("获取了焦点");
})`
focus() 获取焦点 
blur() 失去焦点

- 改变
change() 只有当失去焦点的时候,才会触发change事件
`$("#input1").change(function(){
  var text = $(this).val();
  $("#message").html("input1的内容变为了"+text);
});`

- 提交
`$("#form").submit(function(){
  alert("提交账号密码");
});`

- 绑定事件
`$("selector").on("event",function);`
以上所有的事件处理，都可以通过on() 绑定事件来处理
`$("#b").on("click",function(){
  $("#message").html("单击按钮");
});`

- 触发事件
`$("#b").trigger("dblclick");`
等于用代码帮我们双击了 id为b的元素, 然后触发了之前绑定的事件

# AJAX
```javascript
// 完整写法
// $.ajax采用参数集的方式 {param1,param2,param3} 不同的参数之间用,隔开
// 第一个参数 url:page 表示访问的是page页面
// 第二个参数 data:{name:value} 表示提交的参数
// 第三个参数 success: function(){} 表示服务器成功返回后对应的响应函数
$.ajax({
  url: page,
  data: {"name": value},
  success: function(result){
    $("#checkResult").html(result);
  }
});
// get方法
// 第一个参数: page 访问的页面
// 第二个参数: {name:value} 提交的数据
// 第三个参数: function(){} 响应函数
// 只有第一个参数是必须的，其他参数都是可选
$.get(
  page,
  {"name": value},
  function(result){
    $("#checkResult").html(result);
  }
);
// post方法
// 第一个参数: page 访问的页面
// 第二个参数: {name:value} 提交的数据
// 第三个参数: function(){} 响应函数
// 只有第一个参数是必须的，其他参数都是可选
$.post(
  page,
  {"name": value},
  function(result){
    $("#checkResult").html(result);
  }
);
```
## 完整的ajax请求
```html
<script src="http://how2j.cn/study/js/jquery/2.0.0/jquery.min.js"></script>
<form action="http://how2j.cn/study/checkName.jsp" id="checkName">
    请输入账号：
    <input type="text" name="name" id="name">
    <div id="resText"></div>
</form>
<script>
    $("#name").keyup(function () {
        var page = $("#checkName").attr("action");
        var value = $(this).val();

        // $.ajax({
        //     url: page,
        //     data: {"name": value},
        //     success: function (response) {
        //         $("#resText").html(response);
        //     }
        // })

        // $.get方法是$.ajax的简化版本
        // $.get(
        //     page,
        //     {"name": value},
        //     function(response){
        //         $("#resText").html(response);
        //     }
        // )

        // $.post方法是$.ajax的简化版本
        $.post(
            page,
            { "name": value },
            function (response) {
                $("#resText").html(response);
            }
        );
    })
</script>
```






































