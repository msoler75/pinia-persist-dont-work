<template>
  <div>counter: {{ store.counter }}</div>
</template>

<script setup>
import { useBuggedStore } from "@/stores/store";
const store = useBuggedStore();
</script>
