#!/usr/bin/env bash
# VitaGo KB 部署脚本
# 用法: cd ~/vitagokb && ./scripts/deploy.sh
# 特性:
#   - 无需 sudo（通过 ACL 已授予 ec2-user 对 webroot 的写权限）
#   - 使用 rsync 增量同步 + 自动清理已删除页面的 HTML
#   - 保护 .user.ini 不被覆盖或删除

set -euo pipefail

# 自动定位项目根目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_ROOT"

WEBROOT="/home/wwwroot/kb.vitago.ai"
DIST="./.vitepress/dist"

if [ ! -d "$DIST" ]; then
    echo "Error: $DIST not found. Run 'npx vitepress build' first."
    exit 1
fi

# 确保 .user.ini 存在
if [ ! -f "$WEBROOT/.user.ini" ]; then
    echo "Warning: $WEBROOT/.user.ini missing. Panel config may be lost."
fi

echo "=== Syncing dist to webroot ==="
rsync -av --delete --no-perms --no-group --omit-dir-times --exclude='.user.ini' "$DIST/" "$WEBROOT/" || true
echo "=== Deploy complete ==="
ls -1 "$WEBROOT"/index.html >/dev/null 2>&1 && echo "Site root OK" || echo "Warning: index.html missing"
