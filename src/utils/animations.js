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

export default { onImageHovered, onLeaveImage };
