import styled from "vue3-styled-components";

import breakpoints from "../../responsive";

const { s, m, l } = breakpoints;

const gridPositionProps = {
  gridColumn: String,
  gridRow: String,
};

export const ContainerFooter = styled.footer`
  width: 100%;
  height: fit-content;
  background-color: ${props => props.theme.backgroundColor};
  display: grid;
  grid-template-columns: 40% 15% 15% 15% 15%;
  grid-template-rows: auto auto;
  padding: 8rem 2rem 25rem 2rem;
  grid-row-gap: 2rem;
  padding-bottom: 5rem;

  .contact-button {
    grid-column: 1/3;
    grid-row: 1;
    margin-bottom: 8rem;
  }

  .product-title {
    grid-column: 2;
    grid-row: 3;
    margin-bottom: 2rem;
  }

  .product-list {
    grid-column: 2;
    grid-row: 4;
  }

  .inspiration-title {
    grid-column: 3;
    grid-row: 3;
    margin-bottom: 2rem;
  }

  .inspiration-list {
    grid-column: 3;
    grid-row: 4;
  }

  .get-support-title {
    grid-column: 4;
    grid-row: 3;
    margin-bottom: 2rem;
  }

  .get-support-list {
    grid-column: 4;
    grid-row: 4;
  }

  .rs {
    grid-column: 5;
    grid-row: 3;
    display: flex;
    align-items: center;
    height: fit-content;
  }

  @media screen and (max-width: ${s}) {
    grid-template-columns: 1fr 1fr;
    height: fit-content;
    padding: 8rem 5% 8rem 5%;

    .contact-button {
      grid-column: 1/3;
      grid-row: 1;
      margin-bottom: 2rem;
    }

    .product-title {
      grid-column: 1;
      grid-row: 2;
    }

    .product-list {
      grid-column: 1/3;
      grid-row: 3;
    }

    .inspiration-title {
      grid-column: 2;
      grid-row: 2;
    }

    .inspiration-list {
      grid-column: 2;
      grid-row: 3;
    }

    .get-support-title {
      grid-column: 1;
      grid-row: 4;
    }

    .get-support-list {
      grid-column: 1;
      grid-row: 5;
    }

    .rs {
      grid-column: 2;
      grid-row: 4;
    }
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .contact-button {
      grid-column: 1/4;
      grid-row: 1;
      margin-bottom: 2rem;
    }

    .product-title {
      grid-column: 1;
      grid-row: 2;
    }

    .product-list {
      grid-column: 1;
      grid-row: 3;
    }

    .inspiration-title {
      grid-column: 2;
      grid-row: 2;
    }

    .inspiration-list {
      grid-column: 2;
      grid-row: 3;
    }

    .get-support-title {
      grid-column: 3;
      grid-row: 2;
    }

    .get-support-list {
      grid-column: 3;
      grid-row: 3;
    }

    .rs {
      grid-column: 4;
      grid-row: 2;
    }
  }
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

  &:hover {
    color: #ffffff;
    transition: 400ms linear;
    cursor: pointer;
  }
`;
