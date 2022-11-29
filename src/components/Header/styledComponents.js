import styled from "vue3-styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  position: fixed;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding: 1rem 5%;
  z-index: 99;
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

export const Item = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.color};
`;
