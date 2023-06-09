<template>
  <div>
    <div class="mb-3">
      <div class="floating">
        <v-select
          :id="name"
          :name="name"
          :value="value"
          :data-testid="name"
          :class="{
            'form-control': true,
            'is-invalid': errors && errors.items.find((x) => x.field === name),
            'is-disabled': disabled,
            // 'is-valid': $parent.validateState(name) === true,
          }"
          :label="labelOption || 'label'"
          :reduce="(option) => option[valueOption || 'value']"
          :options="options"
          :clearable="false"
          :disabled="disabled"
          @input="$emit('change', $event)"
          @search="
            (search) =>
              search.length > 0
                ? (searchChanged = true)
                : (searchChanged = false)
          "
          :aria-describedby="`${name}-live-feedback`"
          :data-vv-as="name"
        />
        <label
          :for="name"
          class="form-label"
          :class="{
            'is-invalid': errors && errors.items.find((x) => x.field === name),
            active: searchChanged || value,
          }"
          >{{ labelPlaceholder }}</label
        >
      </div>
      <div class="invalid-feedback">
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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// Vue.component("v-select", vSelect);

export default {
  components: { vSelect },
  name: "UiSelect",
  model: {
    prop: "value",
    event: "change",
  },
  props: [
    "labelOption",
    "valueOption",
    "value",
    "name",
    "label",
    "description",
    "labelPlaceholder",
    "disabled",
    "options",
    "required",
  ],
  data() {
    return {
      searchChanged: false,
    };
  },
};
</script>

<style lang="scss">
.vs__search,
.vs__search:focus {
  padding: 0;
}

.v-select {
  padding: 0;
  border: none;
  &.vs--open {
    .vs__dropdown-toggle {
      &::before {
        transform: translateY(-50%) rotate(180deg);
        transition: transform 150ms ease-out;
      }
    }
  }
  .vs__dropdown-toggle {
    border-radius: 0.5rem;
    height: 100%;
    padding: 1.125rem 1rem;
    position: relative;
    &::before {
      content: "";
      width: 24px;
      height: 24px;
      background: no-repeat center url("../icons/carret.svg");
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%) rotate(0deg);
      transition: transform 300ms ease;
    }
  }
  &.is-invalid {
    background-image: none;
    padding-right: 0;
    .vs__dropdown-toggle {
      border-color: var(--bs-danger);
    }
  }
  &:not(.is-invalid) {
    &:not(.is-disabled) {
      .vs--searchable .vs__dropdown-toggle {
        &:hover {
          border-color: #000000;
        }
        &:focus {
          border-color: #000000;
        }
      }
    }
  }
}

.vs__dropdown-option {
  pointer-events: auto;
}
.vs__selected {
  margin: 0;
}

// hide default arrow
.vs__open-indicator {
  display: none;
}
</style>

<style lang="scss" scoped>
.form-label {
  &.is-invalid {
    color: var(--bs-danger);
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
