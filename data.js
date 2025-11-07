// 结构能演示：数据文件
// 10个节点 + 完全图的45条边

const GRAPH = {
  // 节点：10个点均匀分布在圆周上（半径200，中心250,250）
  nodes: [
    {id: 0, x: 250, y: 50},    // 顶点（12点方向）
    {id: 1, x: 404, y: 111},   // 1点方向
    {id: 2, x: 439, y: 250},   // 3点方向
    {id: 3, x: 404, y: 389},   // 5点方向
    {id: 4, x: 250, y: 450},   // 6点方向
    {id: 5, x: 96, y: 389},    // 7点方向
    {id: 6, x: 61, y: 250},    // 9点方向
    {id: 7, x: 96, y: 111},    // 11点方向
    {id: 8, x: 250, y: 200},   // 内圈上方
    {id: 9, x: 250, y: 300}    // 内圈下方
  ],

  // 边：完全图（10个点 = 45条边）
  // 强连接（权重0.7-1.0）：形成五角星结构
  // 弱连接（权重0.1-0.4）：噪音
  edges: [
    // === 五角星的外环（5条边，权重0.9-1.0）===
    {from: 0, to: 2, weight: 1.0},   // 顶点→右上
    {from: 2, to: 5, weight: 0.95},  // 右上→左下
    {from: 5, to: 7, weight: 1.0},   // 左下→左上
    {from: 7, to: 4, weight: 0.95},  // 左上→底部
    {from: 4, to: 0, weight: 1.0},   // 底部→顶点

    // === 五角星的内部交叉线（5条边，权重0.75-0.85）===
    {from: 0, to: 5, weight: 0.85},  // 顶点→左下
    {from: 2, to: 7, weight: 0.8},   // 右上→左上
    {from: 5, to: 2, weight: 0.75},  // 左下→右上
    {from: 7, to: 0, weight: 0.8},   // 左上→顶点
    {from: 4, to: 2, weight: 0.85},  // 底部→右上

    // === 噪音边（权重0.1-0.4）===
    {from: 0, to: 1, weight: 0.2},
    {from: 0, to: 3, weight: 0.15},
    {from: 0, to: 4, weight: 0.3},
    {from: 0, to: 6, weight: 0.1},
    {from: 0, to: 8, weight: 0.25},
    {from: 0, to: 9, weight: 0.2},

    {from: 1, to: 2, weight: 0.3},
    {from: 1, to: 3, weight: 0.1},
    {from: 1, to: 4, weight: 0.2},
    {from: 1, to: 5, weight: 0.15},
    {from: 1, to: 6, weight: 0.35},
    {from: 1, to: 7, weight: 0.2},
    {from: 1, to: 8, weight: 0.4},
    {from: 1, to: 9, weight: 0.25},

    {from: 2, to: 3, weight: 0.3},
    {from: 2, to: 4, weight: 0.2},
    {from: 2, to: 6, weight: 0.15},
    {from: 2, to: 8, weight: 0.35},
    {from: 2, to: 9, weight: 0.2},

    {from: 3, to: 4, weight: 0.3},
    {from: 3, to: 5, weight: 0.2},
    {from: 3, to: 6, weight: 0.1},
    {from: 3, to: 7, weight: 0.25},
    {from: 3, to: 8, weight: 0.15},
    {from: 3, to: 9, weight: 0.4},

    {from: 4, to: 5, weight: 0.3},
    {from: 4, to: 6, weight: 0.2},
    {from: 4, to: 7, weight: 0.15},
    {from: 4, to: 8, weight: 0.25},
    {from: 4, to: 9, weight: 0.35},

    {from: 5, to: 6, weight: 0.3},
    {from: 5, to: 8, weight: 0.2},
    {from: 5, to: 9, weight: 0.15},

    {from: 6, to: 7, weight: 0.3},
    {from: 6, to: 8, weight: 0.1},
    {from: 6, to: 9, weight: 0.25},

    {from: 7, to: 8, weight: 0.35},
    {from: 7, to: 9, weight: 0.2},

    {from: 8, to: 9, weight: 0.3}
  ]
};
