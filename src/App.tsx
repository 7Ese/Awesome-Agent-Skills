import { useState, useMemo, useEffect } from 'react'
import { skills, searchSkills } from './data/skills'
import {
    Skill,
    SkillSource,
    SkillCategory,
    SOURCE_LABELS,
    CATEGORY_LABELS,
    SOURCE_COLORS
} from './types'

// Icons
const SearchIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
    </svg>
)

const StarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
)

const ExternalIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
)

const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
)

const GithubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
)

const SunIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
)

const MoonIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
)

// 配置：修改为你的 GitHub 仓库地址
const GITHUB_REPO = '7Ese/Awesome-Agent-Skills'
const SUBMIT_URL = `https://github.com/${GITHUB_REPO}/issues/new?template=submit-skill.yml`


function App() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedSource, setSelectedSource] = useState<string>('all')
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const [sortBy, setSortBy] = useState<'name' | 'stars'>('stars')
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme')
            if (saved === 'light' || saved === 'dark') return saved
            return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
        }
        return 'dark'
    })

    // 主题切换
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    // Filter and sort skills
    const filteredSkills = useMemo(() => {
        let result = searchQuery ? searchSkills(searchQuery) : [...skills]

        if (selectedSource !== 'all') {
            result = result.filter(s => s.source === selectedSource)
        }

        if (selectedCategory !== 'all') {
            result = result.filter(s => s.category === selectedCategory)
        }

        // Sort
        result.sort((a, b) => {
            if (sortBy === 'stars') {
                return (b.stars || 0) - (a.stars || 0)
            }
            return a.name.localeCompare(b.name)
        })

        // Featured first
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

        return result
    }, [searchQuery, selectedSource, selectedCategory, sortBy])

    // Count by source
    const sourceCounts = useMemo(() => {
        const counts: Record<string, number> = { all: skills.length }
        skills.forEach(s => {
            counts[s.source] = (counts[s.source] || 0) + 1
        })
        return counts
    }, [])

    // Count by category
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { all: skills.length }
        skills.forEach(s => {
            counts[s.category] = (counts[s.category] || 0) + 1
        })
        return counts
    }, [])

    const handleCardClick = (skill: Skill) => {
        const url = skill.repoUrl || skill.docsUrl
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <div className="app">
            {/* Header */}
            <header className="header">
                <div className="header-inner">
                    <a href="/" className="logo">
                        <span className="logo-icon">Skills Map</span>
                        <span className="logo-text">43 skills</span>
                    </a>

                    <div className="search-container">
                        <span className="search-icon"><SearchIcon /></span>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="搜索 skills..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="header-actions">
                        <a
                            href={SUBMIT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="submit-btn"
                        >
                            <PlusIcon />
                            投稿 Skill
                        </a>
                        <a
                            href={`https://github.com/${GITHUB_REPO}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-btn"
                            title="GitHub"
                        >
                            <GithubIcon />
                        </a>
                        <button
                            className="theme-btn"
                            onClick={toggleTheme}
                            title={theme === 'dark' ? '切换到日间模式' : '切换到夜间模式'}
                        >
                            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main */}
            <main className="main-container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <div className="sidebar-section">
                        <h3 className="sidebar-title">来源</h3>
                        <ul className="sidebar-list">
                            <li
                                className={`sidebar-item ${selectedSource === 'all' ? 'active' : ''}`}
                                onClick={() => setSelectedSource('all')}
                            >
                                全部
                                <span className="count">{sourceCounts.all}</span>
                            </li>
                            {(Object.keys(SOURCE_LABELS) as SkillSource[]).map(source => (
                                <li
                                    key={source}
                                    className={`sidebar-item ${selectedSource === source ? 'active' : ''}`}
                                    onClick={() => setSelectedSource(source)}
                                >
                                    <span
                                        className="source-dot"
                                        style={{ background: SOURCE_COLORS[source] }}
                                    />
                                    {SOURCE_LABELS[source]}
                                    <span className="count">{sourceCounts[source] || 0}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sidebar-section">
                        <h3 className="sidebar-title">分类</h3>
                        <ul className="sidebar-list">
                            <li
                                className={`sidebar-item ${selectedCategory === 'all' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('all')}
                            >
                                全部
                                <span className="count">{categoryCounts.all}</span>
                            </li>
                            {(Object.keys(CATEGORY_LABELS) as SkillCategory[]).map(category => (
                                <li
                                    key={category}
                                    className={`sidebar-item ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {CATEGORY_LABELS[category]}
                                    <span className="count">{categoryCounts[category] || 0}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Content */}
                <section className="content">
                    <div className="content-header">
                        <h2 className="content-title">
                            {selectedSource !== 'all'
                                ? SOURCE_LABELS[selectedSource as SkillSource]
                                : selectedCategory !== 'all'
                                    ? CATEGORY_LABELS[selectedCategory as SkillCategory]
                                    : '全部 Skills'}
                            <span className="content-count">({filteredSkills.length})</span>
                        </h2>

                        <select
                            className="sort-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as 'name' | 'stars')}
                        >
                            <option value="stars">按热度</option>
                            <option value="name">按名称</option>
                        </select>
                    </div>

                    {filteredSkills.length > 0 ? (
                        <div className="skills-grid">
                            {filteredSkills.map((skill, index) => (
                                <article
                                    key={skill.id}
                                    className={`skill-card ${skill.featured ? 'featured' : ''}`}
                                    onClick={() => handleCardClick(skill)}
                                    style={{ animationDelay: `${Math.min(index * 0.05, 0.45)}s` }}
                                >
                                    <div className="skill-header">
                                        <h3 className="skill-name">{skill.name}</h3>
                                        <span className={`skill-source ${skill.source}`}>
                                            {SOURCE_LABELS[skill.source]}
                                        </span>
                                    </div>

                                    <p className="skill-description">{skill.description}</p>

                                    <div className="skill-tags">
                                        {skill.tags.slice(0, 4).map(tag => (
                                            <span key={tag} className="skill-tag">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="skill-footer">
                                        {skill.stars ? (
                                            <span className="skill-stars">
                                                <StarIcon /> {skill.stars}
                                            </span>
                                        ) : (
                                            <span className="skill-stars" />
                                        )}

                                        {(skill.repoUrl || skill.docsUrl) && (
                                            <a
                                                href={skill.repoUrl || skill.docsUrl}
                                                className="skill-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {skill.repoUrl ? 'GitHub' : 'Docs'} <ExternalIcon />
                                            </a>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <h3>未找到匹配的 Skills</h3>
                            <p>尝试调整搜索词或筛选条件</p>
                        </div>
                    )}
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-inner">
                    <div className="footer-left">
                        <span className="footer-brand">Skills Map</span>
                        <span className="footer-divider">·</span>
                        <span className="footer-desc">AI Agent Skills 导航站</span>
                    </div>
                    <div className="footer-right">
                        <span className="footer-stats">
                            收录 <strong>{skills.length}</strong> 个 Skills
                        </span>
                        <span className="footer-divider">·</span>
                        <a
                            href={SUBMIT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            提交收录
                        </a>
                        <span className="footer-divider">·</span>
                        <a
                            href={`https://github.com/${GITHUB_REPO}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
