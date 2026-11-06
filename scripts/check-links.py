#!/usr/bin/env python3
"""
VitaGo KB 链接完整性检查脚本
扫描所有 wiki markdown 文件，检查内部链接是否指向存在的页面。

使用: python3 scripts/check-links.py
返回码: 0 = 无死链, 1 = 发现死链
"""

import os
import re
import sys
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.resolve()
WIKI_DIRS = ['entities', 'concepts', 'safety', 'guides', 'comparisons', 'reference']
EXCLUDE_DIRS = {'raw', 'node_modules', '.vitepress', 'scripts'}


def get_all_wiki_files():
    """获取所有发布的 markdown 文件列表"""
    files = set()
    for d in WIKI_DIRS:
        wiki_dir = BASE_DIR / d
        if not wiki_dir.exists():
            continue
        for f in wiki_dir.rglob('*.md'):
            rel = f.relative_to(BASE_DIR)
            files.add(str(rel.with_suffix('')))
    # 根目录下的 index.md
    root_index = BASE_DIR / 'index.md'
    if root_index.exists():
        files.add('index')
    return files


def extract_links(content, file_path):
    """从 markdown 内容中提取所有内部链接"""
    links = []
    pattern = r'\[([^\]]+)\]\(([^\s")]+)(?:\s+"[^"]*")?\)'

    for match in re.finditer(pattern, content):
        text = match.group(1)
        url = match.group(2)
        line_no = content[:match.start()].count('\n') + 1

        if url.startswith(('http://', 'https://', 'mailto:', 'tel:')):
            continue
        if url.startswith('#'):
            continue
        if url.endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg', '.css', '.js')):
            continue
        if not url.strip():
            continue

        links.append({'text': text, 'url': url, 'line': line_no})

    return links


def resolve_link(url, source_file):
    """将相对路径解析为标准化的绝对路径（相对于 BASE_DIR）"""
    source_dir = source_file.parent.relative_to(BASE_DIR)

    if url.startswith('/'):
        resolved = url.lstrip('/')
    else:
        resolved = str(source_dir / url)

    # 规范化路径（处理 ../ 和 ./）
    resolved = os.path.normpath(resolved)

    # 生成需要检查的路径变体
    paths_to_check = [resolved]
    if not resolved.endswith('.md'):
        paths_to_check.append(resolved + '.md')
    paths_to_check.append(resolved + '/index')
    paths_to_check.append(resolved + '/index.md')

    return paths_to_check


def check_file_exists(path, all_files):
    """检查路径是否在发布文件列表中"""
    clean = path.rstrip('/').replace('./', '')
    return clean in all_files


def main():
    all_files = get_all_wiki_files()
    print(f"  发现 {len(all_files)} 个发布页面")

    broken = []
    checked = 0

    scan_files = []
    for d in WIKI_DIRS:
        wiki_dir = BASE_DIR / d
        if wiki_dir.exists():
            scan_files.extend(wiki_dir.rglob('*.md'))
    root_index = BASE_DIR / 'index.md'
    if root_index.exists():
        scan_files.append(root_index)

    for md_file in scan_files:
        rel_path = md_file.relative_to(BASE_DIR)
        try:
            content = md_file.read_text(encoding='utf-8')
        except Exception as e:
            print(f"  ⚠️ 无法读取 {rel_path}: {e}")
            continue

        links = extract_links(content, md_file)
        for link in links:
            checked += 1
            possible_paths = resolve_link(link['url'], md_file)
            found = any(check_file_exists(p, all_files) for p in possible_paths)
            if not found:
                broken.append({
                    'source': str(rel_path),
                    'line': link['line'],
                    'text': link['text'],
                    'url': link['url'],
                    'tried': possible_paths[:2]  # 只显示前2个
                })

    print(f"  检查了 {checked} 个内部链接")
    print()

    if broken:
        print(f"  ❌ 发现 {len(broken)} 个断链:")
        print()
        for b in broken:
            print(f"    {b['source']}:{b['line']}")
            print(f"      文本: [{b['text']}]({b['url']})")
            print(f"      尝试: {', '.join(b['tried'])}")
            print()
        print(f"  请修复上述链接后再重新构建。")
        return 1
    else:
        print(f"  ✅ 所有 {checked} 个内部链接完整无误。")
        return 0


if __name__ == '__main__':
    print("=" * 60)
    print("  VitaGo KB 链接完整性检查")
    print("=" * 60)
    print()
    sys.exit(main())
