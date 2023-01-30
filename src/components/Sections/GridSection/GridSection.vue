<template>
  <ContainerGrid ref="containerGrid">
    <ContainerImage
      v-for="imageElement in imagesElements"
      v-bind:key="imageElement.id"
      :class="imageElement.class"
    >
      <Plane
        ref="meshes"
        :width="imageElement.width"
        :height="imageElement.height"
        :widthSegments="30"
        :heightSegments="30"
        @pointerOver="onPointerOver"
      >
        <ShaderMaterial
          :props="{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: imageElement.fragmentShader,
          }"
        >
          <Texture
            ref="textures"
            :src="imageElement.src"
            :uniform="`tMap${imageElement.id + 1}`"
          />
        </ShaderMaterial>
      </Plane>
      <img :ref="imageElement.ref" :src="imageElement.src" />
      <TextContent>{{ imageElement.text }}</TextContent>
    </ContainerImage>
    <ContainerImage class="el-8">
      <TextContent class="grid-section-button-item">
        <ArrowButton text="See all appliances" />
      </TextContent>
    </ContainerImage>
  </ContainerGrid>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import gsap from "gsap";

import getFragmentShader from "../../Webgl/shaders/fragmentShader";
import vertexShader from "../../Webgl/shaders/vertexShader";
import { useWebglStore } from "@/stores/webgl";
import { ArrowButton } from "../../Button";
import { ContainerGrid, ContainerImage, TextContent } from "./styledComponents";

const uniforms = {
  uPlaneSizes: { value: new THREE.Vector2(0, 0) },
  uImageSizes: { value: new THREE.Vector2(0, 0) },
  uViewportSizes: {
    value: new THREE.Vector2(window.innerWidth, window.innerHeight),
  },
  uTime: {
    value: 0,
  },
  uFrequence: {
    value: 0.0,
  },
  uAmplitude: {
    value: 0.0,
  },
  uAlpha: {
    value: 0.0,
  },
  uAspect: {
    value: 0.0,
  },
  uOffset: {
    value: new THREE.Vector2(),
  },
};

let imagesElements = [
  {
    id: 0,
    ref: "img1",
    class: "el-1",
    text: "(Ovens)",
    src: "/images/3.png",
    fragmentShader: getFragmentShader("tMap1"),
  },
  {
    id: 1,
    ref: "img2",
    class: "el-2",
    text: "(Warming drawer)",
    src: "/images/4.png",
    fragmentShader: getFragmentShader("tMap2"),
  },
  {
    id: 2,
    ref: "img3",
    class: "el-3",
    text: "(Extractors)",
    src: "/images/6.png",
    fragmentShader: getFragmentShader("tMap3"),
  },
  {
    id: 3,
    ref: "img4",
    class: "el-4",
    text: "(Washing machine)",
    src: "/images/9.png",
    fragmentShader: getFragmentShader("tMap4"),
  },
  {
    id: 4,
    ref: "img5",
    class: "el-5",
    text: "(Cooktop)",
    src: "/images/8.png",
    fragmentShader: getFragmentShader("tMap5"),
  },
  {
    id: 5,
    ref: "img6",
    class: "el-6",
    text: "(Refrigerators)",
    src: "/images/11.png",
    fragmentShader: getFragmentShader("tMap6"),
  },
  {
    id: 6,
    ref: "img7",
    class: "el-7",
    text: "(Dishwasher)",
    src: "/images/5.png",
    fragmentShader: getFragmentShader("tMap7"),
  },
];

const webglStore = useWebglStore();
let planes = ref([]);

const containerGrid = ref(null);
const meshes = ref(null);
const textures = ref(null);

function onPointerOver(event) {
  if (event.over) {
    gsap.to(event.component.mesh.material.uniforms.uAmplitude, {
      value: 0.06,
      duration: 1,
    });

    gsap.to(event.component.mesh.material.uniforms.uFrequence, {
      value: 3.5,
      duration: 1,
    });
  } else {
    gsap.to(event.component.mesh.material.uniforms.uAmplitude, {
      value: 0.0,
      duration: 1,
    });

    gsap.to(event.component.mesh.material.uniforms.uFrequence, {
      value: 0.0,
      duration: 1,
    });
  }
}

onMounted(() => {
  for (let i = 0; i < imagesElements.length; i++) {
    let image = containerGrid.value.$el.children[i].querySelector("img");

    planes.value = [
      ...planes.value,
      {
        imageElement: {
          el: image,
          aspect: image.width / image.height,
        },
        mesh: meshes.value[i],
      },
    ];
  }

  webglStore.planes.value = planes.value;
});
</script>
