<template>
  <div class="ui-table">
    <div class="ui-table__title">{{ title }} <div v-if="total" class="ui-table__total">{{ total }} {{ total_title }}</div></div>
    <div class="table-responsive">
      <table :class="{'table': true,  'table-striped': striped, 'table-hover': hover}">
        <thead>
          <tr>
            <th :class="`table-${field.variant}`" v-for="field in fields" :key="field.key">
              {{ field.label || field.key.replaceAll('_', ' ') | capitalize }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr :class="`table-${item._rowVariant}`" v-for="item in items" :key="item.id">
            <td :class="`table-${field.variant}`" v-for="field in fields" :key="field.key">{{ item[field.key] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import filters from '../../src/mixins/filter'
export default {
  name: "UiTable",
  props: ['title', 'items', 'fields', 'total', 'total_title', 'striped', 'hover'],
  mixins: [filters],
  methods: {
    testFunction(val) {
      console.log(val)
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-table{
  &__title{
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #101828;
    margin-bottom: 19px;
  }
  &__total{
    display: inline-block;
    padding: 2px 8px;
    background: #F9F5FF;
    border-radius: 16px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #6941C6;
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

