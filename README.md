# Skills Map

精选 AI Agent Skills 收录导航站，涵盖 Anthropic、OpenAI、HuggingFace 官方及社区热门 skills 资源。

## 技术栈

- **框架**: React + TypeScript
- **构建**: Vite
- **样式**: CSS (Modern Dashboard Style)

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 使用指南

👉 **[如何配制到 IDE? 查看详细教程](./IDE_SETUP.md)** 
(支持 Claude Desktop, Cursor, Windsurf, VS Code)

## 投稿 Skill

欢迎投稿！请通过 [GitHub Issue](../../issues/new?template=submit-skill.yml) 提交你发现的优质 AI Agent Skill。

### 投稿要求

- 必须是有效的 AI Agent Skill（符合 Agent Skills 规范）
- 提供 GitHub 仓库链接
- 简要描述 Skill 的功能和用途

## 目录结构

```
skills-map/
├── src/
│   ├── App.tsx          # 主应用组件
│   ├── App.css          # 样式文件
│   ├── main.tsx         # 入口文件
│   ├── types/           # TypeScript 类型
│   └── data/
│       └── skills.ts    # Skills 数据
├── .github/
│   └── ISSUE_TEMPLATE/
│       └── submit-skill.yml  # 投稿模板
├── index.html
├── package.json
└── vite.config.ts
```

## 维护指南

### 添加新 Skill

1. 收到投稿 Issue 后审核
2. 编辑 `src/data/skills.ts`，添加新条目：

```typescript
{
  id: 'unique-id',
  name: 'Skill 名称',
  description: '简要描述',
  category: 'development', // 见 types/index.ts
  source: 'community',     // anthropic/openai/huggingface/community
  tags: ['Tag1', 'Tag2'],
  repoUrl: 'https://github.com/...',
  stars: 100,              // 可选
  featured: false,         // 是否推荐
}
```

3. 提交并推送：

```bash
git add .
git commit -m "feat: add [Skill Name]"
git push
```

4. 关闭对应 Issue 并回复感谢

## 部署

推荐使用 Vercel 或 Netlify 进行自动部署，连接 GitHub 仓库后每次 push 自动更新。

## License

MIT
