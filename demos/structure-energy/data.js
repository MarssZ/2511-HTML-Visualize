// 结构能演示：数据文件
// 12个节点（时钟布局）+ 六角星结构

const GRAPH = {
  // 节点：12个点均匀分布在圆周上（像时钟刻度）
  nodes: (() => {
    const nodes = [];
    const radius = 200;
    const centerX = 250;
    const centerY = 250;

    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 / 12) * i - Math.PI / 2;
      nodes.push({
        id: i,
        x: Math.round(centerX + radius * Math.cos(angle)),
        y: Math.round(centerY + radius * Math.sin(angle))
      });
    }
    return nodes;
  })(),

  // 六角星的边（6条）
  // 六角星 = 两个交叉的大三角形
  // 注意：key 格式必须是 "小-大"，与 edgeKey 函数一致
  starEdges: new Set([
    '0-4', '4-8', '0-8',   // 三角形1（8-0 改成 0-8）
    '2-6', '6-10', '2-10'  // 三角形2（10-2 改成 2-10）
  ]),

  // 生成完整的边数组（只调用一次，权重固定）
  generateEdges() {
    const edges = [];

    // 辅助函数：生成边的唯一key
    const edgeKey = (a, b) => a < b ? `${a}-${b}` : `${b}-${a}`;

    // 遍历完全图的所有边（12个节点 = 66条边）
    for (let i = 0; i < 12; i++) {
      for (let j = i + 1; j < 12; j++) {
        const key = edgeKey(i, j);

        // 判断是否是六角星的边
        const isStar = this.starEdges.has(key);

        edges.push({
          from: i,
          to: j,
          // 六角星边：权重 1.0（写死）
          // 其他边：权重随机 0-0.99
          weight: isStar ? 1.0 : Math.random() * 0.99
        });
      }
    }

    return edges;
  }
};

// 暴露给 index.html 的接口
window.graphData = {
  nodes: GRAPH.nodes,
  edges: GRAPH.generateEdges() // 只生成一次，权重固定
};
