import Card from './Card.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Ui Components/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    date: { control: 'text' },
    author: { control: 'text' },
    imgSrc: { control: 'text' },
    imgAlt: { control: 'text' },
    imgPosition: { control: { type: 'radio', options: ['top', 'bottom', 'start', 'end'] } },
    horizontal: { control: 'boolean' },
    horizontalImageColSize: { control: { type: 'range', min: 1, max: 12, step: 1 } },
    maxWidth: { control: 'number' },
    bordered: { control: 'boolean' }
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template:
      `<Card v-bind="$props">
<!--        <a href="#" class="card-link">Card link</a>-->
        <div>
          <a href="#" class="btn btn-primary">Medium Button</a></div>
      </Card>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=540-22608&t=vHRQ3sYfiEpXuw6j-4',
  },
}

Primary.args = {
  variant: 'primary',
  title: 'Card Title',
  imgSrc: 'https://placehold.co/318x194',
  imgAlt: 'altImg',
  horizontal: false,
  imgPosition: 'top',
  maxWidth: 350,
  text: '<p>A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.</p>'
};

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template:
      `<Card v-bind="$props"></Card>`,
});

export const PrimaryWithoutSlot = Template2.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

PrimaryWithoutSlot.args = {
  variant: 'primary',
  title: 'Card Title',
  imgSrc: 'https://placehold.co/318x194',
  imgAlt: 'altImg',
  horizontal: false,
  imgPosition: 'top',
  maxWidth: 350,
  text: '<p class="mb-0">A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.</p>'
};

export const Horizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Horizontal.args = {
  variant: 'primary',
  title: 'Card Title',
  imgSrc: 'https://placehold.co/318x194',
  imgAlt: 'altImg',
  horizontal: true,
  horizontalImageColSize: 5,
  imgPosition: 'start',
  maxWidth: 740,
  text: '<p>A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.</p>'
};

const Template3 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template:
      `<Card v-bind="$props"></Card>`,
});

export const HorizontalWithoutSlot = Template3.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

HorizontalWithoutSlot.args = {
  variant: 'primary',
  title: 'Card Title',
  imgSrc: 'https://placehold.co/318x194',
  imgAlt: 'altImg',
  horizontal: true,
  imgPosition: 'start',
  date: '02.04.2023',
  author: 'by Tyler, The Creator',
  maxWidth: 740,
  text: '<p>A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.</p>'
};

export const WithDateAndAuthor = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

WithDateAndAuthor.args = {
  variant: 'primary',
  title: 'Card Title',
  imgSrc: 'https://placehold.co/318x194',
  imgAlt: 'altImg',
  horizontal: false,
  imgPosition: 'top',
  date: '02.04.2023',
  author: 'by Tyler, The Creator',
  maxWidth: 350,
  text: '<p>A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.</p>'
};

