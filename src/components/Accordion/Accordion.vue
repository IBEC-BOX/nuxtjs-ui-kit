<template>
  <div :class="['accordion', flush ? 'accordion-flush' : '', bordered ? 'accordion-bordered' : '']" :id="id">
    <div class="accordion-item" v-for="(item, i) in items" :key="`accordion-${id}-item-${i}`">
      <h2 class="accordion-header">
        <button :class="`accordion-button ${i !== defaultExpanded ? 'collapsed' : ''}`" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${id}-${i}`" :aria-expanded="i === defaultExpanded" :aria-controls="`collapse${id}-${i}`">
          {{ item.header }}
        </button>
      </h2>
      <div :id="`collapse${id}-${i}`" :class="`accordion-collapse collapse ${i === defaultExpanded ? 'show' : ''}`" :data-bs-parent="!alwaysOpen ? `#${id}` : `#none${i}`">
        <div class="accordion-body" v-html="item.body" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiAccordion",
  props: {
    id: {
      type: String,
      default: 'UiAccordion'
    },
    bordered: {
      type: Boolean,
      default: false
    },
    flush: {
      type: Boolean,
      default: false
    },
    alwaysOpen: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      required: true,
      validator: function (value) {
        // Убедитесь, что каждый элемент массива имеет свойства header и body
        return value.every((item) => item.header && item.body);
      },
    },
    defaultExpanded: {
      type: Number,
      default: -1,
    },
  },
}
</script>

<style lang="scss" scoped>
.accordion {
    // eslint-disable-next-line
  --bs-accordion-btn-icon: url("data:image/svg+xml,<svg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.355 8L7 3.05121L1.645 8L-4.32604e-06 6.469L7 -9.77498e-07L14 6.469L12.355 8Z' fill='white'/></svg>");
  --bs-accordion-btn-icon-width: 2rem;
  --bs-accordion-btn-icon-bg: var(--bs-primary);


  --bs-accordion-active-bg: var(--bs-body-bg);
  --bs-accordion-active-color: var(--bs-body-color);
  --bs-accordion-box-shadow: 0px 2px 16px rgba(107, 107, 107, 0.08);
  --bs-accordion-border-radius: 1rem;
  --bs-accordion-border-color: #F3F3F5;
  --bs-accordion-inner-border-radius: var(--bs-border-color);
  --bs-accordion-btn-padding-x: 2rem;
  --bs-accordion-btn-padding-y: 2rem;
  --bs-accordion-gap: 24px;
  --bs-accordion-btn-focus-box-shadow: none;
  --bs-accordion-btn-focus-border-color: #A5A7AD;
  --bs-accordion-btn-color: var(--bs-black);
  --bs-accordion-body-padding-x: 2rem;
  --bs-accordion-body-padding-y: 2rem;
  display: flex;
  flex-direction: column;
  gap: var(--bs-accordion-gap);

  &-flush {
    --bs-accordion-inner-border-radius: 0;
    --bs-accordion-border-radius: 0;
    --bs-accordion-border-width: 0;
    --bs-accordion-box-shadow: 0;
    --bs-accordion-gap: 0;
    --bs-accordion-btn-padding-x: 0;
    --bs-accordion-btn-padding-y: 1.25rem;
    --bs-accordion-body-padding-x: 0;
    --bs-accordion-body-padding-y: 1.25rem;
  }

  &-bordered {
    --bs-accordion-inner-border-radius: 0;
    --bs-accordion-border-radius: 0;
    --bs-accordion-border-width: 0;
    --bs-accordion-box-shadow: 0;
    --bs-accordion-gap: 0;
    --bs-accordion-btn-padding-x: 0;
    --bs-accordion-btn-padding-y: 2rem;
    --bs-accordion-body-padding-x: 0;
    --bs-accordion-body-padding-y: 2rem;
    .accordion-item {
      border-bottom: 1px solid #E6E7EB;
    }
  }

  &-item {
    border-radius: var(--bs-accordion-border-radius)!important;
    border: none;
    box-shadow: var(--bs-accordion-box-shadow);
  }
  &-header {

  }
  &-body {
    padding-top: 0;
    //padding-right: 100px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #74767A;
    --bs-accordion-border-color: #A5A7AD;
    border-radius: var(--bs-accordion-border-radius)!important;
    border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color) !important;
    border-top: 0!important;
    border-top-left-radius: 0!important;
    border-top-right-radius: 0!important;
  }
  &-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color) !important;
    border-radius: var(--bs-accordion-border-radius)!important;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    &:not(.collapsed) {
      padding-bottom: 12px;
      border-bottom: 0!important;
      box-shadow: none;
      border-bottom-left-radius: 0!important;
      border-bottom-right-radius: 0!important;
      --bs-accordion-border-color: #A5A7AD;
    }
    &::after {
      margin: 0;
      border-radius: 100%;
      background-image: var(--bs-accordion-btn-icon);
      background-size: 14px 8px;
      background-position: center;
      background-color: var(--bs-accordion-btn-icon-bg);
    }
  }
}
</style>
