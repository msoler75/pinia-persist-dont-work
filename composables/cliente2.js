import { defineStore } from "pinia";

export const useCliente = defineStore("clienteXxstore", {
  state: () => {
    return {
      cargando: false,
      datosCargados: false,
      contador: 1
    };
  },
});
