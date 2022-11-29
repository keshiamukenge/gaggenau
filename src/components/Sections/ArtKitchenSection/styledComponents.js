import styled from "vue3-styled-components";

export const ContainerSection = styled.section`
  width: 100%;
  height: 80vh;
  margin: 15rem 0;
  padding: 0 5%;
  display: flex;
`;

export const ContainerTextPart = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 30%;
  padding: 0 10%;
`;

export const ContainerPart = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

export const ContainerTextButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
  padding-left: 30%;
  padding-right: 10%;
`;

export const TextElement = styled.p`
  color: ${(props) => props.theme.color};
  margin-bottom: 2rem;
`;
