<template>
  <div class="ui-tooltip d-none">
    <slot></slot>
  </div>
</template>

<script>
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default {
  name: "UiTooltip",
  data() {
    return {
      tooltipElement: null
    }
  },
  props: {
    placement: {
      type: String,
      default: 'auto'
    },
    trigger: {
      type: String,
      default: 'hover focus'
    },
    target: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'light'
    },
    size: {
      type: String,
      default: 'lg'
    }
  },
  computed: {
    slot() {
      const slotContent = this.$slots.default && this.$slots.default[0];
      return slotContent.text || null;
    }
  },

  mounted() {
    // инициализация всплывающей подсказки
    // const target = document.getElementById(this.target);
    // if (target) {
    //   this.$refs.myButton = target;
    //   this.$refs.myButton.setAttribute('v-tooltip', JSON.stringify({
    //     ...this.$props,
    //     html: true,
    //     message: this.slot || ''
    //   }));
    // }

    const options = {
      title: this.slot || '',
      placement: this.placement,
      trigger: this.trigger,
      customClass: `tooltip-${this.variant} tooltip-${this.size}`,
      html: true
    };
    this.tooltipElement = new Tooltip(document.getElementById(this.target), options);
    document.getElementById(this.target)._tooltip = this.tooltipElement
  },
  beforeDestroy() {
    this.tooltipElement.hide()
  },
  destroyed() {
    this.tooltipElement = null
  }
}
</script>

<style lang="scss">
.tooltip {
  filter: drop-shadow(0px 0px 1px rgba(23, 15, 73, 0.03)) drop-shadow(0px 1px 1px rgba(23, 15, 73, 0.04)) drop-shadow(0px 5px 14px rgba(8, 15, 52, 0.04));
  --bs-tooltip-zindex: 1080;
  --bs-tooltip-max-width: 165px;
  --bs-tooltip-padding-x: 1rem;
  --bs-tooltip-padding-y: .75rem;
  //--bs-tooltip-margin: ;
  --bs-tooltip-font-size: 0.625rem;
  --bs-tooltip-line-height: 1.4;
  --bs-tooltip-font-weight: 400;
  --bs-tooltip-color: var(--bs-white);
  --bs-tooltip-bg: #74767A;
  --bs-tooltip-border-radius: 12px;
  --bs-tooltip-opacity: 0.9;
  --bs-tooltip-arrow-width: 1.25rem;
  --bs-tooltip-arrow-height: .5rem;
  --bs-tooltip-arrow-icon: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='9' height='21'><path fill-rule='evenodd' clip-rule='evenodd' d='M0.000138044 0.183105H0.00815841C0.00344333 0.27095 0.000755631 0.359293 0.000138044 0.448094V0.183105ZM0.000138044 3.18322V0.527509C0.0111565 2.11182 0.681108 3.55038 1.76742 4.61716V4.62423L1.81256 4.66104C2.06078 4.89993 2.33013 5.11966 2.61779 5.31761L4.29245 6.68311L7.63441 9.40809C8.12516 9.80824 8.12516 10.558 7.63441 10.9581L2.66864 15.0071C2.34476 15.2255 2.04354 15.4713 1.76891 15.7408L1.76742 15.742V15.7422C0.681108 16.809 0.0111565 18.2476 0.000138044 19.8319V17.183L0 17.1831V3.18311L0.000138044 3.18322ZM0.000138044 19.9113V20.1831H0.00852901C0.00358399 20.093 0.000771633 20.0024 0.000138044 19.9113Z' fill='%2374777A'/></svg>");
  &-arrow {
    &::before {
      height: 100%;
      width: 100%;
      border: none!important;
      background-image: var(--bs-tooltip-arrow-icon);
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  &.bs-tooltip-bottom .tooltip-arrow::before, &.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
    transform: rotate(-90deg) translate(-5px, 6px);
    width: 8px;
    height: 20px;
  }
  &.bs-tooltip-top .tooltip-arrow::before, &.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
    transform: rotate(90deg) translate(-5px, -6px);
    width: 8px;
    height: 20px;
  }
  &.bs-tooltip-end .tooltip-arrow::before, &.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
    transform: rotate(180deg) translate(0px, 0px);
  }
  &.bs-tooltip-start .tooltip-arrow::before, &.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
    transform: translate(1px, 0px);
  }

  &-inner {
    font-weight: var(--bs-tooltip-font-weight);
    line-height: var(--bs-tooltip-line-height);
  }


  &-light {
    --bs-tooltip-color: #525357;
    --bs-tooltip-bg: var(--bs-white);
    --bs-tooltip-arrow-icon: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='9' height='21'><path fill-rule='evenodd' clip-rule='evenodd' d='M0.000138044 0.183105H0.00815841C0.00344333 0.27095 0.000755631 0.359293 0.000138044 0.448094V0.183105ZM0.000138044 3.18322V0.527509C0.0111565 2.11182 0.681108 3.55038 1.76742 4.61716V4.62423L1.81256 4.66104C2.06078 4.89993 2.33013 5.11966 2.61779 5.31761L4.29245 6.68311L7.63441 9.40809C8.12516 9.80824 8.12516 10.558 7.63441 10.9581L2.66864 15.0071C2.34476 15.2255 2.04354 15.4713 1.76891 15.7408L1.76742 15.742V15.7422C0.681108 16.809 0.0111565 18.2476 0.000138044 19.8319V17.183L0 17.1831V3.18311L0.000138044 3.18322ZM0.000138044 19.9113V20.1831H0.00852901C0.00358399 20.093 0.000771633 20.0024 0.000138044 19.9113Z' fill='%23FFFFFF'/></svg>");
  }

  &-md {
    --bs-tooltip-font-size: 0.750rem;
    --bs-tooltip-line-height: 1.33333;
  }

  &-lg {
    --bs-tooltip-max-width: 432px;
    --bs-tooltip-padding-x: 2rem;
    --bs-tooltip-padding-y: 1.5rem;
    --bs-tooltip-font-size: 0.750rem;
    --bs-tooltip-line-height: 1.5;
    --bs-tooltip-font-weight: 400;
    .tooltip-inner {
      min-width: 200px;
      text-align: left;
    }
  }
}
</style>
