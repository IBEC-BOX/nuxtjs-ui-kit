import Textarea from './TextArea.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Form/Textarea',
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    value: { control: 'text' },
    name: { control: 'text' },
    labelPlaceholder: { control: 'text' },
    description: { control: 'text' },
    rows: { control: 'number' },
    maxRows: { control: 'number' },
    validateExample: { control: 'object' },
    disabled: { control: 'boolean' },
    autosize: { control: 'boolean' }
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Textarea },
  template: '<Textarea v-bind="$props" v-validate="validateExample" v-model="value" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  validateExample: { "required": "true", "min": "5" },
  name: 'my-textarea',
  labelPlaceholder: 'My Textarea',
  description: 'This is my textarea component',
  value: '',
  rows: 3,
  maxRows: 6,
  disabled: false,
  autosize: true,
};
