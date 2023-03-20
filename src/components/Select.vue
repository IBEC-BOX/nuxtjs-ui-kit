<template>
  <div>
    <div class="mb-3">
      <label :for="name" class="form-label">{{ label }}</label>
      <v-select
        :id="name"
        :name="name"
        :value="value"
        :data-testid="name"
        :class="{
          'form-control': true,
          'is-invalid': errors && errors.items.find((x) => x.field === name),
          // 'is-valid': $parent.validateState(name) === true,
        }"
        :label="labelOption || 'label'"
        :reduce="(option) => option[valueOption || 'value']"
        :options="options"
        :clearable="false"
        :placeholder="placeholder"
        @input="$emit('change', $event)"
        :aria-describedby="`${name}-live-feedback`"
        :data-vv-as="name"
      />
      <div class="invalid-feedback">
        {{ errors && errors.items && errors.items.find((x) => x.field === name) ? errors.items.find((x) => x.field === name).msg : '' }}
      </div>
      <div class="form-text">{{ description }}</div>
    </div>
  </div>

</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// Vue.component("v-select", vSelect);

export default {
  components: { vSelect },
  name: "UiSelect",
  model: {
    prop: 'value',
    event: 'change',
  },
  props: [
    'labelOption',
    'valueOption',
    'value',
    'name',
    'label',
    'description',
    'placeholder',
    'options',
    'required',
  ],
}
</script>

<style>
.v-select {
  padding: 0;
}
.vs--searchable .vs__dropdown-toggle {
  border: none;
  height: 100%;
  padding: 0;
}

.vs__dropdown-option {
  pointer-events: auto;
}
.vs__selected {
  margin: 0;
  /*padding: 0;*/
}

</style>
