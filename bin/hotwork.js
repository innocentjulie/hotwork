#!/usr/bin/env node

const packageInfo = require("./../package.json");

// 获取命令行参数
const args = process.argv.slice(2);

// 如果有-v选项，则显示包的版本
if (args.includes("-v") || args.includes("--version")) {
	console.log(`Version: ${packageInfo.version}`);
}
