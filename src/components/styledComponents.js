import styled from "vue3-styled-components";

const mainContainerProps = {
  margin: String,
  padding: String,
};

const animatedLettersProps = {
  startPosition: Number,
  isSecondWord: Boolean,
};

export const MainContainer = styled("section", mainContainerProps)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
`;

export const ContainerContent = styled.div`
  width: 45%;
  height: fit-content;
`;

export const Heading4 = styled.h4`
  width: fit-content;
`;

export const MainParagraph = styled.p`
  font-size: 32px;
  width: 100%;
  height: fit-content;
  line-height: 32px;
  margin-bottom: 2rem;
`;

export const SecondParagraph = styled.p`
  font-size: 16px;
  width: 85%;
  height: fit-content;
  line-height: 17px;
  color: ${props => props.theme.color};
`;

export const ContainerTextButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerAnimatedLetters = styled("div", animatedLettersProps)`
  width: fit-content;
  height: fit-content;
  display: flex;
  position: relative;
  transform: ${props => (props.isSecondWord ? "translateY(-20px)" : null)};

  div {
    overflow: hidden;

    span {
      display: block;
      transform: ${props => `translateX(${props.startPosition}%)`};
      position: relative;
    }
  }
`;
