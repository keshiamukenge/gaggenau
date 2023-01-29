import styled from "vue3-styled-components";

import breakpoints from "../../../responsive";

const { s, m, l } = breakpoints;

export const SectionElement = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: 10rem;

  @media screen and (max-width: ${s}) {
    padding: 0 2rem;
    height: 60vh;
  }
`;

export const InformationText = styled.p`
  font-size: 100px;
  font-weight: 400;
  text-align: center;
  line-height: 100px;
  width: 70%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;

  @media screen and (max-width: ${s}) {
    font-size: 55px;
    width: 90%;
    line-height: 60px;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    width: 90%;
  }
`;

export const ContainerImage = styled.div`
  width: 48%;
  height: auto;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 26%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: ${s}) {
    left: 50%;
    width: 70%;
    top: 80%;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    left: 50%;
    width: 73%;
    top: 83%;
  }
`;
