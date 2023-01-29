import styled from "vue3-styled-components";

import responsive from "@/responsive.js";

const { s, m, l } = responsive;

export const ContainerSection = styled.section`
  width: 100vw;
  height: auto;
  margin-bottom: 250px;

  .swiper {
    div.swiper-button-prev {
      display: none;
    }

    div.swiper-button-next {
      display: none;
    }

    svg.prev {
      left: 2rem;
    }

    svg.next {
      right: 2rem;
    }
  }

  @media screen and (max-width: ${s}) {
    height: fit-content;
    margin-bottom: 10rem;
    margin-top: 290px;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    height: fit-content;
    margin-bottom: 10rem;
  }
`;

export const Heading4 = styled.h4`
  margin-left: 2rem;
`;

export const ContainerText = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: ${s}) {
    display: block;
  }
`;

export const MainText = styled.span`
  font-size: 200px;
  display: block;
  text-transform: uppercase;
  font-weight: 200;
  margin-right: 2rem;
  opacity: 0;
  transform: translateY(50px);

  @media screen and (max-width: ${s}) {
    font-size: 75px;
    margin: 2rem 0 2rem 2rem;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    font-size: 100px;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 378px;
`;

export const ContainerTextContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 0 5rem;
  margin: 2rem 0;

  @media screen and (max-width: ${s}) {
    display: block;
    margin: 2rem 0 0 0;
    width: 100%;
    padding: 0 2rem;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    width: 100%;
    padding: 0 2rem;
  }
`;

export const ContainerContentTextContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${s}) {
    flex-direction: column;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    flex-direction: column;
    justify-content: initial;
  }
`;

export const SecondText = styled.span`
  font-size: 81px;
  font-weight: 400;
  text-transform: uppercase;
  padding-right: 0.5rem;

  @media screen and (max-width: ${s}) {
    margin: 2rem 0;
    display: block;
  }
`;

export const TextContent = styled.p`
  color: ${props => props.theme.color};
  width: 50%;
  margin-right: 1rem;

  @media screen and (max-width: ${s}) {
    width: 100%;
    margin: 0 0 2rem 0;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    width: 100%;
    margin: 0 1rem 2rem 0;
  }
`;
