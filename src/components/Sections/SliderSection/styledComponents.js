import styled from "vue3-styled-components";

import responsive from "@/responsive.js";

const { s, m, l } = responsive;

export const ContainerSection = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 0 2rem;

  @media screen and (max-width: ${s}) {
    margin-bottom: 5rem;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${s}) {
    display: block;
  }
`;

export const MainText = styled.span`
  font-size: 175px;
  display: block;
  text-transform: uppercase;
  font-weight: 200;

  @media screen and (max-width: ${s}) {
    font-size: 115px;
    margin: 2rem 0;
  }
`;

export const ContainerImage = styled.div`
  width: 80%;
  height: 378px;
`;

export const ContainerTextContent = styled.div`
  display: flex;
  width: 80%;
  margin: 2rem auto 5rem auto;

  @media screen and (max-width: ${s}) {
    display: block;
    margin: 2rem 0 0 0;
    width: 100%;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    width: 100%;
  }
`;

export const SecondText = styled.span`
  font-size: 81px;
  font-weight: 400;
  text-transform: uppercase;

  @media screen and (max-width: ${s}) {
    margin: 2rem 0;
    display: block;
  }
`;

export const TextContent = styled.p`
  color: ${props => props.theme.color};
  width: 30%;
  margin: 0 2rem;

  @media screen and (max-width: ${s}) {
    width: 100%;
    margin: 0 0 2rem 0;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    width: 30%;
    margin: 0 1rem 2rem 0;
  }
`;
