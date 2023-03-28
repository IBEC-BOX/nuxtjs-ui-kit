<template>
  <div :data-bs-ride="autoplay ? 'carousel' : null" :style="{'width' : +imgWidth ? `${imgWidth}px` : imgWidth, 'height' : +imgHeight ? `${imgHeight}px` : imgHeight}" :id="id || 'carouselExampleCaptions'" :class="['carousel-' + variant, 'carousel-' + size, 'carousel', 'slide']">
    <div v-if="indicators" :class="['carousel-indicators', 'carousel-indicators-' + pagination]">
      <div class="carousel-indicators-wrap">
        <button
            v-for="(s, i) in slides"
            :key="`${id}-slideButton-${i}`"
            type="button"
            :data-bs-target="`#${id || 'carouselExampleCaptions'}`"
            :data-bs-slide-to="i"
            :class="[
              i == currentIndex ? 'active' : '',
            ]"
            aria-current="true"
            :aria-label="`Slide ${i+1}`"
        ></button>
      </div>
    </div>
    <div :style="{backgroundColor: background}" class="carousel-inner">
      <div v-for="(s, i) in slides" :key="`${id}-slide-${i}`" :class="`carousel-item ${i == currentIndex ? 'active' : ''}`">
        <img :style="{ 'height' : +imgHeight ? `${imgHeight}px` : imgHeight }" :src="s.img || s" class="d-block w-100" alt="...">
        <div v-if="s.label || s.caption" class="carousel-caption d-none d-md-block">
          <h5 v-if="s.label"> {{ s.label }} </h5>
          <p v-if="s.caption"> {{ s.caption }} </p>
        </div>
      </div>
    </div>
    <button v-if="controls" title="Prev" class="carousel-control carousel-control-prev" type="button" :data-bs-target="`#${id || 'carouselExampleCaptions'}`"  data-bs-slide="prev">
      <span class="carousel-control-prev-icon carousel-control-icon" aria-hidden="true" v-html="chevron"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button v-if="controls" title="Next" class="carousel-control carousel-control-next" type="button" :data-bs-target="`#${id || 'carouselExampleCaptions'}`"  data-bs-slide="next">
      <span class="carousel-control-next-icon carousel-control-icon" aria-hidden="true" v-html="chevron"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import {Carousel} from 'bootstrap/dist/js/bootstrap.bundle.min.js'
export default {
  name: "UiCarousel",
  model: {
    prop: 'slide',
    event: 'change',
  },
  props: {
    id: {
      type: String,
      required: true
    },
    slides: {
      type: Array,
      default: () => []
    },
    slide: {
      type: Number,
      required: false,
      default: 0
    },
    interval: {
      type: Number,
      default: 5000
    },
    controls: {
      type: Boolean,
      default: true
    },
    indicators: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: String,
      default: 'dot' // dot || line
    },
    background: {
      type: String,
      default: 'transparent'
    },
    imgWidth: {
      type: String || Number,
      default: '100%'
    },
    imgHeight: {
      type: String || Number,
      default: '100%'
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'primary', // primary || secondary || success || danger || warning || info || light || dark
      // outline-primary || outline-secondary || outline-success || outline-danger || outline-warning || outline-info || outline-light || outline-dark.
    },
    size: {
      type: String,
      default: 'md', // lg || sm
    },
    chevron: {
      type: String,
      default: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`
    }

  },
  data() {
    return {
      carousel: null,
      currentIndex: 0
    }
  },
  methods: {
    onSlide(slide) {
      this.$emit('change', +slide.to + 1)
    }
  },
  async mounted() {
    this.currentIndex = +this.slide - 1;
    const carousel = document.getElementById(`${this.id || 'carouselExampleCaptions'}`)
    this.carousel = new Carousel(carousel)
    carousel.addEventListener('slide.bs.carousel', this.onSlide);
  },
  // beforeDestroy() {
  //   const carousel = document.getElementById(`${this.id || 'carouselExampleCaptions'}`)
  //   carousel.removeEventListener('slide.bs.carousel', this.onSlide);
  // }
}
</script>

<style lang="scss">
.carousel {
  --bs-carousel-border-radius: 8px;
  --bs-carousel-color: var(--bs-body-color);
  --bs-carousel-background-color: var(--bs-primary);
  --bs-carousel-arrow-width: 20px;
  --bs-carousel-arrow-height: 20px;
  --bs-carousel-control-padding-x: 16px;
  --bs-carousel-control-padding-y: 0;
  --bs-carousel-icon-padding: 8px;
  --bs-carousel-indicators-wrap-padding: 8px;
  --bs-carousel-indicators-wrap-margin: 16px;
  --bs-carousel-indicators-wrap-radius: 12px;
  --bs-carousel-indicators-wrap-gap: 12px;
  --bs-carousel-indicator-width: 8px;
  --bs-carousel-indicator-height: 8px;
  --bs-carousel-indicator-radius: 4px;

  &-primary {
    --bs-carousel-background-color: var(--bs-primary);
    --bs-carousel-color: #FFF
  }
  &-outline-primary {
    --bs-carousel-background-color: rgba(var(--bs-primary-rgb), 0.1);
    --bs-carousel-color: var(--bs-primary);
  }
  &-light {
    --bs-carousel-background-color: rgba(var(--bs-white-rgb), 0.9);
    --bs-carousel-color: var(--bs-dark);
  }
  &-dark {
    --bs-carousel-background-color: rgba(var(--bs-black-rgb), 0.9);
    --bs-carousel-color: var(--bs-white);
    .carousel-control-prev-icon, .carousel-control-next-icon {
      filter: none;
    }
    .carousel-indicators [data-bs-target] {
      background-color: var(--bs-carousel-color);
    }
  }
  &-secondary {
    --bs-carousel-background-color: var(--bs-secondary);
  }
  &-lg {
    --bs-carousel-arrow-width: 24px;
    --bs-carousel-arrow-height: 24px;
    --bs-carousel-control-padding-x: 20px;
    --bs-carousel-control-padding-y: 0;
    --bs-carousel-icon-padding: 10px;
    --bs-carousel-indicators-wrap-padding: 12px;
    --bs-carousel-indicators-wrap-margin: 16px;
    --bs-carousel-indicators-wrap-radius: 17px;
    --bs-carousel-indicators-wrap-gap: 16px;
    --bs-carousel-indicator-width: 10px;
    --bs-carousel-indicator-height: 10px;
    --bs-carousel-indicator-radius: 6px;
  }
  &.carousel-lg .carousel-indicators-line {
    [data-bs-target] {
      --bs-carousel-indicator-width: 42.67px;
      --bs-carousel-indicator-height: 8px;
      --bs-carousel-indicator-radius: 4px;
    }
    --bs-carousel-indicators-wrap-gap: 12px;
  }

  &-indicators {
    margin-bottom: var(--bs-carousel-indicators-wrap-margin);
    &-wrap {
      background: var(--bs-carousel-background-color);
      border-radius: var(--bs-carousel-indicators-wrap-radius);
      padding: var(--bs-carousel-indicators-wrap-padding);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--bs-carousel-indicators-wrap-gap);
    }
    [data-bs-target] {
      border: none;
      margin: 0;
      background-color: var(--bs-carousel-color);
      width: var(--bs-carousel-indicator-width);
      height: var(--bs-carousel-indicator-height);
      border-radius: var(--bs-carousel-indicator-radius);

    }
    &-dot {
      [data-bs-target] {
        //default
      }
    }
    &-line {
      --bs-carousel-indicators-wrap-gap: 8px;
      [data-bs-target] {
        --bs-carousel-indicator-width: 42.67px;
        --bs-carousel-indicator-height: 6px;
        --bs-carousel-indicator-radius: 3px;
      }
    }
    .active {

    }
  }
  &-inner {
    border-radius: var(--bs-carousel-border-radius);
  }
  &-item {
    img {
      object-fit: cover;
    }
    &.active {

    }
  }
  &-control {
    width: 10%;
    opacity: 1;
    justify-content: flex-start;
    padding: var(--bs-carousel-control-padding-y) var(--bs-carousel-control-padding-x);
    svg {
      height: var(--bs-carousel-arrow-height);
      width: var(--bs-carousel-arrow-width);
      path {
        stroke: var(--bs-carousel-color);
      }
    }
    &-icon {
      display: flex;
      width: auto;
      height: auto;
      padding: var(--bs-carousel-icon-padding);
      background: var(--bs-carousel-background-color);
      border-radius: 100%;
    }
    &-prev {
      &-icon {
        svg {
          transform: rotate(180deg);
        }
      }
    }

    &-next {
      justify-content: flex-end;
      &-icon {

      }
    }
  }
}
</style>
