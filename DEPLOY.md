# 部署指南 / Deployment Guide

本项目的部署非常简单，推荐使用 **Vercel** 进行一键免费托管（对 Vite/React 项目支持最好）。

## 方案一：使用 Vercel 部署（推荐 ✨）

1.  **访问 Vercel**：打开 [vercel.com](https://vercel.com) 并点击右上角的 "Sign Up"。
2.  **使用 GitHub 登录**：选择 "Continue with GitHub"，授权 Vercel 访问你的 GitHub 账号。
3.  **导入项目**：
    *   登录后，在 Dashboard 点击 **"Add New..."** -> **"Project"**。
    *   在 "Import Git Repository" 列表中找到 `Awesome-Agent-Skills`，点击右侧的 **"Import"** 按钮。
4.  **配置项目**（通常无需修改，Vercel 会自动识别）：
    *   **Framework Preset**: 确保选了 `Vite`。
    *   **Root Directory**: `./`
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
5.  **开始部署**：点击蓝色的 **"Deploy"** 按钮。
6.  **完成！**：等待约 1 分钟构建，完成后你会看到满屏的撒花庆祝。Vercel 会自动分配一个域名（如 `awesome-agent-skills.vercel.app`），你可以立即访问并分享给朋友。

---

## 方案二：使用 Netlify 部署

1.  访问 [netlify.com](https://www.netlify.com/) 并使用 GitHub 登录。
2.  点击 **"Add new site"** -> **"Import an existing project"**。
3.  选择 **GitHub**，然后选择 `Awesome-Agent-Skills` 仓库。
4.  配置构建设置：
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
5.  点击 **"Deploy site"**。

---

## 🌐 绑定自定义域名 (Custom Domain)

如果你买了域名（比如 `myskills.com`），可以把它绑定到这个网站，看起来更专业。

### 1. 在 Vercel 添加域名
1.  进入 Vercel 项目页面，点击顶部的 **Settings**。
2.  在左侧菜单点击 **Domains**。
3.  在输入框填入你的域名（例如 `myskills.com`），点击 **Add**。
4.  Vercel 会提示你添加 DNS 解析记录（A 记录或 CNAME）。

### 2. 去域名服务商配置 DNS
登录你购买域名的平台（阿里云、腾讯云、GoDaddy、Namecheap 等），找到 **DNS 解析**或**域名管理**。

#### 情况 A：绑定子域名 (例如 `nav.myskills.com`)
*   **记录类型 (Type)**: `CNAME`
*   **主机记录 (Host)**: `nav`
*   **记录值 (Value)**: `cname.vercel-dns.com`

#### 情况 B：绑定主域名 (例如 `myskills.com`)
*   **记录类型 (Type)**: `A`
*   **主机记录 (Host)**: `@`
*   **记录值 (Value)**: `76.76.21.21`

*配置完成后，通常等待几分钟即可生效，Vercel 上的红点变绿即为成功！*
