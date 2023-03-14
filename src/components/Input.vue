<template>
  <div>
    <div class="mb-3">
      <label :for="name" class="form-label">{{ label }}</label>
      <input
        :id="name"
        :name="name"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        class="form-control"
        @input="$emit('input', $event.target.value)"
        :required="required"
        :aria-describedby="`${name}-live-feedback`"
        :data-vv-as="name"
        :class="{'is-invalid': errors && errors.items.find((x) => x.field === name)}"
      >
      <div v-if="errors" class="invalid-feedback">
        {{ errors.items.find((x) => x.field === name)?.msg }}
      </div>
      <div class="form-text">{{ description }}</div>
    </div>
  </div>
</template>

<script>

export default {
  mounted () {
  },
  name: 'UiInput',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: [
    'value',
    'name',
    'label',
    'description',
    'type',
    'placeholder',
    'required',
  ],
}
</script>
