import styled from "vue3-styled-components";

import breakpoints from "../../responsive";

const { s } = breakpoints;

export const ContainerHeader = styled.header`
  width: 100%;
  position: fixed;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 99;
  align-items: baseline;

  @media screen and (max-width: ${s}) {
    width: 100vw;
  }
`;

export const ContainerLogo = styled.div`
  width: 100px;
  height: auto;

  img {
    object-fit: contain;
  }
`;

export const ContainerItems = styled.nav`
  display: flex;
`;

export const HeaderItem = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.color};

  div {
    margin-left: auto;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ContainerMenu = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 100vw;
  background-color: ${props => props.theme.backgroundColor};
  position: fixed;
  top: -100%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -98;
`;

export const ContainerMenuContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ContainerList = styled.ul`
  width: fit-content;
  height: fit-content;
  padding: 0 3%;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContainerMenuItem = styled.li`
  margin: 2rem auto;
  width: 100%;
  height: 100px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${s}) {
    height: fit-content;
  }
`;

export const MenuItem = styled.span`
  font-size: 100px;
  font-weight: 200;
  text-transform: uppercase;
  white-space: nowrap;

  @media screen and (max-width: ${s}) {
    font-size: 34px;
  }
`;

export const Number = styled.span`
  font-size: 16px;
  font-weight: 200;

  @media screen and (max-width: ${s}) {
    margin: 0 0.5rem;
  }
`;

export const ContainerImageMenuItem = styled.div`
  height: 100%;
  width: 0;
  margin: 0 0.8rem;

  img {
    width: 100%;
    height: 85%;
    object-fit: cover;
  }

  @media screen and (max-width: ${s}) {
    display: none;
  }
`;

export const ContainerContentMenuItem = styled.div`
  width: fit-content;
  height: 100%;
  transform: translateY(-100%);
  display: flex;
  align-items: flex-start;
  margin: auto;
  opacity: 0.5;
`;
