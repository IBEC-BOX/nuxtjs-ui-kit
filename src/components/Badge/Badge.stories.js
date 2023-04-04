import Badge from './Badge.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Ui Components/Badge',
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'New',
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
        options: ['sm', 'lg', 'md', 'p2'],
      },
      defaultValue: 'md',
    },
    position: {
      control: {
        type: 'text',
        defaultValue: ''
      }
    },
    pill: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    href: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Badge },
  template:
    `<div class="position-relative m-3 p-1">
      <Badge v-bind="$props">{{ title }}</Badge>
    </div>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=633-29232&t=DH2rYxN0T4IVWmKl-4',
  },
}

Primary.args = {
  variant: 'primary',
};

export const OutlinePrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
OutlinePrimary.args = {
  variant: 'outline-primary'
};
export const Rounded = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Rounded.args = {
  variant: 'primary',
  pill: true
};

const TemplateButton = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Badge },
  template:
      `<button class="btn btn-secondary position-relative m-3">
        Button
        <Badge v-bind="$props">{{ title }}<span class="visually-hidden">New alerts</span></Badge>
      </button>`,
});

export const PositionTopRight = TemplateButton.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
PositionTopRight.args = {
  variant: 'primary',
  position: 'top right',
  title: '99+',
  size: 'p2',
  pill: true
};

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Badge },
  template:
      `<div class="position-relative m-3 p-1">
        <Badge class="p-2" v-bind="$props">{{ title }}<span class="visually-hidden">New alerts</span></Badge>
      </div>`,
});
export const Dot = Template2.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Dot.args = {
  variant: 'primary',
  pill: true,
  title: null
};

export const DotPositionTopLeft = TemplateButton.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
DotPositionTopLeft.args = {
  variant: 'primary',
  position: 'left top',
  title: '',
  size: 'p2',
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

export const Href = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Href.args = {
  href: '/test/page',
  variant: 'primary'
};
