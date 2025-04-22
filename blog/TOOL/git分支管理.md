# git 分支管理

git 分支管理是软件开发中至关重要的一部分，良好的分支策略可以有效提高团队协作效率，保证代码质量和项目的顺利进行。本文将介绍一种常见且实用的 git 分支管理模型，包括`master`、`hotfix`、`develop`、`feature`和`release`分支，并详细说明各个分支的用途和管理方法。

## 分支模型概述

### master 分支

`master`分支是主分支，包含稳定的、已发布的生产代码。每次产品发布时，都会将代码合并到`master`分支。此分支上的每个`commit`都应该是一个发布版本。

### develop 分支

`develop`分支是开发主分支，所有新的开发工作都在该分支上进行。开发完成后，代码会从`develop`分支合并到`master`分支以进行发布。

### feature 分支

`feature`分支用于开发新的功能或特性，从`develop`分支创建，开发完成后合并回`develop`分支。命名通常为`feature/feature-name`。

### release 分支

`release`分支用于发布前的准备工作，包括最后的`bug修复`、文档更新等。从`develop`分支创建，准备就绪后合并到`master`和`develop`分支，并标记版本号。

### hotfix 分支

`hotfix`分支用于修复生产环境中的紧急问题。从`master`分支创建，修复完成后合并回`master`和`develop`分支。

## 分支管理流程

### 创建新功能（Feature）

1. 从`develop`分支创建一个新的`feature`分支：

   ```bash
   git checkout develop
   git checkout -b feature/feature-name
   ```

2. 在`feature`分支上进行开发，完成后合并回`develop`分支：

   ```bash
   git checkout develop
   git merge feature/feature-name
   git branch -d feature/feature-name
   ```

### 准备发布（Release）

1. 从`develop`分支创建一个新的`release`分支：

   ```bash
   git checkout develop
   git checkout -b release/release-name
   ```

2. 在`release`分支上进行最后的`bug修复`和准备工作，完成后合并到`master`和`develop`分支，并标记版本号：

   ```bash
   git checkout master
   git merge release/release-name
   git tag -a v1.0.0 -m "Release version 1.0.0"

   git checkout develop
   git merge release/release-name
   git branch -d release/release-name
   ```

### 紧急修复（Hotfix）

1. 从`master`分支创建一个新的`hotfix`分支：

   ```bash
   git checkout master
   git checkout -b hotfix/hotfix-name
   ```

2. 在`hotfix`分支上修复问题，完成后合并回`master`和`develop`分支，并标记版本号：

   ```bash
   git checkout master
   git merge hotfix/hotfix-name
   git tag -a v1.0.1 -m "Hotfix version 1.0.1"

   git checkout develop
   git merge hotfix/hotfix-name
   git branch -d hotfix/hotfix-name
   ```

## 默认分支名称从 master 改为 main

‌Git 分支不再使用`master`名称的原因主要是为了避免潜在的负面含义和促进多样性 ‌。从 2020 年 10 月 1 日起，GitHub 平台上的所有新创建的源代码库默认分支名称从`master`改为`main`，这一变化是为了更包容和避免潜在的负面含义 ‌。

### 历史背景和具体变化

GitHub 在 2020 年 6 月宣布了这一变更计划，原因是`master`一词容易让人联想到奴隶制，可能会加深种族歧视 ‌。这一提议得到了 GitHub CEO 的支持，并表示已经在执行中 ‌。此外，其他开源项目和编程语言也纷纷响应，开始使用中性词汇替换原有的冒犯性术语，如将`blacklist`替换为`deny list`，`whitelist`替换为`allow list`等 ‌。

### 替代名称的选择标准

GitHub 选择`main`作为替代名称是因为它更简短、易于记忆，并且在多种语言中都有通用的含义 ‌。此外，`main`不会引起任何负面联想，符合多样性和包容性的要求 ‌。

### 对现有项目的影响

现有的项目和仓库的默认分支名称保持不变，不会受到影响。GitHub 解释说，重新命名现有库会造成很多问题，如需要编辑拉取请求的设置和修改安全政策等 ‌。不过，开发者仍然可以使用命令将现有分支的名称更改为`main`，例如使用命令`git branch -m master main`来实现这一更改 ‌。
