import { defineStore } from "pinia";

export const useNormalStore = defineStore("normalStore", {
  state: () => {
    return {
      counter: 0,
    };
  },
  persist: true,
});
