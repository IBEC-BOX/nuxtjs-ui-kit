<template>
  <div class="ui-calendar">
    <date-picker
        :locale="{ id: $i18n.locale, firstDayOfWeek: 2, masks: { weekdays: 'WW' } }"
        :title-position="titlePosition"
        color="pink"
    />
  </div>
</template>

<script>
// import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
  name: "UiCalendar",
  components: {
    // Calendar,
    DatePicker
  },
  props: {
    titlePosition: {
      type: String,
      default: 'center' // left // right
    }
  }
}
</script>

<style lang="scss">
.ui-calendar {
  .vc {
    &-title {
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      color: #000000;
      text-transform: capitalize;
    }
    &-container {
      --shadow: 8px 3px 22px 10px rgba(150, 150, 150, 0.11);
      --shadow-lg: 8px 3px 22px 10px rgba(150, 150, 150, 0.11);
      --rounded: 1rem;
      --rounded-lg: 1rem;

      box-shadow: var(--shadow);
      border: none;
      font-family: var(--bs-body-font-family);
    }
    &-header {
      padding: 24px 28px 16px 28px;
      display: flex;
      flex-direction: column;
      position: relative;
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #E6E7EB;
        position: relative;
        bottom: -16px;
      }
      &.align-left {
        text-align: left;
        align-items: flex-start;
      }
      &.align-right {
        text-align: right;
        align-items: flex-end;
      }
    }
    &-arrows-container.title-center {
      padding: 26px 24px 18px 24px;
    }
    &-arrows-container.title-left {
      padding: 26px 24px 18px 24px;
      gap: 24px;
    }
    &-arrows-container.title-right {
      padding: 26px 24px 18px 24px;
      gap: 24px;
    }
    &-arrow {
      border: none;
      svg {
        width: 16px;
        height: 16px;
      }
    }
    &-weeks {
      gap: 16px 16px;
      padding: 16px 24px;
      min-width: 264px;
    }
    &-weekday {
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      text-align: center;
      text-transform: uppercase;
      color: #A5A7AD;
      padding: 4px;
    }
    &-day {
      min-height: 24px;
      &-content {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        color: #000000;
        width: 24px;
        height: 24px;
      }
    }
    &-highlight {
      width: 24px;
      height: 24px;
      background-color: var(--bs-primary)!important;
    }
  }
}
</style>
