<template>
  <h2>{{ label }}</h2>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
});
</script>

<style lang="scss" scoped></style>
