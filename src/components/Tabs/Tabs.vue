<template>
  <div class="ui-tabs">
    <ul v-if="tabList && tabList.length" :class="['nav', `nav-${type}`, `nav-${size}`]" :id="id" role="tablist">
      <li v-for="tab in tabList" :key="`tab-id-${tab.id}`" class="nav-item" role="presentation">
        <button
            v-if="!tab.link"
            :class="`nav-link ${tab.active ? 'active' : ''}`"
            :id="`${tab.id}-item`"
            data-bs-toggle="tab"
            :data-bs-target="`#${tab.id}`"
            type="button"
            role="tab"
            :aria-controls="`${tab.id}`"
            :aria-selected="tab.active"
            v-html="tab.title"
            :disabled="tab.disabled"
        >
        </button>
        <nuxt-link
            v-else
            :class="`nav-link ${tab.active ? 'active' : ''}`"
            :id="`${tab.id}-item`"
            :to="tab.link"
            v-html="tab.title"
            :disabled="tab.disabled"
        >
        </nuxt-link>
      </li>
    </ul>
    <div class="tab-content" :id="`${id}Content`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiTabs",
  props: {
    id: {
      type: String,
      default: 'tabs-id'
    },
    type: {
      type: String,
      default: 'tabs' // pills // underline
    },
    size: {
      type: String,
      default: 'md' // lg // sm
    }
  },
  computed: {
    tabList() {
      return this.$slots.default.filter(el => el.tag && el.tag.includes('UiTab')).map(el => {
        const { propsData } = el.componentOptions
        return {
          id: propsData.id,
          title: propsData.title,
          active: propsData.active || propsData.active == '',
          disabled: propsData.active || propsData.disabled == '',
          link: propsData.link,
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-tabs {
  .tab-content {
    margin-top: 8px;
  }
  .nav {
    --bs-nav-link-padding-x: 1rem;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-link-font-weight: 400;
    --bs-nav-link-font-size: 1rem;
    --bs-nav-link-line-height: 1.25;
    --bs-nav-link-color: var(--bs-body-color);
    --bs-nav-link-hover-color: var(--bs-link-hover-color);
    --bs-nav-link-disabled-color: #E6E7EB;
    font-size: var(--bs-nav-link-font-size);
    line-height: var(--bs-nav-link-line-height);
  }


  .nav-pills {
    --bs-nav-link-padding-x: 1rem;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-pills-gap: 8px;
    --bs-nav-pills-border-radius: .25rem;
    --bs-nav-pills-link-active-color: #fff;
    --bs-nav-pills-link-active-bg: var(--bs-primary);
    --bs-nav-pills-link-hover-bg: var(--bs-link-hover-color);
    gap: var(--bs-nav-pills-gap);
    .nav-link {
      &:not(:disabled):hover {
        background-color: var(--bs-nav-pills-link-hover-bg);
        color: var(--bs-nav-pills-link-active-color);
      }
    }
    &.nav-lg {
      --bs-nav-link-font-size: 1.125rem;
      --bs-nav-link-line-height: 1.333333;
      //--bs-nav-pills-gap: 8px;
    }
    &.nav-sm {
      --bs-nav-link-padding-y: 0.375rem;
      --bs-nav-link-font-size: 0.875rem;
      --bs-nav-link-line-height: 1.43;
      //--bs-nav-pills-gap: 18px;
    }
  }



  .nav-underline {
    --bs-nav-underline-border-width: 0.125rem;
    --bs-nav-underline-link-active-color: var(--bs-primary);
    --bs-nav-link-hover-color: var(--bs-link-hover-color);
    .nav-link.active, .show>.nav-link {
      --bs-nav-link-font-weight: 400;
      color: var(--bs-nav-underline-link-active-color);
      border-bottom-color: currentcolor;
    }
    .nav-link {
      background: none;
      border: 0;
      padding-top: 0;
      border-bottom: var(--bs-nav-underline-border-width) solid transparent;
      border-bottom-color: #F4F3FE;
      &:not(:disabled):hover {
        color: var(--bs-nav-link-hover-color);
        border-bottom-color: currentcolor;
      }
      &:disabled {
        color: var(--bs-nav-link-disabled-color);
        border-bottom-color: currentcolor;
      }
    }
    &.nav-lg {
      --bs-nav-link-font-size: 1.125rem;
      --bs-nav-link-line-height: 1.333333;
    }
    &.nav-sm {
      --bs-nav-link-font-size: 0.875rem;
      --bs-nav-link-line-height: 1.43;
    }
  }

  .nav-tabs {
    --bs-nav-tabs-border-width: 1px;
    --bs-nav-tabs-border-color: #E6E7EB;
    --bs-nav-tabs-border-radius: 4px;
    --bs-nav-tabs-link-hover-border-color: transparent;
    --bs-nav-tabs-link-active-color: var(--bs-body-color);
    --bs-nav-tabs-link-active-bg: transparent;
    --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);
    border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);

    .nav-link {
      &:not(:disabled):hover {
        background-color: var(--bs-nav-link-hover-color);
        color: #fff;
      }
      &:disabled {
        //border-color: var(--bs-nav-tabs-link-active-border-color);
      }
    }

    &.nav-lg {
      --bs-nav-link-font-size: 1.125rem;
      --bs-nav-link-line-height: 1.333333;
    }
    &.nav-sm {
      --bs-nav-link-padding-y: 0.375rem;
      --bs-nav-link-font-size: 0.875rem;
      --bs-nav-link-line-height: 1.43;
    }
  }
}
</style>
