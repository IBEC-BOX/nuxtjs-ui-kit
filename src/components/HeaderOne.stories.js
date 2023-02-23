import HeaderOne from './HeaderOne.vue';
import Logo from '../stories/assets/logo.svg';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/HeaderOne',
  component: HeaderOne,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderOne },
  // template: '<HeaderOne v-bind="$props" />',
  template: `<HeaderOne v-bind="$props">
  <template v-slot:header-left-body>
    <a class="btn btn-link" href="#ya">Версия для слабовидящих</a>
  </template>

  <template v-slot:header-right-body>
    <a href="tel:88000800099" class="btn btn-link me-4">8 800 080-00-99</a>
    <button type="button" class="btn btn-outline-primary btn-S">Перезвоните мне</button>
    <button type="button" class="ms-4 btn btn-link btn-S">Личный кабинет</button>
  </template>

  <template v-slot:header-second-body>
    <a href="/payment" class="btn btn-primary btn-S">Оплатить полис</a>
  </template>

  <template v-slot:header-top-body-mob>
    <div class="header-call">
      <a href="tel:88000800099" class="btn btn-link me-4">8 800 080-00-99</a>
      <button type="button" class="btn btn-outline-primary btn-M">Перезвоните мне</button>
    </div>
    <button type="button" class="mobile-menu-auth-button btn btn-link btn-S">Личный кабинет</button>
  </template>

  <template v-slot:header-bottom-body-mob>
    <div class="px-3 mb-4">
      <a href="#" class="w-100 btn btn-primary btn-lg">Оплатить по договору</a>
    </div>
    <div class="header-button mb-4 flex-column align-items-start px-3">
      <a class="btn btn-link p-0" href="#ya">Версия для слабовидящих</a>
    </div>
  </template>
</HeaderOne>`

});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  logo: Logo,
  social: [
    {id: 1, url: '/', name: 'https://test-backend.eurasia-life.com/storage/acn5EnSZTVpWxR6PNyOp5bqoazLaLViyn70UA3WD.png'},
    {id: 12, url: '/', name: 'https://test-backend.eurasia-life.com/storage/7FtDkKgFIXVVyzRrgG8kCarcFhKJTtaK4Ni7gG7M.png'}
  ],
  menu: [
    {id:1, url: '/1', name: 'Пункт 1'},
    {
      id:2,
      url: '/2', 
      name: 'Пункт 2',
      items: [
        {id:7, url: '/7', name: 'Пункт 7'},
        {id:8, url: '/8', name: 'Пункт 8'},
        {id:9, url: '/9', name: 'Пункт 9'},
      ]
    },
    {id:3, url: '/3', name: 'Пункт 3'},
    {id:4, url: '/4',
    items: [
        {id:17, url: '/17', name: 'Пункт 17'},
        {id:18, url: '/18', name: 'Пункт 18'},
        {id:19, url: '/19', name: 'Пункт 19'},
      ], name: 'Пункт 4'},
    {id:5, url: '/5', name: 'Пункт 5'},
    {id:6, url: '/6', name: 'Пункт 6'}
  ],
  arrowSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

export const Secondary = Template.bind({});
Secondary.args = {
  'header-left-body': '<a href="https://storybook.js.org/">Built with Storybook</a>',
  logo: Logo,
  social: [
    {id: 1, url: '/', name: 'https://test-backend.eurasia-life.com/storage/acn5EnSZTVpWxR6PNyOp5bqoazLaLViyn70UA3WD.png'},
    {id: 12, url: '/', name: 'https://test-backend.eurasia-life.com/storage/7FtDkKgFIXVVyzRrgG8kCarcFhKJTtaK4Ni7gG7M.png'}
  ],
  menu: [
    {id:1, url: '/1', name: 'Меню 1'},
    {
      id:2,
      url: '/2', 
      name: 'Меню 2',
      items: [
        {id:7, url: '/7', name: 'Меню 7'},
        {id:8, url: '/8', name: 'Меню 8'},
        {id:9, url: '/9', name: 'Меню 9'},
      ]
    },
    {id:3, url: '/3', name: 'Меню 3'},
    {id:4, url: '/4',
    items: [
        {id:17, url: '/17', name: 'Меню 17'},
        {id:18, url: '/18', name: 'Меню 18'},
        {id:19, url: '/19', name: 'Меню 19'},
      ], name: 'Меню 4'},
    {id:5, url: '/5', name: 'Меню 5'},
    {id:6, url: '/6', name: 'Меню 6'}
  ],
};
