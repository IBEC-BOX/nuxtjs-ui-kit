import Input from './Input.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Form/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    value: { control: 'text' },
    name: { control: 'text' },
    label: { control: 'text' },
    description: { control: 'text' },
    type: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    validateExample: {control: 'object'}
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template: '<Input v-bind="$props" v-validate="validateExample" v-model="value" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  validateExample: {"required": "true", "email": "true"},
  value: '',
  name: 'input1',
  label: 'Label',
  description: 'Description',
  type: 'text',
  placeholder: 'Placeholder',
  required: false,
};

export const Required = Template.bind({});
Required.args = {
  ...Primary.args,
  required: true,
};

export const WithValue = Template.bind({});
WithValue.args = {
  ...Primary.args,
  value: 'Initial value',
};

export const Password = Template.bind({});
Password.args = {
  ...Primary.args,
  type: 'password',
};

export const Email = Template.bind({});
Email.args = {
  ...Primary.args,
  type: 'email',
};

