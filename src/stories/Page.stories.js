
import { userEvent, screen, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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

export const PageFormTest = Template.bind({});
PageFormTest.args = {
  SelectHeader: 'HeaderOne'
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

PageFormTest.play = async () => {
  const canvas = screen
  const formResult = document.querySelector('.FormDataResult')
  const canvasFormResult = within(formResult)
  // test input
  await userEvent.type(canvas.getByTestId('email'), 'email@ibec.com', {delay: 150});
  await expect(canvasFormResult.getByText(/"email": "email@ibec.com"/i)).toBeInTheDocument();
  await sleep(200)
  // test input
  await userEvent.type(canvas.getByTestId('name'), 'IbecName', {delay: 150});
  await expect(canvasFormResult.getByText(/"name": "IbecName"/i)).toBeInTheDocument();
  await sleep(200)
  // test select
  const select = canvas.getByRole('combobox')
  await userEvent.click(select, {delay: 150})
  await sleep(500)
  let option = canvas.getByText('Corn')
  await userEvent.click(option, {delay: 150})
  await expect(canvasFormResult.getByText(/"food": "Corn-Corn"/i)).toBeInTheDocument();
  await sleep(300)
  await userEvent.click(select, {delay: 150})
  await sleep(500)
  option = canvas.getByText('Beans')
  await userEvent.click(option, {delay: 150})
  await expect(canvasFormResult.getByText(/"food": "Beans-Beans"/i)).toBeInTheDocument();
  await sleep(300)
  // test textarea
  await userEvent.type(canvas.getByTestId('comment'), 'test comment', {delay: 150});
  await expect(canvasFormResult.getByText(/"comment": "test comment"/i)).toBeInTheDocument();
  await sleep(200)
  // test Radio
  await userEvent.click(canvas.getByLabelText("First radio"), {delay: 150});
  await expect(canvasFormResult.getByText(/"radio": "first"/i)).toBeInTheDocument();
  await sleep(500)
  await userEvent.click(canvas.getByLabelText("Second radio"), {delay: 150});
  await expect(canvasFormResult.getByText(/"radio": "second"/i)).toBeInTheDocument();
  await sleep(500)
  // test Checkbox
  await userEvent.click(canvas.getByLabelText("First checkbox"), {delay: 150});
  await expect(canvasFormResult.getByText(/"checked": \[ "first" \]/i)).toBeInTheDocument();
  await sleep(500)
  await userEvent.click(canvas.getByLabelText("Second checkbox"), {delay: 150});
  await expect(canvasFormResult.getByText(/"checked": \[ "first", "second" \]/i)).toBeInTheDocument();
  await sleep(500)
  await userEvent.click(canvas.getByLabelText("First checkbox"), {delay: 150});
  await expect(canvasFormResult.getByText(/"checked": \[ "second" \]/i)).toBeInTheDocument();
  await sleep(200)
  //test File
  const fileInput = canvas.getByTestId('FormFilesSelect', { selector: 'input', hidden: true });
  const validFile = new File(['validFileOne'], 'validFile.pdf', { type: 'application/pdf' });
  await userEvent.upload(fileInput, validFile);
  await expect(canvas.getByText('validFile.pdf')).toBeInTheDocument();
  await expect(fileInput.files[0]).toBe(validFile)

  const submitButton = await canvas.getByRole('button', { name: /Submit/i });
  await userEvent.click(submitButton, {delay: 150});
};
