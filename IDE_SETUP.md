# 🛠️ IDE 集成指南 / IDE Setup Guide

本指南将教你如何在主流开发环境中使用本项目收录的 **MCP Servers** 和 **Agent Skills**。

## 1. Claude Desktop (官方客户端)

Claude Desktop 原生支持 MCP 协议，配置最为简单。

### 配置文件位置
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

### 配置示例
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/yourname/Desktop"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      }
    }
  }
}
```
*修改配置后需重启 Claude Desktop。*

---

## 2. Cursor

Cursor 作为 AI 驱动的编辑器，对 MCP 原生支持也越来越完善。

### 启用步骤
1. 打开 **Settings** (快捷键 `Cmd/Ctrl + ,`)。
2. 找到 **Features** -> **MCP**。
3. 点击 **Add New MCP Server**。
4. 填写 Name (例如 `Filesystem`) 和 Command (例如 `npx -y @modelcontextprotocol/server-filesystem /path/to/allow`)。

### 使用 .cursorrules
对于非 MCP 类的 Prompt 型 Skills（如 "Frontend Design"），推荐使用 `.cursorrules` 文件：
1. 在项目根目录创建 `.cursorrules` 文件。
2. 将 Skill 的核心 Prompt 指令粘贴进去。
3. Cursor 的 AI 现在就会遵循这套规则进行编码。

---

## 3. Windsurf

Windsurf 是基于 Cascade 引擎的 IDE，对上下文感知非常强。

### MCP 配置
Windsurf 目前通过配置文件管理 MCP：
- **位置**: `~/.codeium/windsurf/mcp_config.json`

**内容格式**与 Claude Desktop 完全一致：
```json
{
  "mcpServers": {
    "sqlite": {
      "command": "uvx",
      "args": ["mcp-server-sqlite", "--db-path", "/path/to/db.sqlite"]
    }
  }
}
```

### 使用 .windsurfrules
类似于 Cursor，你可以在项目根目录创建 `.windsurfrules`，将特定的 Coding Style 或 Agent 角色设定写入其中。

---

## 4. VS Code (配合 Cline/Roo Code 插件)

如果你使用原生 VS Code，推荐安装 **Cline** (前身是 Claude Dev) 插件。

### 配置 MCP
1. 安装 [Cline 插件](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev)。
2. 打开 Cline 侧边栏，点击设置图标。
3. 找到 **MCP Servers** 选项卡。
4. Cline 会自动读取 Claude Desktop 的配置文件 (`claude_desktop_config.json`)。
5. 你也可以点击 "Edit MCP Servers" 手动添加新的 JSON 配置。

---

## 常见问题

### 如何获取 MCP Server 的启动命令？
在本项目导航站中，找到对应的 MCP Skill，点击 Repo 链接。通常 README 中会有 `npx` 或 `docker` 启动命令。

### Prompt 型 Skill 怎么用？
对于像 "Frontend Design" 或 "System Prompt" 这种技能，它们不是可执行的 Server。
**使用方法**：
1. 复制 Skill 的核心 Prompt 内容。
2. 粘贴到你的 IDE 项目规则文件（`.cursorrules`, `.windsurfrules`）中，或者在对话开始时直接发给 AI。
