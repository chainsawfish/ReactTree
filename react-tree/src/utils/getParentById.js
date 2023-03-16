export const getParentById =  (nodes, nodeId) => {
    const stack = [nodes];
    while (stack.length > 0) {
        const currentNode = stack.pop();
        if (currentNode.children) {
            for (let i = 0; i < currentNode.children.length; i++) {
                const childNode = currentNode.children[i];
                if (childNode.id === nodeId) {
                    return currentNode;
                }
                stack.push(childNode);
            }
        }
    }
    return null;
}
