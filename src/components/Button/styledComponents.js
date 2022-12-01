import styled from "vue3-styled-components";

const buttonSizeProps = {
  smallButton: Boolean,
};

export const ContainerButton = styled("div", buttonSizeProps)`
  width: fit-content;
  height: fit-content;
  padding: ${(props) =>
    props.smallButton ? "10px 12px" : "10px 15px 2px 15px"};
  border: 1px solid ${(props) => props.theme.color};
  text-transform: uppercase;
  border-radius: ${(props) => (props.smallButton ? "20px" : "55px")};
  color: ${(props) => props.theme.color};
  font-size: ${(props) => (props.smallButton ? "14px" : " 60px")};
  white-space: nowrap;
`;

export const ContainerArrowButton = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
`;

export const TextArrowButton = styled.span`
  width: fit-content;
  font-size: 30px;
  color: ${(props) => props.theme.color};
`;
