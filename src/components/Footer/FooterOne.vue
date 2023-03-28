<template>
  <footer class="footer footerOne">
    <div class="container">
      <div class="footer-body" :style="showBorder ? '' : 'border: none'">
        <slot name="footer-one"></slot>
        <div v-if="footerContent || (menu && menu.length) || (apps && apps.length)" class="footer-main-block row">
          <div v-if="footerContent" class="col-lg-4">
            <div v-if="logo && logoInBody" class="footer-body-logo">
              <img :src="logo" alt="Logo">
            </div>
            <div class="footer-content pe-lg-3" v-html="footerContent"></div>
          </div>
          <div :class="footerContent ? 'col-lg-7 offset-lg-1' : 'col-lg-12'">
            <div class="footer-menu row">
              <div class="footer-menu-col" :class="footerContent ? 'col-lg col-6 small-menu' : 'col-lg-2 col-6'"  v-for="(m, i) in menu" :key="`menublock-${i}`">
                <div class="footer-menu-title">{{ m.name }}</div>
                <ul>
                  <li v-for="(item, j) in m.items" :key="`menublock-${i}-item-${j}`">
                    <nuxt-link :to="localePath(item.url)">{{ item.name }}</nuxt-link>
                  </li>
                </ul>
              </div>
              <div v-if="apps && apps.length" class="col-lg-2 col-6" :class="appsOnlyMobile ? 'd-lg-none d-block' : ''">
                <div class="footer-apps">
                  <div class="footer-apps-text">
                    <slot name="footer-apps-text"></slot>
                  </div>
                  <div class="footer-apps-buttons">
                    <a v-for="(app, i) in apps" :key="`app-${i}`" :href="app.link" class="footer-apps-button btn">
                      <img :src="app.img" :alt="app.title">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-footer">
        <div v-if="logo && !logoInBody" class="footer-footer-logo">
          <img :src="logo" alt="Logo">
        </div>
        <div class="footer-copyright" v-if="copyright" v-html="copyright" />
        <div class="footer-socials" v-if="socials && socials.length">
          <a class="footer-social" v-for="(soc, i) in socials" :key="`footer-social-${i}`" :href="soc.link">
            <img :src="soc.img" :alt="soc.title">
          </a>
        </div>
        <div class="footer-links" v-if="links && links.length">
          <ul>
            <li v-for="(link, i) in links" :key="`link-${i}`">
              <nuxt-link :to="localePath(link.url)">{{ $t(link.title) }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "UiFooter",
  props: {
    links: {
      type: Array,
      default: () => []
    },
    copyright: {
      type: String,
      default: ''
    },
    menu: {
      type: Array,
      default: () => []
    },
    apps: {
      type: Array,
      default: () => []
    },
    socials: {
      type: Array,
      default: () => []
    },
    logo: {
      type: String
    },
    logoInBody: {
      type: Boolean,
      default: false
    },
    showBorder: {
      type: Boolean,
      default: true
    },
    appsOnlyMobile: {
      type: Boolean,
      default: false
    },
    footerContent: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.footer {
  --bs-footer-footer-line-height: 1.33333;
  --bs-footer-footer-font-size: 0.9375rem;
  --bs-footer-footer-font-weight: 400;
  --bs-footer-footer-color: var(--bs-gray-500);
  --bs-footer-social-bg: #4D4E52;

  background: var(--bs-white);

  &-body {
    border-bottom: 1px solid var(--bs-gray-200);
    padding: 60px 0;
    gap: 60px;
    display: flex;
    flex-direction: column;
    &-logo {
      height: 24px;
      margin-bottom: 28px;
      img {
        height: 100%;
      }
      @media(max-width: 1023px) {
        margin-bottom: 12px;
      }
    }
    @media(max-width: 1023px) {
      padding: 40px 0;
      gap: 40px;
    }
  }
  &-main-block {
    gap: 40px 0;
  }

  &-content {
    font-size: 0.9375rem;
    line-height: 1.33333;
    color: var(--bs-footer-footer-color);
  }

  &-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 28px 0 60px 0;
    gap: 16px;
    &-logo {
      height: 32px;
      img {
        height: 100%;
      }
    }
    @media(max-width: 1023px) {
      padding: 28px 0 40px 0;
    }
  }

  &-copyright {
    font-weight: var(--bs-footer-footer-font-weight);
    font-size: var(--bs-footer-footer-font-size);
    line-height: var(--bs-footer-footer-line-height);
    color: var(--bs-footer-footer-color);
  }
  &-links {
    ul {
      display: flex;
      align-items: center;
      gap: 20px;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        a {
          font-weight: var(--bs-footer-footer-font-weight);
          font-size: var(--bs-footer-footer-font-size);
          line-height: var(--bs-footer-footer-line-height);
          color: var(--bs-footer-footer-color);
          text-decoration: none;
        }
      }
    }
  }

  &-menu {
    display: flex;
    gap: 30px 0;
    &-title {
      font-size: 1rem;
      line-height: 1.25;
      color: var(--bs-gray-500);
      margin-bottom: 20px;
    }
    &-col {
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
        li {
          text-align: left;
          a {
            text-decoration: none;
            color: var(--bs-gray-800);
            font-size: 1.125rem;
            line-height: 1.33333;
          }
        }
      }
      &.small-menu {
        .footer-menu-title {
          margin-bottom: 16px;
          line-height: 1.38;
          font-size: 0.8125rem;
        }
        ul {
          li {
            a {
              font-size: 0.9375rem;
            }
          }
        }
      }
    }
  }

  &-apps {
    &-text {
      margin-bottom: 20px;
    }
    &-buttons {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &-button {
      padding: 0;
      height: 40px;
      width: 138.46px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  &-socials {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &-social {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: var(--bs-footer-social-bg);
  }
}
</style>
