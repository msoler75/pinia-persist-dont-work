<template>
  <div style="display: flex; align-items: center; flex-direction: column">
  <input type=button @click="cliente.contador++" value="contador++">
  <br>
  <Cliente />
  </div>
</template>

<script setup>
  const cliente = useCliente();
</script>
