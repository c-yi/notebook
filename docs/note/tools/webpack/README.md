# webpack基础

npx webpack 命令 

**node_modules\\.bin\webpack.cmd**

```bash
@ECHO off
SETLOCAL
CALL :find_dp0

IF EXIST "%dp0%\node.exe" (
  SET "_prog=%dp0%\node.exe"
) ELSE (
  SET "_prog=node"
  SET PATHEXT=%PATHEXT:;.JS;=;%
)

"%_prog%"  "%dp0%\..\webpack\bin\webpack.js" %*
ENDLOCAL
EXIT /b %errorlevel%
:find_dp0
SET dp0=%~dp0
EXIT /b

# %dp0% 当前路径
# 以上 bat 在运行 npx webpack 时执行
# 如果存在 node 就执行 `node "node_modules\webpack\bin\webpack.js" 命令`
```

webpack.js 中需要用到 webpack-cli

```js
// 在 webpack.js的112行	
const question = `Do you want to install 'webpack-cli' (yes/no): `;
```

## loader

expose-loader暴露全局的loader内联的 loader

loader 种类

pre前面执行的loader 

normal普通loader

内联loader

后置 post loader