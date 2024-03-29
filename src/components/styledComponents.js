import styled from "vue3-styled-components";

import breakpoints from "../responsive";
import { fonts } from "@/theme";

const { s, m, l, xxl } = breakpoints;
const { title } = fonts;

const mainContainerProps = {
  margin: String,
  padding: String,
};

const animatedLettersProps = {
  startPosition: Number,
  isSecondWord: Boolean,
};

export const MainContainer = styled("section", mainContainerProps)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: fit-content;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  max-width: ${xxl};

  @media screen and (max-width: ${s}) {
    display: block;
    margin: 3rem 0;

    .block-text-button {
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    grid-template-columns: 35vw auto;
  }

  @media screen and (min-width: ${xxl}) {
    margin: 10rem auto;
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: fit-content;

  @media screen and (max-width: ${s}) {
    width: 100%;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    width: 100%;
  }
`;

export const Heading4 = styled.h4`
  width: fit-content;
`;

export const MainParagraph = styled.p`
  font-size: 32px;
  width: 100%;
  height: fit-content;
  line-height: 32px;
  margin-bottom: 2rem;
  font-family: ${title};

  @media screen and (max-width: ${s}) {
    margin-top: 2rem;
  }
`;

export const SecondParagraph = styled.p`
  font-size: 16px;
  width: 85%;
  height: fit-content;
  line-height: 17px;
  color: ${props => props.theme.color};

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    margin-bottom: 1rem;
  }
`;

export const ContainerTextButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: ${s}) {
    display: block;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    flex-direction: column;
  }
`;

export const ContainerAnimatedLetters = styled("div", animatedLettersProps)`
  width: fit-content;
  height: fit-content;
  display: flex;
  position: relative;
  transform: ${props => (props.isSecondWord ? "translateY(-20px)" : null)};

  div {
    overflow: hidden;

    span {
      display: block;
      transform: ${props => `translateX(${props.startPosition}%)`};
      position: relative;
    }
  }
`;
