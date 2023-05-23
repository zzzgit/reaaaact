const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")

module.exports = {
	entry: "./src/main.tsx",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "built"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "static", "index.html"),
		}),
		new FaviconsWebpackPlugin("./static/favicon.png"),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "built"),
		},
		historyApiFallback: true,
		port: 3000,
	},
	module: {
		// exclude node_modules
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ["ts-loader"],
			},
		],
	},
	// pass all js files through Babel
	resolve: {
		extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
	},
}
