---
title: BOOTSTRAP基本样式
comments: true
categories:
  - 前端
  - BOOTSTRAP
language:
  - zh-cn
date: 2018-06-15 11:12:14
updated: 2018-06-15 11:12:14
---
# 头部信息
```html
<!DOCTYPE html>
<script src="http://how2j.cn/study/js/jquery/2.0.0/jquery.min.js"></script>
<link href="http://how2j.cn/study/css/bootstrap/3.3.6/bootstrap.min.css" rel="stylesheet">
<script src="http://how2j.cn/study/js/bootstrap/3.3.6/bootstrap.min.js"></script>
```

# 按钮
```html
	<button class="btn">原始样式按钮</button>
	<button class="btn btn-default">默认按钮</button>
	<button class="btn btn-primary">提交按钮</button>
	<button class="btn btn-success">成功按钮</button>
	<button class="btn btn-info">信息按钮</button>
	<button class="btn btn-warning">警告按钮</button>
	<button class="btn btn-danger">微信按钮</button>
	<button class="btn btn-link">表现为链接</button>
	<button class="btn btn-lg">大一点的按钮</button>
	<button class="btn btn-sm">小一点的按钮</button>
	<button class="btn btn-xs">最小的按钮</button>
	<button class="btn btn-block">宽屏按钮</button>
	<button class="btn active">激活状态按钮</button>
	<button class="btn disabled">无效按钮</button>
	<button class="btn disabled btn-danger btn-xs">多种按钮样式混用</button>
```

# 表格
```html
<table class="table table-striped"> <!-- 基本表格 -->
  <thead>
    <th>头像</th>
    <th>名字</th>
    <th>HP</th>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="http://how2j.cn/study/bootstrap/lol/gareen.png" width="20px">
      </td>
      <td>盖伦</td>
      <td>616</td>
    </tr>
    <tr>
      <td>
        <img src="http://how2j.cn/study/bootstrap/lol/teemo.png" width="20px">
      </td>
      <td>提莫</td>
      <td>383</td>
    </tr>
    <tr>
      <td>
        <img src="http://how2j.cn/study/bootstrap/lol/akali.png" width="20px">
      </td>
      <td>阿卡丽</td>
      <td>448</td>
    </tr>
  </tbody>
</table>
```
```html
<table class="table table-striped"> <!-- 带斑马线的表格 -->
<table class="table table-bordered"> <!-- 带边框的表格 -->
<table class="table table-hover"> <!-- 有鼠标悬停状态的表格 -->
<table class="table table-condensed"> <!-- 更加紧凑的表格 -->
<table class="table table-striped table-bordered table-hover table-condensed"> <!-- 多种表格效果整合在一起的表格 -->
```
```html
<tr class="active"> <!-- 激活样式 -->
<td class="active">阿卡丽</td> <!-- (td都可以用) -->
<tr class="success"> <!-- 成功样式 -->
<tr class="info"> <!-- 信息样式 -->
<tr class="warning"> <!-- 信息样式 -->
<tr class="danger"> <!-- 信息样式 -->
```

# 图片
```html
<img src="http://how2j.cn/example.gif" class="img-rounded"> <!-- 圆角 -->
<img src="http://how2j.cn/example.gif" class="img-circle"> <!-- 圆形 -->
<img src="http://how2j.cn/example.gif" class="img-thumbnail"> <!-- 缩略图 -->
```

# 表单输入元素
```html
<input type="text" class="form-control" value="文本框">
<input type="password" class="form-control" value="password">
<textarea name="" id="" class="form-control">文本域</textarea>
<select name="" id="" class="form-control">
	<option>Java</option>
	<option>Html</option>
	<option>IOS</option>
</select>
```

# 文本
```html
<span class="text-muted">淡灰色文本</span>
<span class="text-primary">强调的文本</span>
<span class="text-success">操作成功文本</span>
<span class="text-info">提示信息文本</span>
<span class="text-warning">警告文本</span>
<span class="text-danger">危险操作文本</span>
```

# 背景
```html
<p class="bg-primary">强调的背景</p>
<p class="bg-success">成功操作文字的背景</p>
<p class="bg-info">信息提示文字的背景</p>
<p class="bg-warning">警告提示文字的背景</p>
<p class="bg-danger">危险提示文字的背景</p>
```

# 其他
```html
<button class="close">&times;</button> <!-- 关闭按钮 -->
<span class="caret"></span> <!-- 下拉菜单按钮 -->
<div class="pull-left">文字浮动到左边</div>
<div class="pull-right">文字浮动到右边</div>
<div class="show">显示1</div>
<div class="hidden">隐藏2</div>
<div class="invisible">强行隐藏</div>
<div class="show">显示3</div>
```

# 栅格布局
- 运用Bootstrap的栅格系统，可以做出像table那样定义多少行，多少列效果，但是又比table灵活。
运用Bootstrap的栅格系统，首选需要准备一个class=container的div
紧接着需要一个class=row的 div，表示行
再挨着的div，就是列了。
Bootstrap的栅格系统会默认把一行，分成12列。
当同一行的栅格总数超过12的时候，就会自动换行
```html
<div class="container">
	<div class="row">
		<div class="col-xs-12">一个12列</div>
	</div>
</div>
<div class="container">
	<div class="row">
			<div class="col-xs-4">占4列</div>
			<div class="col-xs-4">占4列</div>
			<div class="col-xs-4">占4列</div>
	</div>
</div>
```
