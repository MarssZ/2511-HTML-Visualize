// 结构能演示：数据文件
// 12个节点（时钟布局）+ 六角星结构

const GRAPH = {
  // 节点：12个点均匀分布在圆周上（像时钟刻度）
  // 半径200，中心250,250
  nodes: (() => {
    const nodes = [];
    const radius = 200;
    const centerX = 250;
    const centerY = 250;

    for (let i = 0; i < 12; i++) {
      // 从12点方向开始（-90度），顺时针排列
      const angle = (Math.PI * 2 / 12) * i - Math.PI / 2;
      nodes.push({
        id: i,
        x: Math.round(centerX + radius * Math.cos(angle)),
        y: Math.round(centerY + radius * Math.sin(angle))
      });
    }
    return nodes;
  })(),

  // 边：完全图（12个点 = 66条边）
  // 强连接（权重0.75-1.0）：形成六角星结构
  // 弱连接（权重0.1-0.4）：噪音
  edges: [
    // === 六角星外环（6条边，权重1.0）===
    // 连接：0→2→4→6→8→10→0
    {from: 0, to: 2, weight: 0.9},   // 12点 → 2点
    {from: 2, to: 4, weight: 0.9},   // 2点 → 4点
    {from: 4, to: 6, weight: 0.9},   // 4点 → 6点
    {from: 6, to: 8, weight: 0.9},   // 6点 → 8点
    {from: 8, to: 10, weight: 0.9},  // 8点 → 10点
    {from: 10, to: 0, weight: 0.9},  // 10点 → 12点

    // === 六角星内部大对角线（6条边，权重0.9）===
    // 形成两个交叉的大三角形
    {from: 0, to: 4, weight: 1.0},   // 12点 → 4点
    {from: 4, to: 8, weight: 1.0},   // 4点 → 8点
    {from: 8, to: 0, weight: 1.0},   // 8点 → 12点
    {from: 2, to: 6, weight: 1.0},   // 2点 → 6点
    {from: 6, to: 10, weight: 1.0},  // 6点 → 10点
    {from: 10, to: 2, weight: 1.0},  // 10点 → 2点

    // === 六角星内部中对角线（6条边，权重0.8）===
    // 连接外环顶点到中心对面
    {from: 0, to: 6, weight: 0.8},   // 12点 → 6点（最长对角线）
    {from: 2, to: 8, weight: 0.8},   // 2点 → 8点
    {from: 4, to: 10, weight: 0.8},  // 4点 → 10点

    // === 次级连接（中等权重，0.6-0.7）===
    // 奇数点之间的连接，形成内环六边形
    {from: 1, to: 3, weight: 0.7},
    {from: 3, to: 5, weight: 0.7},
    {from: 5, to: 7, weight: 0.7},
    {from: 7, to: 9, weight: 0.7},
    {from: 9, to: 11, weight: 0.7},
    {from: 11, to: 1, weight: 0.7},

    // === 噪音边（权重0.1-0.5）===
    // 剩余的48条边，随机权重
    {from: 0, to: 1, weight: 0.25},
    {from: 0, to: 3, weight: 0.15},
    {from: 0, to: 5, weight: 0.3},
    {from: 0, to: 7, weight: 0.2},
    {from: 0, to: 9, weight: 0.35},
    {from: 0, to: 11, weight: 0.2},

    {from: 1, to: 2, weight: 0.3},
    {from: 1, to: 4, weight: 0.2},
    {from: 1, to: 5, weight: 0.4},
    {from: 1, to: 6, weight: 0.15},
    {from: 1, to: 7, weight: 0.3},
    {from: 1, to: 8, weight: 0.25},
    {from: 1, to: 9, weight: 0.2},
    {from: 1, to: 10, weight: 0.35},

    {from: 2, to: 3, weight: 0.25},
    {from: 2, to: 5, weight: 0.15},
    {from: 2, to: 7, weight: 0.3},
    {from: 2, to: 9, weight: 0.2},
    {from: 2, to: 11, weight: 0.35},

    {from: 3, to: 4, weight: 0.3},
    {from: 3, to: 6, weight: 0.2},
    {from: 3, to: 7, weight: 0.4},
    {from: 3, to: 8, weight: 0.15},
    {from: 3, to: 9, weight: 0.25},
    {from: 3, to: 10, weight: 0.2},
    {from: 3, to: 11, weight: 0.35},

    {from: 4, to: 5, weight: 0.25},
    {from: 4, to: 7, weight: 0.15},
    {from: 4, to: 9, weight: 0.3},
    {from: 4, to: 11, weight: 0.2},

    {from: 5, to: 6, weight: 0.3},
    {from: 5, to: 8, weight: 0.2},
    {from: 5, to: 9, weight: 0.4},
    {from: 5, to: 10, weight: 0.15},
    {from: 5, to: 11, weight: 0.25},

    {from: 6, to: 7, weight: 0.25},
    {from: 6, to: 9, weight: 0.15},
    {from: 6, to: 11, weight: 0.3},

    {from: 7, to: 8, weight: 0.3},
    {from: 7, to: 10, weight: 0.2},
    {from: 7, to: 11, weight: 0.4},

    {from: 8, to: 9, weight: 0.25},
    {from: 8, to: 11, weight: 0.15},

    {from: 9, to: 10, weight: 0.3},

    {from: 10, to: 11, weight: 0.25}
  ]
};
