---
title: SignalR Abortcontroller is Undefined的解决方案
pubDatetime: 2021-08-10 11:53:09
tags:
  - 技术
description: 网站使用了 SignalR，遇到用户使用 Vivo 手机自带的浏览器点击无反应的情况，用数据线连接到电脑，在 Chrome 调试后发现报错：`AbortController is Undefined`。
---

网站使用了 SignalR，遇到用户使用 Vivo 手机自带的浏览器点击无反应的情况，用数据线连接到电脑，在 Chrome 调试后发现报错：`AbortController is Undefined`。Google 找了一圈，发现了这篇文章 [SignalR AbortController is Undefined on Older Browsers](https://consultwithgriff.com/signalr-abortcontroller-undefined/)，基本上解释了原因和给出了解决方案。

是因为旧的浏览器支持 Fetch，但是 AbortController 又不支持，所以才导致这个报错。改下判断即可，只要不支持其中之一，就不要用 FetchHttpClient 的方式。

在`node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js`把

```js
if (typeof fetch !== "undefined" || Platform.isNode) {
```

修改成：

```js
if ((typeof fetch !== "undefined" && typeof AbortController !== "undefined") || Platform.isNode) {
```

因为是直接修改 node_modules，官方库没有做修复，所以需要自己 patch。

1. 安装 patch-package: `yarn add patch-package --dev`
2. 保存模块：`npx patch-package @microsoft/signalr`
3. 在 package.json 的 scripts 添加运行命令：

```json
"scripts": {
    "postinstall": "patch-package",
    "patch-package":"patch-package"
},
```
