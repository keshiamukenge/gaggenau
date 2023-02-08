<template>
  <Renderer
    ref="renderer"
    resize="window"
    antiailias
    alpha
    :pointer="{ intersectRecursive: false }"
  >
    <Camera
      ref="camera"
      :position="{ z: 600 }"
      :fov="cameraFov"
      :aspect="cameraAspect"
      :near="100"
    />
    <Scene ref="scene">
      <slot></slot>
    </Scene>
  </Renderer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";

import { useWebglStore } from "@/stores/webgl";

const renderer = ref(null);
const cameraAspect = window.innerWidth / window.innerHeight;
const cameraFov = 2 * Math.atan(window.innerHeight / 2 / 600) * (180 / Math.PI);
const scene = ref(null);
const camera = ref(null);

function setMousePosition() {
  window.addEventListener("mousemove", event => {
    renderer.value.three.pointer.positionN.x =
      (event.clientX / window.innerWidth) * 2 - 1;
    renderer.value.three.pointer.positionN.y =
      -(event.clientY / window.innerHeight) * 2 + 1;
  });
}

const webglStore = useWebglStore();

onMounted(() => {
  const canvas = document.querySelector("canvas");
  canvas.setAttribute("id", "canvas");

  const time = new THREE.Clock();
  const meshes = scene.value.scene.children;

  setMousePosition();

  window.addEventListener("resize", () => {
    camera.value.camera.updateProjectionMatrix();
  });

  renderer.value.onAfterRender(() => {
    //set raycaster
    renderer.value.three.pointer.intersect();
  });

  renderer.value.onBeforeRender(() => {
    // set time
    const elapsedTime = time.getElapsedTime();

    webglStore.planes.value?.forEach((plane, id) => {
      // set scale
      meshes[id].scale.set(
        plane.imageElement.el.getBoundingClientRect().width,
        plane.imageElement.el.getBoundingClientRect().height,
        1
      );

      // set position
      meshes[id].position.x =
        plane.imageElement.el.getBoundingClientRect().left -
        window.innerWidth / 2 +
        plane.imageElement.el.getBoundingClientRect().width / 2;

      meshes[id].position.y =
        -plane.imageElement.el.getBoundingClientRect().top +
        window.innerHeight / 2 -
        plane.imageElement.el.getBoundingClientRect().height / 2;

      meshes[id].position.z = 0.5;

      // set uniforms
      plane.mesh.material.uniforms.uTime.value = elapsedTime * 5;

      meshes[id].material.uniforms.uImageSizes.value.x =
        plane.imageElement.el.naturalWidth;
      meshes[id].material.uniforms.uImageSizes.value.y =
        plane.imageElement.el.naturalHeight;

      meshes[id].material.uniforms.uPlaneSizes.value.x = meshes[id].scale.x;
      meshes[id].material.uniforms.uPlaneSizes.value.y = meshes[id].scale.y;
    });
  });
});
</script>
