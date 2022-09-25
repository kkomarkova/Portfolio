import { TextArea } from "components";
export default {
  title: "portfolio/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder5",
  variant: "FillGray100",
  size: "sm",
  placeholder: "placeholder",
};
