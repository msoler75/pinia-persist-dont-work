import { defineStore } from "pinia";

export const useFailingStore = defineStore("failPersistStore", {
  state: () => {
    return {
      counter: 0,
    };
  },
  persist: true,
});
