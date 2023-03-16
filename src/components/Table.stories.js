import Table from './Table.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Some UI/Table',
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    fields: {control: 'array'},
    items: {control: 'array'}
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Table },
  template: `<Table v-bind="$props"></Table>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  fields: [
    // {
    //   key: 'index',
    //   slot: 'cell(index)',
    //   slotHead: 'head(index)',
    // },
    {
      key: 'last_name',
      sortable: true,
    },
    {
      key: 'first_name',
      sortable: false,
    },
    {
      key: 'age',
      label: 'Person age',
      sortable: true,
      // Variant applies to the whole column, including the header and footer
      variant: 'info',
    },
  ],
  items: [
    { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
    {
      age: 21,
      first_name: 'Larsen',
      last_name: 'Shaw',
      _rowVariant: 'danger',
    },
    { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 38, first_name: 'Jami', last_name: 'Carney' },
  ],
};

