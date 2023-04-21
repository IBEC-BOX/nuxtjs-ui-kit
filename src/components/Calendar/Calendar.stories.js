import Calendar from './Calendar.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Ui Components/Calendar',
  component: Calendar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // title: { control: 'text' },
    // text: { control: 'text' },
    // date: { control: 'text' },
    // author: { control: 'text' },
    // imgSrc: { control: 'text' },
    // imgAlt: { control: 'text' },
    titlePosition: { control: { type: 'radio', options: ['center', 'left', 'right'] } },
    // horizontal: { control: 'boolean' },
    // horizontalImageColSize: { control: { type: 'range', min: 1, max: 12, step: 1 } },
    // maxWidth: { control: 'number' },
    // bordered: { control: 'boolean' }
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Calendar },
  template:
      `<Calendar v-bind="$props">
      </Calendar>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=851-23361&t=G69bsKGVcqWrj697-4',
  },
}

Primary.args = {
  titlePosition: 'center',
};

export const Left = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Left.args = {
  titlePosition: 'left',
};

export const Right = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Right.args = {
  titlePosition: 'right',
};
