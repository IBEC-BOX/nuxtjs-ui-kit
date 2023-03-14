<template>
  <div class="pb-5">
    <HeaderOne v-if="SelectHeader == 'HeaderOne'" :menu="menu" :langs="langs" :logo="Logo" :social="social">
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
    <HeaderTwo v-else-if="SelectHeader == 'HeaderTwo'" :menu="menu" :langs="langs" :logo="Logo" :social="social">
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
    </HeaderTwo>

    <div class="container" style="padding-top: 160px" v-if="formReady">
      <h1>Form</h1>
      <form @submit.prevent="onSubmit" @reset="onReset" novalidate>
        {{ $t('subLocale.save') }}
        <Input
            v-model="form.email"
            name="email"
            label="Email"
            type="email"
            v-validate="{ required: true, email: true }"
        />

        <Input
            v-model="form.name"
            name="name"
            label="Имя"
            type="text"
            placeholder="Введите имя"
            v-validate="{ required: true }"
        />

        <Select
            v-model="form.food"
            name="food"
            label="Food:"
            :options="foods"
            labelOption="text"
            valueOption="value"
            v-validate="{ required: true }"
        />

        <TextArea
            v-model="form.comment"
            name="comment"
            label="Comment"
            placeholder="Введите комментарий"
            v-validate="{ required: true }"
        />

        <Radio
            v-model="form.radio"
            :options="radios"
            name="radio"
            label="Radio"
            placeholder="Введите radio"
            v-validate="{ required: true }"
        />

        <CheckBox
            v-model="form.checked"
            :options="checkboxes"
            name="checkbox"
            label="Checkbox"
            placeholder="Введите checkbox"
            v-validate="{ required: true }"
            stacked
        />

        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="reset" class="btn btn-danger">Reset</button>
      </form>

      <div class="card mt-3">
        <div class="card-header">
          Form Data Result
        </div>
        <div class="card-body">
          <pre class="m-0">{{ form }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import './page.css';
import Logo from '../stories/assets/logo.svg';

import Input from '../components/Input.vue';
import TextArea from '../components/TextArea.vue';
import Select from '../components/Select.vue';
import CheckBox from '../components/Checkbox.vue';
import Radio from '../components/Radio.vue';
import HeaderOne from '../components/HeaderOne.vue';
import HeaderTwo from '../components/HeaderTwo.vue';

export default {
  name: 'my-page',
  props: ['SelectHeader'],
  components: { Input, TextArea, Select, CheckBox, Radio, HeaderOne, HeaderTwo },
  data() {
    return {
      Logo,
      form: {
        email: '',
        name: '',
        food: null,
        comment: '',
        radio: '',
        checked: [],
      },
      foods: [
        {text: 'Carrots', value: 'Carrots-Carrots'},
        {text: 'Beans', value: 'Beans-Beans'},
        {text: 'Tomatoes', value: 'Tomatoes-Tomatoes'},
        {text: 'Corn', value: 'Corn-Corn'},
      ],
      radios: [
        { text: 'First radio', value: 'first' },
        { text: 'Second radio', value: 'second' },
        { text: 'Third radio', value: 'third' },
      ],
      checkboxes: [
        { text: 'First checkbox', value: 'first' },
        { text: 'Second checkbox', value: 'second' },
        { text: 'Third checkbox', value: 'third' },
      ],
      formReady: false,
      social: [
        {id: 1, url: '/', name: 'https://test-backend.eurasia-life.com/storage/acn5EnSZTVpWxR6PNyOp5bqoazLaLViyn70UA3WD.png'},
        {id: 12, url: '/', name: 'https://test-backend.eurasia-life.com/storage/7FtDkKgFIXVVyzRrgG8kCarcFhKJTtaK4Ni7gG7M.png'}
      ],
      langs: [
        {
          value: 'ru',
          label: 'Рус'
        },
        {
          value: 'kk',
          label: 'Қаз'
        },
        {
          value: 'en',
          label: 'Eng'
        }
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
    }
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        console.log(result)
        if (!result) {
          return
        }

        alert('Form submitted!')
      })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.comment = ''
      this.form.radio = ''
      this.form.checked = []
      this.formReady = false
      this.$nextTick(() => {
        this.$validator.reset()
        this.formReady = true
      })
    },
  },
  mounted() {
    this.formReady = true
  },

};
</script>
