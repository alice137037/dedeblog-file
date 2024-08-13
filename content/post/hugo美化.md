---
title: 搭建个人博客记录2️⃣博客美化
draft: false
description: 
featured: true
image: Pasted%20image%2020240812145355.png
keywords: 
slug: 
canonicalURL: 
categories:
  - 博客建设
math: true
tags:
  - hugo
date: 2024-08-12
---
部分修改内容的时候，需要搜索stack主题下的内容。因为不同主题stack下面的文件是不同的。
## 🌍 240812
### 相册功能
[Hugo博客添加相册功能 | Sulv's Blog](https://www.sulvblog.cn/posts/blog/hugo_gallery/)

### 导航栏图标的顺序更改

~~似乎图标排序方式，是按照identifier: github的英语首字母先后（存疑？~~

顺序按照权重`weight`
~~~yaml
menu:
    main: []

    social:
        - identifier: rss
          weight: 1
          name: RSS
          url: /index.xml
          params:
            newTab: true ## 是否在新标签中打开
            icon: rss2
        
~~~


同理修改导航栏下面的 主页，归档等等顺序，到`content/page/`下对应index.zh-cn修改weight内容。
### 暗色模式自定义图标仍为黑色
图标：去阿里矢量库，颜色#515151，大小24

编辑svg图标，将所有的 `#2c3e50` 都替换成 currentColor，也就是使用样式设置的颜色。

存档图标：memo3/记录/


### 友链使用方式
网络上方式：
友链头像放在`/assets/link-img`，友链数据放在`/data/links.json`
自己的方式：`content/page/links/index.md`，图片存储在同目录下，按照参考模式进行修改。
~~~
  - title: 火烧云分析与记录
    description: 火烧云🌇超级好用的查询，虽然目前还没有赶上一次世纪大烧
    website: https://sunsetbot.top/?continueFlag=a07c9c28f354a5d4395ec520fb73ffbf
    image: 火烧云.png
~~~

### 首页欢迎+抖动效果
**位置**`/layouts/index.html`
~~~html
<!-- 首页欢迎字幅 -->
<div class="welcome">
    <p style="font-size: 2rem; text-align: center; font-weight: bold">
        <span class="shake"> 👋 </span>
        <span class="jump-text1" > Welcome</span>
        <span class="jump-text2"> To </span>
        <span class="jump-text3" style="color:#b1ce9d">de</span><span class="jump-text4" style="color:#e99312"></span
        ><span class="jump-text5" style="color:#b1ce9d">de</span><span class="jump-text6" style="color:#e99312"></span
        ><span class="jump-text7" style="color:#b1ce9d">duud</span>
        <span class="jump-text8" style="color:#b1ce9d">'s</span>
        <span class="jump-text9" style="color:#b1ce9d">Blog</span>
    </p>
</div>
~~~

### 修改全站字体
**位置**`layouts/partials/head/custom.html`
~~~html
<style>
    :root {
        --article-font-family: "Noto Serif SC", var(--base-font-family);
    }
</style>
<script>  // 正文自重300，标题字重700
		(function () {
		    const customFont = document.createElement('link');
		    customFont.href = "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap";
		
		    customFont.type = "text/css";
		    customFont.rel = "stylesheet";
		
		    document.head.appendChild(customFont);
		}());
</script>
~~~


### 修改站点的图标

选择想要的图片转换为ico，在config.yaml中的文件中，配置如下内容
[ICO转换器](https://convertio.co/zh/ico-converter/)
~~~yaml
params:
    mainSections:
        - post
    featuredImageField: image
    rssFullContent: true
    favicon: /img/1.ico
~~~

### 修改博客背景颜色
**位置**：assets\scss\variables.scss
~~~scss
    --body-background: #f4f9fb;
~~~


### 头像旋转
位置在`/assets/scss/custom.scss`

```scss
.sidebar header .site-avatar .site-logo {
  transition: transform 1.65s ease-in-out; // 旋转时间
}

.sidebar header .site-avatar .site-logo:hover {
  transform: rotate(360deg); // 旋转角度为360度
}
```

### 行内代码颜色
#e96900
位置：`assets/scss/custom.scss`
~~~scss
/* 行内代码颜色 */
:root {
    // 行内代码背景色
    --code-background-color: #f8f8f8;
    // 行内代码前景色
    --code-text-color: #e96900;
}

~~~


### 参考linshow的一些修改内容

` ~\blog\assets\scss\custom.scss`

[linsnow（3）Stack主题的自定义](https://blog.linsnow.cn/p/modify-hugo/)
### 反面教材
- 在这个下面修改了字体，但是修改字体内容只有一部分内容。特别特别的丑
~~~scss
@font-face {
  font-family: SmileySans; /* 名称自定义 */
  src: url('/fonts/寒蝉手拙体_猫啃网.ttf') format('truetype');
  /* 建议采用woff2格式，以降低容量大小，提高加载速度 */
}
body {
  font-family: SmileySans;
}
//怎么设置所有文章都是这样子的呢？？现在这样子也太丑了吧？？
~~~
- 外部链接显示小小图标，无需锦上添花

## 🌍240808
### 魔改ing
.ico是 小小小小小的图标
[【Hugo】Stack主题的使用记录\_hugo stack-CSDN博客](https://blog.csdn.net/2201_75288929/article/details/132507563) 讲的非常详细，从0到1的跨越，一些小细节也涉及到了。
[（3）Stack主题的自定义](https://blog.linsnow.cn/p/modify-hugo/) 圆角的可爱的

[介绍一款Hugo主题皮肤stack的魔改版主题 - 简书](https://www.jianshu.com/p/f5377332487c)



颜色：




![](Pasted%20image%2020240802170820.png)


### 参考链接
【学习向】
[给 Hugo 博客文章自动生成分享图 | Yuanji's Blog](https://blog.gimo.me/posts/generating-cover-images-for-hugo-blog-posts/)


【欣赏向】
简约美 [Life | reuixiy](https://io-oi.me/life/)
很有趣，小表情很多，mac小表情：[L1nSn0w's Blog](https://blog.linsnow.cn/) 