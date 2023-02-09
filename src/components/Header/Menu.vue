<template>
  <ThemeProvider :theme="{ backgroundColor: colors.darkGrey }">
    <ContainerMenu ref="containerMenu">
      <ContainerMenuContent>
        <ContainerList ref="containerItems">
          <ContainerMenuItem @click="onClick">
            <ContainerContentMenuItem
              ref="item1"
              @mouseenter="onMouseEnter"
              @mouseleave="onMouseLeave"
            >
              <Number>01</Number>
              <ContainerImageMenuItem>
                <img src="/images/2.webp" />
              </ContainerImageMenuItem>
              <MenuItem> Experience </MenuItem>
            </ContainerContentMenuItem>
          </ContainerMenuItem>
          <ContainerMenuItem @click="onClick">
            <ContainerContentMenuItem
              ref="item2"
              @mouseenter="onMouseEnter"
              @mouseleave="onMouseLeave"
            >
              <Number>02</Number>
              <ContainerImageMenuItem>
                <img src="/images/8.webp" />
              </ContainerImageMenuItem>
              <MenuItem> Appliances </MenuItem>
            </ContainerContentMenuItem>
          </ContainerMenuItem>
          <ContainerMenuItem @click="onClick">
            <ContainerContentMenuItem
              ref="item3"
              @mouseenter="onMouseEnter"
              @mouseleave="onMouseLeave"
            >
              <MenuItem> For owners </MenuItem>
              <ContainerImageMenuItem>
                <img src="/images/12.webp" />
              </ContainerImageMenuItem>
              <Number>03</Number>
            </ContainerContentMenuItem>
          </ContainerMenuItem>
          <ContainerMenuItem @click="onClick">
            <ContainerContentMenuItem
              ref="item4"
              @mouseenter="onMouseEnter"
              @mouseleave="onMouseLeave"
            >
              <Number>04</Number>
              <ContainerImageMenuItem>
                <img src="/images/11.webp" />
              </ContainerImageMenuItem>
              <MenuItem> Collaboration </MenuItem>
            </ContainerContentMenuItem>
          </ContainerMenuItem>
          <ContainerMenuItem @click="onClick">
            <ContainerContentMenuItem
              ref="item5"
              @mouseenter="onMouseEnter"
              @mouseleave="onMouseLeave"
            >
              <MenuItem> Visit us </MenuItem>
              <ContainerImageMenuItem>
                <img src="/images/10.webp" />
              </ContainerImageMenuItem>
              <Number>05</Number>
            </ContainerContentMenuItem>
          </ContainerMenuItem>
        </ContainerList>
      </ContainerMenuContent>
    </ContainerMenu>
  </ThemeProvider>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { ThemeProvider } from "vue3-styled-components";

import { colors } from "@/theme";
import { useMenuStore } from "@/stores/menu";
import {
  ContainerMenu,
  ContainerList,
  MenuItem,
  ContainerMenuItem,
  Number,
  ContainerImageMenuItem,
  ContainerMenuContent,
  ContainerContentMenuItem,
} from "./styledComponents";

const containerMenu = ref(null);
const containerItems = ref(null);
const menu = useMenuStore();

function onOpen() {
  gsap.to(containerMenu.value.$el, {
    top: 0 + "%",
    duration: 0.4,
    ease: "power.in",
    onComplete: () => {
      gsap
        .timeline()
        .to(containerItems.value.$el.querySelectorAll("li > div"), {
          y: 0,
          duration: 0.6,
          ease: "power.in",
          stagger: 0.1,
        });
    },
  });
}

function onClose() {
  gsap.to(containerItems.value.$el.querySelectorAll("li > div"), {
    y: -100 + "%",
    duration: 0.4,
    ease: "power.in",
    onComplete: () => {
      gsap.to(containerMenu.value.$el, {
        top: -100 + "%",
        duration: 0.4,
        ease: "power.in",
      });
    },
  });
}

menu.onAction({ onOpen, onClose });

function onClick() {
  onClose();
  menu.handleClick();
}

function onMouseEnter(event) {
  gsap.to(event.target, {
    opacity: 1,
    duration: 0.2,
  });

  gsap.to(event.target.querySelector("div"), {
    width: 18 + "vh",
    duration: 0.6,
    ease: "power.inOut",
  });
}

function onMouseLeave(event) {
  gsap.to(event.target, {
    opacity: 0.5,
    duration: 0.2,
  });

  gsap.to(event.target.querySelector("div"), {
    width: 0,
    duration: 0.6,
    ease: "power.inOut",
  });
}
</script>
