<template>
  <div id="app">
    <HeaderOne :menu="menu" logo="/logo.svg" :social="social">
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
    </HeaderOne>
  </div>
</template>

<script>
import HeaderOne from './components/HeaderOne.vue'

import './components/main.scss'

export default {
  name: 'App',
  components: {
    HeaderOne
  },
  data() {
    return {
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
    };
  },
}
</script>

<style>
:root {
  /* --bs-primary: #fc2f94; */
  --bs-font-sans-serif: Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
#app {
  /* font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
