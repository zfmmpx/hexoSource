---
title: inline或inline-block元素间间距
comments: true
categories:
  - 前端
  - CSS
  - CSS未解决的怪问题
tags: 
  - 我的笔记
  - css怪问题
language:
  - zh-cn
date: 2018-06-22 20:55:11
updated: 2018-06-22 20:55:11
---
# <a id="inline-block元素间间距" href="#inline-block元素间间距">inline-block元素间间距<a/>
有这样一个问题：行内元素或行内块元素之间会留有大约一个space的空白
![行内元素间的留白](/images/行内元素间的留白.png)
![行内块元素间的留白](/images/行内块元素间的留白.png)

大神的方法：[去除inline-block元素间间距的N种方法](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-去除间距/)
方法一：行内或行内块元素间留白间距出现的原因就是标签段之间的空格，因此，去掉HTML中的空格，自然间距就没有了
方法二：给行内或行内块元素设置浮动
方法二：使用margin负值，有缺点，会使盒子变小，如果margin值不够，每隔两三个右会出现空格**这又是另一个问题，不知道原因是什么**
#### 重点介绍方法三：用**letter-spacing**
```html
<style>
div.space{
    letter-spacing: -6px;
}
div.space div.title{
    letter-spacing: 0;
}
div.title {
    background-color: pink;
    display: inline-block;
    border: 2px solid #000;
    width: 40px;
    height: 40px;
}
</style>
<div class="space">
    <div class="title">div</div>
    <div class="title">div</div>
    <div class="title">div</div>
    <div class="title">div</div>
    <div class="title">div</div>
    <div class="title">div</div>
    <div class="title">div</div>
</div>
```
