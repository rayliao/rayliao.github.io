---
title: Windows下运行yarn exit code 128
tags:
  - 技术
pubDatetime: 2020-07-27 12:00:56
description: 项目运行 yarn 安装依赖报 128 错。昨晚 11 点多尝试了几次，今天早上起来又尝试了几次。在 google 找答案，issues 上的答案都尝试了一遍。
---

项目运行 yarn 安装依赖报 128 错。昨晚 11 点多尝试了几次，今天早上起来又尝试了几次。在 google 找答案，issues 上的答案都尝试了一遍。

有人说清理缓存，yarn clean cache，不行。
有人说删掉 cache 文件夹，不行。
有人说删掉 yarn.lock，不行。
有人说删掉 node_modules，没安装成功不存在 node_modules。

无答案参考：https://github.com/yarnpkg/yarn/issues/3303

然后以为是 yarn 的问题，换用 npm 去安装，发现依旧还是同样的错误。

接着安装好了 outline，尝试挂 VPN 安装，IT WORKS！

唉，国内的开发环境就是有这些掣肘。想要顺利开发，你得先学习如果科学上网，纯粹科学上网还不行，像 Shadowsocks 这些软件只能用于正常浏览器上网，要想让命令行也穿透，得使用 outline。

——这是最好的时代
