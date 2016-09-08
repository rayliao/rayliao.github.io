# rayliao

个人网站的代码

---

**20160908**

测试下，能不能在本地某个分支修改的文件或者某个文件夹推送到远程的另外一个分支。

---

**20160403**

果然东西还是要经常使用才能记得，`webpack`每次都只是示例的时候用一下，过一段时间又忘记了要怎么用了。

`package.json`的`scripts`原来是这样子用的，例如：

```
"scripts": {
	"build": "webpack",
	"dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build",
	"test": "echo \"Error: no test specified\" && exit 1"
},
```

命令行就可以输入`npm run build`来运行`webpack`的命令，这样可以不用理会里面是用哪种工具。

修改文件动态刷新页面，需要在入口那里配置`webpack/hot/dev-server`和`webpack-dev-server/client?http://localhost:8080`：

```
entry: [
	'webpack/hot/dev-server',
	'webpack-dev-server/client?http://localhost:8080',
	path.resolve(__dirname, 'app/index.jsx')
],
```