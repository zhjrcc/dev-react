// 嵌套组合
// 是什么？ 嵌套组合就是将子节点渲染为嵌套结构
// 有什么用？ 将组件组合成树形结构，并以统一的方式处理它们
// 怎么用？ 这个例子是通过递归渲染子节点

function TreeNode({ name, children }) {
  return (
    <div>
      <span>{name}</span>
      <div style={{ paddingLeft: "20px" }}>
        {children &&
          children.map((child, index) => <TreeNode key={index} {...child} />)}
      </div>
    </div>
  )
}

// 树的数据结构
const TreeData = {
  name: "广州市",
  children :[
    {name: "天河区"},
    {name: "从化区", children:[
      {name: "城郊镇", children: [
        {name: "城康村"}
      ]},
      {name: "鳌头镇"}
    ]}
  ]
}


// 树组件
function Tree() {
  return <TreeNode {...TreeData} />
}

export default Tree
