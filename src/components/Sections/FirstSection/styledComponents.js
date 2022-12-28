import styled from "vue3-styled-components";

export const SectionElement = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: 10rem;
`;

export const InformationText = styled.p`
  font-size: 100px;
  font-weight: 400;
  text-align: center;
  line-height: 100px;
  width: 70%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContainerImage = styled.div`
  width: 40%;
  height: 350px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
`;
