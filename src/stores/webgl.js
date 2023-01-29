import { ref } from "vue";
import { defineStore } from "pinia";

export const useWebglStore = defineStore("webgl", () => {
  const planes = ref([]);

  return { planes };
});
