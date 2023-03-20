<template>
    <header id="header">
        <div class="container d-lg-flex d-none align-items-center justify-content-between header-pc h-100">
            <div class="logo-block d-flex align-items-center">
                <nuxt-link :to="localePath('/')"><img class="headerLogo" id="headerLogoPC" :src="logo" alt="iQanat"></nuxt-link>
            </div>
            <nav>
            <ul class="header-menu">
                <li v-for="m in menu" :key="m.name">
                <a class="yellow" :href="m.link" v-if="m.type" target="_blank" rel="noopener noreferrer">{{ m.name }}</a>
                <nuxt-link v-else class="t2" :to="localePath(m.url)">{{ $t(m.name) }}</nuxt-link>
                </li>
            </ul>
            </nav>
            <div class="d-flex align-items-center">
                <a @click="$bvModal.show('bv-modal-example-call')" class="header-menu-link" href="#">{{$t('Остались вопросы?')}}</a>
                <div class="header-menu-links">
                    <a :key="`socid-${soc.id}`" v-for="soc in social" :href="soc.url" :title="`social-${soc.id}`" class="me-3" target="_blank" rel="noopener noreferrer">
                        <img height="24" width="24" :src="soc.name" alt="">
                    </a>
                </div>
            </div>

            <!-- <div>
                <b-dropdown right class="lang-button" variant="Text" :text="$i18n.locale.toUpperCase()">
                    <b-dropdown-item @click.prevent.stop="$i18n.setLocale('ru')" href="#">Русский</b-dropdown-item>
                    <b-dropdown-item @click.prevent.stop="$i18n.setLocale('kk')" href="#">Қазақша</b-dropdown-item>
                    <b-dropdown-item @click.prevent.stop="$i18n.setLocale('en')" href="#">English</b-dropdown-item>
                </b-dropdown>
            </div> -->

            <div class="header-button flex-column align-items-start px-3">
                <div id="lang-select-2" class="dropdown header-dropdown text-dropdown">
                    <button class="btn btn-link p-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="ms-1">{{langs.find(el => el.value === $i18n.locale).label}}</span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li v-for="lang in langs" :key="`lang-${lang.value}`"><a class="dropdown-item" href="#">{{ lang.label }}</a></li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="container d-lg-none d-flex align-items-center justify-content-between header-pc h-100">
            <div class="logo-block d-flex align-items-center">
                <nuxt-link :to="localePath('/')"><img class="headerLogo" id="headerLogoMob" :src="logo" alt="iQanat"></nuxt-link>
            </div>
            <div class="d-flex align-items-center">
                <div id="lang-select-1" class="dropdown header-dropdown text-dropdown">
                    <button class="btn btn-link p-0 dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="ms-1">{{langs.find(el => el.value === $i18n.locale).label}}</span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        <li v-for="lang in langs" :key="`lang-${lang.value}`"><a class="dropdown-item" href="#">{{ lang.label }}</a></li>
                    </ul>
                </div>
                <a class="hamburger ms-4" @click="show = !show" :class="show ? 'hamburger--is-open' : ''">
                    <div class="hamburger__item hamburger__item--first"></div>
                    <div class="hamburger__item hamburger__item--middle"></div>
                    <div class="hamburger__item hamburger__item--last"></div>
                </a>
            </div>
            <nav v-if="show" class="mobile-menu">
                <ul class="mobile-menu-items header-menu">
                    <li v-for="m in menu" :key="m.name">
                        <a class="yellow" :href="m.link" v-if="m.type" target="_blank" rel="noopener noreferrer">{{ m.name }}</a>
                        <nuxt-link @click.native="show = false" v-else class="t2" :to="localePath(m.link)">{{ $t(m.name) }}</nuxt-link>
                    </li>
                    <li>
                        <a class="yellow" @click="$bvModal.show('bv-modal-example-call')">{{$t('Остались вопросы?')}}</a>
                    </li>
                </ul>
                <div class="d-flex align-items-center">
                    <div class="header-menu-links mobile-menu-links">
                        <a :key="`socid-${soc.id}`" v-for="soc in social" :href="soc.url" :title="`social-${soc.id}`" class="me-3" target="_blank" rel="noopener noreferrer">
                            <img height="24" width="24" :src="soc.name" alt="">
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script lang="js">
import Vue from 'vue'
// import inst from '~/static/inst.svg?inline'
// import fb from '~/static/fb.svg?inline'

export default Vue.extend({
    // components: { inst, fb },
    name: 'HeaderTwo',
    props: {
        menu: {
            type: Array,
            default:() => []
        },
        social: {
            type: Array,
            default:() => []
        },
        logo: String,
        arrowSvg: {
            type: String,
            default: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        },
        langs: {
          type: Array,
          default: () => [
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
          ]
        },
    },
    data() {
        return {
            show: false,
            // menu: [
            //     { name: 'Главная', link: '/' },
            //     { name: 'Жизнь в школе', link: '/school-life' },
            //     { name: 'Программа обучения', link: '/training-program' },
            //     { name: 'Как поступить', link: '/how-to-enter' }
            // ]
        }
    }
})
</script>

<style lang="scss">
header#header {
    height: 120px;
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0;
    background: #FFFFFF;
    .headerLogo {
        height: 75px;
        width: 95px;
    }
    .header-menu {
        display: flex;
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            display: flex;
            a {
                color: #000;
                padding: 30px 20px;
                &.nuxt-link-exact-active {
                    color: var(--bs-primary);
                }
                &:hover {
                    text-decoration: none;
                    color: var(--bs-primary);
                }
            }
        }
        &-link {
                color: #000;
                padding: 30px 20px;
                &:hover {
                    text-decoration: none;
                    color: var(--bs-primary);
                }
        }
        &-links {
            display: flex;
            align-items: center;
            margin-right: 20px;
            a:hover {
                svg {
                   path {
                    fill: #014401;
                   }
                }
            }
        }
    }
    .mobile-menu {
        position: fixed;
        top: 80px;
        background: white;
        left: 0;
        right: 0;
        bottom: 0;
        &-items {
            flex-direction: column;
            margin-top: 12px;
            li {
                width: 100%;
                a {
                    width: 100%;
                    padding: 20px;
                }
            }
        }
        &-links {
            padding: 20px;   
            a:hover {
                svg {
                    path {
                        fill: #014401;
                    }
                }
            }
        }
    }
    .lang-button {
        button.btn {
            max-width: none;
            width: auto;
            padding: 0;
            &:active, &:focus {
                outline: none;
                box-shadow: none;
            }
        }
    }
    @media (max-width: 1023px) {
        height: 80px;
        #headerLogo {
            height: 64px;
            width: 64px;
        }
    }
}
</style>
