import arrayItemsId from "../data/arrayItemsId";

export const getNewItemId = () => {
  const lastIdNum = Number([...arrayItemsId].pop());
  const newIdNum = lastIdNum + 1;
  arrayItemsId.push(newIdNum);
  return newIdNum;
};
