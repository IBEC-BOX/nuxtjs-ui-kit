import Tabs from './Tabs.vue';
import Tab from './Tab.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Ui Components/Tabs',
  component: Tabs,
  subcomponents: { Tab },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    id: {
      control: { type: 'text' },
      description: 'Уникальный идентификатор табов'
    },
    type: {
      control: { type: 'select', options: ['tabs', 'pills', 'underline'] },
      description: 'Тип табов'
    },
    size: {
      control: { type: 'select', options: ['md', 'lg', 'sm'] },
      description: 'Размер табов'
    }
  }
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tabs, Tab },
  template:
      `<Tabs v-bind="$props">
        <Tab id="test-tab-1" active title="Tab 1"><p>hello tab 1</p></Tab>
        <Tab id="test-tab-2" title="Tab 2"><p>hello tab 2</p></Tab>
        <Tab id="test-tab-3" disabled title="Tab 3"><p>hello tab 3</p></Tab>
        <Tab id="test-tab-4" title="Tab 4"><p>hello tab 4</p></Tab>
        <Tab id="test-tab-5" link="https://ibecsystems.com" title="Tab Link"></Tab>
      </Tabs>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=670-38221&t=fBgpH9FBZ0eTtVIb-4',
  },
}

Primary.args = {
  type: 'tabs',
  id: 'default-tabs',
  size: 'md'
};

export const Pills = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Pills.args = {
  type: 'pills',
  id: 'pills-tabs',
  size: 'md'
};

export const Underline = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Underline.args = {
  type: 'underline',
  id: 'underline-tabs',
  size: 'md'
};

export const PillsLg = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

PillsLg.args = {
  type: 'pills',
  id: 'pills-tabs-lg',
  size: 'lg'
};

export const PillsSm = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

PillsSm.args = {
  type: 'pills',
  id: 'pills-tabs-sm',
  size: 'sm'
};
