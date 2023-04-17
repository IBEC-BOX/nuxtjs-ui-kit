<template>
  <div :class="`tab-pane fade ${active ? 'show active' : ''}`" :id="id" role="tabpanel" tabindex="0">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UiTab",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: null
    },

  },
}
</script>

<style scoped>

</style>
