---
title: BOM和DOM
comments: true
categories:
  - 前端
  - CSS
  - CSS一般性重要概念
tags:
  - 我的笔记
language:
  - zh-cn
date: 2018-06-25 23:27:47
updated: 2018-06-25 23:27:47
---
DOM是w3c组织推荐的处理可扩展标志语言（XML Extensible Markup Language）的标准编程接口。
Document Object Model的历史可以追溯至1990年代后期微软与Netscape的“浏览器大战”，双方为了在JavaScript与JScript一决生死，于是大规模的赋予浏览器强大的功能。微软在网页技术上加入了不少专属事物，既有VBScript、ActiveX、以及微软自家的DHTML格式等，使不少网页使用非微软平台及浏览器无法正常显示。DOM即是当时蕴酿出来的杰作
![DOM](/images/DOM.png)
Document 对象代表整个XML文档,当浏览器载入HTML文档, 它就会成为document对象。document对象是HTML文档的根节点与所有其他节点（元素节点，文本节点，属性节点, 注释节点）。Document对象使我们可以从脚本中对HTML页面中的所有元素进行访问。Document对象是Window对象的一部分，可通过 `window.document`属性对其进行访问。

BOM：Browser Object Model是指浏览器对象模型。BOM由多个对象组成，其中代表浏览器窗口的Window对象是BOM的顶层对象，其他对象都是该对象的子对象。

Window 对象表示浏览器中打开的窗口。window对象就是JavaScript的Global对象，所以在使用window对象的属性和方法是不需要特别指明。如：alert，实际上完整的调用是window.alert，通常省略了window对象的引用。Window对象主要提供的功能，调整窗口的尺寸和位置、打开新窗口、系统提示框、状态栏控制、定时操作

![images](/images/BOM.jpg)