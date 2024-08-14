---
title: 搭建个人博客记录3️⃣ 代办事项与琐碎小tips
draft: true
description: 小标题
featured: true
image: 封面
keywords: 
slug: 
canonicalURL: 
categories:
  - 博客建设
math: true
tags:
  - hugo
date: 2024-08-13
---
## 😉代办事项


## 🤦琐碎小tips

### vercel域名解析后仍打不开网站
其实很早咱们大陆就阻断了 Vercel 域名，但通过自购域名解析还可正常访问。但在这个假期该方法也被多地屏蔽，只有个别地区能正常访问。

用户端处理的话，手工设置下DNS为8.8.8.8就可以访问。

作为站长，如何优化自己的网站呢。根据官方文档的说明，只需要在做CNAME配置的时候，调整一下就可以了，不要把CNAME的记录值设置为自动分配的那个域名，而是使用cname-china.vercel-dns.com即可。

如果还是不行，那么继续设置A记录：76.223.126.88。

如果依然不行的话，那么你可以通过将整个域名解析托管到 Cloudflare ，肯定是能解决的。

IP : 76.76.21.21 改成 76.223.126.88
--------------------------------------------------------------------------------.
CNAME : cname.vercel-dns.com 改成 cname-china.vercel-dns.com

### 解决git推送卡在writing objects的情况
[解决git推送卡在writing objects的情况\_writing objects: 卡住-CSDN博客](https://blog.csdn.net/qq_41461536/article/details/129767886)
~~~shell
ipconfig /flushdns
~~~
### push代码到仓库出错
出现下述错误内容：
~~~shell
send-pack: unexpected disconnect while reading sideband packet
fatal: the remote end hung up unexpectedly
~~~
原因：http.postBuffer默认上限是1m，所以我们将上限变大就可以了

解决办法：
~~~shell
git config --global http.postBuffer 524288000
~~~
### push代码到仓库权限不够
出现下述错误内容：
~~~shell
Please make sure you have the correct access rights
and the repository exists.
~~~
在git中输入命令：
~~~shell
 ssh -T git@github.com 
~~~

然后耐心等待，过一会出现一大堆英文。后面括号内会让你输入command（yes/no）。

输入命令：yes

按回车。

然后就会提示你成功了。

最后退出git重新进入路径提交或者git clone一下就可以了。