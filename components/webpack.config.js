

var webpack = require("webpack")
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin

module.exports = {
    plugins: [new ExtractTextPlugin("main.css")],
    entry: [__dirname + "/index.js"],
    output: {
        path: "./dist",
        publicPath: "dist/",
        filename: "build.js",
        chunkFilename: "[name].[hash].js"
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: "vue" },
            { test: /\.js$/, loader: "babel?presets[]=es2015", exclude: /mode_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss") },
            { test: /\.scss$/, loader: "style!css!sass!postcss" }
        ]
    },
    postcss: function () {
        return [require("autoprefixer")]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.common.js"
        }
    },
    vue: {
        loaders: {
            css: "style!css!autoprefixer"
        },
		autoprefixer: {
			browsers: ['last 20 versions']
		}
    },
	babel: {
        presets: ['es2015']
    }
}












