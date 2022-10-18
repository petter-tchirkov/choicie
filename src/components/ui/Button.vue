<template>
  <button
    :class="['btn', `btn-${color}`, `btn-${size}`]"
    :style="[icon === '' ? { gap: '0' } : { gap: '11px' }]"
  >
    <img v-if="icon" :src="`./src/assets/icons/${icon}.svg`" alt="" />
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  color: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "medium",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  border-radius: 50px;
  padding: 14px 24px;
  color: var(--white);
  transition: 0.3s;
  @include button-m;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &-primary {
    background: var(--brand-blue);
    &:hover {
      background: #2b1765;
    }
    &:disabled {
      background: #e0e0f2;
      color: var(--brand-blue);
    }
  }

  &-white {
    background: var(--white);
  }

  &-secondary {
    background: var(--brand-yellow);
    &:hover {
      background: #e6c270;
    }
    &:disabled {
      background: #fdf8ec;
      color: var(--brand-yellow);
    }
  }

  &-third {
    background: #6053b1;
    color: var(--white);
    &:hover {
      background: #e0e0f2;
    }
  }

  &-small {
    padding: 8px 24px;
  }

  &-rounded {
    padding: 14px 15px;
  }
}
</style>
