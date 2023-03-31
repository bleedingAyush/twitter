import { MentionNode } from "./nodes/MentionNode";
import ExampleTheme from "./themes/ExampleTheme";

const editorConfig = {
  theme: ExampleTheme,
  namespace: "MyEditor",
  onError(error: Error) {
    throw error;
  },
  nodes: [MentionNode],
};

export default editorConfig;
