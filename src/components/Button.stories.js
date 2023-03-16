import Button from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Ui Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'Button',
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'link',
          'outline-primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
          'outline-secondary',
          'outline-success',
          'outline-danger',
          'outline-warning',
          'outline-info',
          'outline-light',
          'outline-dark',
        ],
      },
      defaultValue: 'primary',
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'lg', null],
      },
      defaultValue: null,
    },
    pill: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    loading: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    link: {
      control: { type: 'text' },
      defaultValue: '',
    },
    leftIconBody: {
      name: 'Left Icon',
      control: { type: 'text' },
      description: 'Left Icon (src)',
    },
    rightIconBody: {
      name: 'Right Icon',
      control: 'text',
      description: 'Right Icon (src)',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template:
      `<Button v-bind="$props">
        <template #leftIcon>
          <img v-if="leftIconBody" :src="leftIconBody" alt="" srcset="">
        </template>
        {{ title }}
        <template #rightIcon>
          <img v-if="rightIconBody" :src="rightIconBody" alt="" srcset="">
        </template>
      </Button>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  variant: 'primary',
};

export const OutlinePrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
OutlinePrimary.args = {
  variant: 'outline-primary'
};

export const Link = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Link.args = {
  link: '/test/page',
  variant: 'link'
};

export const LinkWithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
LinkWithIcon.args = {
  link: '/test/page',
  variant: 'link',
  leftIconBody: 'https://yt3.ggpht.com/a/AATXAJx2l_wo7TeG7z626FKBUcFBA8CcrRpAL9w-kQ=s900-c-k-c0xffffffff-no-rj-mo'

};

export const Rounded = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Rounded.args = {
  variant: 'primary',
  pill: true
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Large.args = {
  variant: 'primary',
  size: 'lg'
};

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Small.args = {
  variant: 'primary',
  size: 'sm'
};

export const IconLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
IconLeft.args = {
  leftIconBody: 'https://vee-validate.logaretm.com/v2/logo.png'
};

export const IconRight = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
IconRight.args = {
  rightIconBody: 'https://yt3.ggpht.com/a/AATXAJx2l_wo7TeG7z626FKBUcFBA8CcrRpAL9w-kQ=s900-c-k-c0xffffffff-no-rj-mo'
};

export const OnlyIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
OnlyIcon.args = {
  leftIconBody: 'https://yt3.ggpht.com/a/AATXAJx2l_wo7TeG7z626FKBUcFBA8CcrRpAL9w-kQ=s900-c-k-c0xffffffff-no-rj-mo',
  title: ''
};
