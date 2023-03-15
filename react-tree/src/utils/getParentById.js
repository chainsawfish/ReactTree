import {nodeList} from "../data/nodeList.js";

export const getParentById = (childId) => {
    const stack = [nodeList];
    while (stack.length > 0) {
        const currentNode = stack.pop();
        if (currentNode.children) {
            for (let i = 0; i < currentNode.children.length; i++) {
                const childNode = currentNode.children[i];
                if (childNode.id === childId) {
                    return currentNode;
                }
                stack.push(childNode);
            }
        }
    }
    return null; 
}