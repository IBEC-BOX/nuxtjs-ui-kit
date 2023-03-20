import Vue from 'vue';

Vue.component('NuxtLink', {
  props:   ['to'],
  template: '<a :href="to"><slot>NuxtLink</slot></a>',
});

Vue.prototype.$i18n = {locale: 'ru'};
Vue.prototype.$t = (v) => v;
Vue.prototype.localePath = (v) => `/locale${v}`;

import VeeValidate from 'vee-validate';
// Install VeeValidate into Vue
Vue.use(VeeValidate);


import { addDecorator } from '@storybook/vue';
// import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls';

// Подключение Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// Задание значений глобальных переменных Bootstrap
const myBootstrapGlobals = {
  '$primary-color': 'red',
  '$secondary-color': 'blue',
  '$primary': '#e00366'
};

export const globalTypes = {
  bootstrap: {
    name: 'Bootstrap',
    description: 'Bootstrap global variables',
    defaultValue: 'myBootstrapGlobals',
    toolbar: {
      icon: 'circle',
      items: [
        { value: '#007bff', title: 'Blue' },
        { value: '#28a745', title: 'Green' },
        { value: '#dc3545', title: 'Red' },
      ]
    }
  }
};

addDecorator((storyFn, { globals }) => {
  // Задание значений переменных Bootstrap в зависимости от выбранного значения в Storybook
  // console.log(document.documentElement.style, 'asdasd');
  if (globals.bootstrap === 'myBootstrapGlobals') {
    Object.assign(document.documentElement.style, myBootstrapGlobals);
  } else {
    // Сброс значений переменных Bootstrap
    Object.keys(myBootstrapGlobals).forEach(key => {
      document.documentElement.style.removeProperty(key);
    });
  }

  // Отрисовка компонента
  return storyFn();
});



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
