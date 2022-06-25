import { Layout } from "../presentationComponent/Layout";
import { Cell } from "../presentationComponent/Cell";
import { Block } from "../presentationComponent/Block";
import { EditableRadioGroup } from "../editableComponent/EditableRadioGroup";
import { PresentationRadioGroup } from "../presentationComponent/PresentationRadioGroup";

export const COMPONENTS_MAP_BUILDER = {
  layout: Layout,
  cell: Cell,
  block: Block,
  radioGroup: EditableRadioGroup
};

export const COMPONENTS_MAP_VIEW = {
  layout: Layout,
  cell: Cell,
  block: Block,
  radioGroup: PresentationRadioGroup
};
