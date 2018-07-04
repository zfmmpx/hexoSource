---
title: 关于Mac上的VSCode编写Markdown会出现不可见字符问题
comments: true
categories:
  - 前端
  - 一些经验
tags:
  - 我的笔记
language:
  - zh-cn
date: 2018-07-03 23:04:47
updated: 2018-07-03 23:04:47
---

这篇博客主要参考这里：[Mac 上的 VSCode 编写 Markdown 总是出现隐藏字符？](https://www.zhihu.com/question/61638859)

在mac版的vscode中这个隐藏字符默认是看不到的，不会显示出来，但实际上是占有位置的，跟编程中的空字符串有些类似。

在win版vscode中会显示成:

![180703_win版vscode中会显示成](/images/180703_win版vscode中会显示成.jpg)

![180703_linux版vscode中会显示成](/images/180703_linux版vscode中会显示成.jpg)

![180703_linux版vscode中会显示成](/images/180703_linux版vscode中会显示成.jpg)

如果开启vscode的这个选项：
```json
// 控制编辑器是否应呈现控制字符
"editor.renderControlCharacters": true,
```

则在windows、linux和mac中都会显示成这样：
![180703_开启vscode呈现控制字符选项则在windows、linux和mac中都会显示成](/images/180703_开启vscode呈现控制字符选项则在windows、linux和mac中都会显示成.jpg)

放大了看，这个字符里面写着"BS"，其实是ASCII码中的退格符的Unicode表示法(所有ASCII控制字符都有一个图形外观)。

参考Wikipedia：[控制字符](https://zh.wikipedia.org/wiki/%E6%8E%A7%E5%88%B6%E5%AD%97%E7%AC%A6)

BS代表back space

原因：vscode底层是electron，electron底层用的chromium，这个bug是chromium的，最终导致vscode也有问题。如果你把编辑器分成两列，左侧是md，右侧是md的preview，那么用中文输入法输入f再删除，需要按两次delete键。如果按一次就会出现ascii为8的退格字符，默认vscode中md文件看不到，github上会看到类似问号的特殊字符，vscode设置中添加`"editor.renderControlCharacters": true,`就可以看到。截止2018-07-03 vscode中仍旧有这个问题，不过据说不久会修复。

当前解决办法：写md不开preview预览；或者添加设置，出现back space则手动删除。

[vscode控制字符引起的问题以及解决思路](https://juejin.im/entry/5a806ddef265da4e84092eeb)