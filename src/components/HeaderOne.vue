<template>
    <header id="header">
        <div class="header-first d-lg-block d-none">
            <div class="container">
                <div class="header-first-body">
                    <div class="header-button">
                        <div class="d-flex me-3">
                            <a class="me-2" :key="`socid-${soc.id}`" v-for="soc in social" :href="soc.url" target="_blank" rel="noopener noreferrer">
                                <img height="24" width="24" :src="soc.name" alt="">
                            </a>
                        </div>

                        <div id="lang-select" class="dropdown header-dropdown text-dropdown me-3">
                            <button class="btn btn-link p-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="ms-1">{{langs.find(el => el.value === $i18n.locale).label}}</span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li v-for="lang in langs" :key="`lang-${lang.value}`"><a class="dropdown-item" href="#">{{ lang.label }}</a></li>
                            </ul>
                        </div>

                        <slot name="header-left-body"></slot>
                    </div>
                    <div class="header-call">
                        <slot name="header-right-body"></slot>
                    </div>
                </div>
            </div>
        </div>

        <nav class="header-second d-lg-block d-none">
            <div class="container h-100">
                <div class="header-second-body justify-content-between">
                    <div class="h-100 d-flex align-items-center">
                        <nuxt-link :to="('/')">
                            <img class="header-logo" :src="logo" alt="logo">
                        </nuxt-link>
                        <ul class="header-menu">
                            <li v-for="(m) in menu" :key="`menu-${m.id}`">
                                <nuxt-link class="header-menu-link" v-if="(m.items && !m.items.length) || !m.items" :to="(m.url)">{{ m.name }}</nuxt-link>
                                <div v-else class="header-menu-link">
                                    <span>{{ m.name }}</span>
                                    <div class="header-menu_sub-wrap" v-if="m.items">
                                        <ul class="header-menu_sub">
                                            <li v-for="(s) in m.items" :key="`menu-sub-${s.id}`">
                                                <nuxt-link :to="(s.url)">{{ s.name }}</nuxt-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <slot name="header-second-body"></slot>
                </div>
            </div>
        </nav>

        <div class="header-second d-lg-none d-block">
            <div class="container h-100">
                <div class="header-second-body">
                    <nuxt-link :to="('/')">
                        <img class="header-logo" :src="logo" alt="logo">
                    </nuxt-link>
                    <a class="hamburger ms-4" @click="show = !show" :class="show ? 'hamburger--is-open' : ''">
                        <div class="hamburger__item hamburger__item--first"></div>
                        <div class="hamburger__item hamburger__item--middle"></div>
                        <div class="hamburger__item hamburger__item--last"></div>
                    </a>
                </div>
            </div>
            <nav v-if="show" class="mobile-menu">
                <slot name="header-top-body-mob"></slot>
                <ul class="mobile-menu-items header-menu">
                    <li v-for="(m, j) in menu" :key="m.name">
                        <nuxt-link class="mobile-menu-item" v-if="(m.items && !m.items.length) || !m.items" @click.native="show = false" :to="(m.url)">{{ (m.name) }}</nuxt-link>
                        <div @click="opens.indexOf(j) >= 0 ? opens.splice(opens.indexOf(j),1) : opens.push(j)" class="mobile-menu-item --sub" :class="{'--open' : opens.includes(j) }" v-else>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>{{ m.name }}</span>
                                <span v-html="arrowSvg"></span>
                                <!-- <img src="/nav_arrow_down.svg" alt=""> -->
                            </div>
                            <ul v-if="opens.includes(j)" class="mobile-menu-items_sub">
                                <li v-for="(s) in m.items" :key="`menu-sub-${s.id}`">
                                    <nuxt-link class="mobile-menu-item_sub" @click.native="show = false" :to="(s.url)">{{ (s.name) }}</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <slot name="header-bottom-body-mob"></slot>

                <div class="header-button mb-4 flex-column align-items-start px-3">
                    <div id="lang-select" class="dropdown header-dropdown text-dropdown me-3">
                        <button class="btn btn-link p-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="ms-1">{{langs.find(el => el.value === $i18n.locale).label}}</span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li v-for="lang in langs" :key="`lang-${lang.value}`"><a class="dropdown-item" href="#">{{ lang.label }}</a></li>
                        </ul>
                    </div>
                </div>

                    <div class="d-flex px-3 pt-2 me-3">
                        <a class="me-2" :key="`socid-${soc.id}`" v-for="soc in social" :href="soc.url" target="_blank" rel="noopener noreferrer">
                            <img height="24" width="24" :src="soc.name" alt="">
                        </a>
                    </div>

                <!-- <div class="d-flex align-items-center">
                    <div class="header-menu-links mobile-menu-links">
                        <a class="me-3" href="#" target="_blank" rel="noopener noreferrer">
                            links
                        </a>
                         <a class="me-3" href="#" target="_blank" rel="noopener noreferrer">
                            links
                        </a>
                    </div>
                </div> -->
            </nav>
        </div>
    </header>
</template>

<script>

// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
// import { Toast } from 'bootstrap.esm.min.js'

export default {
    name: 'HeaderOne',
    props: {
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
        }
    },
    mounted() {

    },
    data() {
        return {
            opens: [],
            show: false,
            mount: false,
        };
    },
    computed: {},
    methods: {
        
    }
};
</script>

<style lang="scss">
#header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    right: 0;
    z-index: 999;
    @media (max-width: 1023px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 101;
    }
    #lang-select {
        .dropdown-menu {
            // margin-left: -20px;
            min-width: 80px;
            li {
                margin-bottom: 10px;
            }
        }
    }
    #lk-menu {
        button {
            color: #3AAB47;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            &::after {
                display: none;
            }
        }
        .dropdown-menu {
            // box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.08);
            border: 1px solid #DDDFE0;
            filter: drop-shadow(0px 4px 80px rgba(0, 0, 0, 0.07));
            border-radius: 8px;
            
            padding: 28px 0;
            min-width: 480px;
            max-height: 470px;
            &-lk-link-cabinet {
                width: 100%;
            }
            &-lk-link-cabinet:hover {
                .lk-chevron-right {
                    path {
                        stroke: #38AA34;
                    }
                }
            }
            .lk-chevron-right {
                transform: rotate(180deg);
                height: 36px;
                // width: 36px;
                path {
                    stroke-width: 1;
                    stroke: #3AAB47;
                }
            }
            &-lk {
                padding: 0 28px;
                &-name {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 25px;
                    letter-spacing: -0.165px;
                    color: #38AA34;
                    white-space: nowrap;
                    margin-bottom: 16px;

                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 16px;
                    background: #EFF6EF;
                    border-radius: 8px;
                    img {
                        margin-right: 12px;
                        height: 44px;
                        width: 44px;
                        min-width: 44px;
                    }
                    h3 {
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 32px;
                        margin-bottom: 0;
                    }
                }
                &-title {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 32px;
                    letter-spacing: -0.242736px;
                    //color: #797979;
                    color: #38AA34;
                }
                p {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 32px;
                    letter-spacing: -0.242736px;
                    color: #797979;
                    margin-bottom: 0;
                    padding-left: 20px;
                }

                hr {
                    border-top: 1px solid #DDDFE0;
                    margin: 20px -28px;
                }
                &-link-other {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 32px;
                    letter-spacing: -0.242736px;
                    color: #797979;
                    padding-left: 20px;
                    &:hover {
                        color: #38AA34;
                    }
                }
                &-reports {
                    padding-left: 20px;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 32px;
                    letter-spacing: -0.242736px;
                    color: #797979;
                    .dropdown-menu-lk-link-other {
                        padding-left: 0;
                    }
                }
            }
        }

    }
    .header {
        &-first {
            background-color: #F5F5F6;
            &-body {
                padding: 12px 0;
                height: 68px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
        &-button {
            align-items: center;
            display: flex;
            button {
                color: #050505;
                font-weight: 300;
                font-size: 16px;
                line-height: 20px;
            }
        }
        &-call {
            display: flex;
            align-items: center;
            &-phone {
                display: flex;
                align-items: center;
                margin-right: 28px;
                font-weight: 600;
                font-size: 16px;
                line-height: 20px;
                color: #3AAB47;
                &::before {
                    margin-top: -1.5px;
                    margin-right: 8px;
                    content: '';
                    height: 12px;
                    width: 12px;
                    display: block;
                    border-radius: 100%;
                    background-color: #38AA34;
                }
                &:hover {
                    color: #05821A;
                    &::before {
                        background-color: #05821A;
                    }
                }
            }
        }
        &-second {
            height: 88px;
            background-color: #fff;
            &-body {
                display: flex;
                align-items: center;
                height: 100%;
                .btn.btn-primary {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    padding: 11px 16px;
                }
            }
            @media (max-width: 1023px) {
               height: 72px; 
               &-body {
                justify-content: space-between;
               }
               .header-logo {
                height: 40px;
                margin-right: 0;
               }
            }
        }
        &-logo {
            margin-right: 72px;
            height: 50px;
            width: auto;

        }
        &-menu {
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
            list-style: none;
            li {
                position: relative;
                a, .header-menu-link {
                    color: var(--bs-body-color);
                    padding: 8px;
                    text-decoration: none;
                    &:hover {
                        cursor: pointer;
                        color: var(--bs-primary);
                        text-decoration: none;
                    }
                }
            }
            .header-menu-link {
                &:hover .header-menu_sub-wrap{
                    display: flex;
                }
            }
            &_sub {
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                // align-items: center;
                list-style: none;
                li {
                    position: relative;
                    a {
                        display: flex;
                        color: var(--bs-body-color);
                        padding: 1px 8px;
                        margin-bottom: 8px;
                        font-weight: 300;
                        font-size: 17px;
                        line-height: 25px;
                        letter-spacing: -0.015em;
                        &:hover {
                            cursor: pointer;
                            color: var(--bs-primary);
                            text-decoration: none;
                        }
                    }
                } 
                &-wrap {
                    top: 36px;
                    z-index: 10;
                    width: 298px;
                    left: calc(50% - 149px);
                    display: none;
                    background: #FFFFFF;
                    padding: 22px 24px 14px; 
                    box-shadow: 0 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14);
                    border-radius: 16px;
                    position: absolute;
                    &::before {
                        content: '';
                        background: #FFFFFF;
                        width: 20px;
                        height: 20px;
                        display: block;
                        transform: rotate(45deg);
                        position: absolute;
                        top: -3px;
                        left: calc(50% - 10px);
                        z-index: 9;
                    }
                }
            }
        }
    }

    .mobile-menu {
        position: fixed;
        z-index: 100;
        top: 72px;
        background: white;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        overflow-y: auto;
        &-auth-button {
            background: #fafafa;
            border-radius: 8px;
            width: calc(100% - 30px);
            margin-top: 20px;
            margin-bottom: 4px;
            margin-left: 15px;
            margin-right: 15px;
            color: var(--bs-primary);
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            padding: 24px;
        }
        .header-call {
            padding-top: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: 16px;
            padding-left: 16px;
        }
        &-items {
            flex-direction: column;
            margin-top: 24px;
            padding-right: 16px;
            padding-left: 16px;
            li {
                width: 100%;
                // a {
                //     width: 100%;
                //     padding: 20px;
                // }

                &:last-child {
                    .mobile-menu-item {
                        border-bottom: none;
                    }
                }
            }
            &_sub {
                display: flex;
                flex-direction: column;
                list-style: none;
                padding-left: 16px;
                margin-top: 16px;
            }
        }
        &-item {
            font-weight: 300;
            font-size: 17px;
            line-height: 25px;
            letter-spacing: -0.015em;
            color: var(--bs-body-color);
            padding: 0!important;
            padding-bottom: 16px!important;
            margin-bottom: 16px;
            display: flex;
            border-bottom: 1px solid #E4E4E4;
            &.--sub {
                flex-direction: column;
            }
            &.--open {
                img, svg {
                    transform: rotate(180deg);
                }
            }
            &_sub {
                display: block;
                padding: 0!important;
                margin-bottom: 16px;
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

    .hamburger {
        height: 21px;
        width: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        &:hover {
        cursor: pointer;
        }
        
        &__item {
        height: 3px;
        width: 100%;
        background: black;
        transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
        opacity 300ms linear;
        
        &--first {
            .hamburger--is-open & {
            transform: translate(0, 9px) rotate(45deg);
            }
        }
        
        &--middle {
            .hamburger--is-open & {
            opacity: 0;
            }
        }
        
        &--last {
            .hamburger--is-open & {
            transform: translate(0, -9px) rotate(-45deg);
            }
        }
        }
    }
}
</style>
