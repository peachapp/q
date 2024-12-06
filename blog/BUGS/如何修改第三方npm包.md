# 如何修改第三方 npm 包

## 背景：

难言之隐，来自于设计、产品、老板（boss）

## 解决方案：

1. 稳定库，直接扒下来，node_modules，直接修改
2. patch 方案
3. fork package，自己来维护

### patch 方案

`patch-package`自动为依赖打补丁。

1. 安装：`npm i patch-package postinstall`

   npm 有很多钩子：

   - postinstall
   - publish
   - ...npm hook

   ```package.json
   {
     "scripts": {
       "postinstall": "patch-package"
     }
   }
   ```

2. 创建补丁
   ```bash
   npx patch-package rspack
   ```
   这个时候会在项目生成`patches/rspack+1.0.0.patch`

### fork(github fork)

直接改源码，源码改完之后，构建，发布到 npm 私服（verdaccio、阿里云效制品库）

修改的一些内容，如果想贡献给社区，给原作者提 PR，code review、test、合并、你的代码就贡献给社区，提升知名度。
