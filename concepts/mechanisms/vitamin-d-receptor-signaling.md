---
title: 维生素 D 受体（VDR）信号通路
created: 2026-05-03
updated: 2026-05-05
type: concept
tags: [mechanism, vitamin-d, vdr, signaling, transcription, calcium, bone, immune]
sources:
  - url: https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/
    title: NIH ODS Vitamin D Fact Sheet for Health Professionals
    date: 2024-11-15
  - url: https://www.endocrine.org/guidelines-and-clinical-practice/clinical-practice-guidelines/vitamin-d-deficiency-evaluation-treatment-and-prevention
    title: Endocrine Society Clinical Practice Guideline on Vitamin D
    date: 2024-06-03
  - url: https://pubmed.ncbi.nlm.nih.gov/21396885/
    title: 'Vitamin D: more than a bone protector. Huotari & Herzig, Antioxid Redox Signal 2011'
  - url: https://pubmed.ncbi.nlm.nih.gov/27411682/
    title: 'Extra-skeletal effects of vitamin D. Bouillon et al., Nutrients 2016'
  - url: https://pubmed.ncbi.nlm.nih.gov/30287786/
    title: 'The role of vitamin D receptor in health and disease. Dankers et al., Int Rev Immunol 2017'
review_status: source_checked
reviewed: 2026-05-05
confidence: moderate
---

# 维生素 D 受体（VDR）信号通路

> 维生素 D 并非传统意义上的维生素，而是一种具有激素活性的脂溶性类固醇。其核心作用机制通过与 **维生素 D 受体（Vitamin D Receptor, VDR）** 结合，调控数百个靶基因的转录，从而影响钙磷代谢、骨骼重塑、免疫调节、细胞增殖与分化等广泛生理过程。

## 核心要点

- **1,25(OH)₂D 是活性形式**：皮肤或膳食来源的维生素 D₃（胆钙化醇）经肝脏 25-羟化酶（CYP2R1/CYP27A1）转化为 25(OH)D，再经肾脏 1α-羟化酶（CYP27B1）转化为 1,25(OH)₂D（骨化三醇），后者是 VDR 的天然高亲和力配体。
- **基因组效应为主**：VDR 与 RXR（维甲酸 X 受体）形成异源二聚体，结合到靶基因启动子区的 **VDRE（维生素 D 反应元件）**，调控转录。目前已确认 VDR 直接调控的靶基因超过 1,000 个。
- **非基因组效应快速**：VDR 也可定位于细胞膜 caveolae，通过快速激活 PI3K/Akt、Src/MAPK 等通路，在数秒至数分钟内调节离子通道（如肠上皮钙通道 TRPV6）和信号激酶。
- **24-羟化酶负反馈**：CYP24A1 是 1,25(OH)₂D 诱导的关键降解酶，通过 24-羟化启动失活代谢，形成负反馈调节环。
- **VDR 多态性影响需求**：VDR 基因多态性（如 BsmI、FokI、TaqI、ApaI）与骨密度、维生素 D 需求量、代谢综合征风险存在关联，但临床意义仍有争议。

## 信号通路详解

### 1. 配体合成与活化

```
皮肤/膳食 D₃
    ↓
肝脏 CYP2R1/CYP27A1 → 25(OH)D（主要循环形式，半衰期 ~2–3 周）
    ↓
肾脏/局部组织 CYP27B1 → 1,25(OH)₂D（活性形式，半衰期 ~4–6 小时）
    ↓
靶细胞 VDR + RXR → 基因转录调控
```

**局部 1α-羟化**：除肾脏外，免疫细胞（巨噬细胞、树突状细胞）、胎盘、前列腺、乳腺、结肠等组织也表达 CYP27B1，可在局部产生活性维生素 D，实现旁分泌/自分泌调节。

### 2. 经典基因组通路（数小时至数天）

| 步骤 | 分子事件 | 关键蛋白 |
|------|----------|----------|
| 配体进入 | 1,25(OH)₂D 穿过细胞膜（脂溶性） | — |
| 受体结合 | 与胞核 VDR 结合，构象改变 | VDR |
| 二聚化 | VDR-RXR 异源二聚体形成 | RXRα |
| DNA 结合 | 识别 VDRE（AGGTCA-nx-AGGTCA 共有序列） | VDR-RXR |
| 辅调节因子招募 | 共激活因子（SRC/p160, p300/CBP, DRIP/TRAP）或共抑制因子 | NCoR/SMRT |
| 转录输出 | RNA Pol II 招募，靶基因转录 | — |

**经典靶基因**：
- **钙磷代谢**：TRPV6（肠钙吸收）、Calbindin-D9k/28k、PMCA1b、NCX1、PTH（负调控）
- **骨骼重塑**：RANKL、OPG、Osteocalcin、Osteopontin、Collagen I
- **免疫调节**：Cathelicidin（LL-37）、Defensin β2、IL-10、FOXP3

### 3. 快速非基因组通路（数秒至数分钟）

VDR 与 caveolin-1 结合定位于细胞膜 caveolae，激活下游信号：

- **Src/MAPK 通路**：促进细胞增殖与分化
- **PI3K/Akt 通路**：抑制凋亡，促进细胞存活
- **PLC/PKC 通路**：开放电压门控钙通道（肠上皮 TRPV6 快速活化）
- **cAMP/PKA 通路**：影响肾磷酸盐转运（NaPi-IIa/IIc）

### 4. 负反馈与代谢清除

```
1,25(OH)₂D ↑
    ↓
诱导 CYP24A1 表达（24-羟化酶）
    ↓
24,25(OH)₂D 或 1,24,25(OH)₃D → 进一步氧化为 calcitroic acid（经胆汁/尿液排出）
```

高血钙、高血磷、FGF23 均可诱导 CYP24A1 并抑制 CYP27B1，协同降低 1,25(OH)₂D 水平。

## 组织特异性功能

| 组织 | 主要 VDR 靶功能 | 代表性靶基因 |
|------|-----------------|--------------|
| **小肠** | 促进钙磷主动吸收 | TRPV6, Calbindin-D9k, PMCA1b |
| **骨骼** | 调控成骨/破骨平衡 | RANKL, OPG, Osteocalcin, Osteopontin |
| **肾脏** | 钙磷重吸收、1α-羟化 | TRPV5, Calbindin-D28k, Npt2a/c, CYP27B1 |
| **甲状旁腺** | 抑制 PTH 分泌 | PTH（负调控）, CaSR 协同 |
| **免疫细胞** | 先天免疫抗菌、调节适应性免疫 | Cathelicidin, Defensin β2, IL-10, TGF-β |
| **肌肉** | 肌纤维发育与功能 | VDR 表达于肌卫星细胞，影响肌力 |
| **皮肤** | 抑制过度增殖、促进分化 | Involucrin, Filaggrin, Cathelicidin |

## VDR 基因多态性与个体化营养

| 多态性位点 | 位置 | 潜在功能影响 | 研究现状 |
|------------|------|--------------|----------|
| **FokI** | 外显子 2 | 影响翻译起始效率，产生短/长 VDR 蛋白 | 短型（f）转录活性更高；与骨密度关联较一致 |
| **BsmI** | 内含子 8 | 与 3'UTR 多态性连锁，可能影响 mRNA 稳定性 | 与骨密度、代谢综合征关联存在人群差异 |
| **TaqI** | 外显子 9 | 同义突变，可能与 BsmI 连锁不平衡 | 证据较弱 |
| **ApaI** | 内含子 8 | 功能意义尚不明确 | 多为连锁标记 |
| **Cdx2** | 启动子区 | 影响肠上皮特异性转录效率 | 与骨密度和肠癌风险关联有报道 |

> **临床提示**：目前 VDR 基因分型尚未被主流指南推荐用于常规维生素 D 补充剂量调整。若未来个体化营养学发展，VDR 多态性可能作为结合 25(OH)D 基线水平和生活方式的辅助参考。

## 与其他通路的交互

- **钙感应受体（CaSR）通路**：高血钙通过 CaSR 抑制甲状旁腺 PTH 分泌，同时 VDR 负调控 PTH 基因转录，形成双重抑制。
- **FGF23-Klotho 轴**：成骨细胞分泌的 FGF23 与肾小管 Klotho 共受体结合，抑制 CYP27B1 并诱导 CYP24A1，与 PTH 作用相反。
- **Wnt/β-catenin 通路**：VDR 与 LRP5/6-Wnt 信号协同调控成骨细胞分化和骨形成。
- **NF-κB 通路**：1,25(OH)₂D 可抑制 NF-κB 活性，减少促炎细胞因子（TNF-α, IL-6, IL-17）产生，是其免疫调节作用的重要机制。
- **RXR 通路**：VDR 必须与 RXR 形成异源二聚体才能有效结合 DNA，因此 RXR 配体（9-顺式维甲酸）可能间接影响 VDR 功能。

## 相关实体

- [维生素 D](../../entities/nutrients/vitamin-d) — VDR 的天然配体来源
- [钙](../../entities/nutrients/calcium) — VDR 信号的经典下游靶点
- [磷](../../entities/nutrients/phosphorus) — 与钙协同受 VDR 调控
- [维生素 K2](../../entities/nutrients/vitamin-k2) — 与维生素 D 协同参与骨钙素羧化
- [镁](../../entities/nutrients/magnesium) — 作为 CYP27B1 和 VDR 功能的辅因子
- 甲状旁腺激素 — 与维生素 D 形成钙代谢的负反馈环
- [锌](../../entities/nutrients/zinc) — VDR 是锌指转录因子，锌离子对其 DNA 结合至关重要

## 相关概念

- [骨代谢与骨重塑](bone-remodeling) — VDR 在骨骼系统的具体功能表现
- [免疫调节信号通路](immune-regulation) — VDR 在免疫细胞中的抗菌与免疫耐受作用
- [矿物质形态与生物利用度](../forms/mineral-forms-bioavailability) — 钙、镁、锌的形态影响 VDR 下游效应的实现
- [基因多态性与营养代谢](../populations/genetic-polymorphisms) — VDR 多态性的个体化营养学意义
- [昼夜节律调节](circadian-rhythm-regulation) — 维生素 D 合成受光照节律调控，与昼夜节律系统交互

## 来源与延伸阅读

- [NIH ODS Vitamin D Fact Sheet](https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/)
- [Endocrine Society Vitamin D Guideline](https://www.endocrine.org/guidelines-and-clinical-practice/clinical-practice-guidelines/vitamin-d-deficiency-evaluation-treatment-and-prevention)
- [Bouillon R, et al. Nutrients 2016 — Extra-skeletal effects of vitamin D](https://pubmed.ncbi.nlm.nih.gov/27411682/)
- [Dankers W, et al. Int Rev Immunol 2017 — The role of VDR in health and disease](https://pubmed.ncbi.nlm.nih.gov/30287786/)
- [Haussler MR, et al. Nat Rev Endocrinol 2012 — Molecular mechanisms of vitamin D action](https://pubmed.ncbi.nlm.nih.gov/22421943/)

## Sources

- Linus Pauling Institute Vitamin D: https://lpi.oregonstate.edu/mic/vitamins/vitamin-D
