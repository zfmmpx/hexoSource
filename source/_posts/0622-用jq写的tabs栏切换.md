---
title: 用jq写的tabs栏切换
comments: true
categories:
  - 前端
  - JQuery
  - 自己写的练习
tags: 
  - 我的笔记
language:
  - zh-cn
date: 2018-06-22 23:04:18
updated: 2018-06-22 23:04:18
---
```html
<script src="http://how2j.cn/study/js/jquery/2.0.0/jquery.min.js"></script>
<script>
    $(function(){
        $("#tabs a").click(function(){
            $("#tabs li").removeClass("current");
            $(this).parent().addClass("current");
            $("#content div").removeClass("show");
            $("#"+$(this).attr("title")).addClass("show");
        });
        $("#tabs li").hover(function(){
            if(!$(this).hasClass("current")){
                $(this).addClass("hoverItem");
            }
        }, function(){
            $(this).removeClass("hoverItem");
        })
    })
</script>
<style>
    .tab-contain{
        margin: 50px auto;
        width: 1000px;
        padding: 100px;
        background: #7f7d7d;
    }
    #tabs{
        overflow: hidden;
        width: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    #tabs li{
        float: left;
        margin:0;
    }
    li a{
        position: relative;
        background: #ddd;
        padding: 10px 50px;
        float: left;
        text-decoration: none;
        color: #444;
        text-shadow: 0 1px 0 rgba(255, 255, 255, .8);
        border-radius: 20px 20px 0 0 ;
        box-shadow: 0 2px 2px rgba(0, 0, 0, .4);
    }
    .current a{
        outline: 0;
        background: #fff;
        z-index: 4;
    }
    .hoverItem a{
        background: #AAC9B9;
    }
    /* 注意这里position:relative是为了使box-shadow和border-radius生效，使盒子产生层叠上下文 */
    #content{
        background: #fff;
        padding: 50px;
        height: 220px;
        position: relative;
        border-radius: 0 5px 5px 5px;
        box-shadow: 0 -2px 3px -2px rgba(0,0,0,.5);
        z-index: 0;
    }
    .item{
        display:none;
    }
    .show{
        display: block;
    }
</style>

<body>
    <div class="tab-contain">
        <!-- tab栏 -->
        <ul id="tabs">
            <li class="current"><a href="#" title="tab1">one</a></li>
            <li><a href="#" title="tab2">two</a></li>
            <li><a href="#" title="tab3">three</a></li>
            <li><a href="#" title="tab4">four</a></li>
        </ul>
        <!-- 对应显示内容 -->
        <div id="content">
            <div id="tab1" class="item show">
                <h2>title 11111</h2>
                <p>text here!!!text here!!!text here!!!text here!!!text here!!!</p>
                <p>text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!</p>
            </div>
            <div id="tab2" class="item">
                <h2>title 22222</h2>
                <p>text here!!!text here!!!text here!!!text here!!!text here!!!</p>
                <p>text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!</p>
            </div>
            <div id="tab3" class="item">
                <h2>title 33333</h2>
                <p>text here!!!text here!!!text here!!!text here!!!text here!!!</p>
                <p>text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!</p>
            </div>
            <div id="tab4" class="item">
                <h2>title 44444</h2>
                <p>text here!!!text here!!!text here!!!text here!!!text here!!!</p>
                <p>text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!text here!!!</p>
            </div>
        </div>
    </div>
</body>
```