 const getNodeById = (nodes, nodeId) => {
     const stack = [nodes];
     while (stack.length > 0) {
         const currentNode = stack.pop();
         if (currentNode.id === nodeId) {
             return currentNode;
         }
         if (currentNode.children) {
             for (let i = 0; i < currentNode.children.length; i++) {
                 stack.push(currentNode.children[i]);
             }
         }
     }
        return null;
};
export default getNodeById;
