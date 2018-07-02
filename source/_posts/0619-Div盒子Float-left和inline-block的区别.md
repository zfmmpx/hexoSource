---
title: 'Div盒子Float:left和inline:block的区别'
comments: true
categories:
  - 前端
  - CSS
  - CSS一般性重要概念
tags: 
  - 我的笔记
language:
  - zh-cn
date: 2018-06-19 19:00:05
updated: 2018-06-19 19:00:05
---
- Float:left 浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止
元素浮动后，原来的“坑”就让出来了，后面没有浮动的元素会占领这个坑
![浮动的div](/images/浮动的div.png)
所以这里的各个div是紧密相连的
- 行内块元素：各个div之间有css默认的各个元素之间的边距（**如何取消这个间距还在探索当中！（[找到原因了！](#inline-block元素间间距)）**）
![inline-block的div](/images/inline-block的div.png)
```html
<style>
    * {
        margin: 0;
        padding: 0;
    }

    div.fl {
        background-color: pink;
        height: 100px;
        width: 10%;
        border: 1px solid #000;
        float: left;
        /* display: inline-block; */
    }
</style>
<div class="fl">浮动的div</div>
<div class="fl">浮动的div</div>
<div class="fl">浮动的div</div>
<div class="fl">浮动的div</div>
<div class="fl">浮动的div</div>
```
