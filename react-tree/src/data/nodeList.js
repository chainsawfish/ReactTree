export const nodeList = [
  {
    id: 1,
    parent: null,
    children: [
      {
        id: 3,
        parent: 1,
        children: [],
        isVisible: false,
        isSelected: false,
        text: "node text"
      },
      {
        id: 4,
        parent: 1,
        children: [
          {
            id: 5,
            parent: 4,
            children: [],
            isVisible: false,
            isSelected: false,
            text: "node text"
          }
        ],
        isVisible: true,
        isSelected: false,
        text: "node text"
      }
    ],
    isVisible: true,
    isSelected: false,
    text: "node text"
  },
  {
    id: 2,
    parent: null,
    children: [],
    isVisible: true,
    isSelected: false,
    text: "node text"
  }
];
