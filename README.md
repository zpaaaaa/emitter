# mitt-pubsub

> 一个3KB的发布者/订阅者插件

-   **Microscopic（微小）：** 压缩后小于 3KB
-   **Useful（实用）：** 支持通配符 `"*"` 监听所有事件
-   **Familiar（熟悉）：** 使用与 [Node 的 EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) 相同的概念和命名
-   **Functional（函数式）：** 方法不依赖于 `this`

mitt-pubsub是鉴于mitt上多了异步支持和once方法,并且修改了'*'方法的应用， 是为浏览器设计的，但也适用于任何 JavaScript 运行环境。它没有依赖项，并且支持 IE9+。

## 目录

-   [安装](#install)
-   [使用方式](#usage)
-   [示例与演示](#examples--demos)
-   [API 文档](#api)
-   [贡献代码](#contribute)
-   [许可证](#license)

## 安装

该项目使用 [node](http://nodejs.org) 和 [npm](https://npmjs.com)，如果你本地没有安装，请先去下载安装。

```sh
$ npm install --save mitt-pubsub
```

然后在像 [rollup](http://rollupjs.org/) 或 [webpack](https://webpack.js.org/) 这样的模块打包工具中，可以像其他模块一样使用：

```javascript
// 使用 ES6 模块
import mitt from 'mitt-pubsub'

// 使用 CommonJS 模块
var mitt = require('mitt')
```

UMD 构建版本也通过 [unpkg](https://unpkg.com) 提供：

```html
<script src="https://unpkg.com/mitt/dist/mitt.umd.js"></script>
```

你可以在 `window.mitt` 中找到该库。

## 使用方式

```js
import mitt from 'mitt'

const emitter = mitt()

// 监听某个事件
emitter.on('foo', e => console.log('foo', e) )

// 监听一次某个事件
emitter.once("foo1", (e) => {console.log('foo', e)});

// 触发一个事件
emitter.emit('foo', { a: 'b' })

// 触发多个事件
emitter.emit(['foo','too'], { a: 'b' })

// 给所有事件发送消息
emitter.emit('*', { a: 'b' } )

// 清除所有事件
emitter.clear()

// 使用 handler 引用：
function onFoo() {}
emitter.on('foo', onFoo)   // 添加监听器
emitter.off('foo', onFoo)  // 移除监听器
```

## API 文档

<!-- 由 documentation.js 自动生成。更新文档请修改源码 -->

### 表格目录

-   [mitt](#mitt)
-   [all](#all)
-   [on](#on)
    -   [参数](#parameters)
-   [off](#off)
    -   [参数](#parameters-1)
-   [emit](#emit)
    -   [参数](#parameters-2)

### mitt

Mitt：一个小型（约 2.5kb 字节）的函数式事件发射器 / 发布订阅模型。

返回 **Mitt**

### all

一个 Map，键是事件名，值是注册的处理函数。

### on

为指定类型的事件注册一个处理函数。

#### 参数

-   `type` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol))** 要监听的事件类型，或 `'*'` 表示监听所有事件
-   `handler` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 响应事件时调用的函数

### off

移除指定类型的事件处理函数。
如果省略 `handler`，则会移除该类型下的所有处理函数。

#### 参数

-   `type` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol))** 要移除 `handler` 的事件类型，或 `'*'`
-   `handler` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)?** 要移除的处理函数

### emit

触发指定类型的事件的所有处理函数。
如果存在，`'*'` 处理函数会在匹配类型的处理函数之后被调用。

注意：手动触发 `'*'` 处理函数不受支持。

#### 参数

-   `type` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol))** 要触发的事件类型
-   `evt` **任意类型？** 可以传入任意值（推荐对象），并传递给每个处理函数

## 贡献代码

首先，感谢你花时间来贡献！
现在，请花点时间确保你的贡献对所有人来说都有意义。

### 报告问题

发现了问题？想新增功能？首先看看你的想法或问题是否已经被 [报告过](../../issues)。
如果没有，请 [新建一个清晰且描述详尽的问题](../../issues/new)。

### 提交 Pull Request

Pull Request 是最受欢迎的贡献方式，请确保它们范围明确，避免提交不相关的改动。

-   Fork 它！
-   克隆你的 fork：`git clone https://github.com/<your-username>/mitt`
-   进入克隆后的目录：`cd mitt`
-   创建新分支用于开发新功能：`git checkout -b my-new-feature`
-   安装必要的开发工具：`npm install`
-   开始进行你的修改。
-   提交你的更改：`git commit -am 'Add some feature'`
-   推送到远程分支：`git push origin my-new-feature`
-   提交一个 Pull Request，并详细说明你的更改。
