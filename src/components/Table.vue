<template>
  <div>
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th v-for="field in fields" :key="field.key">
              {{ field.label || field.key.replaceAll('_', ' ') | capitalize }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td v-for="field in fields" :key="field.key">{{ item[field.key] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-responsive mobile-table">
      <div v-for="item in items" :key="item.id" class="border mb-3 p-2">
        <div v-for="(field, index) in fields" :key="index" class="border-bottom p-2">
          <p><b>{{ field.label || field.key.replaceAll('_', ' ') | capitalize }}</b></p>
          <p>{{ item[field.key] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import filters from '../../src/mixins/filter'
export default {
  name: "UiTable",
  props: ['items', 'fields'],
  mixins: [filters],
  methods: {
    testFunction(val) {
      console.log(val)
    },
  },
}
</script>

<style lang="scss" scoped>
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

