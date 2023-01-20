<template>
  <div>storeOK.counter: {{ storeOk.counter }}</div>
  <div>storeFail.counter: {{ storeFail.counter }}</div>
</template>

<script setup>
const storeOk = useNormalStore();
const storeFail = useFailingStore();
</script>
