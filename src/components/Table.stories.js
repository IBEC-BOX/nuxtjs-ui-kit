import Table from './Table.vue';
import Button from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Some UI/Table',
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    title: {control: 'text'},
    total: {control: 'number'},
    total_title: {control: 'text'},
    headF: {control: 'array'},
    items: {control: 'array'},
    striped: {control: 'boolean'},
    hover: {control: 'boolean'}
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Table, Button },
  template: `
  <Table v-bind="$props">
<!--    <template #head(index)="{ data }">-->
<!--      <Button @click="testFunction(data)">test</Button>-->
<!--    </template>-->

<!--    <template #pre-head(index)="{ data }">-->
<!--      <Button @click="testFunction(data)">pre test</Button>-->
<!--    </template>-->

<!--    <template #pre-cell(last_name)="{ data }">-->
<!--      <Button @click="testFunction(data)">pre test222</Button>-->
<!--    </template>-->

<!--    <template #cell(last_name)="{ data }">-->
<!--      <Button @click="testFunction(data)">test222</Button>-->
<!--    </template>-->
  </Table>`,
  methods: {
    testFunction(data){
      console.log('222', data)
    }
  }
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  title: 'Team members',
  total: 100,
  total_title: 'users',
  headF: [
    {
      key: 'index',
      slotBody: 'cell(index)',
      slotHead: 'head(index)',
    },
    {
      key: 'last_name',
      sortable: true,
      slotBody: 'cell(last_name)',
      slotHead: 'head(last_name)',
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
  striped: false,
  hover: false
};

