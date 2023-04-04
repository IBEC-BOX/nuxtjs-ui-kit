import Accordion from './Accordion.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Ui Components/Accordion',
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    id: {
      type: 'string',
      description: 'Уникальный идентификатор аккордеона',
      defaultValue: 'UiAccordion'
    },
    bordered: {
      type: 'boolean',
      description: 'Определяет, нужны ли бордеры между элементами аккордеона',
      defaultValue: false
    },
    flush: {
      type: 'boolean',
      description: 'Определяет, нужены ли отступы и бордеры',
      defaultValue: false
    },
    alwaysOpen: {
      type: 'boolean',
      description: 'Определяет, нужно ли закрывать элементы аккордеона',
      defaultValue: false
    },
    items: {
      type: 'array',
      description: 'Массив объектов, содержащих заголовок и содержимое элементов аккордеона',
      defaultValue: [
        { header: 'Заголовок 1', body: 'Содержимое 1' },
        { header: 'Заголовок 2', body: 'Содержимое 2' },
      ],
      control: {
        type: 'object',
        keys: {
          header: {
            type: 'string',
            description: 'Заголовок элемента аккордеона'
          },
          body: {
            type: 'string',
            description: 'Содержимое элемента аккордеона'
          },
        },
      },
    },
    defaultExpanded: {
      type: 'number',
      description: 'Индекс элемента аккордеона, который должен быть раскрыт по умолчанию',
      defaultValue: -1
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Accordion },
  template:
    `<div style="max-width: 790px"><Accordion v-bind="$props"></Accordion></div>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=903-23750&t=DH2rYxN0T4IVWmKl-4',
  },
}

Primary.args = {
  defaultExpanded: 0,
  items: [
    {id: '3', header: 'What is Lorem ipsum dolor?', body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
    {id: '1', header: 'What is Webflow and why is it the best website builder?', body: `asdads <a href="/asd">Link</a>`},
    {id: '2', header: 'What is Lorem ipsum dolor?', body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},
    {id: '4', header: 'What is Lorem ipsum dolor?', body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
  ]
};

export const Bordered = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Bordered.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=903-23875&t=DH2rYxN0T4IVWmKl-4',
  },
}

Bordered.args = {
  ...Primary.args,
  bordered: true
};

export const Flush = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Flush.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=903-23964&t=DH2rYxN0T4IVWmKl-4',
  },
}

Flush.args = {
  ...Primary.args,
  flush: true
};

export const AlwaysOpen = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

AlwaysOpen.args = {
  ...Primary.args,
  alwaysOpen: true
};

export const defaultExpanded = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

defaultExpanded.args = {
  ...Primary.args,
  defaultExpanded: 2
};
