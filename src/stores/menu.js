import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", () => {
  const isOpen = ref(false);

  function handleClick() {
    isOpen.value = !isOpen.value;
  }

  const onAction = ({ onOpen, onClose }) =>
    watch(isOpen, () => {
      if (isOpen.value) {
        onOpen();
      } else {
        onClose();
      }
    });

  return { isOpen, handleClick, onAction };
});
