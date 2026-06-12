# LuxePack Pro - 部署与发布指南 (Deployment Guide)

本项目是一个基于 **Next.js 13+ App Router** 架构的高端包装定制多页面独立站，已针对极简高端美学、B2B获客效率、移动自适应以及 100% 本地/GitHub 静态编译进行了深度优化。

以下是为您量身定制的从本地推送到 **GitHub** 并通过 **Vercel** 免费一键发布的完整指南。

---

## 🚀 第一步：将代码推送到您的 GitHub 仓库

我们已经为您在本地项目目录下做好了 Git 初始化，并完成了首次提交（Initial Commit）。您只需在 GitHub 上创建一个新仓库，并将本地代码推送上去：

1. **登录您的 GitHub 账号**，点击右上角 `+` 号 -> **New repository**。
2. 填写仓库名称（例如：`luxury-packaging-web`），选择 **Public** 或 **Private**（都可以），不要勾选 "Add a README file"（我们本地已经有了）。
3. 点击 **Create repository** 按钮。
4. 在新页面中复制 **"…or push an existing repository from the command line"** 下的命令，通常如下所示：

```bash
# 关联您刚刚创建的远程 GitHub 仓库 (请将下面的 URL 替换为您真实的仓库 URL)
git remote add origin https://github.com/您的用户名/luxury-packaging-web.git

# 重命名主分支为 main
git branch -M main

# 推送本地代码到 GitHub
git push -u origin main
```

---

## ⚡ 第二步：使用 Vercel 一键免费部署上线

Vercel 是 Next.js 官方推荐的免费托管平台，仅需 2 分钟即可完成自动化构建与部署。

1. 打开 [Vercel 官网](https://vercel.com/) 并点击 **Sign Up / Log In**。
2. 选择 **Continue with GitHub** 登录并授权绑定您的 GitHub 账户。
3. 进入 Vercel 控制台主面板，点击 **"Add New..."** 按钮，选择 **Project**。
4. 在 **Import Git Repository** 列表中，找到您刚刚推送到 GitHub 的仓库（如 `luxury-packaging-web`），点击 **Import**。
5. 在配置页面中：
   * **Framework Preset**: 保持默认的 **Next.js**。
   * **Root Directory**: 保持默认的 `./`（即根目录）。
   * **Build and Output Settings** / **Environment Variables**: 保持默认，无需任何额外配置，100% 静态零配置支持。
6. 点击最下方的 **Deploy** 按钮。
7. **大功告成！** 约 1 分钟后，Vercel 就会为您生成两个专属的域名（例如 `luxury-packaging-web.vercel.app`），点击即可在全球网络极速访问！

---

## 🛠️ 第三步：本地开发与日常调试

如果您想在本地运行或继续对网站进行微调，请按照以下步骤操作：

1. 打开本地终端（终端路径切至 `luxury-packaging-github-ready`）。
2. 执行以下命令安装依赖：
   ```bash
   npm install
   ```
3. 启动本地开发服务：
   ```bash
   npm run dev
   ```
4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可实时预览修改效果。
