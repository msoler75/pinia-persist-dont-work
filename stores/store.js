import { defineStore } from "pinia";

export const useBuggedStore = defineStore("buggedStore", {
  state: () => {
    return {
      counter: 0
    };
  },
});
