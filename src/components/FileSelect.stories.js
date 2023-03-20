import FileSelect from './FileSelect.vue';

import { userEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Form/File Select',
  component: FileSelect,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    value: { control: 'array' },
    name: { control: 'text' },
    label: { control: 'text' },
    description: { control: 'text' },
    allowedExtensions: {control: 'array'},
    limit: {control: 'number'},
    validateExample: {control: 'object'},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FileSelect },
  template:
      `<FileSelect v-bind="$props" v-validate="validateExample" v-model="files" />`,
  data () {
    return {
      files: []
    }
  }
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=116-3467&t=730f4TgCEIK6W6Hj-4',
  },
}
Primary.args = {
  validateExample: {"required": "true"},
  value: [

  ],
  limit: 5,
  allowedExtensions: ['doc','docx','pdf'],
  name: 'testFile',
  label: 'Label',
  description: 'Description',
};

export const PrimaryWithTest = Template.bind({});
PrimaryWithTest.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=116-3467&t=730f4TgCEIK6W6Hj-4',
  },
}
PrimaryWithTest.args = {
  ...Primary.args
};
// Custom function to emulate a pause
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
PrimaryWithTest.play = async () => {
  // 👇 Simulate interactions with the component
  // if ( canvasElement &&  canvasElement.__vue__) { //check renderVue
  //   const canvas = within(canvasElement);
    const canvas = screen
    await expect(canvas.getByText('Выберите файл')).toBeInTheDocument();
    const fileInput = canvas.getByTestId('testFile', { selector: 'input', hidden: true });

    const invalidFileType = new File(['invalidFile'], 'invalidFile.gif', { type: 'image/gif' });
    await userEvent.upload(fileInput, invalidFileType);
    const errorMessageInvalidFileType = await screen.getByText(`Допустимые форматы: ${PrimaryWithTest.args.allowedExtensions.join(', ')}`);
    expect(errorMessageInvalidFileType).toBeInTheDocument();

    await sleep(2000);

    const oversizedFile = new File(['x'.repeat((+PrimaryWithTest.args.limit + 1) * 1024 * 1024)], 'oversizedFile.pdf', { type: 'application/pdf' });
    await userEvent.upload(fileInput, oversizedFile);
    const errorMessageOversizedFile = await screen.getByText(`Общий объём файлов не должен превышать ${PrimaryWithTest.args.limit} МБ.`);
    expect(errorMessageOversizedFile).toBeInTheDocument();

    await sleep(2000);

    // Симуляция выбора файла
    const validFile = new File(['validFileOne'], 'validFile.pdf', { type: 'application/pdf' });
    await sleep(100);
    const validFile2 = new File(['validFileTwo'], 'validFile2.pdf', { type: 'application/pdf' });
    const files = [validFile, validFile2]
    // await userEvent.upload(fileInput, validFile);
    await userEvent.upload(fileInput, files);
    console.log(fileInput.files)
    await expect(canvas.getByText('validFile.pdf')).toBeInTheDocument();
    await expect(canvas.getByText('validFile2.pdf')).toBeInTheDocument();
    //
    expect(fileInput.files).toHaveLength(2)
    expect(fileInput.files[0]).toBe(files[0])
    expect(fileInput.files[1]).toBe(files[1])
  // }
  //
  // await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
  //
  // await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
  //
  // // See https://storybook.js.org/docs/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  // await userEvent.click(canvas.getByRole('button'));
};

