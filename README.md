# 🧭 Awesome Agent Skills

<div align="center">

![Awesome Agent Skills Banner](https://img.shields.io/badge/Awesome-Agent_Skills-8b5cf6?style=for-the-badge&logo=anthropic&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![MCP Ready](https://img.shields.io/badge/MCP-Ready-22c55e)](https://modelcontextprotocol.io/)

**收录精选的 AI Agent Skills (Claude, OpenAI) 与 MCP Servers 资源导航站。**

[在线预览](https://awesome-agent-skills.vercel.app/) · [提交 Skill](../../issues/new?template=submit-skill.yml) · [IDE 配置指南](./IDE_SETUP.md)

</div>

---

## 📖 简介 / Introduction

**Awesome Agent Skills** 是一个为 AI Agent 开发者和重度用户打造的技能导航站。随着 [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) 的发布，Agent 的能力边界被无限扩展。本项目旨在整理和分类最实用的 Agent 技能，帮助你快速武装你的 AI 助手。

无论你是使用 **Claude Desktop**, **Cursor**, **Windsurf** 还是 **Antigravity**，这里都能找到适合你的工具。

## ✨ 特性 / Features

- **🧩 MCP Servers 收录**: 包含 GitHub, Filesystem, PostgreSQL 等官方及社区优质 MCP 服务。
- **🎯 丰富的 Agent Skills**: 涵盖 TDD、系统设计、创意写作、代码审计等 Prompt 型技能。
- **🌗 极致的 UI 体验**:
    - **Light Mode**: "Ceramic Clean" 风格，陶瓷白背景搭配半透明磨砂质感。
    - **Dark Mode**: 现代深色仪表盘风格，专注开发者体验。
- **⚡️ 实时检索**: 支持按关键词、标签、来源（Anthropic, Community, OpenAI）毫秒级过滤。
- **📱 响应式 Bento 布局**: 完美适配桌面端与移动端访问。

## 🛠️ 使用指南 / Usage

我们为不同的开发环境准备了详细的配置教程：

👉 **[IDE 集成指南 (IDE Setup Guide)](./IDE_SETUP.md)**

涵盖以下环境的配置方法：
- **Claude Desktop** (官方客户端)
- **Cursor** (AI Code Editor)
- **Windsurf** (Cascade Engine)
- **VS Code** (配合 Cline 插件)
- **Antigravity** (Google Agent)

## 📦 技术栈 / Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Vanilla CSS (CSS Variables, Glassmorphism)
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify

## 🚀 本地运行 / Development

```bash
# 1. 克隆项目
git clone https://github.com/7Ese/Awesome-Agent-Skills.git

# 2. 进入目录
cd Awesome-Agent-Skills

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npm run dev
```

## 🤝 贡献 / Contributing

我们非常欢迎社区贡献！如果你发现了好用的 Skill 或 MCP Server，请：

1.  **提交 Issue**: 使用我们准备好的 [Skill Submission Template](../../issues/new?template=submit-skill.yml)。
2.  **提交 PR**:
    - Fork 本仓库
    - 修改 `src/data/skills.ts`
    - 提交 Pull Request

### 数据结构示例

```typescript
{
  id: 'skill-id',
  name: 'Skill Name',
  description: 'A brief description of what this skill does.',
  category: 'development', // development | research | data | creative ...
  source: 'community',     // anthropic | openai | huggingface | community
  tags: ['Tag1', 'Tag2'],
  repoUrl: 'https://github.com/username/repo',
  stars: 120,              // GitHub Stars
  featured: false          // 是否推荐
}
```

## 📄 许可证 / License

本项目基于 [MIT License](./LICENSE) 开源。
