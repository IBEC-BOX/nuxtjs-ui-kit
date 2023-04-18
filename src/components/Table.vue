<template>
  <div class="ui-table">
    <div class="ui-table__title">
      {{ title }}
      <div v-if="total" class="ui-table__total">
        {{ total }} {{ total_title }}
      </div>
    </div>
    <div class="table-responsive">
      <table
        :class="{ table: true, 'table-striped': striped, 'table-hover': hover }"
      >
        <thead>
          <tr>
            <th
              :class="field.variant ? `table-${field.variant}` : null"
              v-for="field in headF"
              :key="field.key"
            >
              <template v-if="!field.slotHead">
                {{ field.label || field.key.replaceAll("_", " ") | capitalize }}
              </template>

              <slot :name="field.slotHead" :data="field" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="item._rowVariant ? `table-${item._rowVariant}` : null"
            v-for="item in items"
            :key="item.id"
          >
            <td
              :class="field.variant ? `table-${field.variant}` : null"
              v-for="field in headF"
              :key="field.key"
            >
              <template v-if="!field.slotBody">
                {{ item[field.key] }}
              </template>

              <slot :name="field.slotBody" :data="item" :field="field" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import filters from "../../src/mixins/filter";

export default {
  name: "UiTable",
  props: [
    "title",
    "items",
    "headF",
    "total",
    "total_title",
    "striped",
    "hover",
  ],
  mixins: [filters],
};
</script>

<style lang="scss" scoped>
.ui-table {
  &__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #101828;
    margin-bottom: 19px;
  }
  &__total {
    display: inline-block;
    padding: 2px 8px;
    background: #f9f5ff;
    border-radius: 16px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #6941c6;
  }
}
.table {
  table {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .mobile-table {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
}
</style>
