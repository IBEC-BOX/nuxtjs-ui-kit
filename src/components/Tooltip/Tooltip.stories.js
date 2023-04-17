import Tooltip from './Tooltip.vue';

import tooltip from '../../directives/tooltip';
// import Vue from 'vue';
// Vue.directive('tooltip', tooltip);

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Ui Components/Tooltip',
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    message: {
      control: { type: 'text' },
      defaultValue: 'New',
    },
    trigger: {
      control: { type: 'text' },
      defaultValue: 'hover',
    },
    html: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'light',
        ],
      },
      defaultValue: 'primary',
    },
    placement: {
      control: {
        type: 'select',
        options: [
          'left',
          'top',
          'right',
          'bottom',
          'auto'
        ],
      },
      defaultValue: 'auto',
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'lg', 'md'],
      },
      defaultValue: 'sm',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  directives: { tooltip },
  mounted() {
    if (this.$refs.tooltipHover && this.$refs.tooltipHover._tooltip) {
      this.$refs.tooltipHover._tooltip.show()
    }
  },
  template:
    `<div class="position-relative d-flex align-items-center justify-content-center p-5">
      <button ref="tooltipHover" class="btn btn-secondary m-5" v-tooltip="{...$props}" >{{ trigger }} me!</button>
    </div>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=671-52810&t=ZllLl9jCHPB5iDl3-4',
  },
}
Primary.args = {
  variant: 'dark',
  placement: 'bottom',
  message: 'Lorem ipdum dolor sit amet consectur cadronger nerlo',
  trigger: 'hover',
  html: false,
};

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Light.parameters = {
  backgrounds: { default: 'dark' },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=671-52792&t=ZllLl9jCHPB5iDl3-4',
  },
}
Light.args = {
  variant: 'light',
  placement: 'right',
  message: 'Right tooltip',
  trigger: 'hover',
  size: 'md',
  html: false,
};


const TemplateComponent = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tooltip },
  mounted() {
    if (this.$refs.tooltipClick && this.$refs.tooltipClick._tooltip) {
      this.$refs.tooltipClick._tooltip.show()
    }
  },
  template:
      `<div class="position-relative d-flex align-items-center justify-content-center p-5">
        <button ref="tooltipClick" :id="target" class="btn btn-secondary m-5" >{{ trigger }} me!</button>
        <Tooltip v-bind="$props">{{ message }}</Tooltip>
      </div>`,
});

export const PrimaryComponent = TemplateComponent.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
PrimaryComponent.parameters = {
  backgrounds: { default: 'dark' },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=671-52827&t=ZllLl9jCHPB5iDl3-4',
  },
}

PrimaryComponent.args = {
  variant: 'light',
  placement: 'right',
  message: `<div>
                <h6 class="mb-2">Right tooltip</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="#" class="btn btn-dark btn-sm rounded-pill">Learn more</a>
            </div>`,
  trigger: 'click',
  size: 'lg',
  target: 'PrimaryComponentTestId'
};

