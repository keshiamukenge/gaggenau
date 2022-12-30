import styled from "vue3-styled-components";

import breakpoints from "../../../responsive";

const { s } = breakpoints;

export const ContainerImagesSection = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;

  @media screen and (max-width: ${s}) {
    .last-section-img-2 {
      display: none;
    }

    .last-section-img-1 {
      width: 100%;
    }
  }
`;

export const ContainerImage = styled.div`
  width: 50%;
  height: 100%;
`;
