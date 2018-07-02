---
title: em和rem的区别
comments: true
categories:
  - 前端
  - CSS
  - CSS一般性重要概念
tags:
  - 我的笔记
language:
  - zh-cn
date: 2018-06-25 11:28:48
updated: 2018-06-25 11:28:48
---
在自适应布局中，宽度全都用百分比，文字使用em或者rem
```html
<style>
	html{
		/* rem只依据这个，所以不会层层放大（或缩小） */
		/* html默认16号字体，把下面注释解掉也一样 */
		/* font-size: 16px; */
	}
	body{
		/* chrome默认最小中文字体,比12小的值会转为12号字体 */
		/* em的依据，但是会层层嵌套放大（或缩小） */
		font-size: 12px;
	}
	div{
		font-size: 2em;
	}
	.drem{
		font-size: 2rem;
	}
</style>
<div class="father">
	我是一些字
	<div>
		我是一些字
		<div>
			我是一些字
		</div>
	</div>

	<div class="drem">
		我是一些字
		<div class="drem">
			我是一些字
			<div class="drem">
				我是一些字
			</div>
		</div>
	</div>
</div>
```
![em和rem的区别](/images/em和rem的区别.png)
有个技巧，就是把body的font-size设置为62.5%或10px，这样如果下面比如想要18px的字体，就用1.8em就可以了
```html
<style>
	body {
		font-size: 10px;
	}
	div {
		font-size: 3.8em;
	}
</style>
<div>我3.8em的字体，也等于38px</div>
<div style="font-size: 38px">我是38px的字体</div>
```