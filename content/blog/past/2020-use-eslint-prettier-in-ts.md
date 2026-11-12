---
title: 在TypeScript项目使用ESLint和Prettier
pubDatetime: 2020-05-06 14:41:05
tags:
  - 技术
description: TypeScript 语法规则和代码风格的检查工具，主要有两种，TSLint 和 ESLint。TSLint 只能用于 TypeScript 的检查，ESLint 同时支持 JavaScript 和 TypeScript。
---

> 翻译文章，[原文地址](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)

TypeScript 语法规则和代码风格的检查工具，主要有两种，TSLint 和 ESLint。TSLint 只能用于 TypeScript 的检查，ESLint 同时支持 JavaScript 和 TypeScript。

在[TypeScript 2019 线路](https://github.com/Microsoft/TypeScript/issues/29288#developer-productivity-tools-and-integration)中，TypeScript 核心团队解释说 ESLint 具有比 TSLint 更高性能的体系结构，并且在为 TypeScript 提供编辑器整合时，他们只会专注于 ESLint。因此，我建议使用 ESLint 来整理 TypeScript 项目。

### 在 TypeScript 项目中设置 ESLint

首先安装所有需要的依赖：

```
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

> 如果项目是使用 create-react-app 搭建，eslint 已经通过 react-scripts 包含在依赖中，因此无需额外通过 yarn 去安装。

- eslint：ESLint 的核心库
- @typescript-eslint/parser：允许 ESLint 转换 TypeScript 代码的解析器
- @typescript-eslint/eslint-plugin：包含一堆特定于 TypeScript 的 ESLint 规则的插件

接下来，在项目根目录创建一个配置文件：`.eslintrc.js`，以下是示例配置：

```js
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
```

> 建议使用 js 文件替换 json 文件，因为 js 文件支持写上注释，能更好的描述规则。

如果项目使用 react，需要安装依赖`eslint-plugin-react`，上面的配置要改为：

```js
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
```

最终，在你的配置文件中，你自行决定你要导入什么规则，以及你要使用哪些规则。

### 加入 Prettier 完美契合

Prettier 能很好的格式化你的代码，跟 ESLint 完美契合使用，安装依赖：

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev
```

- prettier: prettier 核心库
- eslint-config-prettier: 禁用可能会跟 Prettier 冲突的 ESLint 规则
- eslint-plugin-prettier: 把 Prettier 作为 ESLint 的规则使用

在根目录创建配置文件`.prettierrc.js`，用来配置 prettier，以下是配置示例：

```js
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 120,
  tabWidth: 4,
};
```

然后`.eslintrc.js`中的 extends 数组需要加上两行：

```js
"prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  "plugin:prettier/recommended"; // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
```

> 确保`plugin:prettier/recommended`放在 extends 数组的最后。

使用 eslint-plugin-prettier，把 prettier 作为 eslint 规则使用的好处是，代码可以使用 ESLint 的`--fix`选项自动修复。

### 在 VS Code 中自动修复代码

当一个文件被保存的时候，你的编辑器会自动运行 ESLint 的自动修复命令`eslint --fix`，是一个良好的开发体验。VS Code 可以在`settings.json`文件配置保存自动修复的功能：

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### 用命令行运行 ESLint

可以在`package.json`中添加运行 ESLint 的命令：

```json
{
  "scripts": {
    "lint": "eslint '*/**/*.{js,ts,tsx}' --quiet --fix"
  }
}
```

可以使用 npm run lint 或 yarn lint 从命令行运行以上脚本。此命令在所有的.js，.ts 和.tsx（使用 react）文件上运行 ESLint 检查。可以自动修复的都会直接自动修复，有些无法修复的，会在命令行中显示出来。

### 阻止有 ESLint 错误的代码被提交

为了确认所有提交到 git 上的代码都没有错误，可以使用 lint-staged 工具，配合 husky 食用，可以在 git 的 commit 之前检查代码的正确性，如果存在错误，则无法提交，在`package.json`配置如下：

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,ts,tsx}": ["eslint --fix"]
  }
}
```

> 大概就是这样，写文档好累鸭，我还只是看着原文翻译过来而已了。
