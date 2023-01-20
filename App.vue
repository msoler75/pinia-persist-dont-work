<template>
  <div style="display: flex; align-items: center; flex-direction: column; padding: 60px; font-size: 300%">
    <input type="button" @click="storeOk.counter++" value="Change Normal Store" style="transform: scale(3); margin-bottom: 40px"/>
    <br />
    <input type="button" @click="storeFail.counter++" value="Change Fail Persist Store" style="transform: scale(3); margin-bottom: 40px"/>
    <br />
    <ShowStores />
    <p>(Do refresh page)</p>
  </div>
</template>

<script setup>
const storeOk = useNormalStore();
const storeFail = useFailingStore();
const app = useNuxtApp()
console.log(app.$getCounter)
</script>
