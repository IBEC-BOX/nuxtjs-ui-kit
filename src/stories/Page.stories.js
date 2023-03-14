// import { within, userEvent } from '@storybook/testing-library';

import MyPage from './Page';
// import {Primary} from "@/components/Select.stories";

export default {
  title: 'Example/Page',
  component: MyPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    SelectHeader: {
      options: ['HeaderOne', 'HeaderTwo'],
      control: {type: 'select'} // Automatically inferred when 'options' is defined
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPage },
  template: '<my-page v-bind="$props" />',
});

export const PageHeaderOne = Template.bind({});
PageHeaderOne.args = {
  SelectHeader: 'HeaderOne'
}
// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const PageHeaderTwo = Template.bind({});
PageHeaderTwo.args = {
  SelectHeader: 'HeaderTwo'
}
// LoggedIn.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole('button', { name: /Log in/i, hidden: true });
//   await userEvent.click(loginButton);
// };
