var maxDepth = function(root){
    let max = 0;
    const DFS = (node, depth) => {
      if (node === null) {
        max = max>depth?max:depth;
        return;
      }
      DFS(node.left, depth + 1);
      DFS(node.right, depth + 1);
    }
    DFS(root,0);
    return max;
}