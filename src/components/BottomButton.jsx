import styled from "styled-components";

const BottomButton = styled.button`
  display: flex;
  position: fixed;
  bottom: 91px;
  left: 50%;
  transform: translateX(-50%);
  width: 329px;
  height: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: white;
  background-color: #00d4ac;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) =>
      props.$hoverColor || props.$backgroundColor || "#06967B"};
  }
`;

export default BottomButton;
