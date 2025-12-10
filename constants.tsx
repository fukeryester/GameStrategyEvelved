import { Users, Code, PenTool, Crown, Zap, Shield, Globe } from 'lucide-react';
import { TeamMember, Phase } from './types';

export const TEAM_DATA: TeamMember[] = [
  {
    role: "资深制作人",
    background: "中型游戏公司制作人",
    icon: Crown,
    stats: [{ label: "行业经验", value: 90 }, { label: "资源", value: 85 }]
  },
  {
    role: "行业领袖",
    background: "腾讯游戏学堂二把手",
    icon: Globe,
    stats: [{ label: "人脉", value: 95 }, { label: "权威", value: 90 }]
  },
  {
    role: "技术专家",
    background: "港大硕士 + 中大本科",
    icon: Code,
    stats: [{ label: "技术力", value: 92 }, { label: "学历", value: 95 }]
  },
  {
    role: "战略品牌",
    background: "人大艺术硕士",
    icon: PenTool,
    stats: [{ label: "设计", value: 90 }, { label: "战略", value: 88 }]
  },
  {
    role: "独立团队",
    background: "14人磨合良好的全建制团队",
    icon: Users,
    stats: [{ label: "执行力", value: 98 }, { label: "配合", value: 95 }]
  }
];

export const PHASES_DATA: Phase[] = [
  {
    id: "phase1",
    title: "前期过渡",
    duration: "0-3 Months",
    subtitle: "快速破圈，拿下首批种子",
    color: "from-blue-500 to-cyan-400",
    goal: "用资源背书建立信任，不追求规模，只重效果 (3-5家试点)。",
    keyActions: [
      {
        title: "精准触达",
        items: [
          "依托腾讯学堂资源进入中小社群，分享实战案例。",
          "利用制作人熟人网络，降低信任门槛。",
          "锁定小游戏/独立游戏初创团队，匹配度高。"
        ]
      },
      {
        title: "轻量试点",
        items: [
          "核心三板斧：赛道选型 + 产品定位 + 资源对接。",
          "灵活定价：基础费 + 成功激励 (融资/发行分成)。",
          "用自身14人团队成功案例做实操背书。"
        ]
      },
      {
        title: "快速交付",
        items: [
          "团队拆分：部分成员参与客户测试验证。",
          "产出实用文档：赛道分析报告、资源清单。",
          "拒绝宏大叙事，专注解决眼前痛点。"
        ]
      }
    ],
    outcomes: ["3-5个种子客户", "建立初步信任", "验证服务模型"]
  },
  {
    id: "phase2",
    title: "中期立身",
    duration: "3-12 Months",
    subtitle: "效果沉淀，标准化服务",
    color: "from-purple-500 to-pink-500",
    goal: "将试点转化为长期客户，建立标准化SOP，形成行业口碑。",
    keyActions: [
      {
        title: "战略+落地双驱",
        items: [
          "战略端：市场分析、融资节奏、变现模式。",
          "落地端：玩法原型打磨、技术避坑、测试支持。",
          "延伸服务：对接政策补贴、版号咨询，降低客户成本。"
        ]
      },
      {
        title: "标准化流程",
        items: [
          "3步服务法：1周诊断 -> 6周方案+落地 -> 2周复盘。",
          "沉淀工具包：赛道模板、定位画布、融资手册。",
          "减少重复工作，提升人效。"
        ]
      },
      {
        title: "口碑裂变",
        items: [
          "客户转介绍机制，成功案例库建设。",
          "优化客户结构：拓展至成长型中小公司。",
          "推出进阶服务：长线运营、团队架构优化。"
        ]
      }
    ],
    outcomes: ["标准化SOP", "行业口碑", "客户结构升级"]
  },
  {
    id: "phase3",
    title: "后期做大",
    duration: "12+ Months",
    subtitle: "生态绑定，行业壁垒",
    color: "from-amber-400 to-orange-500",
    goal: "整合行业资源，升级为“中小开发者生态服务商”。",
    keyActions: [
      {
        title: "资源整合",
        items: [
          "官方合作：成为孵化基地、发行平台指定战略方。",
          "一体化服务：战略+研发外包(14人团队承接)闭环。",
          "全链条支持：联合资方、政策代理，一站式解决。"
        ]
      },
      {
        title: "规模获客",
        items: [
          "线上内容营销：行业报告、避坑公开课。",
          "线下影响力：行业闭门会、资源对接会。",
          "私域流量池积累。"
        ]
      },
      {
        title: "模式升级",
        items: [
          "孵化式合作：股权+服务换分成，深度绑定。",
          "打造行业IP：树立“战略标杆”形象。",
          "地域扩张：复制模式至成都、武汉等游戏重镇。"
        ]
      }
    ],
    outcomes: ["生态壁垒", "规模化扩张", "股权收益"]
  }
];
