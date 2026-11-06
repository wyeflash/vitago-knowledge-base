# VitaGo KB 内容审查与权威来源规则

> 固定版本：2026-05-05。本文件是 Agent 审查和修订发布内容时的质量门槛；`SCHEMA.md` 保留结构规范，本文件细化内容可信度、来源、证据语气与人工核对流程。

## 1. 适用范围与基本原则

本规则适用于已发布内容目录：`entities/`、`concepts/`、`safety/`、`guides/`、`comparisons/`、`reference/` 与根目录 `index.md`。

基本原则：

1. **每个实质内容页必须有权威来源**：页面应同时保留 frontmatter `sources:` 中的 `raw/` 溯源文件，以及正文 `## Sources` 中的外部可访问权威来源。
2. **索引/重定向/日志可豁免完整来源**：`type: summary` 的索引页、`type: redirect` 的跳转页、`log.md`、`SCHEMA.md`、本文件和 `.audit/**` 不要求完整 Sources，但不得承载未经来源支撑的医学断言。
3. **安全优先**：剂量、UL、禁忌、妊娠/哺乳、儿童、肝肾疾病、手术、抗凝/降糖/降压/免疫抑制用药等内容必须有明确来源。
4. **证据语气必须匹配证据等级**：机制、体外、动物或观察性证据不得写成临床疗效结论；补充剂不得写成疾病治疗替代方案。
5. **不得把监管许可、质量认证或传统使用等同于临床有效**。

## 2. 页面最低来源要求

| 页面类型 | 最低要求 | 优先来源 |
|---|---|---|
| 营养素实体页 `entities/nutrients/` | 至少 2 个权威来源；包含 RDA/AI/UL、缺乏、食物来源、安全与相互作用 | NIH ODS HP + Consumer、NASEM/DRI、中国 DRIs、LPI、EFSA |
| 植物/草本页 `entities/botanicals/` | 至少 2 个权威来源；必须包含安全性、相互作用、证据强度 | NCCIH、EMA herbal monograph、WHO monograph、Cochrane、PubMed 系统综述 |
| 非必需活性成分页 `entities/bioactives/` | 至少 2–3 个来源；按用途区分营养、运动、睡眠、关节等证据 | NIH/NCCIH、ISSN、IOC/ACSM、Cochrane、PubMed 系统综述/RCT |
| 微生态页 `entities/microbiome/` | 至少 2 个来源；菌株/属级证据必须区分 | WGO/AGA/ESPGHAN 指南、Cochrane、PubMed 系统综述、ISAPP |
| 机构/认证页 `entities/organizations/` | 至少官方主页 + 相关说明页；说明其局限 | 机构官网、监管机构、标准组织官方说明 |
| 机制页 `concepts/mechanisms/` | 至少 1 个综述/教材级来源 + 相关实体事实表；避免机制外推 | PubMed/PMC 综述、NCBI Bookshelf、LPI、NIH ODS |
| 功效页 `concepts/effects/` | 至少 2–3 个来源；必须区分健康目标、疾病结局和替代终点 | Cochrane、PubMed 系统综述、NIH ODS、专业指南 |
| 剂型/生物利用度页 `concepts/forms/` | 至少 2 个来源；优先比较吸收/形式差异 | LPI、NIH ODS、EFSA、药代/生物利用度综述 |
| 人群概念页 `concepts/populations/` | 至少 1–2 个来源；只解释分层框架，不给具体方案 | WHO、CDC、专业学会、营养指南 |
| 慢病指南 `guides/chronic/` | 至少 1 个疾病指南 + 1 个补充剂/营养证据源 + 相关安全来源 | ADA、AHA/ACC、NICE、WHO、KDIGO、ACR、AGA/ECCO、NIH ODS、Cochrane |
| 特定人群指南 `guides/populations/` | 至少 1 个该人群指南 + 相关营养素来源 | ACOG、AAP、ESPGHAN、ESPEN、ISSN/ACSM/IOC、WHO、NIH ODS |
| 安全页 `safety/` | 至少 3 个来源；必须可追溯到官方/指南/系统综述 | NIH ODS UL、FDA、NCCIH、USP/NSF、药物标签/指南、Cochrane |
| 对比页 `comparisons/` | 每个对比对象至少 1 个来源；结论必须有限定条件 | NIH ODS、LPI、EFSA、ISSN、PubMed 综述、监管/认证官方说明 |
| 速查/法规页 `reference/` | 至少官方/标准/指南来源；表述为解释性而非法律建议 | FDA、EFSA、SAMR/NMPA、USP、NSF、WHO、NASEM |

## 3. `## Sources` 格式要求

每个实质内容页底部应包含：

```markdown
## Sources

- NIH Office of Dietary Supplements. Vitamin D Fact Sheet for Health Professionals. https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/
- NIH Office of Dietary Supplements. Vitamin D Fact Sheet for Consumers. https://ods.od.nih.gov/factsheets/VitaminD-Consumer/
- Authoritative guideline or systematic review with PMID/DOI/official URL.
```

要求：

- 不只写机构名，应尽量给出标题、年份/版本、URL、PMID 或 DOI。
- `sources:` frontmatter 继续用于 `raw/` 溯源，不替代正文 Sources。
- 外部 URL 不应指向商业宣传页、个人博客或电商页，除非作为“市场背景”且明确标注非证据来源。
- Examine.com 可作为 P2 二级参考，但因 WAF 和商业数据库限制，不能作为唯一权威来源。

## 4. 权威来源优先级

| 优先级 | 来源类型 | 适用场景 |
|---|---|---|
| P0 | 官方事实表、监管标准、临床指南 | RDA/AI/UL、禁忌、相互作用、慢病指南、法规/标签 |
| P1 | 系统综述、Meta 分析、Cochrane、GRADE 指南 | 疗效、风险、临床结局、证据强度 |
| P2 | 权威二级参考 | LPI、NCCIH、专业学会教育资料、Examine.com 交叉核对 |
| P3 | 高质量 RCT/队列研究 | 特定剂量、特定结局、缺少综述时 |
| P4 | 行业报告/市场资料 | 只能用于市场/背景，不支持功效或安全结论 |

## 5. 证据语气规则

| 证据状态 | 推荐表述 | 禁止表述 |
|---|---|---|
| 临床指南明确推荐 | “指南建议/推荐……” | 不得省略适用人群和限制条件 |
| 多个 RCT/系统综述支持 | “可能有帮助”“有一定证据支持” | “治疗/治愈/显著降低疾病风险” |
| 机制或生物标志物证据 | “参与……机制”“可能影响……指标” | “因此可预防/治疗某疾病” |
| 观察性研究 | “相关/关联” | “导致/证明” |
| 传统使用或低质量证据 | “传统用于……；现代证据有限” | “临床有效” |
| 监管/认证 | “降低质量/污染/标签风险” | “证明疗效” |

## 6. 安全硬性检查项

含以下任一内容时，必须显式核对来源并写入安全段落：

- UL、RDA、AI、剂量范围、疗程、儿童剂量、孕期/哺乳期剂量。
- 药物相互作用：抗凝/抗血小板、降糖、降压、他汀、甲状腺药物、抗癫痫、免疫抑制剂、镇静药、抗抑郁药等。
- 禁忌或慎用：孕期、哺乳期、儿童、肝肾疾病、手术前后、自身免疫病、激素敏感性疾病、出血风险。
- 脂溶性维生素、铁、硒、碘、维生素 B6、烟酸等高剂量风险。
- 草本成分的肝毒性、镇静、出血、激素样作用、CYP/P-gp 相互作用。

## 7. 审查状态标记

人工审查时可在页面 frontmatter 添加可选字段：

```yaml
review_status: unreviewed | needs_sources | source_checked | fact_checked
reviewed: YYYY-MM-DD
review_notes: "简短说明"
```

含义：

- `unreviewed`：尚未按本规则审查。
- `needs_sources`：发现缺少权威来源或来源不完整。
- `source_checked`：来源格式与权威性已初步通过。
- `fact_checked`：关键断言已与来源逐条核对。

## 8. 审查执行顺序

1. `safety/`：禁忌、相互作用、UL、质量风险。
2. `guides/chronic/`：按六大系统审查：心脑血管、代谢、骨骼、消化、免疫、其他。
3. `entities/nutrients/`：逐项核对 NIH ODS / DRI / LPI。
4. `entities/botanicals/`：逐项核对 NCCIH / EMA / WHO / Cochrane。
5. `concepts/effects/` 与 `concepts/mechanisms/`：检查机制外推和证据语气。
6. `comparisons/`：检查结论是否有适用边界。
7. `reference/`：检查监管、标签、证据等级表述是否准确。

## 9. 每批修复后的验证

每批修订后必须运行：

```bash
python3 scripts/check-links.py
npx vitepress build
```

如发布内容变更，还需部署到生产站点并确认 `.user.ini` 未被覆盖。
