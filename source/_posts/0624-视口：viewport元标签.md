---
title: 视口：viewport元标签
comments: true
categories:
  - 前端
  - CSS
  - CSS一般性重要概念
tags:
  - 我的笔记
language:
  - zh-cn
date: 2018-06-24 13:26:39
updated: 2018-06-24 13:26:39
---
`<meta name="viewport" content="width=device-width, initial-scale=1.0, minmun-scale=1.0 maximum-scale=1.0, user-scalable=0">`
首先是苹果在safari上首次使用viewport元标签，然后安卓手机浏览器，chrome手机浏览器也跟着支持viewport元标签。
一旦设置了viewport元标签，layout viewport将不再起作用。代替的是设置的width值，相对于将html的宽设置为width属性的值，而且移动浏览器会将这个width的值放到一个屏幕的宽内，所以不会出现横向滚动条，除非你设置了maximum-scale的值大于initial-scale的值，然后手动进行放大，然后横向滚动条才会出现.
经过测试，iphone一个屏幕最大能显示1280px(640px的两倍，320px的4倍)，但width设置超出这个值，无论initial-scale设置多少，都会出现滚动条。
**pc端并没有视口这个概念，在css3媒体查询中：1.对于pc端，判断max-width等属性，根据的值就是pc端浏览器内容区的宽度 2.对于移动端，max-判断的依据是就是layout viewport的值**

[参考：使用Flexible实现手淘H5页面的终端适配](http://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)
---
# 总结出来的重点规则

initial-scale控制的是手机一个屏幕（不拖动滚动条的情况下）显示多少个像素，也就是visual viewport的值
一个屏幕显示多少个像素：**visual viewport = ideal viewport / initial-scale**
例如：iphone的ideal viewport是320，initial-scale设为0.5时，visual viewport = 320 / 0.5 = 640px

width设置的是layout viewport的值：**layout viewport = width**

width设置的是通过拖动横向滚动条，手机能最终显示多少个像素。也就是layout viewport的值
手机能最终显示多少个像（layout viewport）= width
手动放大相当于把width值放大了，所以layout wiewport的值也会增大
**在iphone5s上，width设置超出1280px这个值，无论initial-scale设置多少，都会出现滚动条。**
**在iphone6上，width设置超出1500px这个值，无论initial-scale设置多少，都会出现滚动条。**

**当layout viewport > visual viewport时，就会出现滚动条**
**当layout viewport < visual viewport时，layout viewport = visual viewport**

**如果没有视口元标签，移动端浏览器默认宽度为layout viewport的默认值980px**
**如果有视口元标签，移动端浏览器的宽度按照视口最终计算出来的layout viewport来计算**

**媒体查询读取的是layout viewport的值**
```html
<!-- <!DOCTYPE html> -->
<!-- 打开chrome的移动浏览器调试，用iphone，最终的div是粉色的； -->
<!-- 因为计算出来的visiual viewport为320/0.5=640；  -->
<!-- 计算出来的layout viewport=width=641>640, 所以最终layout viewport=641，并且会出现滚动条； -->
<!-- 而且媒体查询判断的依据是layout viewport的值，所以第三个媒体查询（屏幕最小宽度值为641）生效。 -->
<meta name="viewport" content="width=641, initial-scale=0.5">
<style>
        div{
            width: 200px;
            height: 200px;
        }
        @media screen and (min-width:320px){
            div{
                background-color: blue;
            }
        }
        @media screen and (min-width:321px){
            div{
                background-color: red;
            }
        }
        @media screen and (min-width:640px){
            div{
                background-color: yellow;
            }
        }
        @media screen and (min-width:641px){
            div{
                background-color: pink;
            }
        }
        @media screen and (min-width:960px){
            div{
                background-color: green;
            }
        }
        *{
            margin: 0;
            padding: 0;
        }
</style>
<div></div>
```
---

### layout viewport
pc端的网页大多是按照1024像素宽来设置的，所以这些移动浏览器就决定默认情况下把viewport设为一个较宽的值，比如980px，这样的话即使是那些为桌面设计的网站也能在移动浏览器上正常显示了。ppk大神把这个浏览器默认的viewport叫做 layout viewport。这个layout viewport的宽度可以通过 document.documentElement.clientWidth 来获取。

### visual viewport
有了layout viewport之后，在手机上能显示的内容称为visual viewport。这个不是真的“视口”，只是为方便起见而起的名字，**它和layout viewport和ideal viewport有本质的区别：**
  - layout viewport是移动浏览器本身就带有的，一般是980px，就算你不设置viewport元标签，这个视口依然存在，
  - ideal viewport是真实的概念，其值是设备内置设置的，比如所有iphone它的ideal viewport都是320px的。可以通过`content="width=device-width"`viewport值为ideal viewport的值，就可以在移动设备获得完美适配。
  - visual viewport只是象征式意义的代表屏幕的可是区域，是ppk大神虚拟出来的一个概念，移动浏览器本身是没有这个属性的，也不能通过设置viewport元标签来设置

![layout viewport](/images/layout viewport.png)
![visual viewport](/images/visual viewport.png)

## ideal viewport
有了上面这两个viewport之后，还是没有解决问题，因为这样还是没能为移动设备进行完美适配。
所谓的完美适配是：首先不需要用户缩放和横向滚动条就能正常的查看网站的所有内容；第二，显示的文字的大小是合适，比如一段14px大小的文字，不会因为在一个高密度像素的屏幕里显示得太小而无法看清。

理想的情况是这段14px的文字无论是在何种密度屏幕，何种分辨率下，显示出来的大小都是差不多的。当然，不只是文字，其他元素像图片什么的也是这个道理。ppk把这个适合移动设备的viewport叫做ideal viewport。   

ideal viewport并没有一个固定的尺寸，不同的设备拥有有不同的ideal viewport。所有的iphone的ideal viewport宽度都是320px，无论它的屏幕宽度是320还是640，无论是iphone5还是iphone8，也就是说，在iphone中，css中的320px就代表iphone屏幕的宽度。

总结：ideal viewport的宽度等于移动设备的屏幕宽度，只要在css中把某一元素的宽度设为ideal viewport的宽度(单位用px)，那么这个元素的宽度就是设备屏幕的宽度了，也就是宽度为100%的效果。（但是一般的做法是：pc正常的按照设计图设计网页，然后设置viewport标签）

## viewport元标签
`<meta name="viewport" content="width=device-width, initial-scale=1.0, minmun-scale=1.0 maximum-scale=1.0, user-scalable=0">`

属性 | 含义
--- | ---
width	| 设置layout viewport的宽度，为一个正整数，或字符串"width-device"
initial-scale	| 设置页面的初始缩放值，为一个数字，可以带小数
minimum-scale	| 允许用户的最小缩放值，为一个数字，可以带小数
maximum-scale	| 允许用户的最大缩放值，为一个数字，可以带小数
height | 设置layout viewport的高度，这个属性对我们并不重要，很少使用
user-scalable	| 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许
