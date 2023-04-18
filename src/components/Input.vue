<template>
  <div>
    <div class="mb-3">
      <div class="floating">
        <input
          :data-testid="name"
          :id="name"
          :name="name"
          :value="value"
          :type="type"
          class="form-control"
          @input="$emit('input', $event.target.value)"
          :required="required"
          :aria-describedby="`${name}-live-feedback`"
          :data-vv-as="name"
          :disabled="disabled"
          :class="{
            'is-invalid': errors && errors.items.find((x) => x.field === name),
          }"
        />
        <label :for="name" class="form-label" :class="{ active: value }">{{
          labelPlaceholder
        }}</label>
      </div>
      <div v-if="errors" class="invalid-feedback">
        {{
          errors && errors.items && errors.items.find((x) => x.field === name)
            ? errors.items.find((x) => x.field === name).msg
            : ""
        }}
      </div>
      <div v-if="description" class="form-text">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  name: "UiInput",
  model: {
    prop: "value",
    event: "input",
  },
  props: [
    "value",
    "name",
    "labelPlaceholder",
    "description",
    "type",
    "placeholder",
    "required",
    "disabled",
  ],
};
</script>

<style lang="scss" scoped>
.form-label {
  color: #74767a;
  margin: 0;
}

.form-control {
  border-radius: 0.5rem;
  padding: 1.125rem 1rem;
  &.is-invalid {
    background-image: none;
  }
  &:not(.is-invalid) {
    &:not(:disabled) {
      &:hover {
        border-color: #000000;
      }
      &:focus {
        border-color: #000000;
      }
    }
  }
  &:focus {
    border-width: 0.125rem;
    box-shadow: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.form-text {
  margin-top: 0.5rem;
}

.floating {
  position: relative;
  & > label {
    font-weight: 400;
    font-size: 1em;
    line-height: 1;
    pointer-events: none;

    border: 0.0625rem solid transparent;
    white-space: nowrap;

    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    transform-origin: 0 0;
    padding: 0 0.25rem;
    transition: 150ms ease-out;
    z-index: 3;

    &.active {
      font-size: 0.75em;
      top: 0;
      background: white;
      transition: 150ms ease;
    }
  }
  & > input {
    color: #4d4e52;
  }
}
</style>