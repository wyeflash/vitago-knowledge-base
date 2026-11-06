## [2026-05-05] audit | 全站内容权威性与错误风险基线审计
- 扫描 260 个公开 Markdown 页面，生成 `.audit/content-authority-audit-report-2026-05-05.md` 与 `.audit/content-authority-audit-data-2026-05-05.json`
- 机器标记：231 个实质页面、107 个需来源可追溯性增强页面、11 个占位/待建标记、46 个短实质页、1 个编码/Unicode 风险、22 个高风险断言关键词命中
- 按目录和慢病 6 大系统输出后续分批复核路线；`.audit/**` 已在 VitePress `srcExclude` 中保持不发布
- 技术门禁：`scripts/check-links.py` 通过（1837 个内部链接完整），`npx vitepress build` 成功

## [2026-05-05] review | 第二批慢病指引：心脑血管 + 代谢系统
- 完成 `guides/chronic/` 心脑血管与代谢系统首批审查：高血压、血脂异常、动脉粥样硬化/冠心病、2 型糖尿病、肥胖症、痛风、NAFLD/MASLD 共 7 个实质页面
- 所有实质页面补充/统一 `review_status: source_checked`、`reviewed: 2026-05-05`、frontmatter raw 来源与正文 `## Sources` 外部权威链接
- 更新 `guides/chronic/index.md`：标记本批次已审查范围，补充心脑血管/代谢相关指南来源 URL
- 修正 `guides/chronic/obesity.md` 标题乱码，将“肥肣症”改为“肥胖症”
- 重新整理安全语气：补充剂定位为辅助，不替代标准药物、临床监测、生活方式和疾病指南治疗

## [2026-05-05] review | 第一批安全层内容权威来源审查
- 完成 `safety/` 第一批全量审查：9 个发布页面均补充/统一 frontmatter `sources`、`review_status: source_checked`、`reviewed: 2026-05-05` 与正文 `## Sources`
- 重写/补强安全核心页面：相互作用、禁忌人群、剂量上限、质量标准；新增 `safety/contraindications/common-contraindications.md`
- 新增 5 个 raw 维护来源：NIH ODS、FDA、21 CFR Part 111、NCCIH、USP/NSF 质量认证摘要，作为安全页溯源层
- 更新 `.vitepress/config.mjs` safety sidebar：纳入常见禁忌与慎用场景页面

## [2026-05-05] governance | 固定内容审查与权威来源规则
- 新增 `CONTENT_REVIEW_RULES.md`：固定每类页面最低权威来源要求、Sources 格式、证据语气、安全硬性检查项、审查状态字段与分批验证流程
- 更新 `SCHEMA.md`：加入“内容审查与权威来源规则”摘要，明确每个实质内容页必须有权威来源，索引/重定向/日志等可豁免
- 更新 `.vitepress/config.mjs`：将 `CONTENT_REVIEW_RULES.md` 与 `.audit/**` 加入 `srcExclude`，确保审查规则和审计报告为 Agent 维护文件，不发布到网站

## [2026-05-02] update | 扩展作用机制层核心通路页面（9 个新增）
- 查找权威资料：下载并提取 NIH ODS Health Professional、Linus Pauling Institute、NCCIH 等来源共 20+ 份 raw 参考文件
- 新建 9 个核心机制通路页面，保持与现有 6 个机制页统一的结构和质量标准：
  - `concepts/mechanisms/mitochondrial-energy-metabolism.md` — 线粒体能量代谢（CoQ10、肌酸、肉碱、B 族、镁、Krebs/ETC）
  - `concepts/mechanisms/neurotransmitter-synthesis.md` — 神经递质合成与调节（B6、镁、色氨酸、胆碱、磷脂酰丝氨酸、5-HTP）
  - `concepts/mechanisms/immune-regulation.md` — 免疫调节信号通路（维生素 D、C、锌、硒、益生菌、先天/适应性免疫）
  - `concepts/mechanisms/thyroid-hormone-metabolism.md` — 甲状腺激素代谢（碘、硒、锌、铁、T3/T4 合成与脱碘酶）
  - `concepts/mechanisms/hemoglobin-iron-metabolism.md` — 血红蛋白与铁代谢（铁、B12、叶酸、B6、维生素 C、铜）
  - `concepts/mechanisms/nitric-oxide-pathway.md` — 血管舒张与 NO 通路（镁、CoQ10、硒、硝酸盐、eNOS/sGC/cGMP）
  - `concepts/mechanisms/lipid-metabolism-transport.md` — 脂质代谢与运输（Omega-3、烟酸、纤维、植物固醇、红曲米、HMG-CoA）
  - `concepts/mechanisms/detoxification-biotransformation.md` — 解毒与生物转化（谷胱甘肽、硫辛酸、胆碱、CYP450/GST/UGT Phase I/II）
  - `concepts/mechanisms/circadian-rhythm-regulation.md` — 昼夜节律调节（褪黑素、B12、镁、维生素 D、SCN/MT1/MT2）
- 更新 `concepts/mechanisms/index.md` — 将 9 个新页面纳入已有页面列表，后续待建留存 VDR 信号通路
- 更新 `.vitepress/config.mjs` sidebar — 作用机制分组添加 9 个新页面链接
- 当前总页数：~245 发布页面（含 raw/ 层排除）

## [2026-05-02] infra | 部署流程优化：免授权自动化
- 通过 ACL 给 `ec2-user` 授予对 `/home/wwwroot/kb.vitago.ai/` 的直接写权限（一次性配置）
- 新建 `scripts/deploy.sh` — 一键部署脚本，特性：
  - 自动定位项目根目录，无需 cd
  - `rsync --delete` 增量同步，自动清理已删除页面的 HTML
  - 保护 `.user.ini` 不被覆盖或删除
  - 完全无需 sudo，无需任何授权
- 以后部署命令：`~/vitagokb/scripts/deploy.sh`
- 新建 8 个功效方向实质页面（原占位页面替换为完整内容，占位页删除）：
  - `concepts/effects/cardiovascular-health.md` — 心血管健康综合概述（高血压、血脂、CoQ10、大蒜、植物畔醇）
  - `concepts/effects/metabolic-health.md` — 代谢与血糖调控（镁、铬、膳食纤维、肌醇、肌酸）
  - `concepts/effects/weight-management.md` — 体重管理（膳食纤维、蛋白质、EGCG、肌酸）
  - `concepts/effects/gut-health.md` — 肠道健康（益生菌、益生元、消化酶、姜）
  - `concepts/effects/liver-health.md` — 肝脏健康与解毒支持（水飞萀、姜黄素、谷甘甘肽、胆碱）
  - `concepts/effects/cognitive-health.md` — 认知保护（DHA、PS、银杏叶、B 族维生素、姜黄素）
  - `concepts/effects/sleep-quality.md` — 睡眠质量（褪黑素、镁、缠草、洋甘菊、西番莲、薰衣草）
  - `concepts/effects/mood-regulation.md` — 情绪调节（EPA、圣约翰草、南非醉斡、5-HTP、维生素 D）
- 删除占位页面 `concepts/effects/gastric-cancer-prevention.md`
- 更新 `concepts/effects/index.md` — 重写为按 6 大慢病系统组织的导航索引
- 更新 `concepts/index.md` — 补充所有新建功效页面导航
- 更新 `.vitepress/config.mjs` sidebar — 功效方向按 6 大系统分组展开子导航
- 当前总页数：~235 发布页面

## [2026-05-02] update | 创建剂型与生物利用度概念层全套页面
- 新建 `concepts/forms/` 目录及 6 个页面（原预留 sidebar 导航页以前空白）：
  - `concepts/forms/index.md` — 导航索引页，划分五大核心子主题
  - `concepts/forms/mineral-forms-bioavailability.md` — 矿物质形态与生物利用度对比（碳酸钙/柠檬酸钙、硫酸亚铁/双甘氨酸亚铁、氧化镁/甘氨酸镁、锌形态）
  - `concepts/forms/vitamin-active-forms.md` — 维生素活性形式（5-MTHF/叶酸、甲钴胺/氰钴胺、D2/D3、K1/MK-4/MK-7、P-5-P）
  - `concepts/forms/dosage-form-technology.md` — 剂型技术与递送系统（缓释、肠溶、脂质体、纳米化、舌下/经皮）
  - `concepts/forms/absorption-factors.md` — 吸收影响因素总览（MTHFR、VDR、CYP2R1、BCMO1、胃酸环境、年龄、体重）
  - `concepts/forms/synergy-competition.md` — 营养素协同与竞争（维C+铁、D+K2、钙+镁+钙、钙铁竞争、锌铜竞争、服用时间表）
- 下载并提取 10 个权威来源到 raw/guidelines/：
  - LPI 矿物质篇：Ca, Fe, Mg, Zn
  - LPI 维生素篇：Folate, B12, D, E
  - NIH ODS 通用页面：WYNTK, Supplement Labels
- 当前总页数：~225 发布页面

## [2026-05-01] update | 补充非必需活性成分实体页面与导航重构
- 补充 7 个已有 stub 实体页面：
  - `entities/bioactives/coenzyme-q10.md` — 线粒体能量代谢、抗氧化、他汀相关肌痛
  - `entities/bioactives/alpha-lipoic-acid.md` — 糖代谢、神经病变、氧化还原循环
  - `entities/bioactives/collagen.md` — 关节与皮肤结构支持、I/II/III 型来源
  - `entities/bioactives/glucosamine.md` — 关节软骨保护、硫酸/盐酸形式差异
  - `entities/bioactives/inositol.md` — 胰岛素信号、PCOS、情绪调节（myo- vs DCI）
  - `entities/bioactives/melatonin.md` — 昼夜节律、睡眠-觉醒调节、抗氧化
  - `entities/bioactives/fiber.md` — 膳食纤维分类、可溶/不可溶、短链脂肪酸
- 新建 4 个实体页面：
  - `entities/bioactives/glutathione.md` — 内源性抗氧化、II 相解毒、还原型/氧化型
  - `entities/bioactives/polyphenols.md` — 多酚类总览、分类、食物来源、Nrf2 与肠道代谢
  - `entities/bioactives/5-htp.md` — 5-羟色氨酸、血清素前体、与褪黑素合成关联
  - `entities/bioactives/phosphatidylserine.md` — 磷脂酰丝氨酸、细胞膜结构、皮质醇调节
- 重构 `entities/bioactives/index.md`：新增六大子类分组（辅酶与抗氧化、结构支持、代谢与信号、睡眠与神经、运动表现、膳食纤维）
- 重构 `.vitepress/config.mjs` sidebar：非必需活性成分按上述六大子类展开二级折叠导航
- 当前总页数：~67（含 raw/ 层，但 raw/ 已排除于 VitePress 构建）

## [2026-05-01] update | 补充营养素组合与检测方法页面，深化人群指引
- 新建 7 个指南页面：
  - `guides/stacking/bone-health-stack.md` — 骨骼健康组合（钙+D3+K2+镁）协同机制与时间规划
  - `guides/stacking/iron-absorption-stack.md` — 铁吸收优化（维C促进、茶/咖啡/钙抑制）
  - `guides/stacking/competing-nutrients.md` — 营养素竞争与抵消速查表
  - `guides/stacking/dosing-schedule.md` — 每日营养素服用时间表与常见错误
  - `guides/testing/common-biomarkers.md` — 常见营养相关生物标志物速查
  - `guides/testing/testing-protocol.md` — 检测协议与采样流程
  - `guides/testing/interpreting-results.md` — 检测结果解读指南
- 重写 `guides/stacking/index.md` 和 `guides/testing/index.md` 为标准索引页（去除大段建议内容，收录子页面列表）
- 更新 `.vitepress/config.mjs` sidebar：营养素组合和检测方法两个分类展开子导航，collapsed 设为 false
- 深化 5 个人群指引页面：
  - `athlete.md` — 增加 ISSN 证据分级（A/B/C级）、按运动类型区分表、恢复窗口期
  - `senior.md` — 增加多重用药交互表、吞咽困难与剂型选择、认知衰退与营养支持
  - `adolescent.md` — 增加 BMI 极端情况与进食障碍警示
  - `vegetarian.md` — 增加蛋白质互补策略、藻油 Omega-3 建议、孕期素食专项
  - `perimenopause.md` — 增加 HRT 与补充剂交互、心血管风险与代谢调整
- 当前总页数：~82（含 raw/ 层，但 raw/ 已排除于 VitePress 构建）

## [2026-05-01] update | 补充微生态与消化支持实体页面与导航
- 新建 8 个实体页面：
  - `entities/microbiome/lactobacillus.md` — 乳酸杆菌属，AAD、急性腹泻、IBS、阴道健康、H. pylori 辅助根除
  - `entities/microbiome/bifidobacterium.md` — 双歧杆菌属，婴儿健康、IBS、便秘、免疫调节
  - `entities/microbiome/saccharomyces-boulardii.md` — 布拉氏酵母菌，AAD、艰难梭菌复发预防、旅行者腹泻
  - `entities/microbiome/inulin.md` — 菊粉，经典益生元，菌群调节、便秘、钙镁吸收、血糖血脂
  - `entities/microbiome/fos.md` — 低聚果糖，婴幼儿配方常见益生元，矿物质吸收
  - `entities/microbiome/gos.md` — 低聚半乳糖，母乳低聚糖类似物，选择性促进双歧杆菌
  - `entities/microbiome/postbiotics.md` — 后生元，灭活菌/代谢产物，无感染风险、稳定性高
  - `entities/microbiome/digestive-enzymes.md` — 消化酶复合剂，PERT、乳糖不耐受、功能性消化不良
- 更新 `entities/microbiome/index.md`：按 益生菌/益生元/后生元与消化支持 三大类重构索引
- 更新 `.vitepress/config.mjs` sidebar：微生态与消化支持按上述三大类设置子导航分组
- 当前总页数：~75（含 raw/ 层，但 raw/ 已排除于 VitePress 构建）

## [2026-05-02] update | 补充 5 个慢病指引页面内容与交叉引用
- 补充 `guides/chronic/core-principles.md` — 新增"慢病药物与补充剂典型交互速查表"，涵盖 15 类常见慢病用药与补充剂交互
- 补充 `guides/chronic/osteoarthritis.md` — 新增"骨关节炎 vs 骨质疎松鉴别要点"及"补充剂-药物交互速查表"
- 补充 `guides/chronic/chronic-gastritis.md` — 新增"H. pylori 根除期益生菌辅助方案"（含有效菌种、使用建议）及"PPI 与营养素吸收"（含 5 种受影响营养素及策略）
- 补充 `guides/chronic/dyslipidemia.md` — 新增"处方级 EPA vs 普通鱼油关键差异对照表"及"红曲米安全争议详解"（含产品质量、橙曲霉素、与他汀联用风险、国际监管差异）
- 补充 `guides/chronic/hypertension.md` — 新增"特殊人群"（孕期高血压、老年患者、盐敏感性高血压）、"DASH 饮食与补充剂协同策略"、"补充剂-降压药交互速查表"
- 新建 `guides/chronic/diabetes.md` — redirect 页面，重定向至 `type2-diabetes.md`
- 批量增加 8 个慢病页面间交叉引用（hypertension、dyslipidemia、atherosclerosis、osteoarthritis、osteoporosis、chronic-gastritis、type2-diabetes、nafld）
- 当前总页数：~85（含 raw/ 层，但 raw/ 已排除于 VitePress 构建）

## [2026-05-03] lint | 全站双向链接审计与修复
- 按 llm-wiki 理念执行全站内部链接审计，目标：提升概念页/指南页/对比页与实体页之间的双向引用密度
- 审计范围：259 个 wiki 页面，1,697 条内部链接（修改前）
- 修复路径解析逻辑：目录索引链接（如 `categories/`）正确解析为 `categories/index`，孤儿页面从 17 降至 2（仅剩归档页和重定向页）
- 破损链接：0 个（保持）
- 核心修复：为 74 个实体页面在 `Related Entities` 部分追加指向相关概念/指南/对比页面的回链，共新增 ~180 条内部链接
  - 营养素实体 23 个：vitamin-d、calcium、magnesium、omega-3、iron、zinc、folate、B12、C、E、K2、A、B6、potassium、selenium、iodine、chromium、copper、choline、phosphorus、protein 等
  - 非必需活性成分 17 个：coenzyme-q10、creatine、collagen、fiber、melatonin、alpha-lipoic-acid、glutathione、5-htp、 carnitine、hmb、beta-alanine、caffeine、polyphenols、inositol、l-arginine、phosphatidylserine 等
  - 植物与草本成分 25 个：curcumin、ashwagandha、ginkgo-biloba、green-tea、garlic、ginger、echinacea、elderberry、milk-thistle、rhodiola、valerian、chamomile、passionflower、lavender、st-johns-wort、saw-palmetto、black-cohosh、chasteberry、evening-primrose-oil、fenugreek、boswellia、bilberry、lutein-zeaxanthin、hawthorn、cinnamon、cranberry、flaxseed、grape-seed-extract、bromelain 等
  - 微生态实体 7 个：lactobacillus、bifidobacterium、saccharomyces-boulardii、digestive-enzymes、inulin、postbiotics、fos、gos 等
- 修改效果：
  - 双向链接对：270 → 444（+174）
  - 单向链接：1232 → 1178（-54）
  - 链接双向化率：18.0% → 27.4%
  - 总内部链接：1697 → 1817（+120）
- 所有修改页面的 `updated` 字段已同步更新至 2026-05-03
- 当前总页数：259 发布页面

## [2026-05-03] lint | 双向链接第二轮：非实体页面回链补充
- 目标：为被实体引用但未回链的概念/指南/参考/安全页面添加实体回链
- 修复范围：13 个非实体页面，新增 42 条内部链接
  - 概念效果页 7 个：免疫支持、骨骼健康、生殖健康、运动表现、肠道健康、代谢健康、维生素 B 族
  - 机制页 2 个：抗氧化 Nrf2 通路、炎症消退
  - 指南页 1 个：炎症性肠病 (IBD)
  - 参考页 3 个：证据等级金字塔、权威来源索引、第三方认证标准
- 累计修改效果：
  - 双向链接对：444 → 528（+84）
  - 单向链接：1178 → 1136（-42）
  - 链接双向化率：27.4% → 31.7%
  - 总内部链接：1817 → 1859（+42）
- 当前总页数：259 发布页面 | 破损链接：0 | 孤儿页面：2（归档页+重定向页）

## 2026-05-05 — 慢病指引剩余系统 source-check 补齐

- 根据 `.audit/content-authority-audit-data-2026-05-05.json`，优先处理 `guides/chronic/` 中未标记 `source_checked` 或缺少权威 URL 的剩余系统。
- 本轮补齐骨骼、消化、免疫及“其他（神经/精神/睡眠/眼/血液/内分泌）”慢病指引的 `review_status: source_checked` / `reviewed: 2026-05-05`，并在 Sources 区补入指南、PubMed、NIH ODS、WHO、NICE、NIDDK、NCCIH 等权威链接。
- 同步将慢病总索引与核心原则页纳入 source-check 状态；后续优先级转向草本实体、机制/功效概念页和短页。

## 2026-05-05 — 草本实体 source-check 与短页补强

- 根据 `.audit/content-authority-audit-data-2026-05-05.json` 继续处理 `entities/botanicals/`：统一补入 `review_status: source_checked` / `reviewed: 2026-05-05`。
- 重写并扩展短页/占位页：红景天、缬草、洋甘菊、西番莲、薰衣草、薄荷油、水飞蓟、山楂、肉桂、亚麻籽、大蒜、紫锥菊、接骨木、黄芪、乳香、锯棕榈、蔓越莓、黑升麻、月见草油、葡萄籽、越橘、圣洁莓。
- 为草本索引和单页 Sources 补入 NCCIH、NIH ODS、FDA 等权威来源 URL，并修正南非醉茄、圣洁莓的 raw source 引用。

## 2026-05-05 — 机制/功效概念页 source-check 与短页补强

- 根据 `.audit/content-authority-audit-data-2026-05-05.json` 继续处理 `concepts/effects/` 与 `concepts/mechanisms/`：统一补入 `review_status: source_checked` / `reviewed: 2026-05-05`。
- 为功效方向索引、作用机制索引及缺少 `## Sources` 或权威 URL 的概念页补入 NIH ODS、LPI、Cochrane/PubMed、WHO/NIDDK/NCCIH/FDA 等权威来源。
- 对短机制页补入“应用边界与证据解释”，强调机制合理性不等同于人体疗效证明，并修正缺失 raw 引用。

## 2026-05-05 — 剩余短页与 no-source 页面批量补齐

- 继续按审计顺序处理慢病、草本、机制/功效之后的剩余页面：总览索引、营养素宏量页、机构/认证短页、生物活性成分、微生态、概念分类/剂型、安全索引、人群/选购/检测指南、对比页与 reference 速查页。
- 为缺少来源元数据或 `## Sources` 的页面补入统一 source authority raw 记录和权威 URL（NIH ODS、NCCIH、FDA、WHO、LPI、PubMed/指南、NIDDK、National Academies 等）。
- 对短索引页和机构短页补入使用边界，修复剩余 placeholder 文案，并尝试修复审计中标出的 Latin-1/双 UTF-8 风险页面。
## 2026-05-05 — 内容权威审计剩余短页与来源缺口收尾

- 按 `.audit/content-authority-audit-data-2026-05-05.json` 的剩余问题顺序，完成全站发布 Markdown 页的收尾修复。
- 修复范围包括：机构/数据库/认证实体页、`entities/nutrients/index.md` 双重编码异常、`guides/populations/diabetes.md` 过渡页、`guides/chronic/gout.md` 短页补强，以及若干缺失 raw source 锚点。
- 新增或补齐 ISSN、NCCIH、NIH ODS、WHO、ADA、KDIGO、AGA 等 raw authority anchor 文件；公开 Sources 中保留官方 URL。
- 全站自检结果：发布页 `not_source_checked`、`no_source_meta`、`no_source_heading`、`no_auth_url`、`short`、`placeholder`、`unicode_escape`、`missing_raw` 均为 0（重定向页按 `exempt_redirect` 处理）。
## 2026-05-05 — 安全层权威资料 ingest 与页面扩展

- 针对 `/safety/` 内容单薄问题，新增 ingest 9 个安全层 raw authority sources：FDA dietary supplements / MedWatch / serious problem reporting / tainted products、NCCIH supplement safety、NCBI LiverTox herbal dietary supplements、Poison Control、NIH ODS labels/FAQ、eCFR 21 CFR Part 111 cGMP。
- 新增 6 个安全发布页：不良反应与报告流程、掺假污染与召回风险、器官系统风险索引、肝肾与电解质风险、孕期/哺乳期/儿童安全、高风险药物审查清单。
- 更新 safety 总索引、相互作用索引、禁忌索引、质量索引，并准备同步 VitePress sidebar。

