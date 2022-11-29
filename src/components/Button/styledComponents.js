import styled from "vue3-styled-components";

const buttonSizeProps = {
  smallButton: Boolean,
};

export const ContainerButton = styled("div", buttonSizeProps)`
  width: fit-content;
  height: fit-content;
  padding: ${props =>
    props.smallButton ? "10px 20px 11px 20px" : "0 15px 6px 15px"};
  border: 1px solid ${props => props.theme.color};
  text-transform: uppercase;
  border-radius: ${props => (props.smallButton ? "20px" : "45px")};
  color: ${props => props.theme.color};
  font-size: ${props => (props.smallButton ? "16px" : " 60px")};
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
  color: ${props => props.theme.color};
`;
