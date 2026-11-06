# VitaGo KB 内容权威性与错误风险审计报告（2026-05-05）

## 执行范围

- 源目录：`/home/ec2-user/.hermes/profiles/vitago/home/vitagokb`
- 扫描对象：公开 Markdown 页面（`index.md`、`entities/`、`concepts/`、`safety/`、`guides/`、`comparisons/`、`reference/`）
- 排除对象：`raw/`、`.vitepress/`、`node_modules/`、`scripts/`、`.audit/`、`SCHEMA.md`、`log.md`
- 说明：机器扫描只能发现“高风险信号”，不能直接证明内容错误。后续人工/Agent 复核需逐页对照权威来源。

## 总览

- 扫描页面总数：**260**
- 实质页面（排除首页/索引/重定向等）：**231**
- 需要来源可追溯性增强的实质页面：**107**
- 含占位/待建/TODO 标记页面：**11**
- 短实质页（<1800 字符）：**46**
- 编码/Unicode 风险文件：**1**
- 明显高风险断言关键词命中：**22**

## 按目录统计

| 目录 | 页面数 | 短页 | 占位标记 | 无 sources/raw | 无 Sources 章 | 无权威外链 | 已 review 标记 | 编码风险 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| root | 1 | 0 | 0 | 1 | 1 | 1 | 0 | 0 |
| entities | 109 | 40 | 9 | 6 | 31 | 39 | 0 | 1 |
| concepts | 59 | 11 | 0 | 7 | 19 | 28 | 0 | 0 |
| safety | 9 | 5 | 1 | 0 | 0 | 0 | 9 | 0 |
| guides | 48 | 8 | 0 | 6 | 7 | 29 | 9 | 0 |
| comparisons | 23 | 1 | 1 | 4 | 6 | 3 | 0 | 0 |
| reference | 11 | 2 | 0 | 11 | 10 | 10 | 0 | 0 |

## 慢病指引按 6 大系统统计

| 系统 | 页面数 | 需增强来源页 | 已有 review 标记 | 页面 slug 示例 |
| --- | --- | --- | --- | --- |
| 心脑血管 | 3 | 0 | 3 | dyslipidemia, hypertension, atherosclerosis |
| 代谢 | 5 | 0 | 4 | nafld, pcos, gout, type2-diabetes, obesity |
| 骨骼 | 3 | 3 | 0 | osteoporosis, osteoarthritis, bone-spur |
| 其他（神经/精神/睡眠/眼/血液/内分泌） | 4 | 3 | 0 | migraine, dry-eye, insomnia, anemia |
| 消化 | 4 | 4 | 0 | ibd, constipation, ibs, dyspepsia |
| 未分类 | 6 | 4 | 1 | depression-anxiety, immune-deficiency, allergic-constitution, chronic-gastritis, core-principles, diabetes |
| 免疫 | 1 | 1 | 0 | chronic-fatigue |

## P0：优先复核范围

### 1. `safety/` 安全层

这些页面直接影响禁忌、相互作用、剂量上限、质量风险，应先核查：

- 无

### 2. `guides/chronic/` 慢病指引层

慢病页需同时有：疾病指南来源 + 补充剂证据来源 + 安全/相互作用来源。按用户要求的 6 大系统分批执行。

- `guides/chronic/osteoporosis.md` — chars=3469, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/osteoarthritis.md` — chars=4345, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/migraine.md` — chars=3419, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/ibd.md` — chars=3800, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/immune-deficiency.md` — chars=2904, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/allergic-constitution.md` — chars=2568, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/insomnia.md` — chars=2453, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/anemia.md` — chars=2542, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/chronic-fatigue.md` — chars=2647, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/bone-spur.md` — chars=2088, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/chronic-gastritis.md` — chars=3509, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/constipation.md` — chars=2351, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/ibs.md` — chars=2345, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/dyspepsia.md` — chars=2085, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/core-principles.md` — chars=4956, sources=1, raw_refs=1, auth_urls=0, review=-

## P1：第二批复核范围

### 植物/草本实体页（优先 NCCIH、EMA/WHO monograph、Cochrane、PubMed）

- `entities/botanicals/rhodiola.md` — chars=894, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/valerian.md` — chars=925, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/chamomile.md` — chars=1054, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/passionflower.md` — chars=970, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/lavender.md` — chars=960, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/peppermint-oil.md` — chars=855, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/milk-thistle.md` — chars=904, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/hawthorn.md` — chars=906, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/cinnamon.md` — chars=948, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/flaxseed.md` — chars=906, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/garlic.md` — chars=930, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/echinacea.md` — chars=960, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/elderberry.md` — chars=877, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/astragalus.md` — chars=917, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/boswellia.md` — chars=908, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/saw-palmetto.md` — chars=905, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/cranberry.md` — chars=918, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/black-cohosh.md` — chars=1032, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/evening-primrose-oil.md` — chars=980, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/grape-seed-extract.md` — chars=959, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/bilberry.md` — chars=891, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/chasteberry.md` — chars=970, sources=1, raw_refs=1, auth_urls=0, review=-

### 机制/功效概念页（防止“机制存在 = 临床有效”的过度推断）

- `concepts/mechanisms/one-carbon-metabolism.md` — chars=1775, sources=3, raw_refs=3, auth_urls=0, review=-
- `concepts/mechanisms/inflammation-resolution.md` — chars=1751, sources=2, raw_refs=2, auth_urls=0, review=-
- `concepts/mechanisms/antioxidant-nrf2.md` — chars=1549, sources=2, raw_refs=2, auth_urls=0, review=-
- `concepts/mechanisms/bone-remodeling.md` — chars=1559, sources=3, raw_refs=3, auth_urls=0, review=-
- `concepts/mechanisms/gut-barrier-microbiome.md` — chars=1170, sources=1, raw_refs=1, auth_urls=0, review=-
- `concepts/mechanisms/insulin-sensitivity.md` — chars=1589, sources=2, raw_refs=2, auth_urls=0, review=-
- `concepts/mechanisms/mitochondrial-energy-metabolism.md` — chars=2381, sources=3, raw_refs=3, auth_urls=0, review=-
- `concepts/mechanisms/neurotransmitter-synthesis.md` — chars=2456, sources=3, raw_refs=3, auth_urls=0, review=-
- `concepts/mechanisms/immune-regulation.md` — chars=2558, sources=4, raw_refs=4, auth_urls=0, review=-
- `concepts/mechanisms/thyroid-hormone-metabolism.md` — chars=2313, sources=4, raw_refs=4, auth_urls=0, review=-
- `concepts/mechanisms/hemoglobin-iron-metabolism.md` — chars=2489, sources=3, raw_refs=3, auth_urls=0, review=-
- `concepts/mechanisms/nitric-oxide-pathway.md` — chars=2231, sources=2, raw_refs=2, auth_urls=0, review=-
- `concepts/mechanisms/lipid-metabolism-transport.md` — chars=2455, sources=3, raw_refs=3, auth_urls=0, review=-
- `concepts/mechanisms/detoxification-biotransformation.md` — chars=2702, sources=3, raw_refs=3, auth_urls=0, review=-
- `concepts/mechanisms/circadian-rhythm-regulation.md` — chars=2203, sources=1, raw_refs=1, auth_urls=0, review=-
- `concepts/mechanisms/vitamin-d-receptor-signaling.md` — chars=5691, sources=5, raw_refs=0, auth_urls=10, review=-
- `concepts/mechanisms/protein-synthesis-muscle-metabolism.md` — chars=5072, sources=3, raw_refs=0, auth_urls=8, review=-
- `concepts/mechanisms/ppar-signaling.md` — chars=4518, sources=3, raw_refs=0, auth_urls=8, review=-
- `concepts/mechanisms/retinoic-acid-receptor-signaling.md` — chars=4497, sources=3, raw_refs=0, auth_urls=8, review=-
- `concepts/effects/blood-health.md` — chars=2478, sources=1, raw_refs=1, auth_urls=0, review=-
- `concepts/effects/reproductive-health.md` — chars=3122, sources=1, raw_refs=1, auth_urls=0, review=-
- `concepts/effects/cognitive-health.md` — chars=2249, sources=1, raw_refs=1, auth_urls=0, review=-
- `concepts/effects/mood-regulation.md` — chars=2481, sources=1, raw_refs=1, auth_urls=0, review=-
- `concepts/effects/exercise-performance.md` — chars=4502, sources=3, raw_refs=0, auth_urls=6, review=-
- `concepts/effects/antioxidant-aging.md` — chars=4513, sources=3, raw_refs=0, auth_urls=8, review=-
- `concepts/effects/skin-health.md` — chars=4526, sources=3, raw_refs=0, auth_urls=8, review=-

## 其他机器标记清单

### 编码/Unicode 风险

- `entities/nutrients/index.md` — chars=2045, sources=0, raw_refs=0, auth_urls=0, review=-

### 占位/待建/TODO 标记页

- `entities/botanicals/peppermint-oil.md` — chars=855, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/flaxseed.md` — chars=906, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/boswellia.md` — chars=908, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/saw-palmetto.md` — chars=905, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/bioactives/index.md` — chars=1263, sources=0, raw_refs=0, auth_urls=0, review=-
- `entities/bioactives/l-arginine.md` — chars=3238, sources=1, raw_refs=1, auth_urls=3, review=-
- `entities/microbiome/bifidobacterium.md` — chars=3557, sources=1, raw_refs=1, auth_urls=1, review=-
- `entities/microbiome/lactobacillus.md` — chars=3842, sources=1, raw_refs=1, auth_urls=1, review=-
- `entities/microbiome/saccharomyces-boulardii.md` — chars=3513, sources=1, raw_refs=1, auth_urls=1, review=-
- `safety/contraindications/index.md` — chars=1024, sources=2, raw_refs=2, auth_urls=3, review=source_checked
- `comparisons/index.md` — chars=2010, sources=0, raw_refs=0, auth_urls=0, review=-

### 短实质页（可能内容不足）

- `entities/botanicals/rhodiola.md` — chars=894, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/valerian.md` — chars=925, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/chamomile.md` — chars=1054, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/passionflower.md` — chars=970, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/lavender.md` — chars=960, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/peppermint-oil.md` — chars=855, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/milk-thistle.md` — chars=904, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/hawthorn.md` — chars=906, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/cinnamon.md` — chars=948, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/flaxseed.md` — chars=906, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/garlic.md` — chars=930, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/echinacea.md` — chars=960, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/elderberry.md` — chars=877, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/astragalus.md` — chars=917, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/boswellia.md` — chars=908, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/saw-palmetto.md` — chars=905, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/cranberry.md` — chars=918, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/black-cohosh.md` — chars=1032, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/evening-primrose-oil.md` — chars=980, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/grape-seed-extract.md` — chars=959, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/bilberry.md` — chars=891, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/chasteberry.md` — chars=970, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/botanicals/bromelain.md` — chars=1732, sources=1, raw_refs=1, auth_urls=1, review=-
- `entities/organizations/nih-ods.md` — chars=1348, sources=1, raw_refs=1, auth_urls=2, review=-
- `entities/organizations/efsa.md` — chars=1294, sources=1, raw_refs=1, auth_urls=2, review=-
- `entities/organizations/fda-cfsan.md` — chars=1349, sources=1, raw_refs=1, auth_urls=2, review=-
- `entities/organizations/cns.md` — chars=1272, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/organizations/who.md` — chars=1288, sources=1, raw_refs=1, auth_urls=2, review=-
- `entities/organizations/usp.md` — chars=1301, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/organizations/nsf.md` — chars=1292, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/organizations/consumerlab.md` — chars=1280, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/organizations/ifos.md` — chars=1380, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/organizations/blue-hat.md` — chars=1244, sources=1, raw_refs=1, auth_urls=0, review=-
- `entities/organizations/cochrane-library.md` — chars=1312, sources=1, raw_refs=1, auth_urls=2, review=-
- `entities/organizations/linus-pauling-institute.md` — chars=1346, sources=1, raw_refs=1, auth_urls=2, review=-
- `entities/organizations/examine.md` — chars=1241, sources=1, raw_refs=1, auth_urls=0, review=-
- `concepts/mechanisms/one-carbon-metabolism.md` — chars=1775, sources=3, raw_refs=3, auth_urls=0, review=-
- `concepts/mechanisms/inflammation-resolution.md` — chars=1751, sources=2, raw_refs=2, auth_urls=0, review=-
- `concepts/mechanisms/antioxidant-nrf2.md` — chars=1549, sources=2, raw_refs=2, auth_urls=0, review=-
- `concepts/mechanisms/bone-remodeling.md` — chars=1559, sources=3, raw_refs=3, auth_urls=0, review=-
- `concepts/mechanisms/gut-barrier-microbiome.md` — chars=1170, sources=1, raw_refs=1, auth_urls=0, review=-
- `concepts/mechanisms/insulin-sensitivity.md` — chars=1589, sources=2, raw_refs=2, auth_urls=0, review=-
- `guides/populations/diabetes.md` — chars=610, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/populations/adolescent.md` — chars=1774, sources=4, raw_refs=4, auth_urls=0, review=-
- `guides/chronic/gout.md` — chars=1784, sources=2, raw_refs=2, auth_urls=3, review=source_checked
- `comparisons/coq10-forms.md` — chars=1776, sources=0, raw_refs=0, auth_urls=0, review=-

### 高风险断言关键词命中

- `entities/nutrients/vitamin-a.md` — chars=7982, sources=1, raw_refs=1, auth_urls=1, review=-
- `entities/botanicals/st-johns-wort.md` — chars=3394, sources=1, raw_refs=1, auth_urls=1, review=-
- `entities/bioactives/caffeine.md` — chars=2950, sources=1, raw_refs=1, auth_urls=1, review=-
- `concepts/mechanisms/protein-synthesis-muscle-metabolism.md` — chars=5072, sources=3, raw_refs=0, auth_urls=8, review=-
- `concepts/mechanisms/ppar-signaling.md` — chars=4518, sources=3, raw_refs=0, auth_urls=8, review=-
- `concepts/categories/vitamin-b-complex.md` — chars=12237, sources=6, raw_refs=6, auth_urls=6, review=-
- `concepts/forms/mineral-forms-bioavailability.md` — chars=4423, sources=5, raw_refs=5, auth_urls=2, review=-
- `concepts/effects/liver-health.md` — chars=2417, sources=1, raw_refs=1, auth_urls=1, review=-
- `safety/interactions/common-interactions.md` — chars=2230, sources=2, raw_refs=2, auth_urls=3, review=source_checked
- `safety/contraindications/common-contraindications.md` — chars=2013, sources=2, raw_refs=2, auth_urls=3, review=source_checked
- `safety/quality/certification-guide.md` — chars=2827, sources=3, raw_refs=3, auth_urls=2, review=source_checked
- `guides/populations/senior.md` — chars=2129, sources=3, raw_refs=3, auth_urls=0, review=-
- `guides/chronic/ibd.md` — chars=3800, sources=1, raw_refs=1, auth_urls=0, review=-
- `guides/chronic/chronic-fatigue.md` — chars=2647, sources=1, raw_refs=1, auth_urls=0, review=-
- `comparisons/vitamin-d2-vs-d3.md` — chars=3421, sources=1, raw_refs=0, auth_urls=2, review=-
- `comparisons/probiotics-strains.md` — chars=4347, sources=4, raw_refs=0, auth_urls=2, review=-
- `comparisons/third-party-certification.md` — chars=4337, sources=5, raw_refs=0, auth_urls=2, review=-
- `comparisons/blue-hat-vs-gmp.md` — chars=2914, sources=3, raw_refs=0, auth_urls=1, review=-
- `reference/dose-calculation.md` — chars=2217, sources=0, raw_refs=0, auth_urls=0, review=-
- `reference/regulations/global-frameworks.md` — chars=2319, sources=0, raw_refs=0, auth_urls=0, review=-
- `reference/regulations/label-rules.md` — chars=2734, sources=0, raw_refs=0, auth_urls=0, review=-
- `reference/regulations/certification-standards.md` — chars=3448, sources=0, raw_refs=0, auth_urls=1, review=-

## 分阶段执行建议

### Phase 0：技术门禁与审计基线（本次）

- 生成本报告和机器扫描数据。
- 运行 `scripts/check-links.py` 与 `npx vitepress build`。
- 确认 `.audit/**` 已被 `srcExclude` 排除，不发布到线上。

### Phase 1：安全层 source-check

目标：`safety/` 全部页面。

每页操作标准：
- frontmatter 添加/规范 `sources:`、`review_status: source_checked`、`reviewed: 2026-05-05`、`review_notes:`。
- 正文补 `## Sources`，优先 FDA/NIH ODS/NCCIH/USP/NSF/Cochrane/PubMed。
- 明确剂量上限、禁忌、相互作用、质量认证的边界。

### Phase 2：慢病指引按 6 大系统复核

执行顺序：
1. 心脑血管
2. 代谢
3. 骨骼
4. 消化
5. 免疫
6. 其他（神经/精神/睡眠/眼/血液/内分泌）

每页必须区分：
- 指南推荐 vs 补充剂证据；
- 替代终点（LDL-C、TG、血糖、炎症指标）vs 临床结局（心梗/卒中、骨折、死亡等）；
- 辅助干预 vs 替代标准治疗。

### Phase 3：实体页复核

- 营养素：NIH ODS HP + Consumer；LPI 辅助机制/形式。
- 草本：NCCIH + PubMed/Cochrane；不以商家宣传或单项小试验作为强结论。
- 活性成分/微生态：优先系统综述、RCT、指南或官方事实表。

### Phase 4：概念/功效/机制页复核

- 每个机制页都需加入“机制不等于临床获益”的保守表述。
- 每个功效页应链接到对应实体、慢病指南和证据等级说明。

## 后续批次记录模板

每批完成后创建：`.audit/<section>-source-check-2026-05-05.md`，记录：
- 覆盖文件列表
- 新增/规范的 raw source
- 发现并修正的内容错误
- 未解决的问题
- 构建/部署验证结果
