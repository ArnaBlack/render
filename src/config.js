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
    children: ["blockId_0", "radioGroupId_0"]
  },

  blockId_0: {
    componentId: "blockId_0",
    name: "block",
    text: "i'm block too"
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

export const config = {
  "2": {
    name: "block",
    text: "text2"
  },
  "3": {
    name: "block",
    text: "text3"
  },
  "4": {
    name: "block",
    text: "text4"
  },
  "5": {
    name: "cell",
    children: [2, 3, 4]
  },
  "6": {
    name: "layout",
    children: [5]
  },
  "7": {
    name: "block",
    text: "hello7"
  },
  "8": {
    name: "block",
    text: "hello you to8"
  },
  "9": {
    name: "cell",
    children: [7, 8]
  },
  "10": {
    name: "layout",
    children: [5, 9]
  },
  "11": {
    name: "layout",
    children: [6, 10]
  },
  "12": {
    name: "block",
    text: "i'm block"
  },
  "13": {
    name: "block",
    text: "i'm block too"
  },
  "14": {
    name: "layout",
    children: [9, 11, 12, 13]
  }
};
