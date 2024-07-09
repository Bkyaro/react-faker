export type WorkTag =
	| typeof FunctionComponent
	| typeof HostRoot
	| typeof HostComponent
	| typeof HostText;

// 函数组件
export const FunctionComponent = 0;
// 根节点 eg: ReactDOM.render()
export const HostRoot = 3;
// eg: <div></div>
export const HostComponent = 5;
// eg: <div>text here</div>
export const HostText = 6;
