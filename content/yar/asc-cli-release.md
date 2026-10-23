---
title: "App Store Connect 点到手软？这个开源 CLI 能把发版时间砍掉一大截"
date: "2026-10-16"
description: "开源命令行工具 asc 把上传、TestFlight、元数据和送审收进脚本，适合经常发 iOS 的人。"
tags: [iOS, 开源, 开发者工具, CLI]
---

发过 iOS App 的人，大概都跟 App Store Connect 网页较过劲。上传构建、改一版多语言文案、拖几张截图、再把包丢进 TestFlight 或正式审核，每一步都要在浏览器里点来点去。版本一多、语言一多，窗口就容易乱，上次改过哪一种语言的副标题，隔两天自己也未必记得清。

后来有人把这套流程做成了命令行工具，名字叫 App Store Connect CLI，命令是 `asc`。仓库在 GitHub 上，文档站是 [docs.asccli.sh](https://docs.asccli.sh)。我翻完 README、安装页和 FAQ 以后，觉得它值得单独写一篇。下面讲清楚它是什么、能干啥、怎么装、怎么用。命令以项目文档和 `asc --help` 为准，版本会变，别把文章当手册背。

## 它是什么

`asc` 是一个面向 App Store Connect API 的开源命令行工具，用 Go 写成，发布成单文件二进制，协议是 MIT。它能覆盖 iOS、macOS、tvOS、visionOS 的常见发布动作。FAQ 写得很干脆，这是非官方项目，跟 Apple 没有隶属、背书或赞助关系，只是在用 Apple 公开提供的那套 API。

你可以把它想成网页后台的脚本化入口。网页上能做的事，很多都可以改成一条命令、一段 CI，或者交给 agent 去跑。项目里还有 `migrate`，能在 `asc` 的元数据文件和 fastlane 格式之间搬来搬去。有人已经在用 fastlane，可以先迁一部分，不必一上来就把整条流水线掀翻。

## 普通人最有感的几件事

命令全家桶很长，Analytics、Finance、Subscriptions、Apple Ads、StoreKit Server API 都有。第一次看，建议先盯住发版路上天天碰的那几块。

本地打好 `.ipa`（或 macOS 的 `.pkg`）以后，可以用 `builds upload` 推上去，再查处理状态。以前在网页里选文件、干等进度条的人，会立刻明白这步省在哪。TestFlight 这边还能管 beta 组、看反馈和崩溃；更高一层有 `publish testflight`，把上传、等待处理、分发到指定组串成一条路径。正式送审的主路径则是 `publish appstore`，带上版本号和 `--submit --confirm`，会走上传、挂版本、提交审核这一串。会改线上状态的动作通常要你显式确认，这能少踩不少坑。

元数据和本地化可以按目录管文案、关键词、各语言字段，再 `metadata apply`。多语言 App 最怕在网页上改漏一栏，文件化以后至少能 diff，也方便在 PR 里互相看一眼。截图从规划、审核目录到上传都有对应命令。机型和尺寸一多，网页拖拽很容易乱，命令行反而适合做成固定流程。签名这边，`signing fetch` 一类命令能把证书、描述文件拉到本地，CI 里尤其管用；完整签名还需要匹配的私钥，文档对这块写得很谨慎，别只当「一键搞定证书」。

自动化上，`workflow` 可以把多步拼成一份本地工作流，GitHub Actions、GitLab、Bitrise、CircleCI 都有现成接入说明。另外还有 `asc install-skills`，会装一套给 agent 用的技能包，覆盖上传、TestFlight、元数据、提交、签名这类常见活。你要是已经在用 AI 写脚本或管仓库，这一块会顺手很多。

省时间的地方很土。它做的事很直接，把你本来就要在网页上重复的动作，变成可复制、可进 CI、可交给 agent 的步骤。

## 怎么装，怎么登录

macOS 和 Linux 上，文档推荐用 Homebrew。

```bash
brew install asc
asc --version
```

没有 brew 时，可以用安装脚本。

```bash
curl -fsSL https://asccli.sh/install | bash
```

Windows 侧 README 提到了 `winget install asc`，不过包可能还没进索引；进不了的话，直接去 GitHub Releases 下签名好的二进制。源码构建要 Go，日常用发布包就够了。

登录靠 App Store Connect API Key，走的是钥匙，不是你日常登录苹果站的那套账号密码。到 [App Store Connect 的 API 密钥页](https://appstoreconnect.apple.com/access/integrations/api) 新建一把钥匙，下载唯一一次的 `.p8` 文件，记下 Key ID 和 Issuer ID。个人钥匙没有 Issuer ID，登录时要加 `--key-type individual`。`.p8` 只能下一次，丢了就得作废重开，先找个稳妥地方存好。

团队钥匙的常见写法如下。

```bash
asc auth login \
  --name "MyApp" \
  --key-id "你的KeyID" \
  --issuer-id "你的IssuerID" \
  --private-key /path/to/AuthKey_xxx.p8
```

CI 或没有钥匙串的环境，加上 `--bypass-keychain`。装好以后建议先跑这几条。

```bash
asc auth status --validate
asc auth doctor
asc apps list --output table
```

第一张表里能看见自己的 App，说明鉴权大体通了。权限按你要做的事选，FAQ 的口径是 App Manager 能覆盖构建、TestFlight、元数据、截图这类常见操作，Admin 权限更大，平时别随便给满权。

## 几条可以照着改的命令

下面的 `123456789`、路径、版本号都是占位符，换成你自己的 App ID 和文件。跑之前用 `asc <命令> --help` 再确认一遍当前参数。

只想先把包送上 TestFlight，可以走高层路径。

```bash
asc publish testflight \
  --app "123456789" \
  --ipa "/path/to/MyApp.ipa" \
  --group "External Testers"
```

也可以拆开做，先上传，再自己管分组。

```bash
asc builds upload --app "123456789" --ipa "/path/to/MyApp.ipa"
asc builds list --app "123456789" --limit 5
```

准备正式提审时，文档给出的主路径长这样。

```bash
asc publish appstore \
  --app "123456789" \
  --ipa "./MyApp.ipa" \
  --version "1.2.3" \
  --submit \
  --confirm
```

元数据可以先在本地目录里改，预览无误再应用。

```bash
asc metadata init --dir "./metadata" --version "1.2.3" --locale "en-US"
asc metadata apply --app "123456789" --version "1.2.3" --dir "./metadata" --dry-run
asc metadata apply --app "123456789" --version "1.2.3" --dir "./metadata"
```

会改线上状态的操作，很多都要 `--confirm`。它用来挡住误操作，免得一条命令直接把审核或资源推出去。大文件上传还可以把 `ASC_UPLOAD_TIMEOUT` 调大一点。拿不准某条命令会不会动线上资源时，先看帮助里有没有 `--dry-run`，有就先演练一遍。

## 适合谁，哪里要收着点

更适合已经有 Apple 开发者账号、经常发版或打 TestFlight 的人。独立开发、小团队、一个人兼产品兼上架，最容易感到网页后台在偷时间。`asc` 把重复劳动收进脚本以后，周末发一版会轻松不少。

还没账号、也没有可上传的构建，先别对着命令表兴奋。工具再顺，要先有 App、有打包产物、有 API 钥匙。没有 Mac 也能装 Linux 版二进制，但 iOS 打包和签名整条开发流程往往还是绕不开苹果那套环境，别指望装一个 CLI 就跳过 Xcode 和证书。

默认会开伪匿名遥测，用来看哪些命令常用、哪里容易挂。不含私钥、账号、App ID、路径这类敏感内容。不想要可以关掉。

```bash
asc telemetry disable
```

或者设 `DO_NOT_TRACK=1`、`ASC_TELEMETRY_DISABLED=1`。

命令面会变，文章里的例子只负责指路。执行前看 `asc --help`，比背这篇更稳。Apple Ads、StoreKit 还要另套 OAuth 或 IAP 钥匙，别和 App Store Connect API Key 混成一把。网页也不会消失，审核留言、部分协议和深层检查，仍要回到苹果的界面处理。

## 收束

`asc` 的价值落在中间那截最磨人的重复劳动上。上传、分发、元数据、截图、签名材料、CI 触发，这些都可以变成可脚本、可复盘、可交给 agent 的步骤。后台点选省下来的时间，通常正好够你回去改产品本身。

我自己还在按文档摸这些命令，没有声称跑通每一条业务线。若你正在自己做 App，或者已经烦透了后台点选，值得先装起来，用 `apps list` 看一眼自己的应用列表。顺手的话，再挑一条 TestFlight 或元数据路径试。

最后再提醒一次。`asc` 是社区开源工具，不是 Apple 官方产品。出问题先查项目文档和 GitHub Issues，别把它当成苹果客服入口。

---

## 参考

- 仓库，[github.com/rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI)
- 安装，[docs.asccli.sh/installation](https://docs.asccli.sh/installation)
- 命令总览，[docs.asccli.sh/commands/overview](https://docs.asccli.sh/commands/overview)
- FAQ，[docs.asccli.sh/resources/faq](https://docs.asccli.sh/resources/faq)
