# 🧭 Awesome Agent Skills

<div align="center">

![Awesome Agent Skills Banner](https://img.shields.io/badge/Awesome-Agent_Skills-8b5cf6?style=for-the-badge&logo=anthropic&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![MCP Ready](https://img.shields.io/badge/MCP-Ready-22c55e)](https://modelcontextprotocol.io/)

**A curated navigation station for AI Agent Skills (Claude, OpenAI) & MCP Servers.**

[Preview Live](https://awesome-agent-skills.vercel.app/) · [Submit Skill](../../issues/new?template=submit-skill.yml) · [IDE Setup Guide](./IDE_SETUP.md) · [简体中文](./README_ZH.md)

</div>

---

## 📖 Introduction

**Awesome Agent Skills** is a curated navigation station designed for AI Agent developers and power users. With the release of the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/), the capabilities of Agents have been expanded indefinitely. This project aims to organize and classify the most practical Agent skills to help you quickly arm your AI assistant.

Whether you use **Claude Desktop**, **Cursor**, **Windsurf**, or **Antigravity**, you can find the right tools here.

## ✨ Features

- **🧩 MCP Servers Collection**: Includes official and community high-quality MCP services like GitHub, Filesystem, PostgreSQL, etc.
- **🎯 Rich Agent Skills**: Covers Prompt-based skills such as TDD, System Design, Creative Writing, Code Audit, etc.
- **🌗 Ultimate UI Experience**:
    - **Light Mode**: "Ceramic Clean" style, ceramic white background with semi-transparent frosted glass texture.
    - **Dark Mode**: Modern dark dashboard style, focused on developer experience.
- **⚡️ Real-time Search**: Supports millisecond-level filtering by keywords, tags, and sources (Anthropic, Community, OpenAI).
- **📱 Responsive Bento Layout**: Perfectly adapted for both desktop and mobile access.

## 🛠️ Usage

We have prepared detailed configuration tutorials for different development environments:

👉 **[IDE Setup Guide](./IDE_SETUP.md)**

Covers configuration methods for the following environments:
- **Claude Desktop** (Official Client)
- **Cursor** (AI Code Editor)
- **Windsurf** (Cascade Engine)
- **VS Code** (with Cline extension)
- **Antigravity** (Google Agent)

## 📦 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Vanilla CSS (CSS Variables, Glassmorphism)
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify

## 🚀 Development

```bash
# 1. Clone the project
git clone https://github.com/7Ese/Awesome-Agent-Skills.git

# 2. Enter directory
cd Awesome-Agent-Skills

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

## 🤝 Contributing

We welcome community contributions! If you find a useful Skill or MCP Server, please:

1.  **Submit Issue**: Use our [Skill Submission Template](../../issues/new?template=submit-skill.yml).
2.  **Submit PR**:
    - Fork this repository
    - Modify `src/data/skills.ts`
    - Submit a Pull Request

### Data Structure Example

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
  featured: false          // Recommended or not
}
```

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
