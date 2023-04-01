import Select from './Select.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Form/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    value: { control: 'object' },
    name: { control: 'text' },
    label: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
    options: { control: 'object' },
    validateExample: {control: 'object'},
    labelOption: { control: 'text' },
    valueOption: { control: 'text' }
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Select },
  template: '<Select v-bind="$props" v-validate="validateExample" v-model="value" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  validateExample: {"required": "true"},
  value: '',
  name: 'my-select',
  label: 'Select label',
  description: 'Select description',
  placeholder: '',
  labelOption: 'text',
  valueOption: 'value',
  options: [
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' },
  ],
};
