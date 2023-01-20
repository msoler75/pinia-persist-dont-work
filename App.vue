<template>
  <div style="display: flex; align-items: center; flex-direction: column; padding: 60px; font-size: 300%">
    <input type="button" @click="store.counter++" value="++" style="transform: scale(3)"/>
    <br />
    <ShowStore />
    <p>(Refresh page)</p>
  </div>
</template>

<script setup>
import { useBuggedStore } from "@/stores/store";
const store = useBuggedStore();
</script>
