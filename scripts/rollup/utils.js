import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';
// 指定包路径
const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');
// 路径解析(源码路径/打包后的路径)
export function resolvePkgPath(pkgName, isDist) {
	// 如果是打包产物路径
	if (isDist) {
		return `${distPath}/${pkgName}`;
	}
	// 否则返回源码路径
	return `${pkgPath}/${pkgName}`;
}
export function getPackageJSON(pkgName) {
	// 包路径
	const path = `${resolvePkgPath(pkgName)}/package.json`;
	const str = fs.readFileSync(path, { encoding: 'utf-8' });
	return JSON.parse(str);
}

// 获取rollup配置
export function getBaseRollupPlugins({ typescript = {} } = {}) {
	return [cjs(), ts(typescript)];
}
