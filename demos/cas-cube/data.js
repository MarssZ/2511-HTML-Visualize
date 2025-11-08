// CAS 分形交互网络：复杂适应系统的三维交互模型
// 核心概念：任何代理都同时处于三种交互关系中（系统内、跨系统、跨层级）

const CAS_NETWORK = {
  // 核心洞察
  insight: '"任何代理都同时处于三个维度的交叉点 — 扰动会沿所有路径传播"',

  // 三种交互维度的定义
  dimensions: [
    {
      id: 'intra',
      name: '系统内/同层次',
      shortName: '内部',
      color: '#a78bfa',
      description: '水平互动 → 自组织 → 内部吸引子',
      details: `机制：水平连接，同级代理间的互动
- 示例：公司内部不同部门的协调，神经元之间的相互激活
- 效果：自组织 (Self-organization)，向内部吸引子演化
- 隐喻：一群蚂蚁在同一蚁巢内的分工协作`,
      radius: 120  // 内圈半径
    },
    {
      id: 'cross',
      name: '跨系统',
      shortName: '外部',
      color: '#fb7185',
      description: '边界穿透 → 协同进化 → 改变适应度景观',
      details: `机制：边界穿透，不同系统间的互动
- 示例：供应商-客户关系，物种间的竞争合作
- 效果：协同进化 (Co-evolution)，改变适应度景观
- 隐喻：两家公司的商业博弈会重塑彼此的战略空间`,
      radius: 220  // 中圈半径
    },
    {
      id: 'level',
      name: '跨层级',
      shortName: '层级',
      color: '#38bdf8',
      description: '垂直涌现 → 新全局功能 → 层级嵌套',
      details: `机制：垂直涌现，上下层级间的互动
- 示例：老板-员工的指挥关系，细胞-器官-生物体的嵌套
- 效果：涌现 (Emergence)，产生新的全局功能
- 隐喻：单个神经元的激活模式 → 涌现出"意识"这个高层现象`,
      verticalOffset: 150  // 垂直方向偏移
    }
  ],

  // 分形层级（三个尺度）
  fractalLevels: [
    {
      id: 'individual',
      name: '个人',
      scale: 1.0,
      description: '员工与同事/客户/老板的互动',
      // 核心代理数据
      coreAgent: {
        label: '你（员工）',
        role: '产品经理'
      },
      // 三种连接的具体代理
      agents: {
        intra: [  // 系统内（同事）
          { label: '研发同事', angle: 0 },
          { label: '设计同事', angle: 60 },
          { label: '运营同事', angle: 120 },
          { label: '市场同事', angle: 180 },
          { label: '销售同事', angle: 240 },
          { label: '财务同事', angle: 300 }
        ],
        cross: [  // 跨系统（外部）
          { label: '客户A', angle: 30 },
          { label: '供应商', angle: 110 },
          { label: '合作伙伴', angle: 190 },
          { label: '竞争对手', angle: 270 }
        ],
        level: [  // 跨层级（上下级）
          { label: '直属老板', position: 'above', offset: 0 },
          { label: '总监', position: 'above', offset: 40 },
          { label: '下属A', position: 'below', offset: 0 },
          { label: '下属B', position: 'below', offset: 40 }
        ]
      }
    },
    {
      id: 'team',
      name: '团队',
      scale: 2.2,
      description: '团队与其他团队/外部部门/管理层的互动',
      coreAgent: {
        label: '你的团队',
        role: '产品团队'
      },
      agents: {
        intra: [
          { label: '研发团队', angle: 0 },
          { label: '设计团队', angle: 72 },
          { label: '运营团队', angle: 144 },
          { label: '市场团队', angle: 216 },
          { label: '销售团队', angle: 288 }
        ],
        cross: [
          { label: '客户群体', angle: 45 },
          { label: '外部供应商', angle: 135 },
          { label: '行业协会', angle: 225 },
          { label: '竞品公司', angle: 315 }
        ],
        level: [
          { label: '管理层', position: 'above', offset: 0 },
          { label: 'CEO', position: 'above', offset: 40 },
          { label: '执行小组A', position: 'below', offset: 0 },
          { label: '执行小组B', position: 'below', offset: 40 }
        ]
      }
    },
    {
      id: 'company',
      name: '公司',
      scale: 3.5,
      description: '公司与其他公司/行业/董事会的互动',
      coreAgent: {
        label: '你的公司',
        role: '科技公司'
      },
      agents: {
        intra: [
          { label: '同行A', angle: 0 },
          { label: '同行B', angle: 90 },
          { label: '同行C', angle: 180 },
          { label: '同行D', angle: 270 }
        ],
        cross: [
          { label: '客户市场', angle: 45 },
          { label: '供应链', angle: 135 },
          { label: '投资机构', angle: 225 },
          { label: '监管机构', angle: 315 }
        ],
        level: [
          { label: '董事会', position: 'above', offset: 0 },
          { label: '股东大会', position: 'above', offset: 40 },
          { label: '子公司A', position: 'below', offset: 0 },
          { label: '子公司B', position: 'below', offset: 40 }
        ]
      }
    }
  ],

  // 3D辅助视图：立方体数据（保留作为隐喻）
  cube3D: {
    vertices: [
      [0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0],
      [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ]
  },

  // UI提示
  hints: [
    '💡 点击任意节点，聚焦查看其分形结构',
    '💡 点击"播放扰动"按钮，观察传播路径',
    '💡 切换分形层级（个人/团队/公司），体验尺度变化'
  ],

  // 扰动传播参数
  ripple: {
    speed: 0.05,        // 波纹扩散速度
    maxRadius: 300,     // 最大扩散半径
    duration: 3000,     // 持续时间（毫秒）
    colors: {
      intra: 'rgba(167, 139, 250, 0.6)',
      cross: 'rgba(251, 113, 133, 0.6)',
      level: 'rgba(56, 189, 248, 0.6)'
    }
  }
};
