import styled from "vue3-styled-components";

const gridPositionProps = {
  gridColumn: String,
  gridRow: String,
};

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 50vh;
  background-color: ${props => props.theme.backgroundColor};
  display: grid;
  grid-template-columns: 40% 15% 15% 15% 15%;
  grid-template-rows: auto auto;
  padding: 8rem 5% 25rem 5%;
  grid-row-gap: 2rem;
`;

export const ListTitle = styled("h4", gridPositionProps)`
  color: ${props => props.theme.titleColor};
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
`;

export const ContainerItems = styled("ul", gridPositionProps)`
  width: 100%;
  padding-right: 2rem;
  height: fit-content;
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
`;

export const Item = styled.h5`
  width: fit-content;
  height: fit-content;
  margin-bottom: 6px;
`;
