fis.config.set('settings.spriter.csssprites', {
	//开启模板内联css处理,默认关闭
	htmlUseSprite: true,
	//默认针对html原生<style></style>标签内的内容处理。
	//用户可以通过配置styleTag来扩展要识别的css片段
	//以下是默认<style></style>标签的匹配正则
	styleReg: /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig
		//**styleReg规则**
		//1. 默认不配置styleReg，仅支持html中默认style标签中的css内容
		//2. 配置styleReg时候，仅支持styleReg匹配到的内容。
		//3. styleReg正则必须捕获三个分组，
		//     $1为：开始标签（start tag），
		//     $2为：内容(content) ,
		//     $3为：结束标签(end tag)
})

// 启用 fis-spriter-csssprites 插件
fis.match("::package", {
	spriter: fis.plugin("csssprites", {
		//使用矩阵排列方式，默认为线性`linear`
		layout: 'matrix',
		margin: 20
	})
})

//autoprefixer 用到的包 fis-postprocessor-autoprefixer

var fileSrc = "" // "static/"
var src = "" //"/mobile/"
var name = "" //站点的文件名

var getTime = +new Date

// 对 CSS 进行图片合并
fis.match("*.{css,scss}", {
		useSprite: true // 给匹配到的文件分配属性 `useSprite` 
	})
	//sass预处理,npm包fis3-parser-node-sass
	.match("*.scss", {
		postprocessor: fis.plugin("autoprefixer"),
		parser: fis.plugin("node-sass", {
			sourceMap: false
		}),
		//useSprite: true,  // 给匹配到的文件分配属性 `useSprite`
		rExt: ".css",
		release: "/" + fileSrc + "$0"
	})
	//less预处理,npm包fis-parser-less
	.match("*.less", {
		postprocessor: fis.plugin("autoprefixer"),
		parser: fis.plugin("less"),
		rExt: ".css",
		//useSprite: true,  // 给匹配到的文件分配属性 `useSprite`
		release: "/" + fileSrc + "$0"
	})
	.match("*.js", {
		release: "/" + fileSrc + "$0"
	})
	.match("*.css", {
		postprocessor: fis.plugin("autoprefixer"),
		//useSprite: true,  // 给匹配到的文件分配属性 `useSprite`
		release: "/" + fileSrc + "$0"
	})
	.match("*.{png,jpg,gif}", {
		release: "/$0"
	})
	.match('*.html:css', { //内嵌的 css  添加前缀
		//useSprite: true,  // 给匹配到的文件分配属性 `useSprite`
		postprocessor: fis.plugin("autoprefixer")
	})
	.match("*.html", {
		release: "/$0"
	})
	.match("*.html:img", {
		
	})
	.match('/css/(*.png)', {
		release: '/images/$0'
	})
	.match('/(*.png)', {
		release: '/images/$0'
	})
	//压缩图片(没觉得压了多少，还不如用gulp的gulp-imagemin)
	.match("*.png", {
		optimizer: fis.plugin("png-compressor")
	})

// vue组件本身配置
fis.match('vue/**.vue', {
	isMod: true,
	rExt: 'js',
	useSameNameRequire: true,
	//npm包fis3-parser-vue-component
	parser: fis.plugin('vue-component', {
		cssScopeFlag: 'vuec'
	})
})

// vue组件中产出的css处理。
fis.match('(vue/**.css)', {
	release: 'css/$1'
})

// vue组件中的less片段处理
fis.match('vue/**.vue:less', {
	rExt: 'css',
	parser: fis.plugin('less')
})

// vue组件中的sass片段处理
fis.match('vue/**.vue:scss', {
	rExt: 'css',
	parser: fis.plugin('node-sass')
})

// vue组件中js片段处理。
fis.match('vue/**.vue:js', {
	rExt: 'js',
	parser: [
		//npm包fis-parser-babel-6.x
		fis.plugin('babel-6.x', {
			//presets: ['es2015-loose', 'react', 'stage-3']
		}),
		//npm包fis3-parser-translate-es3ify
		fis.plugin('translate-es3ify', null, 'append')
	]
})

fis.media("min")
	.match("*.css", { //压缩 css
		postprocessor: fis.plugin("autoprefixer"),
		optimizer: fis.plugin("clean-css"),
		rExt: ".min.css"
	}).match('*.html:css', { //压缩内嵌的 css
		postprocessor: fis.plugin("autoprefixer"),
		optimizer: fis.plugin('clean-css')
	}).match(src + "*.js", { //压缩 js
		optimizer: fis.plugin("uglify-js"),
		rExt: ".min.js"
	}).match('*.html:js', { //压缩内嵌的 js 
		optimizer: fis.plugin('uglify-js')
	})

/*
当文件需要发布到线上时，才需要给资源图片替换路径
发布的命令例子: fis3 release prod -d ./output
*/
fis.media("prod")
	.match("(*/*.png)", {
		domain: "http://image.qg8.com",
		url: "/" + name + "xz/$1"
	})
	.match("(*/*.{jpg,gif})", {
		domain: "http://image2.qg8.com",
		url: "/" + name + "xz/$1"
	})
	.match('/css/(*.{png,jpg,gif})', {
		domain: "http://image3.qg8.com",
		url: "/" + name + "xz$0"
	})
	.match('/(*.png)', {
		domain: "http://image4.qg8.com",
		url: "/" + name + "xz$0"
	})
	.match('/images/(*.{png,jpg})', {
		domain: "http://image5.qg8.com",
		url: "/" + name + "xz/$1"
	})

//添加时间戳 大多数人以md5戳的方式，如下
fis.match("*.{css,png,js,jpg}", {
	//useHash: true
	query: "?v=" + getTime
})

/*
//加md5戳
fis.match('*.{js,css,jpg,png}', {
  useHash: true
})
*/

//开发环境下不需要压缩、合并、hash时，使用media方式
fis.media('debug').match('*.{js,css,png,jpg,gif}', {
	useHash: false,
	useSprite: false,
	optimizer: null
})

fis.match('/abc/**', {
	// 设置 release 为 FALSE，不再产出此文件
	release: false
})