import styled from "styled-components";
import themeGet from "../../utils/themeGet";
import { useState } from "react";
import {Link} from 'react-router-dom'

import CustomColumn from "../../components/CustomColumn";
import CustomFont from "../../components/CustomFont";
import BottomButton from "../../components/BottomButton";
import { BsCaretDownFill } from "react-icons/bs";

function AreaInput() {
  const [selectedValues, setSelectedValues] = useState({
    first: "",
    second: "",
    third: "",
  });

  const handleSelectChange = (level, value) => {
    setSelectedValues((prev) => ({ ...prev, [level]: value }));
  };

  return (
    <Wrapper>
      <CustomFont $color={"#8E8E8E"} $font={"22px"} $fontWeight={"bold"}>
        궁금한 지역의 위치를 알려주세요.
      </CustomFont>
      <SelectContainer>
        <SelectWrapper>
          <StyledSelect
            value={selectedValues.first}
            onChange={(e) => handleSelectChange("first", e.target.value)}
          >
            <option value="">시 / 시(자치시, 행정시)</option>
            <option value="option1">시 / 시2222(자치시, 행정시)</option>
            <option value="option2">시 / 시(3333자치시, 행정시)</option>
          </StyledSelect>
          <IconWrapper selected={selectedValues.first !== ""}>
            <BsCaretDownFill size={"24px"} />
          </IconWrapper>
        </SelectWrapper>
        <SelectWrapper>
          <StyledSelect
            value={selectedValues.second}
            onChange={(e) => handleSelectChange("second", e.target.value)}
          >
            <option value="">구(자치구, 일반구)</option>
            <option value="option1">구1</option>
            <option value="option2">구2</option>
          </StyledSelect>
          <IconWrapper selected={selectedValues.second !== ""}>
            <BsCaretDownFill size={"24px"} />
          </IconWrapper>
        </SelectWrapper>
        <SelectWrapper>
          <StyledSelect
            value={selectedValues.third}
            onChange={(e) => handleSelectChange("third", e.target.value)}
          >
            <option value="">읍·면·행정동</option>
            <option value="option1">읍/면/행정동1</option>
            <option value="option2">읍/면/행정동2</option>
          </StyledSelect>
          <IconWrapper selected={selectedValues.third !== ""}>
            <BsCaretDownFill size={"24px"} />
          </IconWrapper>
        </SelectWrapper>
      </SelectContainer>
      <Link to='/area/map'>
        <BottomButton>확인하기</BottomButton>
      </Link>
    </Wrapper>
  );
}

export default AreaInput;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 400px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

const SelectContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 37px;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSelect = styled.select`
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
