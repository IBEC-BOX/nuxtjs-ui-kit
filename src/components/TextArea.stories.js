import Textarea from './TextArea.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Form/Textarea',
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    value: { control: 'text' },
    name: { control: 'text' },
    label: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
    rows: { control: 'number' },
    maxRows: { control: 'number' },
    validateExample: {control: 'object'},
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
  validateExample: {"required": "true", "min": "5"},
  name: 'my-textarea',
  label: 'My Textarea',
  description: 'This is my textarea component',
  value: '',
  placeholder: 'Enter some text here...',
  rows: 3,
  maxRows: 6,
};
