import styled, { ThemeConsumer } from "styled-components";
import themeGet from "../../utils/themeGet";
import theme from "../../theme";

import { BsGeoAltFill, BsCaretDownFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import MapTest from "./mapTest";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: ${themeGet("color.dark_gray")};
  background-color: ${themeGet("color.light_gray")};
  font-weight: 500;
  padding: 20px;
`;

const BackIcon = styled(IoIosArrowBack)`
  align-self: flex-start;
  font-size: 2rem;

  color: ${themeGet("color.green")};
  cursor: pointer;

  &:hover {
    color: #06967b;
    transition: all 0.3s;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: ${themeGet("color.black")};
    font-weight: 700;
  }
`;

const Icon = styled(BsGeoAltFill)`
  width: 75px;
  height: 75px;

  color: ${themeGet("color.green")};
`;

const Text = styled.p`
  margin: 10px 0;
  text-align: center;

  span {
    color: ${themeGet("color.black")};
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 20px 0;
`;

const MapWrapper = styled.div`
  width: 390px;
  height: 390px;
  margin: 20px 0;
  background-color: #e0e0e0; /* Placeholder color for the map */
`;

const DropDown = styled.select`
  width: 100%;
  padding: 18px 20px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.value ? "#00d4ac" : "#8e8e8e")};
  background-color: #fff;
  border: ${(props) =>
    props.value ? "3px solid #00d4ac" : "3px solid #d9d9d9"};
  border-radius: 25px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;

  &:focus {
    border-color: #00c985;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${(props) => (props.selected ? "#00d4ac" : "#8e8e8e")};
`;

const DropDownIcon = styled(BsCaretDownFill)`
  width: 24px;
  height: 24px;
`;

const Button = styled.button`
  text-align: center;
  width: 90%;
  height: 50px;
  border-radius: 8px;
  border: none;
  color: ${themeGet("color.white")};
  background-color: ${themeGet("color.green")};
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #06967b;
    transition: all 0.3s;
  }
`;

function AreaLocation() {
  return (
    <Container>
      <BackIcon />
      <Info>
        <Icon />
        <Text>
          궁금한 <span>지역</span>의 <span>위치</span>를 콕 찍어주세요.
        </Text>
      </Info>
      <MapWrapper>
        <MapTest />
      </MapWrapper>
      <Wrapper>
        <DropDown>
          <option value="">창업 분야를 선택해주세요</option>
          <option value="1">분야 1</option>
          <option value="2">분야 2</option>
          <option value="3">분야 3</option>
        </DropDown>
        <IconWrapper>
          <DropDownIcon />
        </IconWrapper>
      </Wrapper>
      <Button>확인하기</Button>
    </Container>
  );
}

export default AreaLocation;
