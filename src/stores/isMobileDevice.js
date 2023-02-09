import { ref } from "vue";
import { defineStore } from "pinia";

import { breakpoints } from "@/responsive.js";

export const useIsMobileDeviceStore = defineStore("isMobile", () => {
  const { l } = breakpoints;
  const isMobileDevice = ref(null);

  function isOnMobileDevice() {
    if (window.matchMedia(`((min-width: ${l})`).matches) {
      isMobileDevice.value = false;
    } else {
      isMobileDevice.value = true;
    }
  }

  window.addEventListener("resize", isOnMobileDevice);

  return { isMobileDevice, isOnMobileDevice };
});
