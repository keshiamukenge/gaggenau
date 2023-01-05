import styled from "vue3-styled-components";

import breakpoints from "../../../responsive";

const { s } = breakpoints;

export const ContainerImagesSection = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;

  .last-section-img-1,
  .last-section-img-2 {
    opacity: 0;
  }

  @media screen and (max-width: ${s}) {
    .last-section-img-2 {
      width: 100%;
    }

    .last-section-img-1 {
      display: none;
    }
  }
`;

export const ContainerImage = styled.div`
  width: 50%;
  height: 100%;
`;
