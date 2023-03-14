<template>
  <div>
    <div class="mb-3">
        <label for="name" class="form-label">{{ label }}</label>
        <div :class="{'is-invalid': errors && errors.items.find((x) => x.field === name)}">
            <div :class="{
            'form-check-inline': inline
            }" class="form-check" v-for="(option, index) in options" :key="index">
            <input
                class="form-check-input"
                type="checkbox"
                :id="`${name}_${index}`"
                :name="name"
                :value="option.value"
                :checked="value.includes(option.value)"
                @change="$emit('change', updateValue($event.target.value))"
                :class="{'is-invalid': errors && errors.items.find((x) => x.field === name)}"
            />
            <label class="form-check-label" :for="`${name}_${index}`">{{ option.text }}</label>
            </div>
        </div>
        <div class="form-text">{{ description }}</div>
        <div class="invalid-feedback">
            {{ errors.items.find((x) => x.field === name)?.msg }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiCheckbox',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: [
    // 'checked',
    'value',
    'name',
    'label',
    'description',
    'type',
    'placeholder',
    'required',
    'options',
    'inline',
  ],
  methods: {
    updateValue (selectedValue) {
      // Проверяем, выбрано ли значение
      const isChecked = this.value.includes(selectedValue);
      // Обновляем массив выбранных значений
      if (isChecked) {
        return this.value.filter((value) => value !== selectedValue);
      } else {
        return [...this.value, selectedValue];
      }
    }
  }
}
</script>
