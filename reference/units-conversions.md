---
title: 计量单位换算
type: reference
created: 2026-05-01
updated: 2026-05-05
tags: [reference, unit-conversion]
sources:
  - raw/references/reference-source-authority.md
review_status: source_checked
reviewed: 2026-05-05
confidence: high
---

# 计量单位换算

> 补充剂标签和研究论文常同时使用 μg、mcg、mg、IU、mmol 等单位。本页提供常见换算框架，帮助读者正确理解 [实体页](../entities/) 和 [安全剂量页](../safety/dosing-limits/) 中的剂量表达。

## 基础质量单位

| 单位 | 换算 | 说明 |
|------|------|------|
| 1 g | 1,000 mg | 克到毫克 |
| 1 mg | 1,000 μg / mcg | 毫克到微克 |
| 1 μg | 0.001 mg | 微克到毫克 |
| mcg | 等同于 μg | 标签上常用 mcg 避免 μ 符号误读 |

## 维生素 D：μg ↔ IU

维生素 D 的换算相对直接：

| 维生素 D | 等值 |
|----------|------|
| 1 μg | 40 IU |
| 1 IU | 0.025 μg |
| 10 μg | 400 IU |
| 15 μg | 600 IU |
| 20 μg | 800 IU |
| 25 μg | 1,000 IU |
| 50 μg | 2,000 IU |
| 100 μg | 4,000 IU |

注意：成人常见 UL 为 100 μg/日，即 4,000 IU/日。具体适用性仍需结合年龄、基础 25(OH)D 水平、疾病状态和用药情况，参见 [维生素 D](../entities/nutrients/vitamin-d) 与 [UL 速查总表](../safety/dosing-limits/ul-reference)。

## 维生素 A：RAE 与旧 IU

维生素 A 不建议只看 IU，应优先使用 RAE（Retinol Activity Equivalents，视黄醇活性当量）。

| 形式 | 换算关系 |
|------|----------|
| 1 μg RAE | 1 μg 视黄醇 |
| 1 μg RAE | 2 μg 补充剂 β-胡萝卜素 |
| 1 μg RAE | 12 μg 食物 β-胡萝卜素 |
| 1 μg RAE | 24 μg 其他膳食前维生素 A 类胡萝卜素 |

旧 IU 换算依赖具体形式：

| 形式 | 近似换算 |
|------|----------|
| 1 IU 视黄醇 | 约 0.3 μg RAE |
| 1 IU β-胡萝卜素补充剂 | 约 0.15 μg RAE |

关键提醒：预形成维生素 A（retinol / retinyl ester）与 β-胡萝卜素的安全性不同，孕期尤其不能简单按 IU 总量判断。

## 维生素 E：mg α-生育酚与 IU

现代营养标签更倾向使用 mg α-tocopherol，而不是 IU。

| 形式 | 近似换算 |
|------|----------|
| 1 IU 天然型 d-alpha-tocopherol | 约 0.67 mg α-tocopherol |
| 1 IU 合成型 dl-alpha-tocopherol | 约 0.45 mg α-tocopherol |
| 1 mg 天然型 d-alpha-tocopherol | 约 1.49 IU |
| 1 mg 合成型 dl-alpha-tocopherol | 约 2.22 IU |

关键提醒：天然型与合成型活性不同，不能只看 IU 数字比较强弱。

## 电解质：mmol ↔ mg

电解质常在临床或研究中使用 mmol/L，补充剂标签则多使用 mg。元素量换算如下：

| 元素 | 原子量近似值 | 1 mmol 元素量约等于 |
|------|--------------|--------------------|
| 钠 Na | 23.0 | 23 mg 钠 |
| 钾 K | 39.1 | 39.1 mg 钾 |
| 镁 Mg | 24.3 | 24.3 mg 元素镁 |
| 钙 Ca | 40.1 | 40.1 mg 元素钙 |
| 磷 P | 31.0 | 31 mg 元素磷 |
| 氯 Cl | 35.5 | 35.5 mg 氯 |

## 元素量 vs 化合物重量

补充剂标签最容易混淆的是“元素量”和“化合物重量”。

| 标签表达 | 含义 | 示例 |
|----------|------|------|
| Magnesium 200 mg | 通常表示元素镁 200 mg | 更接近实际摄入的镁量 |
| Magnesium citrate 1,250 mg | 可能表示柠檬酸镁化合物重量 | 元素镁含量远低于 1,250 mg |
| Calcium carbonate 1,250 mg providing calcium 500 mg | 化合物重量 1,250 mg，元素钙 500 mg | 应按元素钙计算摄入量 |

阅读标签时应优先找 “providing / as / elemental” 等字样，确认实际元素量。

## 相关速查页

- [缩写术语表](glossary) — RAE、DFE、IU、UL 等术语解释
- [剂量计算思路](dose-calculation) — 单位换算后如何用于剂量估算
- [权威来源索引](authoritative-sources) — 查询官方 RDA、AI、UL 和标签标准

## Sources

- NIH ODS nutrient recommendations: https://ods.od.nih.gov/HealthInformation/nutrientrecommendations.aspx
- FDA. Dietary Supplements: https://www.fda.gov/food/dietary-supplements
- WHO health topics: https://www.who.int/health-topics
