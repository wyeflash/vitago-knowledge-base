import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VitaGo KB',
  description: '膳食营养补充剂知识库 — 基于循证研究的营养素知识网络',
  lang: 'zh-CN',
  lastUpdated: true,

  srcExclude: [
    'raw/**',
    'SCHEMA.md',
    'CONTENT_REVIEW_RULES.md',
    'log.md',
    'scripts/**',
    '.audit/**',
    '_*/**'
  ],

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '实体', link: '/entities/' },
      { text: '概念', link: '/concepts/' },
      { text: '安全', link: '/safety/' },
      { text: '指引', link: '/guides/' },
      { text: '对比', link: '/comparisons/' },
      { text: '速查', link: '/reference/' }
    ],

    outline: {
      level: [2, 3],
      label: '本页内容'
    },

    sidebar: {
      '/entities/': [
        { text: '实体概览', link: '/entities/' },
        {
          text: '营养素',
          collapsed: false,
          items: [
            { text: '营养素索引', link: '/entities/nutrients/' },
            {
              text: '维生素',
              collapsed: false,
              items: [
                { text: '维生素 A', link: '/entities/nutrients/vitamin-a' },
                { text: '维生素 B2 / 核黄素', link: '/entities/nutrients/vitamin-b2' },
                { text: '维生素 B12', link: '/entities/nutrients/vitamin-b12' },
                { text: '叶酸 / 维生素 B9', link: '/entities/nutrients/folate' },
                { text: '维生素 C', link: '/entities/nutrients/vitamin-c' },
                { text: '维生素 D', link: '/entities/nutrients/vitamin-d' },
                { text: '维生素 E', link: '/entities/nutrients/vitamin-e' },
                { text: '维生素 K2', link: '/entities/nutrients/vitamin-k2' },
                { text: '维生素 B1 / 硫胺素', link: '/entities/nutrients/thiamin' },
                { text: '维生素 B3 / 烟酸', link: '/entities/nutrients/niacin' },
                { text: '维生素 B5 / 泛酸', link: '/entities/nutrients/pantothenic-acid' },
                { text: '维生素 B6 / 吡哆醇', link: '/entities/nutrients/vitamin-b6' },
                { text: '生物素 / 维生素 B7', link: '/entities/nutrients/biotin' },
                { text: '胆碱', link: '/entities/nutrients/choline' }
              ]
            },
            {
              text: '矿物质',
              collapsed: false,
              items: [
                { text: '钙', link: '/entities/nutrients/calcium' },
                { text: '镁', link: '/entities/nutrients/magnesium' },
                { text: '铁', link: '/entities/nutrients/iron' },
                { text: '锌', link: '/entities/nutrients/zinc' },
                { text: '磷', link: '/entities/nutrients/phosphorus' },
                { text: '钾', link: '/entities/nutrients/potassium' },
                { text: '铜', link: '/entities/nutrients/copper' },
                { text: '铬', link: '/entities/nutrients/chromium' },
                { text: '碘', link: '/entities/nutrients/iodine' },
                { text: '硒', link: '/entities/nutrients/selenium' },
                { text: '锰', link: '/entities/nutrients/manganese' },
                { text: '钼', link: '/entities/nutrients/molybdenum' },
                { text: '硼', link: '/entities/nutrients/boron' },
                { text: '氟', link: '/entities/nutrients/fluoride' }
              ]
            },
            {
              text: '脂肪酸',
              collapsed: false,
              items: [
                { text: 'Omega-3', link: '/entities/nutrients/omega-3' }
              ]
            },
            {
              text: '宏量营养素',
              collapsed: false,
              items: [
                { text: '蛋白质', link: '/entities/nutrients/protein' },
                { text: '碳水化合物', link: '/entities/nutrients/carbohydrates' },
                { text: '脂肪 / 脂质', link: '/entities/nutrients/fats' }
              ]
            }
          ]
        },
        {
          text: '植物与草本成分',
          collapsed: false,
          items: [
            { text: '植物与草本索引', link: '/entities/botanicals/' },
            {
              text: '适应原与认知支持',
              collapsed: false,
              items: [
                { text: '南非醉茄 (Ashwagandha)', link: '/entities/botanicals/ashwagandha' },
                { text: '人参 / 西洋参 (Ginseng)', link: '/entities/botanicals/ginseng' },
                { text: '红景天 (Rhodiola)', link: '/entities/botanicals/rhodiola' },
                { text: '银杏叶 (Ginkgo biloba)', link: '/entities/botanicals/ginkgo-biloba' }
              ]
            },
            {
              text: '镇静与睡眠支持',
              collapsed: false,
              items: [
                { text: '缬草 (Valerian)', link: '/entities/botanicals/valerian' },
                { text: '圣约翰草 (St. John\'s Wort)', link: '/entities/botanicals/st-johns-wort' },
                { text: '洋甘菊 (Chamomile)', link: '/entities/botanicals/chamomile' },
                { text: '西番莲 (Passionflower)', link: '/entities/botanicals/passionflower' },
                { text: '薰衣草 (Lavender)', link: '/entities/botanicals/lavender' }
              ]
            },
            {
              text: '消化与肝脏支持',
              collapsed: false,
              items: [
                { text: '姜 (Ginger)', link: '/entities/botanicals/ginger' },
                { text: '姜黄素 (Curcumin)', link: '/entities/botanicals/curcumin' },
                { text: '薄荷油 (Peppermint Oil)', link: '/entities/botanicals/peppermint-oil' },
                { text: '水飞蓟 (Milk Thistle)', link: '/entities/botanicals/milk-thistle' },
                { text: '菠萝蛋白酶 (Bromelain)', link: '/entities/botanicals/bromelain' }
              ]
            },
            {
              text: '心血管与代谢支持',
              collapsed: false,
              items: [
                { text: '绿茶提取物 / EGCG', link: '/entities/botanicals/green-tea' },
                { text: '山楂 (Hawthorn)', link: '/entities/botanicals/hawthorn' },
                { text: '肉桂 (Cinnamon)', link: '/entities/botanicals/cinnamon' },
                { text: '亚麻籽 (Flaxseed)', link: '/entities/botanicals/flaxseed' },
                { text: '大蒜 (Garlic)', link: '/entities/botanicals/garlic' },
                { text: '七叶树 (Horse Chestnut)', link: '/entities/botanicals/horse-chestnut' },
                { text: '葫芦巴 (Fenugreek)', link: '/entities/botanicals/fenugreek' }
              ]
            },
            {
              text: '免疫与抗炎支持',
              collapsed: false,
              items: [
                { text: '紫锥菊 (Echinacea)', link: '/entities/botanicals/echinacea' },
                { text: '接骨木 (Elderberry)', link: '/entities/botanicals/elderberry' },
                { text: '黄芪 (Astragalus)', link: '/entities/botanicals/astragalus' },
                { text: '乳香 (Boswellia)', link: '/entities/botanicals/boswellia' }
              ]
            },
            {
              text: '眼健康与抗氧化',
              collapsed: false,
              items: [
                { text: '叶黄素 / 玉米黄质', link: '/entities/botanicals/lutein-zeaxanthin' },
                { text: '越橘 (Bilberry)', link: '/entities/botanicals/bilberry' },
                { text: '葡萄籽提取物 (GSE)', link: '/entities/botanicals/grape-seed-extract' }
              ]
            },
            {
              text: '泌尿与生殖健康',
              collapsed: false,
              items: [
                { text: '锯棕榈 (Saw Palmetto)', link: '/entities/botanicals/saw-palmetto' },
                { text: '蔓越莓 (Cranberry)', link: '/entities/botanicals/cranberry' },
                { text: '黑升麻 (Black Cohosh)', link: '/entities/botanicals/black-cohosh' },
                { text: '圣洁莓 (Chasteberry)', link: '/entities/botanicals/chasteberry' },
                { text: '月见草油 (EPO)', link: '/entities/botanicals/evening-primrose-oil' }
              ]
            }
          ]
        },
        {
          text: '非必需活性成分',
          collapsed: false,
          items: [
            { text: '活性成分索引', link: '/entities/bioactives/' },
            {
              text: '辅酶与抗氧化相关',
              collapsed: false,
              items: [
                { text: '辅酶 Q10', link: '/entities/bioactives/coenzyme-q10' },
                { text: '硫辛酸', link: '/entities/bioactives/alpha-lipoic-acid' },
                { text: '谷胱甘肽', link: '/entities/bioactives/glutathione' },
                { text: '多酚类', link: '/entities/bioactives/polyphenols' }
              ]
            },
            {
              text: '结构支持与关节成分',
              collapsed: false,
              items: [
                { text: '胶原蛋白', link: '/entities/bioactives/collagen' },
                { text: '氨基葡萄糖', link: '/entities/bioactives/glucosamine' }
              ]
            },
            {
              text: '代谢与信号分子',
              collapsed: false,
              items: [
                { text: '肌醇', link: '/entities/bioactives/inositol' }
              ]
            },
            {
              text: '睡眠与神经调节',
              collapsed: false,
              items: [
                { text: '褪黑素', link: '/entities/bioactives/melatonin' },
                { text: '5-HTP', link: '/entities/bioactives/5-htp' },
                { text: '磷脂酰丝氨酸', link: '/entities/bioactives/phosphatidylserine' }
              ]
            },
            {
              text: '运动表现与肌肉支持',
              collapsed: false,
              items: [
                { text: '肌酸', link: '/entities/bioactives/creatine' },
                { text: 'HMB', link: '/entities/bioactives/hmb' },
                { text: 'L-肌酸 / 肉碱', link: '/entities/bioactives/carnitine' },
                { text: '咖啡因', link: '/entities/bioactives/caffeine' },
                { text: 'β-丙氨酸', link: '/entities/bioactives/beta-alanine' },
                { text: 'L-精氨酸', link: '/entities/bioactives/l-arginine' }
              ]
            },
            {
              text: '膳食纤维与功能性碳水',
              collapsed: false,
              items: [
                { text: '膳食纤维', link: '/entities/bioactives/fiber' }
              ]
            }
          ]
        },
        {
          text: '微生态与消化支持',
          collapsed: false,
          items: [
            { text: '微生态索引', link: '/entities/microbiome/' },
            {
              text: '益生菌',
              collapsed: false,
              items: [
                { text: '乳酸杆菌属', link: '/entities/microbiome/lactobacillus' },
                { text: '双歧杆菌属', link: '/entities/microbiome/bifidobacterium' },
                { text: '布拉氏酵母菌', link: '/entities/microbiome/saccharomyces-boulardii' }
              ]
            },
            {
              text: '益生元',
              collapsed: false,
              items: [
                { text: '菊粉', link: '/entities/microbiome/inulin' },
                { text: '低聚果糖 (FOS)', link: '/entities/microbiome/fos' },
                { text: '低聚半乳糖 (GOS)', link: '/entities/microbiome/gos' }
              ]
            },
            {
              text: '后生元与消化支持',
              collapsed: false,
              items: [
                { text: '后生元', link: '/entities/microbiome/postbiotics' },
                { text: '消化酶复合剂', link: '/entities/microbiome/digestive-enzymes' }
              ]
            }
          ]
        },
        {
          text: '机构、数据库与认证',
          collapsed: false,
          items: [
            { text: '机构、数据库与认证索引', link: '/entities/organizations/' },
            {
              text: '监管与指南机构',
              collapsed: false,
              items: [
                { text: 'NIH ODS', link: '/entities/organizations/nih-ods' },
                { text: 'EFSA', link: '/entities/organizations/efsa' },
                { text: 'FDA CFSAN', link: '/entities/organizations/fda-cfsan' },
                { text: '中国营养学会', link: '/entities/organizations/cns' },
                { text: 'WHO', link: '/entities/organizations/who' }
              ]
            },
            {
              text: '质量认证与标准',
              collapsed: false,
              items: [
                { text: 'USP', link: '/entities/organizations/usp' },
                { text: 'NSF International', link: '/entities/organizations/nsf' },
                { text: 'ConsumerLab.com', link: '/entities/organizations/consumerlab' },
                { text: 'IFOS', link: '/entities/organizations/ifos' },
                { text: '蓝帽子', link: '/entities/organizations/blue-hat' }
              ]
            },
            {
              text: '证据数据库与参考资源',
              collapsed: false,
              items: [
                { text: 'Cochrane Library', link: '/entities/organizations/cochrane-library' },
                { text: 'Linus Pauling Institute', link: '/entities/organizations/linus-pauling-institute' },
                { text: 'Examine.com', link: '/entities/organizations/examine' }
              ]
            }
          ]
        }
      ],
      '/concepts/': [
        { text: '概念概览', link: '/concepts/' },
        {
          text: '功效方向',
          collapsed: false,
          items: [
            { text: '功效方向索引', link: '/concepts/effects/' },
            {
              text: '心血管与血液系统',
              collapsed: false,
              items: [
                { text: '心血管健康', link: '/concepts/effects/cardiovascular-health' },
                { text: 'Omega-3 与心血管', link: '/concepts/effects/omega-3-cardiovascular' },
                { text: '血液健康', link: '/concepts/effects/blood-health' }
              ]
            },
            {
              text: '代谢与能量平衡',
              collapsed: false,
              items: [
                { text: '代谢与血糖调控', link: '/concepts/effects/metabolic-health' },
                { text: '体重管理', link: '/concepts/effects/weight-management' }
              ]
            },
            {
              text: '骨骼肌肉与运动',
              collapsed: false,
              items: [
                { text: '骨骼健康', link: '/concepts/effects/bone-health' },
                { text: '运动表现与运动营养', link: '/concepts/effects/exercise-performance' }
              ]
            },
            {
              text: '消化与解毒',
              collapsed: false,
              items: [
                { text: '肠道健康', link: '/concepts/effects/gut-health' },
                { text: '肝脏健康与解毒支持', link: '/concepts/effects/liver-health' }
              ]
            },
            {
              text: '免疫与炎症',
              collapsed: false,
              items: [
                { text: '免疫支持', link: '/concepts/effects/immune-support' }
              ]
            },
            {
              text: '神经、精神与认知',
              collapsed: false,
              items: [
                { text: '认知保护', link: '/concepts/effects/cognitive-health' },
                { text: '睡眠质量', link: '/concepts/effects/sleep-quality' },
                { text: '情绪调节', link: '/concepts/effects/mood-regulation' }
              ]
            },
            {
              text: '感官系统',
              collapsed: false,
              items: [
                { text: '视觉健康', link: '/concepts/effects/eye-health' }
              ]
            },
            {
              text: '皮肤与屏障',
              collapsed: false,
              items: [
                { text: '皮肤健康与光保护', link: '/concepts/effects/skin-health' }
              ]
            },
            {
              text: '生殖与内分泌',
              collapsed: false,
              items: [
                { text: '生殖健康', link: '/concepts/effects/reproductive-health' }
              ]
            },
            {
              text: '跨系统',
              collapsed: false,
              items: [
                { text: '抗氧化与缓老支持', link: '/concepts/effects/antioxidant-aging' }
              ]
            }
          ]
        },
        {
          text: '作用机制',
          collapsed: false,
          items: [
            { text: '作用机制索引', link: '/concepts/mechanisms/' },
            {
              text: '代谢系统',
              collapsed: false,
              items: [
                { text: '一碳代谢', link: '/concepts/mechanisms/one-carbon-metabolism' },
                { text: '线粒体能量代谢', link: '/concepts/mechanisms/mitochondrial-energy-metabolism' },
                { text: '胰岛素敏感性', link: '/concepts/mechanisms/insulin-sensitivity' },
                { text: '脂质代谢与运输', link: '/concepts/mechanisms/lipid-metabolism-transport' },
                { text: '甲状腺激素代谢', link: '/concepts/mechanisms/thyroid-hormone-metabolism' },
                { text: 'PPAR 核受体信号通路', link: '/concepts/mechanisms/ppar-signaling' }
              ]
            },
            {
              text: '神经系统',
              collapsed: false,
              items: [
                { text: '神经递质合成与调节', link: '/concepts/mechanisms/neurotransmitter-synthesis' }
              ]
            },
            {
              text: '心血管系统',
              collapsed: false,
              items: [
                { text: '血管舒张与 NO 通路', link: '/concepts/mechanisms/nitric-oxide-pathway' }
              ]
            },
            {
              text: '免疫系统',
              collapsed: false,
              items: [
                { text: '免疫调节信号通路', link: '/concepts/mechanisms/immune-regulation' },
                { text: '炎症调节与消退', link: '/concepts/mechanisms/inflammation-resolution' },
                { text: '肠屏障与微生物群', link: '/concepts/mechanisms/gut-barrier-microbiome' }
              ]
            },
            {
              text: '血液系统',
              collapsed: false,
              items: [
                { text: '血红蛋白与铁代谢', link: '/concepts/mechanisms/hemoglobin-iron-metabolism' }
              ]
            },
            {
              text: '肝脏与解毒',
              collapsed: false,
              items: [
                { text: '解毒与生物转化', link: '/concepts/mechanisms/detoxification-biotransformation' },
                { text: '抗氧化与 Nrf2', link: '/concepts/mechanisms/antioxidant-nrf2' }
              ]
            },
            {
              text: '昼夜节律',
              collapsed: false,
              items: [
                { text: '昼夜节律调节', link: '/concepts/mechanisms/circadian-rhythm-regulation' }
              ]
            },
            {
              text: '骨骼肌肉系统',
              collapsed: false,
              items: [
                { text: '肌肉蛋白合成与肌肉代谢', link: '/concepts/mechanisms/protein-synthesis-muscle-metabolism' },
                { text: '骨代谢与骨重塑', link: '/concepts/mechanisms/bone-remodeling' }
              ]
            },
            {
              text: '受体信号与转录调控',
              collapsed: false,
              items: [
                { text: '维生素 D 受体（VDR）信号通路', link: '/concepts/mechanisms/vitamin-d-receptor-signaling' },
                { text: 'PPAR 核受体信号通路', link: '/concepts/mechanisms/ppar-signaling' },
                { text: '维甲酸受体（RAR/RXR）信号通路', link: '/concepts/mechanisms/retinoic-acid-receptor-signaling' }
              ]
            }
          ]
        },
        {
          text: '适用人群分层',
          collapsed: false,
          items: [
            { text: '适用人群分层索引', link: '/concepts/populations/' },
            { text: '生命周期营养分层', link: '/concepts/populations/life-cycle-nutrition' },
            { text: '生活方式分层', link: '/concepts/populations/lifestyle-populations' },
            { text: '基因多态性与营养代谢', link: '/concepts/populations/genetic-polymorphisms' },
            { text: '性别、激素周期与营养代谢', link: '/concepts/populations/sex-hormone-cycles' },
            { text: '疾病状态下的吸收与代谢差异', link: '/concepts/populations/disease-absorption-metabolism' }
          ]
        },
        {
          text: '\u5206\u7c7b\u4f53\u7cfb',
          collapsed: false,
          items: [
            { text: '\u5206\u7c7b\u4f53\u7cfb\u7d22\u5f15', link: '/concepts/categories/' },
            { text: '\u6309\u6eb6\u89e3\u6027\u5206\u7c7b', link: '/concepts/categories/solubility-classification' },
            { text: '\u6309\u5fc5\u9700\u6027\u5206\u7c7b', link: '/concepts/categories/essentiality-classification' },
            { text: '\u6309\u91cf\u7ea7\u5206\u7c7b', link: '/concepts/categories/mineral-levels' },
            { text: '\u6309\u884c\u4e1a\u6210\u5206\u7c7b\u578b\u5206\u7c7b', link: '/concepts/categories/ingredient-types' },
            { text: '\u7ef4\u751f\u7d20 B \u65cf\u5206\u7c7b', link: '/concepts/categories/vitamin-b-complex' }
          ]
        },
        {
          text: '剂型与生物利用度',
          collapsed: false,
          items: [
            { text: '剂型与生物利用度索引', link: '/concepts/forms/' },
            { text: '矿物质形态与生物利用度', link: '/concepts/forms/mineral-forms-bioavailability' },
            { text: '维生素活性形式与甲基化', link: '/concepts/forms/vitamin-active-forms' },
            { text: '剂型技术与递送系统', link: '/concepts/forms/dosage-form-technology' },
            { text: '脂溶性维生素递送与吸收增强技术', link: '/concepts/forms/fat-soluble-delivery-systems' },
            { text: '吸收影响因素总览', link: '/concepts/forms/absorption-factors' },
            { text: '营养素协同与竞争', link: '/concepts/forms/synergy-competition' }
          ]
        }
      ],
      '/safety/': [
        { text: '安全概览', link: '/safety/' },
        { text: '不良反应与报告流程', link: '/safety/adverse-events/' },
        {
          text: '相互作用',
          collapsed: false,
          items: [
            { text: '相互作用索引', link: '/safety/interactions/' },
            { text: '常见相互作用速查', link: '/safety/interactions/common-interactions' },
            { text: '高风险药物审查清单', link: '/safety/interactions/high-risk-medications' }
          ]
        },
        {
          text: '禁忌人群',
          collapsed: false,
          items: [
            { text: '禁忌人群索引', link: '/safety/contraindications/' },
            { text: '常见禁忌与慎用场景', link: '/safety/contraindications/common-contraindications' },
            { text: '孕期、哺乳期与儿童安全', link: '/safety/contraindications/pregnancy-children' }
          ]
        },
        {
          text: '剂量上限',
          collapsed: false,
          items: [
            { text: '剂量上限索引', link: '/safety/dosing-limits/' },
            { text: 'UL 速查总表', link: '/safety/dosing-limits/ul-reference' }
          ]
        },
        {
          text: '器官系统风险',
          collapsed: false,
          items: [
            { text: '器官系统风险索引', link: '/safety/organ-risk/' },
            { text: '肝肾与电解质风险', link: '/safety/organ-risk/liver-kidney' }
          ]
        },
        {
          text: '质量标准',
          collapsed: false,
          items: [
            { text: '质量标准索引', link: '/safety/quality/' },
            { text: '认证体系详解', link: '/safety/quality/certification-guide' },
            { text: '掺假、污染与召回风险', link: '/safety/quality/tainted-products' }
          ]
        }
      ],
      '/guides/': [
        { text: '指引概览', link: '/guides/' },
        {
          text: '特定人群营养指引',
          collapsed: false,
          items: [
            { text: '特定人群索引', link: '/guides/populations/' },
            { text: '孕期与哺乳期', link: '/guides/populations/pregnancy' },
            { text: '婴幼儿与儿童', link: '/guides/populations/infant-child' },
            { text: '青少年', link: '/guides/populations/adolescent' },
            { text: '老年人', link: '/guides/populations/senior' },
            { text: '运动人群', link: '/guides/populations/athlete' },
            { text: '素食/纯素人群', link: '/guides/populations/vegetarian' },
            { text: '围绝经期女性', link: '/guides/populations/perimenopause' }
          ]
        },
        {
          text: '慢性病患者补充指引',
          collapsed: false,
          items: [
            { text: '慢病索引', link: '/guides/chronic/' },
            { text: '核心原则与安全性总则', link: '/guides/chronic/core-principles' },
            {
              text: '心脑血管',
              collapsed: false,
              items: [
                { text: '高血压', link: '/guides/chronic/hypertension' },
                { text: '血脂异常', link: '/guides/chronic/dyslipidemia' },
                { text: '动脉粥样硬化与冠心病', link: '/guides/chronic/atherosclerosis' }
              ]
            },
            {
              text: '代谢系统',
              collapsed: false,
              items: [
                { text: '2 型糖尿病', link: '/guides/chronic/type2-diabetes' },
                { text: '痛风/高尿酸血症', link: '/guides/chronic/gout' },
                { text: '肥胖症', link: '/guides/chronic/obesity' },
                { text: '非酒精性脂肪肝', link: '/guides/chronic/nafld' }
              ]
            },
            {
              text: '骨骼系统',
              collapsed: false,
              items: [
                { text: '骨质疏松', link: '/guides/chronic/osteoporosis' },
                { text: '骨关节炎', link: '/guides/chronic/osteoarthritis' },
                { text: '骨刺（骨质增生）', link: '/guides/chronic/bone-spur' }
              ]
            },
            {
              text: '消化系统',
              collapsed: false,
              items: [
                { text: '慢性胃炎', link: '/guides/chronic/chronic-gastritis' },
                { text: '便秘', link: '/guides/chronic/constipation' },
                { text: '肠易激综合征', link: '/guides/chronic/ibs' },
                { text: '消化不良', link: '/guides/chronic/dyspepsia' },
                { text: '炎症性肠病', link: '/guides/chronic/ibd' }
              ]
            },
            {
              text: '免疫与过敏',
              collapsed: false,
              items: [
                { text: '慢性免疫力低下', link: '/guides/chronic/immune-deficiency' },
                { text: '过敏性体质', link: '/guides/chronic/allergic-constitution' }
              ]
            },
            {
              text: '其他慢病',
              collapsed: false,
              items: [
                { text: '偏头痛', link: '/guides/chronic/migraine' },
                { text: '抑郁与焦虑', link: '/guides/chronic/depression-anxiety' },
                { text: '失眠症', link: '/guides/chronic/insomnia' },
                { text: '慢性疲劳综合征', link: '/guides/chronic/chronic-fatigue' },
                { text: '干眼症', link: '/guides/chronic/dry-eye' },
                { text: '贫血', link: '/guides/chronic/anemia' },
                { text: '多囊卵巢综合征', link: '/guides/chronic/pcos' }
              ]
            }
          ]
        },
        {
          text: '选购指南',
          collapsed: false,
          items: [
            { text: '选购指南索引', link: '/guides/selection/' },
            { text: '如何科学选购补充剂', link: '/guides/selection/how-to-choose' }
          ]
        },
        {
          text: '营养素组合',
          collapsed: false,
          items: [
            { text: '营养素组合索引', link: '/guides/stacking/' },
            { text: '骨骼健康营养组合', link: '/guides/stacking/bone-health-stack' },
            { text: '铁吸收优化组合', link: '/guides/stacking/iron-absorption-stack' },
            { text: '营养素竞争与抵消', link: '/guides/stacking/competing-nutrients' },
            { text: '每日服用时间表', link: '/guides/stacking/dosing-schedule' }
          ]
        },
        {
          text: '检测方法',
          collapsed: false,
          items: [
            { text: '检测方法索引', link: '/guides/testing/' },
            { text: '常见生物标志物速查', link: '/guides/testing/common-biomarkers' },
            { text: '检测协议与流程', link: '/guides/testing/testing-protocol' },
            { text: '结果解读指南', link: '/guides/testing/interpreting-results' }
          ]
        }
      ],
      '/reference/': [
        { text: '速查概览', link: '/reference/' },
        {
          text: '基础工具',
          collapsed: false,
          items: [
            { text: '缩写术语表', link: '/reference/glossary' },
            { text: '计量单位换算', link: '/reference/units-conversions' },
            { text: '剂量计算思路', link: '/reference/dose-calculation' }
          ]
        },
        {
          text: '证据与来源',
          collapsed: false,
          items: [
            { text: '证据等级金字塔', link: '/reference/evidence-hierarchy' },
            { text: '权威来源索引', link: '/reference/authoritative-sources' }
          ]
        },
        {
          text: '法规与标准',
          collapsed: false,
          items: [
            { text: '法规与标准概览', link: '/reference/regulations/' },
            { text: '各国监管框架对比', link: '/reference/regulations/global-frameworks' },
            { text: '标签法规差异', link: '/reference/regulations/label-rules' },
            { text: '第三方认证体系', link: '/reference/regulations/certification-standards' },
            { text: '进口与跨境电商', link: '/reference/regulations/cross-border-ecommerce' }
          ]
        }
      ],
      '/comparisons/': [
        { text: '对比分析索引', link: '/comparisons/' },
        {
          text: '成分形式对比',
          collapsed: false,
          items: [
            { text: '钙盐对比', link: '/comparisons/calcium-salts' },
            { text: '铁盐对比', link: '/comparisons/iron-salts' },
            { text: 'CoQ10 剂型对比', link: '/comparisons/coq10-forms' },
            { text: 'Omega-3 来源对比', link: '/comparisons/omega-3-sources' },
            { text: '维生素 D2 vs D3', link: '/comparisons/vitamin-d2-vs-d3' },
            { text: '镁盐形式对比', link: '/comparisons/magnesium-forms' },
            { text: '叶酸 vs 5-MTHF', link: '/comparisons/folate-vs-5mthf' },
            { text: '维生素 K 形式对比', link: '/comparisons/vitamin-k-forms' },
            { text: '锌盐形式对比', link: '/comparisons/zinc-forms' },
            { text: 'B12 形式对比', link: '/comparisons/b12-forms' },
            { text: '姜黄素制剂形式对比', link: '/comparisons/curcumin-forms' },
            { text: '胶原蛋白来源对比', link: '/comparisons/collagen-sources' },
            { text: '益生菌对比', link: '/comparisons/probiotics-strains' },
            { text: '肌酸形式对比', link: '/comparisons/creatine-forms' },
            { text: '姜黄素 vs 姜黄粉', link: '/comparisons/curcumin-vs-turmeric-powder' }
          ]
        },
        {
          text: '营养素组合与来源对比',
          collapsed: false,
          items: [
            { text: '综合维生素 vs 单体补充', link: '/comparisons/multivitamin-vs-singles' },
            { text: '天然 vs 合成 vs 发酵来源', link: '/comparisons/natural-vs-synthetic' },
            { text: '蛋白质来源对比', link: '/comparisons/protein-sources' }
          ]
        },
        {
          text: '益生菌与肠道对比',
          collapsed: false,
          items: [
            { text: '益生菌 vs 益生元 vs 后生元', link: '/comparisons/probiotics-prebiotics-postbiotics' }
          ]
        },
        {
          text: '剂型与形式对比',
          collapsed: false,
          items: [
            { text: '剂型形式对比', link: '/comparisons/dosage-forms' }
          ]
        },
        {
          text: '质量认证对比',
          collapsed: false,
          items: [
            { text: '第三方认证体系对比', link: '/comparisons/third-party-certification' },
            { text: '蓝帽子 vs GMP 认证', link: '/comparisons/blue-hat-vs-gmp' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '本知识库内容仅供参考，不构成医疗建议。',
      copyright: '© VitaGo Knowledge Base'
    }
  }
})
