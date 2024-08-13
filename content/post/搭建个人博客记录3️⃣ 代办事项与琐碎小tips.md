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
### 解决git推送卡在writing objects的情况
[解决git推送卡在writing objects的情况\_writing objects: 卡住-CSDN博客](https://blog.csdn.net/qq_41461536/article/details/129767886)

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
