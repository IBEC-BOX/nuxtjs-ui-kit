import Spinner from './Spinner.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Ui Components/Spinner',
  component: Spinner,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: { control: "text", defaultValue: 'Loading...' },
    role: { control: "text", defaultValue: 'status' },
    small: { control: "boolean"},
    type: { control: { type: "select", options: ["border", "grow"] } },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']
    },
  }
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Spinner },
  data() {
    return {
      slide: 1
    }
  },
  template:
      `<Spinner v-bind="$props">
        
      </Spinner>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=560-22311&t=09N7ALCEkQGUSVe7-4',
  },
}

Primary.args = {
  variant: 'primary',
  type: 'border',
  small: false,
};

export const Grow = Template.bind({});
Grow.args = {
  ...Primary.args,
  type: 'grow'
};

export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  small: true
};

