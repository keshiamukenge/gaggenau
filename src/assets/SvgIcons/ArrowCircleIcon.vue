<template>
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    ref="circle"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.77832 15.0644C9.32199 15.0644 8.95206 15.4343 8.95206 15.8906C8.95206 16.347 9.32199 16.7169 9.77832 16.7169L9.77832 15.0644ZM23.8111 16.4749C24.1338 16.1522 24.1338 15.629 23.8111 15.3064L18.5528 10.0481C18.2302 9.72541 17.707 9.72541 17.3843 10.0481C17.0617 10.3708 17.0617 10.8939 17.3843 11.2166L22.0584 15.8906L17.3843 20.5647C17.0617 20.8873 17.0617 21.4105 17.3843 21.7332C17.707 22.0558 18.2302 22.0558 18.5528 21.7332L23.8111 16.4749ZM9.77832 16.7169L23.2269 16.7169L23.2269 15.0644L9.77832 15.0644L9.77832 16.7169Z"
      fill="white"
    />
    <circle
      cx="16.5"
      cy="16.5"
      r="15.7839"
      stroke="rgba(245, 245, 245, 0.5)"
      stroke-width="1.43218"
    />
  </svg>
</template>

<script setup>
import { ref, watch } from "vue";
import gsap from "gsap";

const props = defineProps({
  startAnimation: {
    type: Boolean,
    default: false,
  },
});

const circle = ref(null);

watch(
  () => props.startAnimation,
  () => {
    if (props.startAnimation) {
      gsap.to(circle.value, {
        x: -5,
        duration: 0.8,
      });
    } else {
      gsap.to(circle.value, {
        x: 0,
        duration: 0.8,
      });
    }
  }
);
</script>
