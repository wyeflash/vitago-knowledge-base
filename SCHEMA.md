# Wiki Schema

> VitaGo Knowledge Base — 膳食营养补充剂领域知识库规范
> 本文件约束 Agent 行为，确保结构一致性与可持续生长。

---

## Domain

本知识库覆盖 **膳食营养补充剂（Dietary Supplements）**，聚焦以下范围：
- 营养素成分（宏量营养素、维生素、矿物质、脂肪酸等）
- 植物与草本成分
- 非必需活性成分（辅酶、氨基酸衍生物、结构支持成分、睡眠与代谢调节成分等）
- 微生态与消化支持（益生菌、益生元、后生元、消化酶等）
- 机构、数据库、监管框架与质量认证
- 功效方向与作用机制
- 适用人群分层与生命周期营养
- 安全性、相互作用、剂量上限、质量认证
- 选购指引与营养素组合策略

### 实体主分类原则

`entities/` 采用“成分本体优先”的主分类原则：同一实体只进入一个主分类；功效方向、运动营养、慢病场景、人群用途等横向维度通过 tags、concepts、guides 和 cross-links 表达，不作为实体主分类重复收录。

当前实体主分类：

| 目录 | 中文名 | 收录边界 |
|------|--------|----------|
| `entities/nutrients/` | 营养素 | 经典营养学中的宏量营养素、维生素、矿物质、脂肪酸等 |
| `entities/botanicals/` | 植物与草本成分 | 草本补剂、植物来源活性成分与标准化植物提取物 |
| `entities/bioactives/` | 非必需活性成分 | 不是经典必需营养素，但作为补充剂广泛使用的生理活性成分 |
| `entities/microbiome/` | 微生态与消化支持 | 益生菌、益生元、后生元、消化酶和肠道生态相关实体 |
| `entities/organizations/` | 机构、数据库与认证 | 监管机构、指南机构、研究数据库、第三方质量认证和行业标准 |

### 概念与指引分类边界

`concepts/` 是科学知识地图，解释“如何理解和分类”；`guides/` 是实用决策指引，回答“在某个场景中如何使用”。

| 目录 | 定位 | 收录边界 |
|------|------|----------|
| `concepts/effects/` | 功效方向 | 骨骼健康、免疫支持、心血管健康、睡眠与情绪等健康目标；不得替代疾病指引 |
| `concepts/mechanisms/` | 作用机制 | 生理、生化、分子通路与功能路径，例如一碳代谢、炎症调节、抗氧化/Nrf2、骨代谢、肠屏障与微生物群、胰岛素敏感性；原 `concepts/functions/` 并入本目录，不再作为并列一级分类 |
| `concepts/categories/` | 分类体系 | 成分、营养素、补充剂和实体分类原则；具体对象仍放 `entities/` |
| `concepts/populations/` | 人群分层框架 | 生命周期、生理状态、生活方式、饮食模式和疾病状态的分类边界；不承载具体补充方案 |
| `concepts/forms/` | 剂型与生物利用度 | 剂型、递送系统、生物利用度指标和吸收影响因素 |
| `guides/populations/` | 非疾病主导人群指引 | 孕期、哺乳期、婴幼儿、儿童、青少年、老年人、运动人群、素食者等 |
| `guides/chronic/` | 疾病/慢病状态指引 | 高血压、糖尿病、痛风、脂肪肝、骨质疏松等疾病或长期健康状态；按心脑血管、代谢、骨骼、消化、免疫、其他 6 大系统导航 |

疾病状态页面不得在 `guides/populations/` 重复建主内容页；如涉及“孕期合并糖尿病”“老年糖尿病”等交叉场景，应在相关人群页和慢病页之间交叉引用。

**界限：** 不涉及疾病诊断或治疗宣称，所有内容以循证研究和权威指南为依据。

---

## Conventions

### 文件命名
- 全小写，使用连字符 `-`，无空格
- **不使用数字前缀排序** — 文件名、目录名、页面标题、导航文字均不带 `数字.` 前缀（如 `1. 心脑血管` → `心脑血管`）
- 示例：`vitamin-d3.md`、`omega-3-fish-oil.md`、`cardiovascular-health.md`

### 页面链接
- 使用标准相对路径链接，兼容 VitePress 与 Obsidian
- 每个 wiki 页面至少包含 2 个指向其他页面的链接
- 示例：`[维生素D](entities/nutrients/vitamin-d)`

### Frontmatter 规范
每个 wiki 页面必须包含以下 YAML frontmatter：

```yaml
---
title: 页面标题
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | guide | mechanism | reference | summary
tags: [从下方 taxonomy 中选取]
sources: [raw/子目录/文件名.md]
confidence: high | medium | low       # 可选，默认 high
contested: true                       # 可选，存在争议时设置
contradictions: [其他页面引用]      # 可选
---
```

### 更新规则
- 每次更新页面时，必须更新 `updated` 字段
- 每个新页面必须添加到 `index.md` 对应分类下
- 每个操作必须追加到 `log.md`
- 多来源综合页面（3+ 来源），在段落末尾添加 `^[raw/子目录/来源.md]` 溯源标记

### raw/ 层 Frontmatter
原始资料必须包含：

```yaml
---
source_url: https://example.com/article   # 原始 URL（如有）
ingested: YYYY-MM-DD
sha256: <内容体的十六进制摘要>
---
```

`raw/` 内容为只读，Agent 不得修改。

---

## Tag Taxonomy

**规则：每个页面使用的标签必须出自以下 taxonomy。若需新增标签，先在此处添加，再使用。**

### 成分类型
| 标签 | 说明 |
|--------|------|
| `vitamin` | 维生素（水溶性与脂溶性） |
| `mineral` | 矿物质（宏量、微量、超微量） |
| `macronutrient` | 宏量营养素（蛋白质等） |
| `fatty-acid` | 脂肪酸（Omega-3/6/9 等） |
| `botanical` | 植物与草本成分 |
| `bioactive` | 非必需活性成分 |
| `amino-acid-derivative` | 氨基酸衍生物或代谢产物（肌酸、HMB 等） |
| `microbiome` | 微生态与消化支持（益生菌、益生元、后生元、消化酶等） |
| `organization` | 机构、数据库与认证实体 |

### 功效方向
| 标签 | 说明 |
|--------|------|
| `immune` | 免疫支持 |
| `cardiovascular` | 心血管健康 |
| `cognitive` | 认知与神经健康 |
| `bone-joint` | 骨骼与关节 |
| `metabolism` | 代谢与血糖调控 |
| `antioxidant` | 抗氧化 |
| `sleep-mood` | 睡眠与情绪 |
| `performance` | 运动表现与恢复 |
| `digestive` | 消化道健康 |
| `beauty` | 皮肤、头发、指甲健康 |

### 人群分层
| 标签 | 说明 |
|--------|------|
| `infant` | 婴幼儿 (0-1岁) |
| `child` | 学龄前儿童 (1-6岁) |
| `adolescent` | 青少年 (7-17岁) |
| `adult` | 成年人 (18-64岁) |
| `pregnancy` | 孕期 / 哺乳期 |
| `perimenopause` | 围绝经期女性 |
| `senior` | 老年人 (65岁+) |
| `athlete` | 运动人群 |
| `vegetarian` | 素食 / 纯素食者 |
| `chronic-risk` | 慢性病风险人群 |

### 安全相关
| 标签 | 说明 |
|--------|------|
| `interaction` | 药物或营养素相互作用 |
| `contraindication` | 禁忌人群或症状 |
| `ul-dosage` | 安全上限剂量 |
| `quality-cert` | 质量认证与标准 |


### 参考工具
| 标签 | 说明 |
|--------|------|
| `reference` | 速查与工具页面 |
| `glossary` | 术语与缩写解释 |
| `unit-conversion` | 单位换算 |
| `evidence-grade` | 证据等级与研究设计 |
| `source-guide` | 权威来源使用指南 |
| `dose-calculation` | 剂量估算与计算方法 |
| `regulation` | 法规与监管框架 |
| `labeling` | 标签规则与标签阅读 |
| `certification-standard` | 第三方认证、标准与核验方法 |
| `cross-border` | 进口与跨境电商相关规则 |
| `compliance` | 合规边界与监管提示 |

### 元信息
| 标签 | 说明 |
|--------|------|
| `entity` | 实体页面 |
| `concept` | 概念页面 |
| `comparison` | 对比分析页面 |
| `guide` | 指引页面 |
| `mechanism` | 机制页面 |
| `summary` | 综合摘要 |
| `category` | 分类体系或分类概念 |

---

## Page Thresholds

| 情况 | 行动 |
|--------|------|
| **创建页面** | 实体/概念在 2+ 来源中出现，或在单个来源中处于核心地位 |
| **添加到现有页面** | 新来源提及已有覆盖的内容 |
| **不创建页面** | 仅为路过提及、细节、或超出领域范围 |
| **拆分页面** | 页面超过 ~200 行时，拆分为子主题并交叉链接 |
| **归档页面** | 内容已被完全替代时，移至 `_archive/`，从 index 中移除 |

---

## 页面类型模板

### Entity Pages （实体页）
每个重要实体一页，包含：
- Overview / 定义与简介
- Key Facts / 关键事实与数据
- Functions & Benefits / 功效与益处
- Mechanisms / 作用机制（如有明确研究）
- Populations & Dosage / 适用人群与建议剂量
- Safety / 安全性、UL、不良反应
- Forms & Bioavailability / 常见剂型与生物利用度
- Quality & Standards / 质量标准与认证
- Related Entities / 相关实体链接
- Sources / 来源引用

### Concept Pages （概念页）
每个概念一页，包含：
- Definition / 定义与解释
- Current Knowledge / 当前认知状态
- Open Questions / 开放问题或争议
- Related Concepts / 相关概念链接

### Comparison Pages （对比页）
对比分析页面，包含：
- 对比对象与目的
- 对比维度（表格形式优先）
- 结论或综合
- 来源引用

### Guide Pages （指引页）
实用指引页面，包含：
- 目标人群与场景
- 步骤化建议（如有）
- 注意事项与警示
- 相关资源链接

### Reference Pages （速查页）
基础设施型速查页面，包含：
- 术语、单位、证据等级、来源体系、法规框架或标签标准的清晰定义
- 表格化速查内容
- 使用边界与常见误解
- 指向实体、安全、指引和对比页面的交叉链接

`reference/regulations/` 用作法规与标准速查层，解释监管框架、标签规则、认证标准、跨境购买规则。它回答“这个标签/认证/监管体系是什么意思？”，不替代法律、注册或合规咨询。

---

## 索引页规范（Index Page Convention）

### 原则

**`index.md` 是目录的入口与导航页，不是内容载体。** 索引页的职责仅限：

1. **目录整体介绍**（1–2 段）— 说明本分类覆盖的范围与定位
2. **子页面索引** — 以表格或列表形式列出本目录下的所有子页面，含简要摘要（1 句）

索引页 **不得** 包含：
- 大段实质性论述（如机制解释、详细数据表格、操作步骤）
- 完整的 UL 速查表、相互作用对照表、选购流程清单等
- 跨多节的安全总则或核心原则

### 何时拆分

当目录下的 `index.md` 出现以下任一情况时，必须将实质内容拆分为独立子页面：

| 触发条件 | 拆分方式 |
|----------|----------|
| 有效内容行数 > 60 行 | 拆分为同目录下独立 `.md` 文件 |
| 包含完整数据表格（UL 表、对照表、矩阵） | 表格移入独立页面，索引页仅保留表格摘要/链接 |
| 包含多节核心原则/安全总则/操作指南 | 原则/指南移入独立页面，索引页仅保留链接与 1 句摘要 |

### 命名约定

- 索引页固定为 `index.md`
- 拆分出的实质内容页使用语义化名称，全小写连字符，如：
  - `common-interactions.md`（常见相互作用）
  - `ul-reference.md`（UL 参考表）
  - `certification-guide.md`（认证指南）
  - `how-to-choose.md`（选购方法）
  - `core-principles.md`（核心原则）

### 索引页 frontmatter

索引页的 `type` 必须为 `summary`：

```yaml
---
title: 分类名称
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: summary
tags: [summary, ...]
---
```

### 索引页结构示例

```markdown
# 分类名称

> 本分类的 1–2 句定位说明。

## 子页面

- [子页面 A](sub-page-a) — 一句话摘要
- [子页面 B](sub-page-b) — 一句话摘要

## 涉及的主要实体（可选）

- [实体 X](../entities/nutrients/x) · [实体 Y](../entities/nutrients/y)
```

### 反面示例

以下情况 **违反规范**，需拆分：

- `safety/interactions/index.md` 包含 3 节按机制分类的相互作用详解 + 12 行对照表
- `guides/selection/index.md` 包含完整的标签阅读要点、剂型对比表格、选购流程清单
- `guides/chronic/index.md` 包含核心原则、安全性总则、慢病-补充剂汇总矩阵

### 正面示例

拆分后：

- `safety/interactions/index.md` → 仅保留概述 + 子页面列表
- `safety/interactions/common-interactions.md` → 接收原索引页中的相互作用详解与对照表

---

## 内容审查与权威来源规则

详细审查规则固定在根目录 `CONTENT_REVIEW_RULES.md`。该文件为 Agent 维护规范，通过 VitePress `srcExclude` 排除，不发布到网站。

### 硬性质量门槛

1. **每个实质内容页必须有权威来源**：页面应同时保留 frontmatter `sources:` 中的 `raw/` 溯源文件，以及正文 `## Sources` 中的外部可访问权威来源。
2. **索引/重定向/日志可豁免完整来源**：`type: summary` 索引页、`type: redirect` 跳转页、`log.md`、`SCHEMA.md`、`CONTENT_REVIEW_RULES.md` 和 `.audit/**` 不要求完整 Sources，但不得承载未经来源支撑的医学断言。
3. **安全优先**：剂量、UL、禁忌、孕期/哺乳、儿童、肝肾疾病、手术、抗凝/降糖/降压/免疫抑制用药等内容必须有明确来源。
4. **证据语气必须匹配证据等级**：机制、体外、动物或观察性证据不得写成临床疗效结论；补充剂不得写成疾病治疗替代方案。
5. **监管/认证不等于疗效**：监管许可、质量认证、传统使用只能支持对应范围内的表述，不能替代临床证据。

### 每类页面最低来源要求

| 页面类型 | 最低要求 | 优先来源 |
|---|---|---|
| 营养素实体页 | 至少 2 个权威来源；覆盖 RDA/AI/UL、缺乏、食物来源、安全与相互作用 | NIH ODS HP + Consumer、NASEM/DRI、中国 DRIs、LPI、EFSA |
| 植物/草本页 | 至少 2 个权威来源；必须覆盖安全性、相互作用、证据强度 | NCCIH、EMA herbal monograph、WHO monograph、Cochrane、PubMed 系统综述 |
| 非必需活性成分页 | 至少 2–3 个来源；按用途区分营养、运动、睡眠、关节等证据 | NIH/NCCIH、ISSN、IOC/ACSM、Cochrane、PubMed 系统综述/RCT |
| 微生态页 | 至少 2 个来源；菌株/属级证据必须区分 | WGO/AGA/ESPGHAN、Cochrane、PubMed 系统综述、ISAPP |
| 机构/认证页 | 至少官方主页 + 相关说明页；说明局限 | 机构官网、监管机构、标准组织官方说明 |
| 机制页 | 至少 1 个综述/教材级来源 + 相关实体事实表；避免机制外推 | PubMed/PMC 综述、NCBI Bookshelf、LPI、NIH ODS |
| 功效页 | 至少 2–3 个来源；区分健康目标、疾病结局和替代终点 | Cochrane、PubMed 系统综述、NIH ODS、专业指南 |
| 慢病指南 | 至少 1 个疾病指南 + 1 个补充剂/营养证据源 + 相关安全来源 | ADA、AHA/ACC、NICE、WHO、KDIGO、ACR、AGA/ECCO、NIH ODS、Cochrane |
| 特定人群指南 | 至少 1 个该人群指南 + 相关营养素来源 | ACOG、AAP、ESPGHAN、ESPEN、ISSN/ACSM/IOC、WHO、NIH ODS |
| 安全页 | 至少 3 个来源；必须可追溯到官方/指南/系统综述 | NIH ODS UL、FDA、NCCIH、USP/NSF、药物标签/指南、Cochrane |
| 对比页 | 每个对比对象至少 1 个来源；结论必须有限定条件 | NIH ODS、LPI、EFSA、ISSN、PubMed 综述、监管/认证官方说明 |
| 速查/法规页 | 至少官方/标准/指南来源；表述为解释性而非法律建议 | FDA、EFSA、SAMR/NMPA、USP、NSF、WHO、NASEM |

### 审查状态字段

人工审查时可在页面 frontmatter 添加：

```yaml
review_status: unreviewed | needs_sources | source_checked | fact_checked
reviewed: YYYY-MM-DD
review_notes: "简短说明"
```

### 每批修复后的验证

每批修订后必须运行：

```bash
python3 scripts/check-links.py
npx vitepress build
```

如发布内容变更，还需部署到生产站点并确认 `.user.ini` 未被覆盖。

---

## Update Policy

当新信息与现有内容冲突时：

1. 检查日期 — 通常新来源优先于旧来源
2. 若存在真正矛盾，在页面中记录双方观点及日期/来源
3. 在 frontmatter 中标记：`contradictions: [页面名]` 和 `contested: true`
4. 在 lint 报告中标注供用户审阅

---

## VitePress 发布说明

本知识库的 **raw/ 层** 和 **元数据文件**（`SCHEMA.md`、`log.md`）通过 VitePress 的 `srcExclude` 排除，不发布到网站。

- **发布内容：** `entities/`、`concepts/`、`safety/`、`guides/`、`comparisons/`、`reference/`、根目录 `index.md`
- **排除内容：** `raw/**`、`SCHEMA.md`、`log.md`、`scripts/**`
- **静态资源：** `raw/assets/` 中的图片可通过构建脚本同步至 `.vitepress/public/assets/`

### 构建前链接检查

每次执行 `npm run docs:build` 时，`predocs:build` 钩子会自动运行 `scripts/check-links.py`：

1. **扫描范围**：检查 `entities/`、`concepts/`、`safety/`、`guides/`、`comparisons/` 下所有 `.md` 文件中的内部链接
2. **排除项**：外部 URL（`http://`、`https://`）、锚点链接（`#`）、邮箱/电话、图片等非页面资源
3. **完整性验证**：确保每个内部链接指向的目标页面存在（支持相对路径、绝对路径、目录索引自动解析）
4. **失败处理**：
   - 若发现断链 → 脚本返回非零退出码 → `npm run docs:build` 终止 → 构建失败
   - 若所有链接完整 → 继续执行 VitePress 构建

**硬要求**：新增页面时，必须确保所有内部链接正确。测试前可单独运行 `python3 scripts/check-links.py` 验证。

> **注意：** VitePress 自带的 `ignoreDeadLinks` 已关闭（默认 `false`）。构建时 VitePress 也会检测内部死链，形成双层保险。

---

## 权威来源优先级

内容来源按以下优先级引用：

| 优先级 | 来源类型 | 示例 |
|--------|----------|------|
| P0 | 官方指南与数据库 | NIH ODS Fact Sheets, EFSA Opinions, 中国 DRIs |
| P1 | 系统综述与 Meta 分析 | Cochrane Library, PubMed 系统综述 |
| P2 | 权威参考网站 | Examine.com, Linus Pauling Institute (LPI) |
| P3 | 高质量专业内容 | 著名营养学教授、医学协会指南 |
| P4 | 行业报告与调研 | 行业白皮书、市场报告（仅作为背景） |

所有引用必须在页面中注明 `sources`，并在正文中标注具体来源。
