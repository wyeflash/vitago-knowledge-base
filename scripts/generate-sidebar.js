const fs = require('fs');
const path = require('path');

/**
 * 生成 VitePress sidebar配置的辅助脚本
 * 扫描指定目录下的所有 index.md 和 .md 文件，生成 sidebar 结构
 * 使用: node scripts/generate-sidebar.js
 */

const BASE_DIR = path.resolve(__dirname, '..');

function getTitle(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/^title:\s*(.+)$/m);
  return match ? match[1].trim() : path.basename(filePath, '.md');
}

function scanDir(dir, baseUrl = '') {
  const items = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  // 先处理 index.md
  const indexEntry = entries.find(e => e.isFile() && e.name === 'index.md');
  if (indexEntry) {
    const filePath = path.join(dir, indexEntry.name);
    items.push({
      text: getTitle(filePath),
      link: baseUrl + '/'
    });
  }

  // 再处理子目录和其他文件
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name === 'index.md') continue;
    if (entry.name.startsWith('.')) continue;

    const fullPath = path.join(dir, entry.name);
    const relativeUrl = baseUrl + '/' + path.basename(entry.name, '.md');

    if (entry.isDirectory()) {
      const children = scanDir(fullPath, relativeUrl);
      if (children.length > 0) {
        items.push({
          text: path.basename(entry.name),
          collapsed: true,
          items: children
        });
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      items.push({
        text: getTitle(fullPath),
        link: relativeUrl
      });
    }
  }

  return items;
}

function generateSidebarConfig() {
  const sections = ['entities', 'concepts', 'safety', 'guides', 'comparisons'];
  const sidebar = {};

  for (const section of sections) {
    const sectionDir = path.join(BASE_DIR, section);
    if (!fs.existsSync(sectionDir)) continue;
    sidebar[`/${section}/`] = scanDir(sectionDir, `/${section}`);
  }

  console.log(JSON.stringify(sidebar, null, 2));
}

generateSidebarConfig();
