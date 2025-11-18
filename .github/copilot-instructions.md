# AI Coding Instructions for himatsubushi.org-STOP-

## Project Overview

**himatsubushi.org-STOP-** is a **static content website** for a Japanese novel/web series titled "転生したらヒンドゥー教とマルクス主義に染まった異世界だった件" (a story about reincarnation into a world influenced by Hinduism and Marxism). The site hosts news, videos, character info, merchandise, and events.

### Architecture
- **Stack**: Pure HTML/CSS/JavaScript frontend + PHP backend (configuration only)
- **Type**: Multi-project portfolio site with multiple landing pages and journal/article sections
- **Key Projects**:
  - Main site (`index.html`) - Modern dark-themed portal
  - Secondary site (`template.html`) - "魔法少女ゆりな" (Magic Girl Yurina)
  - About page (`about/index.html`) - Navigation hub with animated sway effect
  - Blog/Journal (`childPage/journal/`) - Article archive with timestamps and metadata
  - Policy pages (`about/`) - Disclaimer, FAQ, privacy, terms, etc.

### Deployment
- Hosted on Xserver (credentials in `99.others/config/config.php`)
- Git repository: `main` branch is production
- `.gitignore` excludes: PHP, binaries, media files (mp4, jpg, gif, etc.)

---

## File Organization & Patterns

### Directory Structure

```
. (root)
├── index.html              # Main landing page (dark theme, modern design)
├── template.html           # Secondary template/project site
├── ads.txt                 # Ad configuration
├── about/                  # Policy & info pages
│   ├── index.html         # HIMAORG navigation hub
│   ├── style.css          # Standalone styles for about section
│   ├── disclaimer.html
│   ├── privacy.html
│   ├── terms.html
│   └── ... (other policy pages)
├── childPage/
│   └── journal/           # Article archive
│       ├── news/          # Timestamped article pages
│       │   └── 1.html
│       ├── latex記法一覧.html
│       ├── template.html  # Journal article template
│       └── 制作ツール.../  # Behind-the-scenes docs
├── 99.others/
│   └── config/
│       └── config.php     # Database credentials (Xserver/localhost)
├── blog/                  # Blog content (markdown & HTML mixed)
├── audios/                # Audio files
├── images/                # Image assets
└── メンテナンス時に使うページ/  # Maintenance pages (Japanese naming)
    └── 開発中のページ/     # Development pages
```

### Key Naming Conventions
- **Japanese filenames allowed** - `latex記法一覧.html`, `曲の種類について.md` (prefer UTF-8 encoding)
- **Content-based hierarchy** - Organizing pages by purpose (about, journal, blog, images)
- **No strict CMS structure** - Mixed markdown and HTML files, intentional heterogeneity
- **Version numbering minimal** - Single numbered articles (e.g., `1.html`) rather than slugs

---

## HTML & CSS Patterns

### Design System (CSS Custom Properties)

All pages use a consistent dark-theme design system via CSS variables:

```css
:root {
  --bg: #0a0c12;              /* Deep navy background */
  --panel: #0f1320;           /* Card/panel background */
  --ink: #eaf3ff;             /* Primary text (light blue) */
  --sub: #9db7e5;             /* Secondary text (muted blue) */
  --brand: #79b8ff;           /* Primary brand color */
  --brand-2: #a084ff;         /* Secondary brand (purple) */
  --accent: #ffd166;          /* Accent yellow */
  --border: rgba(255,255,255,.08);
  --radius: 16px;
  --shadow: 0 10px 30px rgba(0,10,40,.32);
}
```

**Pattern Example** (`index.html`, `childPage/journal/news/1.html`):
- Embedded `<style>` blocks for self-contained pages
- No external stylesheet dependencies (except Google Fonts)
- Radial gradients for dynamic background lighting
- Grid layouts with responsive `clamp()` sizing
- Backdrop blur for sticky headers

### Responsive Breakpoints
- **Desktop**: `grid-template-columns: 1fr` defaults
- **920px**: Card layout switches to 2-column
- **640px**: Mobile — cards go full-width, hide nav links

### Common Components
- **`.nav`** - Sticky header with logo, brand text, links
- **`.card`** - Grid-based cards with thumbnail, meta, title, actions
- **`.btn` / `.btn.primary`** - Inline buttons with hover states
- **`.marquee`** - Scrolling text animation
- **`.event`** - Timeline event layout
- **`.badge`** - Inline tag with minimal styling

---

## Content Authoring

### Article Pages (e.g., `childPage/journal/news/1.html`)
1. **Meta tags**: Include OGP (Open Graph) tags for social sharing
   - `og:type` (usually "article")
   - `og:title`, `og:description`, `og:image`
   - `twitter:card` for Twitter embedding
2. **Structure**: Header with progress bar → hero section → body content → footer
3. **Typography**: Use `font-family: 'Outfit'` for headings, `'Noto Sans JP'` for body
4. **Timestamps**: Include `.meta` with date/author info

### Blog & Documentation (`blog/`, `childPage/`)
- Markdown files (`.md`) used alongside HTML
- No build process — raw markdown served or manually converted
- Example files:
  - `blog/THREE.js説明書.md` — Technical guide
  - `blog/フロントルーム・バックルーム構想.md` — Conceptual doc
  - `childPage/journal/latex記法一覧.html` — LaTeX cheatsheet

---

## Development Workflow

### No Build or Testing Automation
- **Static site** — no npm, webpack, or CI/CD pipelines
- Changes committed directly to `main` branch
- Deployment is file sync to Xserver

### Code Editor Setup
- VS Code config present: `.vscode/launch.json` (for debugging)
- No ESLint, Prettier, or formatter configs

### When Modifying Pages
1. **Preserve design system**: Use existing CSS variables, never hardcode colors
2. **Check OGP tags**: Update `og:title`, `og:description`, `og:image` for shareability
3. **Test responsive breakpoints**: Verify `@media` queries at 920px and 640px
4. **Japanese text**: Ensure UTF-8 encoding; test in browser for encoding issues
5. **Link integrity**: Update nav links if restructuring the info architecture

### Database Connection (Backend, if needed)
- **Xserver**: `sv13359.xserver.jp` (production)
- **Localhost**: For local development (`dbname: himaorg_blog`)
- **Note**: PHP files ignored by Git — credentials exposed in repo (security issue to fix)

---

## Content Directories & Their Purpose

| Directory | Purpose | File Types | Notes |
|-----------|---------|-----------|-------|
| `/` | Root pages & entry points | `.html` | `index.html`, `template.html`, `ads.txt` |
| `about/` | Legal, privacy, navigation | `.html`, `.css` | Standalone `style.css` for about section |
| `childPage/journal/` | Article archive & journal | `.html`, `.md` | News in `news/` subdirectory |
| `blog/` | Long-form content | `.md`, `.html` | Mixed markdown/HTML format |
| `99.others/config/` | Config & credentials | `.php` | Hidden from Git but not secure |
| `audios/` | Audio content | `.mp3`, `.mkv`, `.mov` (Git-ignored) | |
| `images/` | Visual assets | `.jpg`, `.png` (Git-ignored) | Organized by feature (youtube/, etc.) |
| `メンテナンス時に使うページ/` | Maintenance/down pages | `.html` | Japanese naming for Japan-local use |

---

## Important Caveats & TODOs

1. **Security**: Database credentials hardcoded in `config.php` (visible in Git). Move to environment variables.
2. **No versioning for articles**: Single `.html` files with no version control mechanism — consider slug-based URLs.
3. **Media files hidden**: Images, video, audio excluded from Git — manage via separate CDN or LFS.
4. **No CMS layer**: All content is manual HTML/Markdown — scaling this will be cumbersome.
5. **Maintenance pages in Japanese path**: `/メンテナンス時に使うページ/` — consider English paths for cross-team collaboration.

---

## Quick Reference

- **Main entry**: `index.html` (modern dark portal)
- **Style guide**: CSS variables in `<style>` blocks (no external CSS framework)
- **Responsive**: Mobile-first with 920px and 640px breakpoints
- **Content**: Mix of HTML and Markdown; no build process
- **Deployment**: Xserver via direct file sync
- **Git**: Only pushes code (media ignored); production ready on `main`
