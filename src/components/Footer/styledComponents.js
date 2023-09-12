import styled from "vue3-styled-components";

import breakpoints from "../../responsive";

const { s, m, l, xxl } = breakpoints;

const gridPositionProps = {
  gridColumn: String,
  gridRow: String,
};

export const ContainerFooter = styled.footer`
  width: 100vw;
  height: fit-content;
  background-color: ${props => props.theme.backgroundColor};
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 50% 12.5% 12.5% 12.5% 12.5%;
  grid-template-rows: auto auto;
  padding: 8rem 2rem 25rem 2rem;
  grid-row-gap: 2rem;
  padding-bottom: 5rem;
  max-width: ${xxl};

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
    margin-left: auto;
  }

  @media screen and (max-width: ${s}) {
    grid-template-columns: 1fr 1fr;
    height: fit-content;
    padding: 8rem 5% 8rem 5%;

    .contact-button {
      grid-column: 1/6;
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
      grid-column: 3;
      grid-row: 2;
    }

    .inspiration-list {
      grid-column: 3;
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
      grid-column: 3;
      grid-row: 4;
      margin-left: 0;
    }

    .legal-mentions {
      grid-column: 1 / span 3;
      grid-row: 6;
      padding-right: 0;
    }

    .content-mention {
      grid-column: 1;
      grid-row: 7;
      margin-top: 0;
    }

    .designer-mention {
      grid-column: 3;
      grid-row: 7;
      margin-top: 0;
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
      margin-left: 0;
    }

    .legal-mentions {
      grid-column: 1/3;
      grid-row: 5;
      padding-right: 5rem;
    }

    .content-mention {
      grid-column: 3;
      grid-row: 5;
    }
  }

  @media screen and (min-width: ${xxl}) {
    margin: auto;
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

export const LegalMentions = styled("p", gridPositionProps)`
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  width: 100%;
  height: fit-content;
  font-size: 14px;
  color: ${props => props.theme.grey};
  margin-top: 6rem;
  padding-right: 50%;
  min-width: 200px;
`;

export const DesignerMention = styled("p", gridPositionProps)`
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  width: fit-content;
  height: fit-content;
  color: ${props => props.theme.grey};
  font-size: 14px;
  margin-top: 6rem;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  a {
    color: ${props => props.theme.grey};
    text-decoration: underline;

    &:hover {
      color: #ffffff;
      transition: 400ms linear;
    }
  }
`;

export const ContentMention = styled("p", gridPositionProps)`
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  width: 100%;
  height: fit-content;
  color: ${props => props.theme.grey};
  font-size: 14px;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;

  a {
    color: ${props => props.theme.grey};
    text-decoration: underline;

    &:hover {
      color: #ffffff;
      transition: 400ms linear;
    }
  }
`;
