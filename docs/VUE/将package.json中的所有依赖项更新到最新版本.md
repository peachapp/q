# 将`package.json`中的所有依赖项更新到最新版本

可以通过使用`npm-check-updates`等工具来自动更新依赖包版本，也可以手动修改`package.json`中的版本号并重新安装依赖包。

```
npm i -g npm-check-updates
ncu -u
npm install
```
