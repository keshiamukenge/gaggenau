import gsap, { Power2 } from "gsap";

export function onImageHovered(image) {
  gsap.to(image, {
    opacity: 0.5,
    duration: 0.5,
    ease: Power2.easeOut,
  });
}

export function onLeaveImage(image) {
  gsap.to(image, {
    opacity: 1,
    duration: 1,
    ease: Power2.easeOut,
  });
}

export function appearImageOnScroll(imageClass) {
  gsap.to(imageClass, {
    opacity: 1,
    delay: 0.2,
    duration: 1,
  });
}

export function appearTextOnScroll(textClass) {
  gsap.to(textClass, {
    opacity: 1,
    y: 0,
    delay: 0.2,
    duration: 1,
  });
}

export default {
  onImageHovered,
  onLeaveImage,
  appearImageOnScroll,
  appearTextOnScroll,
};
