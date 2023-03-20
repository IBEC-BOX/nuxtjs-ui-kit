<template>
  <div>
    <div class="mb-3">
      <label :for="name" class="form-label">{{ label }}</label>
      <textarea
          class="form-control"
          :data-testid="name"
          :id="name"
          :name="name"
          :value="value"
          :placeholder="placeholder"
          :rows="rows || '3'"
          :max-rows="maxRows || '6'"
          @input="$emit('input', $event.target.value)"
          :class="{'is-invalid': errors.items.find((x) => x.field === name)}"
          :aria-describedby="`${name}-live-feedback`"
          :data-vv-as="name"
      ></textarea>
      <div :id="`${name}-live-feedback`" class="invalid-feedback">
        {{ errors && errors.items && errors.items.find((x) => x.field === name) ? errors.items.find((x) => x.field === name).msg : '' }}
      </div>
      <div class="form-text">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiTextArea",
  model: {
    prop: 'value',
    event: 'input',
  },
  props: [
    'value',
    'name',
    'label',
    'description',
    'placeholder',
    'rows',
    'maxRows',
  ],
}
</script>

<style scoped>

</style>
