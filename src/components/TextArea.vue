<template>
  <div>
    <div class="mb-3">
      <div class="floating">
        <textarea
          ref="textarea"
          autocomplete="off"
          class="form-control"
          :data-testid="name"
          :id="name"
          :name="name"
          :value="value"
          :rows="rows || '3'"
          :max-rows="maxRows || '6'"
          @input="$emit('input', $event.target.value)"
          :class="{
            'is-invalid': errors.items.find((x) => x.field === name),
            autosize: autosize,
          }"
          :aria-describedby="`${name}-live-feedback`"
          :data-vv-as="name"
          :disabled="disabled"
        ></textarea>
        <label
          :for="name"
          class="form-label"
          :class="{
            'is-invalid': errors.items.find((x) => x.field === name),
            active: value,
          }"
          >{{ labelPlaceholder }}</label
        >
      </div>

      <div :id="`${name}-live-feedback`" class="invalid-feedback">
        {{
          errors && errors.items && errors.items.find((x) => x.field === name)
            ? errors.items.find((x) => x.field === name).msg
            : ""
        }}
      </div>
      <div class="form-text">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiTextArea",
  model: {
    prop: "value",
    event: "input",
  },
  props: [
    "value",
    "name",
    "labelPlaceholder",
    "description",
    "rows",
    "maxRows",
    "disabled",
    "autosize",
  ],
  mounted() {
    this.$nextTick(() => {
      if (this.autosize) this.resize();
    });
  },
  methods: {
    resize() {
      if (this.autosize) {
        const { textarea } = this.$refs;
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
      }
    },
  },
  watch: {
    value() {
      this.resize();
    },
  },
};
</script>

<style lang="scss" scoped>
.form-label {
  color: #74767a;
  margin: 0;
  &.is-invalid {
    color: var(--bs-danger);
  }
}

.form-control {
  border-radius: 0.5rem;
  padding: 1.032rem 0.875rem;
  &.is-invalid {
    background-image: none;
    & > label {
      color: var(--bs-danger);
    }
  }
  &.autosize {
    resize: none;
    min-height: 120px;
    overflow: hidden;
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
    top: 1.032rem;
    left: 0.875rem;
    transform-origin: 0 0;
    padding: 0 0.25rem;
    transition: 150ms ease-out;
    z-index: 3;

    &.active {
      font-size: 0.75em;
      top: -0.32rem;
      background: white;
      transition: 150ms ease;
    }
  }
  & > textarea {
    color: #4d4e52;
  }
}
</style>
