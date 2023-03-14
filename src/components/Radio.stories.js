import Radio from './Radio.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Form/Radio',
  component: Radio,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    value: { control: 'array' },
    name: { control: 'text' },
    label: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    options: { control: 'object' },
    inline: { control: 'boolean' },
    validateExample: {control: 'object'}
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Radio },
  template: '<Radio v-bind="$props" v-validate="validateExample" v-model="value" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  validateExample: {"required": "true"},
  value: [],
  name: 'checkbox',
  label: 'Checkbox label',
  description: 'Checkbox description',
  placeholder: '',
  required: false,
  options: [
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' },
  ],
  inline: false,
};
