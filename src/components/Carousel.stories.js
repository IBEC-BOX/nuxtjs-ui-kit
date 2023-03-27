import Carousel from './Carousel.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Ui Components/Carousel',
  component: Carousel,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    id: { control: 'text' },
    slides: { control: 'array' },
    autoplay: { control: 'boolean' },
    interval: { control: 'number' },
    controls: { control: 'boolean' },
    indicators: { control: 'boolean' },
    pagination: { control: 'radio', options: ['dot', 'line'] },
    background: { control: 'color' },
    imgWidth: { control: 'text' },
    imgHeight: { control: 'text' },
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'outline-primary',
        'outline-secondary',
        'outline-success',
        'outline-danger',
        'outline-warning',
        'outline-info',
        'outline-light',
        'outline-dark'
      ]
    },
    size: { control: 'radio', options: ['md', 'lg', 'sm'] },
    chevron: { control: 'text' }
  }
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Carousel },
  data() {
    return {
      slide: 1
    }
  },
  template:
      `<Carousel v-model="slide" v-bind="$props">
        
      </Carousel>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=174-10451&t=enpLzhIVoQ6tNH29-4',
  },
}

Primary.args = {
  id: 'UiCarousel',
  imgHeight: '400',
  imgWidth: '640',
  slides: [
    {
      id: 1,
      img: 'https://placehold.co/640x400',
      label: '',
      caption: ''
    },
    'https://picsum.photos/id/1015/1000/600',
    {
      id: 3,
      img: 'https://picsum.photos/id/1019/1000/600',
      label: '',
      caption: ''
    }
  ],
  interval: 5000,
  controls: true,
  indicators: true,
  pagination: 'dot',
  background: 'transparent',
  size: 'md',
  variant: 'primary',
};

export const Line = Template.bind({});
Line.args = {
  ...Primary.args,
  id: 'UiCarouselLine',
  pagination: 'line',
};
export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  id: 'UiCarouselLarge',
  size: 'lg',
};

export const Autoplay = Template.bind({});
Autoplay.args = {
  ...Primary.args,
  id: 'UiCarouselAutoplay',
  autoplay: true,
};

