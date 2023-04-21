<template>
  <div
      :class="[
        `spinner-${type}`,
        `text-${variant}`,
        `spinner-${type}-${small ? 'sm' : 'md'}`
      ]"
      :role="role">
    <span class="visually-hidden">{{ label || 'Loading...' }}</span>
  </div>
</template>

<script>
export default {
  name: "UiSpinner",
  props: {
    label: String,
    role: {
      type: String,
      default: 'status'
    },
    small: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'border'
    },
    variant: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
