<template>
  <div
      :class="['card', positionClass, bordered ? 'card-bordered' : '', horizontal ? 'card-horizontal' : '']"
      :style="{'max-width' : +maxWidth ? `${maxWidth}px` : maxWidth}"
  >
    <template v-if="!horizontal">
      <div class="card-img">
        <img :src="imgSrc" :class="[`card-img-${imgPosition}`]" :alt="imgAlt">
      </div>
      <div class="card-body">
        <div>
          <h5 v-if="title" class="card-title h2">{{ title }}</h5>
          <div v-if="text" class="card-text" v-html="text" />
          <div class="card-info" v-if="date || author">
            <small v-if="date" class="card-date">{{ date }}</small>
            <small v-if="author" class="card-author">{{ author }}</small>
          </div>
        </div>
        <slot></slot>
      </div>
    </template>
    <template v-else>
      <div class="row g-0" :class="positionClass">
        <div :class="`col-md-${horizontalImageColSize}`">
          <div class="card-img card-img-horizontal">
            <img :src="imgSrc" :class="['img-fluid', `rounded-${imgPosition}`]" :alt="imgAlt">
          </div>
        </div>
        <div :class="`col-md-${12 - horizontalImageColSize}`">
          <div class="card-body">
            <div>
              <h5 v-if="title" class="card-title h2">{{ title }}</h5>
              <div v-if="text" class="card-text" v-html="text" />
              <div class="card-info" v-if="date || author">
                <small v-if="date" class="card-date">{{ date }}</small>
                <small v-if="author" class="card-author">{{ author }}</small>
              </div>
            </div>
            <slot></slot>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "UiCard",
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    date: {
      type: String,
    },
    author: {
      type: String,
    },
    imgSrc: {
      type: String
    },
    imgAlt: {
      type: String
    },
    imgPosition: {
      type: String,
      default: 'top'
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    horizontalImageColSize: {
      type: Number,
      default: 5
    },
    maxWidth: {
      type: String || Number,
      default: '100%'
    },
    bordered: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    positionClass() {
      let className = '';
      switch (this.imgPosition) {
        case 'top':
          className = !this.horizontal ? 'flex-column' : 'flex-row'
          break;
        case 'bottom':
          className = !this.horizontal ? 'flex-column-reverse' : 'flex-row-reverse'
          break;
        case 'start':
          className = this.horizontal ? 'flex-row' : 'flex-column'
          break;
        case 'end':
          className = this.horizontal ? 'flex-row-reverse' : 'flex-column-reverse'
          break;
        default:
          className = !this.horizontal ? 'flex-column' : 'flex-row'
          break;
      }
      return className
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  --bs-card-border-radius: 12px;
  --bs-card-inner-border-radius: 8px;
  --bs-card-box-shadow: -2px 4px 12px rgba(24, 24, 24, 0.08);
  --bs-card-border-width: 0;

  box-shadow: var(--bs-card-box-shadow);

  &-horizontal {
    min-height: 220px;
  }

  &-img {
    padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
    padding-bottom: 0;
    img {
      border-radius: var(--bs-card-inner-border-radius) !important;
      width: 100%;
      object-fit: cover;
    }
    &-horizontal {
      --bs-card-inner-border-radius: 4px;
      height: 100%;
      padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
      padding-right: 0;
      img {
        height: 100%;
      }
    }
  }
  &-title {

  }
  &-body {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  &-bordered {
    --bs-card-border-width: var(--bs-border-width);
    --bs-card-border-color: var(--bs-border-color-translucent);
  }
  &-info {
    color: var(--bs-gray-500);
    display: flex;
    align-items: center;
    font-size: 1.0715rem;
    line-height: 1.33333;
    margin-bottom: 1rem;
    gap: 8px;
    & > * {
      display: inline-flex;
      align-items: center;
      &::after {
        content: '';
        border-radius: 100%;
        height: 0.5rem;
        width: 0.5rem;
        display: inline-flex;
        margin-left: 8px;
        background: var(--bs-gray-500);
      }
      &:last-child {
        &::after {
          content: none;
        }
      }
    }
  }
  &-date {

  }
  &-author {

  }
}
</style>
