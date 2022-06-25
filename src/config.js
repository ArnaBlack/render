const slides = [
  {
    id: "uniqueId_0",
    rootComponentId: "rootComponentId_0"
  }
];

export const componentsConfig = {
  rootComponentId_0: {
    componentId: "rootComponentId_0",
    name: "layout",
    children: ["cellId_0", "cellId_1", "cellId_2"]
  },

  cellId_0: {
    componentId: "cellId_0",
    name: "cell",
    children: ["blockId_0", "blockId_1", "blockId_2"]
  },

  cellId_1: {
    componentId: "cellId_1",
    name: "cell",
    children: ["blockId_0", "blockId_1", "blockId_2"]
  },

  cellId_2: {
    componentId: "cellId_2",
    name: "cell",
    children: ["blockId_0", "blockId_1", "radioGroupId_0"]
  },

  blockId_0: {
    componentId: "blockId_0",
    name: "block",
    text: "i'm block 1"
  },

  blockId_1: {
    componentId: "blockId_1",
    name: "block",
    text: "i'm block 2"
  },

  blockId_2: {
    componentId: "blockId_2",
    name: "block",
    text: "i'm block 3"
  },

  radioGroupId_0: {
    componentId: "radioGroupId_0",
    name: "radioGroup",
    actions: {
      writeValue: {
        path: "customParams.radioGroupValue"
      }
    },
    options: [
      {
        label: "Да",
        value: "yes"
      },
      {
        label: "Нет",
        value: "no"
      }
    ]
  }
};

// export const config = {
//   "2": {
//     name: "block",
//     text: "text2"
//   },
//   "3": {
//     name: "block",
//     text: "text3"
//   },
//   "4": {
//     name: "block",
//     text: "text4"
//   },
//   "5": {
//     name: "cell",
//     children: [2, 3, 4]
//   },
//   "6": {
//     name: "layout",
//     children: [5]
//   },
//   "7": {
//     name: "block",
//     text: "hello7"
//   },
//   "8": {
//     name: "block",
//     text: "hello you to8"
//   },
//   "9": {
//     name: "cell",
//     children: [7, 8]
//   },
//   "10": {
//     name: "layout",
//     children: [5, 9]
//   },
//   "11": {
//     name: "layout",
//     children: [6, 10]
//   },
//   "12": {
//     name: "block",
//     text: "i'm block"
//   },
//   "13": {
//     name: "block",
//     text: "i'm block too"
//   },
//   "14": {
//     name: "layout",
//     children: [9, 11, 12, 13]
//   }
// };
