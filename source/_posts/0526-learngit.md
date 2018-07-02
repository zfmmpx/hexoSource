---
title: learngit
comments: true
categories:
  - Git
language:
  - zh-tw
date: 2018-05-26 01:00:41
updated: 2018-05-26 01:00:41
tags:
---
# 创建版本库
- `git init`
- `git add readme.txt`
- `git commit -m "wrote a readme file"`
- `git status` 查看git状态

# 版本回退
- `git log` 显示从最近到最远的提交日志
	- `git log --pretty=oneline` 简洁版日志
- `git reset --hard HEAD^`
	- HEAD^ 表示上一个版本; HEAD^^ 表示上上一个版本;
- `git reflog` 记录了每一个你操作过的版本

# 工作区和暂存区
- learngit文件夹就是一个工作区
- .git文件夹不算是工作区，它是git的版本库
	- .git里面最重要的就是stage（或者叫index）的暂存区。
	- Git为我们自动创建的第一个分支叫master，以及指向master的一个指针叫HEAD。

# 管理修改
- git管理的是修改，而不是文件

# 撤销修改
- `git checkout -- readme.txt` 放弃工作区的修改，两种情况：
	- 未add到暂存区，变回和当前版本库的状态；
	- 已add到暂存区，变回和加到暂存区后的版本库的状态；
- `git diff HEAD readme.txt` 查看readme.txt文件与当前版本库的区别
- `git reset HEAD readme.txt` 把暂存区的readme.txt文件撤销