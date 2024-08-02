---
title: hugo+obsidian搭建个人博客记录1️⃣
draft: false
description: 🎉🎉🎉20240723-20230802 终于终于终于终于搭建出来差不多像模像样的博客啦！
featured: true
image: b1fcd2f7-412b-4375-8dc3-e6314b3b4f62.jpeg
keywords: 
slug: 
canonicalURL: 
categories:
  - 博客建设
math: true
tags:
  - hugo
  - obsidian
date: 2024-08-02
---

## 起步
搭建博客在很早很早以前都写在便签备忘录里面，但是总是没有动手开始做，一次又一次搁浅直到上一周看到一篇设计师姐妹搭建作品集艺术向的博客，非常心动。于是就有这个`dededuud'blog`啦！

【平台选择】

依旧延续自己举棋不定的风格，有“搭建博客”这个想法后第一步是全平台狂搜：搭建博客的平台选择；WordPress优缺点；Hugo优缺点；Hexo优缺点；相关主题的美观程度；友邻博客的浏览……

考虑到：

1. 重度拖延症要赶紧动起来，所以希望平台搭建简洁方便
2. 相对主题好看，不需要太冗杂，搭建后我这个懒蛋过了这个时期后其实不太会探索更多内容。
3. 稳定，不想再重复搭建TAT

基于这几点，综合来看选择了`hugo`。下面是自己的搭建过程，注意：没有详细的操作内容，可以点进去参考链接查看具体内容，大部分是个人向配置记录与报错解决。看起来我真的很多错误处理

## hugo搭建

主参考教程如下：
### 参考链接

[我的Hugo博客搭建记录 - 少数派](https://sspai.com/post/87431)

[# 【阿里云服务器】学生党免费白嫖阿里云服务器10个月教程](https://zhuanlan.zhihu.com/p/689914889)

[官方文档：# 从域名注册到搭建网站](https://help.aliyun.com/zh/dws/user-guide/quickly-register-a-new-domain-name?spm=a2c4g.11174283.0.0.5129de53sB9hBK)

[备案](https://beian.aliyun.com/pcContainer/myorder?spm=a2c4g.11186623.0.0.74e75817Bq0MFc&accounttraceid=7d8f5e923dd7432787df19b8a5de406adndu)
### 搭建过程
具体搭建过程如下：

1. 下载：hugo、git、vscode、obsidian（已有）
	-  git配置，与github链接
	-  购买阿里云服务器（上述链接，学生免费获得10个月）（后续没有用到，托管到github上）
	-  购买阿里云域名（花费35元）（至今还没有审核成功）
2. 基本配置：使用模版`stack`，下载复制相关文件夹。修改，`config.yaml`，更新自己设置
	- ⚠️ 任何修改尽量不要在主题文件夹修改，免得以后忘了都修改过什么内容，更新主题的时候把自己配置的内容覆盖了。
	- `hugo server`
	- localhost:1313 预览
	- 文章`yaml`模版设置
3. 部署到Vercel
	- git将文件push到github，github与Vercel联动部署
	- 设置github page（页面效果没有Vercel好看）

### 仓库文件组成

整个网站目录里，几个重要的文件夹：

1. assets：存放图标、图片、js(ts)脚本文件，css(scss)样式文件；
2. content：文章、页面、分类页面等文件；
3. layouts：网页布局文件；
4. public：hugo 编译后的网站文件夹；
5. static：图片等静态文件；
6. themes：主题文件夹。

个人的文件夹tips

1. obs_sctipts 目录用于存放 QuickAdd 脚本文件
2. `page`修改page下的`index.zh-cn` 中title可以更改导航栏名称
3. 文章的图片都存在`static`下。这样可以实现在obsidian中写文章，粘贴图片，自动放置在static文件夹下，obsidian内可以看到图片且博客也可以展示图片，而且不需要再手动更改👍

有两种pictures等文件存放方式比较建议。

1. `post`文件夹下一篇文章是一个文件夹，文件夹里文章文件命名为`index.md`，所有图片文件都存放在这个文件夹下，引用时直接用图片名就可以`![图名](image.png)`
2. `post`文件夹下直接存放 Markdown 文件，图片存储在`static/images`文件夹下，引用时`![图名](/images/image.png)`（obsidian）

```
dedeblog
├── archetypes                内容模版目录
│   └── default.md            新建文章的模版
├── assets                    存放图标、图片、js，css
│   └── icons                 svg的小图标类
│   └── images                存放头像
│   └── scss                  一些css文件的配置情况（可以修改背景颜色）
├── content                   内容目录
│   └── cagtegories           分类的页面目录
│   └── page                  存放左侧导航栏的一些配置
│   └── post                  文章md文章
├── data                      数据目录
├── i18n                      数据目录
├── layouts                   网站模版目录
│   ├── 404.html              404面目模版
│   ├── _default              默认模版目录
│   │   ├── baseof.html       基础模版
│   │   ├── list.html         列表页面模版
│   │   └── single.html       单页面模版
│   ├── index.html            首页模版
│   └── partials              模块模版目录
│       ├── head.html         HEAD模块模版
│       ├── head_fonts.html
│       ├── hook_head_end.html
│       └── sidebar.html
├── obs_sctipts               Obsidian的一些建设内容，自动化内容
├── static                    静态文件目录（存放文章页面的一些图片）
└── themes                    主题目录
└── public                    hugo 编译后的网站
└── .gitignore                上传到仓库内忽略的内容
└── config.yaml              
└── deploy.sh                 备份的半自动文件
```

### 文章模版
具体来说，`draft`是否为草稿，`image`同样引用/static下的图片。`date`手动选择（本来有代码可以根据文章生成时间自动填写，但是自己总是报错，于是放弃）
~~~
---
title: 标题
draft: true
description: 小标题
featured: true
image: 封面
keywords: 
slug: 
canonicalURL: 
categories:
  - 分类
math: true
tags:
  - 测试
date:
---
~~~

### Github Action自动上传
[# Hugo 博客写作最佳实践](https://zhuanlan.zhihu.com/p/497671233)
[linsnow部署hugo网站](https://blog.linsnow.cn/p/deploy-hugo/)

参考上述内容整合后，可以实现功能如下：
1. dedeblog用于存放hugo博客生成的文件；dedeblog-file 用于存放原码。
2. 自动化上传github，使用deploy.sh 文件（通过 git bash），自动上传加载。
3. 双击打开运行`deploy.sh`即可自动推送文件到仓库,以后写完博客或修改博客后都需要运行一下`deploy.sh`,才能部署到云
### 错误一览
#### 除了主页外，其他页面的头像无法正常显示
呜呜呜太感动了，太感动了，居然搜索到同款疑问了，真的困扰我很久。

[site-avatar无法正常显示 · Issue #977 · CaiJimmy/hugo-theme-stack · GitHub](https://github.com/CaiJimmy/hugo-theme-stack/issues/977)

把头像放到 `assets` 文件夹下，然后 `local = true`或者改成 `src = "/images/favicon.png"
## 链接Obsidian
### 第一次尝试
[我的Hugo博客搭建记录](https://www.morick66.com/p/20240321055915/#%E9%A1%B5%E9%9D%A2%E6%B7%BB%E5%8A%A0memos)
部分内容看不太懂（尤其是添加按钮阶段，总觉得特别奇怪）？困惑？以及感慨一下Dataview功能的可塑性。

### 第二次尝试
[hugo博客一键上传+自动创建文章+静态资源图床建设](https://zhuanlan.zhihu.com/p/497671233)

[hugo仪表盘](https://zhuanlan.zhihu.com/p/497682431)

[集成管理+增加按钮](https://zhuanlan.zhihu.com/p/680539092)

[Markdown博客文章写作最佳体验，hugo+Obisidian+Vscode-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2122085)

[Hugo 博客写作最佳实践 | 胡说](https://blog.zhangyingwei.com/posts/2022m4d11h19m42s28/) 

以上文章链接均是出自于一个作者的系列文章，整体看下来受益匪浅。
目前自己obsidian的看板如下（还没有过多美化），按钮只有`新建博客`一项，可以自动新建一篇固定模版的md文件到/content/post/路径下，可以根据勾选项draft，选择是否发布（超级爽）
![](Pasted%20image%2020240802154512.png)

### 已有插件
该仓库是新建的一个仓库，没有下载过多美化的插件，现在保留的都是支持功能+非常实用。

1. Auto Link Title
2. Buttons
3. Charts
4. Commander
5. Dataview
6. Emoji Toolbar
7. Homepage
8. QuickAdd 
### 错误一览

#### 自动生成文件报错
通过`quickadd`一键生成文件总是报错：×放弃，自动化生成文件都是报错
~~~
plugin:quickadd:17783 QuickAdd: (ERROR) failed to run user script NewBlog. Error:

Command failed: hugo new posts/2024-7-30day17h7m0s.md
'hugo' �����ڲ����ⲿ���Ҳ���ǿ����еĳ���
���������ļ���
~~~
√没放弃！！！发现是没有hugo的环境，配置了绝对环境后，就ok了！真的流眼泪了TAT，非常流眼泪。居然这样就解决了呜呜呜呜呜呜
~~~js
## 之前

const { stdout, stderr } = await exec('hugo new posts/' +fileName,{cwd: app.fileManager.vault.adapter.basePath});


## 更改后

const hugoPath = "D:\\hugo\\bin\\hugo.exe"; // 替换为hugo的实际路径
const { stdout, stderr } = await exec(`${hugoPath} new post/${fileName}`, {
    cwd: app.fileManager.vault.adapter.basePath,
  }); 
~~~
注意一点：stack模版中！存储文章的地方是`post`而不是`posts`!!!有部分错误的原因来源于此。

#### 博客中一级与二级目录一致，无区分
取消一级目录，文章直接从二级目录开始写起
![](Pasted%20image%2020240802162214.png)
#### dateview识别不出来前缀
`---`后面不要有空格！！！！
冒号后面要有空格！！
#### 无法安装插件“GIT”
为什么？W五方面？为什么？为什么？为什么？为什么？？？？？？



why？？？
奥，，网太慢了
#### git插件和教程不一致
“Git is not ready. when all settings are correct you canconfigure auto backup, etc.
I am having the same issue, even though the vault opened is cloned from my repo. This is what it shows me when I start Obsidian -”

[Site Unreachable](https://forum-zh.obsidian.md/t/topic/33184)
呜呜呜感谢！应该是这样子的：
在Custom Git directory path 填上安装路径，忘记安装路径可以运行下面代码
~~~shell
D:\dede-downdown\Git\cmd\git.exe
where git
~~~
#### 尝试obsidian gitpull自动化，并放弃
zhuanlan.zhihu.com/p/657924375](https://zhuanlan.zhihu.com/p/657924375)

[obsidian使用github同步踩坑教程\_obsidian git-CSDN博客](https://blog.csdn.net/pythondh1/article/details/134242400)

push 不上去啊 放弃了用git 一键推送，不要东一榔头西一棒槌

## 图床
自己刚开始抱希望于单独托管在图床，通过外链引用，这样子比较方便，速度也快。于是经过漫长的尝试后，终于放！弃！啦！又重新回归obsidian本地存储的方式。这里是记录探索过程，希望对大家有一定的参考意义。
### github+picgo
[将 Obsidian 结合 PicGo 和 Image Auto Upload 插件，并使用 GitHub 作为图床\_服务软件\_什么值得买](https://post.smzdm.com/p/a5x72ov8/)

github图片显示太慢了，不连梯完全加载不出来，影响阅读体验。❌

### gitee+picgo
[Obsidian+PicGo+Gitee搭建免费图床\_gitee 图床-CSDN博客](https://blog.csdn.net/m0_49448331/article/details/136899591)

[使用gitee搭建图床，并解决防盗链问题\_gitee图床-CSDN博客](https://blog.csdn.net/qq_57581439/article/details/129251624?spm=1001.2014.3001.5506)

**进程**

1. 已经下载node.js（配置好环境）✔️
2. 搭建图床仓库，gitee+picgo✔️
3. 在obsidian 中下载第三方插件 image auto upload plugin✔️
4. 防盗链，在博客完全显示不了图片❌
5. 尝试解决❌ out
**小tips**

从现在开始，你所有 Obsidian 中的图片，都会自动上传到图片，在 Obsidian 中，仅仅保存一个链接。那么问题来了：我之前notes中的图片怎么上传呢？你可以以文章为单位，在 Obsidian 中，按下命令行快捷键 Ctrl / Command + P，并选择 "upload all images"。
### 阿里云/七牛云+picgo
[解决Typora+阿里云+PicGo部分图片上传失败的问题 - 最爱喝开水 - 博客园](https://www.cnblogs.com/chuangblog/p/17654579.html)

太贵了我是穷鬼🥺
### MinIO
[使用Docker搭建分布式文件存储系统MinIO\_minio docker-CSDN博客](https://blog.csdn.net/qq_57581439/article/details/126192492?spm=1001.2014.3001.5502)

[Typora+PicGo+Minio搭建博客图床\_minio图床-CSDN博客](https://blog.csdn.net/qq_60308100/article/details/134651592?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522172248319116800182794990%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=172248319116800182794990&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-134651592-null-null.142^v100^pc_search_result_base2&utm_term=MinIO%E5%9B%BE%E5%BA%8A)

仅阅读未实践

### 尝试上传阿里服务器
[阿里云ECS每天一件事D1：配置SSH - 雨帝夜泪 - 博客园](https://www.cnblogs.com/bashenandi/p/linux-aliyun-ecs-ssh.html)

[使用 Hugo 和阿里云ECS搭建个人站\_hugo server -d ip-CSDN博客](https://blog.csdn.net/BAR_WORKSHOP/article/details/121078946?ops_request_misc=&request_id=&biz_id=102&utm_term=hugo%20%E9%98%BF%E9%87%8C%E4%BA%91&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-121078946.142^v100^pc_search_result_base2)（主要）

[使用aliyun+hugo搭建个人博客 - LynneHuan - 博客园](https://www.cnblogs.com/LynneHuan/p/17822201.html#2023-04-05%E6%9B%B4%E6%96%B0)

放弃了，就目前这样挺好的，我很满意（缓缓躺下
### 错误一览
没想到吧，连放弃的内容都有错误一览
#### node.js测试时，npm下载内容不成功
[Node.js安装及环境配置（超详细！保姆级！！）\_nodejs安装及环境配置-CSDN博客](https://blog.csdn.net/HL031125/article/details/138816270)

发现是网络问题，配置镜像网站
### obsidian picgo上传图床失败

设置完图床点击 设为默认图床


## 魔改ing
.ico是 小小小小小的图标
[【Hugo】Stack主题的使用记录\_hugo stack-CSDN博客](https://blog.csdn.net/2201_75288929/article/details/132507563) 讲的非常详细，从0到1的跨越，一些小细节也涉及到了。
[（3）Stack主题的自定义](https://blog.linsnow.cn/p/modify-hugo/) 圆角的可爱的

### 参考链接
【学习向】
[给 Hugo 博客文章自动生成分享图 | Yuanji's Blog](https://blog.gimo.me/posts/generating-cover-images-for-hugo-blog-posts/)


【欣赏向】
简约美 [Life | reuixiy](https://io-oi.me/life/)
很有趣，小表情很多，mac小表情：[L1nSn0w's Blog](https://blog.linsnow.cn/) 