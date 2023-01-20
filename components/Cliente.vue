<template>
    <div>
    contador: {{ 
        cliente.contador
     }}
    </div>
</template>

<script setup>
  const cliente = useCliente();
</script>