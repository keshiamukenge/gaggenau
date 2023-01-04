import styled from "vue3-styled-components";

import breakpoints from "../../../../responsive";

const { s, m, l } = breakpoints;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 25px 0;
  width: fit-content;
  height: fit-content;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${s}) {
    margin-right: 0;
    width: 100%;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    margin-right: 0;
    padding: 0 2rem;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: ${props => props.height};
  margin-bottom: 15px;

  @media screen and (max-width: ${l}) {
    height: 200px;
  }
`;

export const ContainerTextArrow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextElement = styled.p`
  font-size: 16px;
  width: 85%;
  height: fit-content;
  line-height: 17px;
  margin-right: 10px;

  @media screen and (max-width: ${s}) {
    margin-right: 0;
  }
`;
