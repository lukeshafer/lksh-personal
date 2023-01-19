// @ts-check
const postcssJitProps = require("postcss-jit-props");

module.exports = {
	plugins: [
		require("autoprefixer"),
		require("postcss-nesting"),
		postcssJitProps(require("open-props")),
	],
};
