<template>
  <span v-if="!href" :class="badgeClasses"><slot></slot></span>
  <nuxt-link :to="href" v-else-if="href" :class="badgeClasses"><slot></slot></nuxt-link>
</template>

<script>
export default {
  name: "UiBadge",
  props: {
    variant: {
      type: String
    },
    pill: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: null,
    },
    position: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  computed: {
    pos() {
      if (this.position) {
        const position = this.position.split(" ");
        if (position && position.length) {
          const classes = ["position-absolute", "translate-middle"];
          position.forEach((el) => {
            switch (el) {
              case "top":
                classes.push("top-0");
                break;
              case "bottom":
                classes.push("top-100");
                break;
              case "left":
                classes.push("start-0");
                break;
              case "right":
                classes.push("start-100");
                break;
            }
          });
          return classes.join(" ");
        }
      }
      return null
    },
    badgeStyles () {
      if (this.variant.includes('outline')) {
        const color = this.variant.replace('outline-', '')
        return `badge-outlined border-${color}, text-${color}`
      } else {
        return `bg-${this.variant}`
      }
    },
    badgeClasses() {
      return [
        "badge",
        `badge-${this.size}`,
        {
          "rounded-pill": this.pill,
        },
        this.pos,
        this.badgeStyles
      ];
    },
  },
}
</script>

<style lang="scss" scoped>
.badge {
  --bs-badge-padding-x: 12px;
  --bs-badge-padding-y: 6px;
  --bs-badge-border-radius: 4px;
  --bs-badge-font-weight: 400;
  text-decoration: none;
  &-sm {
    --bs-badge-padding-x: 10px;
    --bs-badge-padding-y: 4px;
  }
  &-lg {
    --bs-badge-padding-x: 14px;
    --bs-badge-padding-y: 8px;
  }
  &-p2 {
    --bs-badge-padding-x: 8px;
    --bs-badge-padding-y: 8px;
  }
  &-outlined {
    background-color: transparent;
    border-width: 1px;
    border-style: solid;
  }
}
</style>
