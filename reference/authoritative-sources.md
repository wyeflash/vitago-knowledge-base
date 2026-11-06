---
title: 权威来源索引
type: reference
created: 2026-05-01
updated: 2026-05-05
tags: [reference, source-guide]
sources:
  - raw/references/reference-source-authority.md
review_status: source_checked
reviewed: 2026-05-05
confidence: high
---

# 权威来源索引

> 本页说明 VitaGo KB 常用权威来源的覆盖范围、优势、局限和适用场景。它回答“什么时候该查哪个来源”，而 [机构与认证索引](../entities/organizations/) 更适合承载“某个机构是什么”。

## Related Entities

- [NIH ODS](../entities/organizations/nih-ods) — 美国膳食补充剂官方数据库
- [EFSA](../entities/organizations/efsa) — 欧洲食品安全局科学意见
- [Cochrane Library](../entities/organizations/cochrane-library) — 系统综述与 Meta 分析
- [Linus Pauling Institute](../entities/organizations/linus-pauling-institute) — 微量营养素研究

## 来源选择总原则

| 问题类型 | 优先来源 |
|----------|----------|
| RDA、AI、UL、缺乏、食物来源 | NIH ODS、各国 DRI、EFSA |
| 安全上限、毒理学、NOAEL/LOAEL | EFSA、NIH ODS、IOM/NASEM |
| 干预是否有效 | Cochrane、PubMed 系统综述、RCT |
| 运动营养和表现 | ISSN Position Stands、ACSM、IOC 共识 |
| 草本与替代医学 | NCCIH、PubMed 系统综述 |
| 微量营养素机制综述 | Linus Pauling Institute、NIH ODS |
| 标签与监管 | FDA、各国监管机构、中国保健食品法规 |
| 质量认证 | USP、NSF、Informed Choice、ConsumerLab、IFOS |

## 核心来源速查

| 来源 | 最适合查询 | 优点 | 局限 | VitaGo 使用场景 |
|------|------------|------|------|----------------|
| NIH Office of Dietary Supplements (ODS) | RDA、AI、UL、缺乏、食物来源、安全性、药物相互作用 | 美国官方、结构清晰、营养素覆盖广 | 对部分非传统补充剂覆盖有限 | 营养素实体页的首选基础来源 |
| EFSA | 欧洲 NRV、UL、安全性科学意见、健康声称评估 | 毒理学与风险评估严谨 | 文档较技术化，部分结论与美国体系不同 | 交叉验证 UL、安全性和健康声称 |
| Cochrane Library | 干预效果、系统综述、偏倚评估 | 方法学严格，适合判断“是否有效” | 不一定覆盖所有新兴补充剂，更新周期不一 | 概念页、慢病指引、功效证据评估 |
| ISSN | 运动营养、肌酸、蛋白质、咖啡因等 | 领域专业，Position Stand 实用 | 聚焦运动人群，不能直接外推所有普通人 | 运动营养实体页与表现相关内容 |
| Linus Pauling Institute (LPI) | 微量营养素机制、综述型知识 | 机制解释清楚，适合教学 | 不是监管机构，剂量建议需与官方 DRI 交叉验证 | 机制补充与背景阅读 |
| NCCIH | 草本、替代医学、益生菌、公众安全信息 | 美国官方，风险提示清楚 | 深度和表格化程度不如 NIH ODS 营养素页 | 植物提取物和非传统补充剂基础来源 |
| PubMed | 论文、RCT、系统综述、指南摘要 | 覆盖面最广，可追踪原始研究 | 需要自行评价质量；摘要不等于全文 | 补充 Cochrane/指南以外的研究证据 |
| FDA | 标签、监管、膳食补充剂合规、安全警示 | 美国监管权威 | 不直接提供营养素推荐剂量 | 标签解释、召回、安全警报、监管边界 |
| USDA FoodData Central | 食物成分数据 | 食物营养含量数据丰富 | 不是补充剂证据来源 | 食物来源表和膳食摄入估算 |
| 中国营养学会 / 中国 DRIs | 中国人群膳食参考摄入量 | 本土人群与中文场景适配 | 公开获取和结构化程度可能有限 | 中文用户 RNI/AI/UL 对照与本土化解释 |

## 使用优先级

VitaGo KB 当前采用以下证据优先级：

1. P0：官方指南、DRI、NIH ODS、EFSA、安全性科学意见；
2. P1：Cochrane、系统综述、Meta 分析、高质量 RCT；
3. P2：权威学术机构或专业组织综述，如 ISSN、LPI、NCCIH；
4. P3：监管信息、标签标准、质量认证数据库；
5. P4：行业报告或商业内容，仅可作为背景，不作为核心健康结论依据。

## 机构页与来源指南的分工

| 页面类型 | 主要问题 | 示例 |
|----------|----------|------|
| `reference/authoritative-sources.md` | 我应该查哪个来源？这个来源适合回答什么问题？ | “查 UL 应优先看 NIH ODS 和 EFSA” |
| `entities/organizations/*.md` | 这个机构是什么？它的职责、历史和权威性如何？ | “NIH ODS 是 NIH 下属膳食补充剂办公室” |
| `raw/references/reference-source-authority.md` | 某次实际收录的原始资料是什么？ | “nih-ods-vitamin-d-health-professional-2024.md” |

## 相关速查页

- [证据等级金字塔](evidence-hierarchy) — 判断不同研究类型的证据强弱
- [缩写术语表](glossary) — 理解 RDA、UL、NOAEL、RR、NNT 等术语
- [计量单位换算](units-conversions) — 将来源中的 μg、mg、IU、mmol 转换为可读剂量

## Sources

- NIH ODS nutrient recommendations: https://ods.od.nih.gov/HealthInformation/nutrientrecommendations.aspx
- FDA. Dietary Supplements: https://www.fda.gov/food/dietary-supplements
- WHO health topics: https://www.who.int/health-topics
