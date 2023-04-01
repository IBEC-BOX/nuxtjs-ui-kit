<template>
  <button
    :title="!title ? 'icon' : ''"
    v-if="!link"
    :class="[
      'btn',
      'btn-' + variant,
      size ? 'btn-' + size : '',
      pill ? 'rounded-pill' : '',
      disabled ? 'disabled' : '',
      ownClass ? ownClass : '',
      !title ? 'btn-icon' : ''
    ]"
    :disabled="disabled"
  >
    <template v-if="!loading">
      <slot name="leftIcon" />
      <slot />
      <slot name="rightIcon" />
    </template>
    <span v-else :class="`spinner-border`" role="status" aria-hidden="true"></span>

  </button>
  <NuxtLink
    :title="!title ? 'icon' : ''"
    v-else
    :class="[
      'btn',
      'btn-' + variant,
      size ? 'btn-' + size : '',
      pill ? 'rounded-pill' : '',
      disabled ? 'disabled' : '',
      ownClass ? ownClass : '',
      !title ? 'btn-icon' : ''
    ]"
    :to="localePath ? localePath(link) : link"
    :disabled="disabled"
  >
    <template v-if="!loading">
      <slot name="leftIcon" />
      <slot />
      <slot name="rightIcon" />
    </template>
    <span v-else :class="`spinner-border`" role="status" aria-hidden="true"></span>
<!--    <span v-else class="loader"></span>-->
  </NuxtLink>
</template>

<script>
export default {
  name: "UiButton",
  props: {
    title: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: 'primary', // primary || secondary || success || danger || warning || info || light || dark
      // outline-primary || outline-secondary || outline-success || outline-danger || outline-warning || outline-info || outline-light || outline-dark.
    },
    size: {
      type: String,
      default: null, // sm || lg
    },
    link: {
      type: String,
      default: ''
    },
    pill: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    ownClass: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss">

.btn {
  --bs-btn-padding-x: 24px;
  --bs-btn-padding-y: 14px;
  --bs-btn-font-size: 1rem;
  --bs-btn-font-weight: 400;
  --bs-btn-line-height: 1.25;
  --bs-btn-border-radius: 8px;
  --bs-btn-box-shadow: none;
  --bs-btn-disabled-opacity: 0.65;
  --bs-btn-focus-box-shadow: none;
  --bs-border-radius-pill: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;

  //size
  &-lg {
    --bs-btn-padding-y: 16px;
    --bs-btn-padding-x: 28px;
    --bs-btn-font-size: 1.125rem;
    --bs-btn-line-height: 1.33333;
    --bs-btn-border-radius: 8px;
  }
  &-sm {
    --bs-btn-padding-y: 8px;
    --bs-btn-padding-x: 16px;
    --bs-btn-font-size: 0.875rem;
    --bs-btn-line-height: 1.43;
    --bs-btn-border-radius: 8px;
  }

  //disabled
  &.disabled {
    &:hover {
      cursor: not-allowed;
    }
    cursor: not-allowed;
  }

  //icon
  img {
    height: var(--bs-btn-font-size);
  }
  &-icon {
    --bs-btn-icon-size: 24px;
    --bs-btn-padding-y: 12px;
    --bs-btn-padding-x: 12px;
    &.btn {
      &-lg {
        --bs-btn-padding-y: 14px;
        --bs-btn-padding-x: 14px;
        --bs-btn-icon-size: 28px;
      }
      &-sm {
        --bs-btn-padding-y: 8px;
        --bs-btn-padding-x: 8px;
        --bs-btn-icon-size: 20px;
      }
    }
    img {
      height: var(--bs-btn-icon-size);
    }
  }

  //btn-link
  &-link {
    &:hover {
      text-decoration: underline!important;
      text-underline-position: under;
    }
  }

  //loader
  .spinner-border {
    --bs-spinner-width: 20px;
    --bs-spinner-height: 20px;
    --bs-spinner-border-width: 3px;
  }
}
</style>

