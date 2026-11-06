# VitaGo KB 内容与权威来源审查计划（2026-05-05）

## 本轮快速检查范围

- 源码根目录：`/home/ec2-user/.hermes/profiles/vitago/home/vitagokb`
- 排除：`raw/`、`node_modules/`、`.vitepress/`
- 发布 Markdown 文档：261 个
- 内部链接检查：1859 个内部链接，0 个断链
- VitePress 构建：通过；仅有代码块语言名警告与 chunk size 警告

## 当前结构盘点

| 顶层目录 | 文档数 | 无明显权威 URL/域名 | 无 Sources/References 标题 | 含占位/待补标记 | 短页 <120 词/项 |
|---|---:|---:|---:|---:|---:|
| entities | 109 | 35 | 31 | 9 | 34 |
| concepts | 59 | 23 | 19 | 0 | 4 |
| guides | 48 | 33 | 7 | 0 | 6 |
| comparisons | 23 | 3 | 6 | 1 | 0 |
| reference | 11 | 6 | 10 | 0 | 1 |
| safety | 8 | 5 | 5 | 1 | 5 |
| root | 3 | 0 | 3 | 1 | 0 |

说明：上述“无明显权威 URL/域名”是机器规则初筛，若页面 frontmatter 使用 `raw/guidelines/...` 但正文 Sources 未给外部 URL，会被标为待增强，不等同于内容一定错误。

## 初步发现的高风险区域

### P0：必须先查的内容完整性/可信度问题

1. `entities/botanicals/` 多个植物草本页很短且没有权威来源链接：如 rhodiola、valerian、chamomile、passionflower、lavender、milk-thistle、hawthorn、cinnamon、garlic、echinacea、elderberry、cranberry、black-cohosh 等。
2. `safety/` 安全层很薄：禁忌、相互作用、剂量上限、质量标准多数是索引/短页，缺少 FDA/NIH ODS/NCCIH/USP/NSF/药品说明书级别来源。
3. `guides/chronic/` 慢病指南中不少页面只有来源名称或 raw 引用，正文缺少可点击的权威来源 URL；慢病页必须逐条映射到 ADA/AHA/ACC/NICE/WHO/NIH ODS/Cochrane 等。
4. `concepts/mechanisms/` 一批机制页有 Sources 标题，但仅列机构/文献名称，无外部 URL；需要补充 NIH ODS、LPI、PubMed/PMC 或教材级综述链接。

### P1：结构上应标准化的问题

1. 统一每个实体/概念/指南页的 `## Sources` 格式：至少包含 2–4 个外部权威链接，优先 HP Fact Sheet、指南、系统综述、监管标准。
2. 对索引页与 redirect 页单独标记豁免规则，避免被误判为“缺来源”。
3. 对“短页但非 redirect”的页面设置最低内容标准：Overview / Key Facts / Evidence / Safety / Sources。
4. 把 `raw/` 引用与外部 URL 双轨化：frontmatter 可保留 raw 证据档案，Sources 必须有外部可追溯链接。

## 建议分步骤审查计划

### 第 0 步：制定审查规则与豁免规则

输出一个 `CONTENT_REVIEW_RULES.md` 或加入 `SCHEMA.md`：

- 实体页：至少 2 个权威来源；营养素优先 NIH ODS HP + Consumer，植物优先 NCCIH/EMA/WHO monograph/Cochrane，运动补剂优先 ISSN/IOC/ACSM。
- 慢病指南：至少 1 个疾病指南 + 1 个营养/补充剂证据源 + 相关成分安全源。
- 安全页：必须引用 NIH ODS UL、FDA/USP/NSF、药物相互作用或临床指南来源。
- 概念/机制页：至少 1 个综述/教材级来源 + 相关实体事实表。
- 索引页、重定向页、日志页可不要求完整 Sources，但要标记 `type: index|redirect|log`。

### 第 1 步：按目录做机器审查清单

每页生成状态：

- 内容长度：短页 / 正常 / 长页
- 是否有 Sources 标题
- 是否有外部 URL
- 是否包含权威域名
- 是否包含“待补/占位/TODO”
- 内部链接是否通过
- 构建是否通过

### 第 2 步：按领域人工核对事实

建议顺序：

1. **Safety 安全层**：禁忌、药物相互作用、UL、质量认证。错误成本最高。
2. **Guides 慢病层**：按用户要求的 6 大系统分类逐组审查：心脑血管、代谢、骨骼、消化、免疫、其他。
3. **Entities/nutrients 营养素**：逐个对 NIH ODS HP/Consumer 核对 RDA/AI/UL、缺乏风险、药物相互作用。
4. **Entities/botanicals 植物草本**：逐个对 NCCIH/Cochrane/EMA/WHO monograph 核对适应证、证据强度、安全性。
5. **Concepts/effects + mechanisms**：核对机制表述是否过度外推，避免“机制成立 = 临床有效”。
6. **Comparisons**：核对对比结论是否有范围限制与证据等级。
7. **Reference/regulations**：核对中美欧监管表达，避免把结构/功能声称、药品适应证、保健食品功能混淆。

### 第 3 步：每个领域输出修复批次

每批建议 10–20 页，输出：

- `问题页列表`
- `待核对断言`
- `需补来源`
- `建议修改`
- `是否需要降级证据语气`
- `是否需要新增安全警示`

### 第 4 步：修改后验证

每批完成后必须运行：

1. 内部链接检查：`python3 scripts/check-links.py`
2. VitePress 构建：`npx vitepress build`
3. 如为发布更新：构建后复制到 `/home/wwwroot/kb.vitago.ai/` 并保持 `www:www` 权限。

## 第一批建议执行清单

1. 审查并补强 `safety/` 全部 8 个页面。
2. 审查 `entities/botanicals/` 中短页且无来源的 20 个左右页面。
3. 审查 `guides/chronic/` 中 6 大系统的慢病页，先从心脑血管与代谢开始。
4. 为 `concepts/mechanisms/` 无外链来源的机制页补 PubMed/NIH/LPI 来源，并检查是否有机制外推。

## 已验证项

- 内部链接：通过，0 broken links。
- 构建：通过。

## 待人工事实核对项

机器扫描不能直接确认医学事实正确性。下一步需针对每页的关键断言与权威来源逐条比对，尤其是剂量、禁忌、相互作用、慢病建议、证据等级与监管表述。
