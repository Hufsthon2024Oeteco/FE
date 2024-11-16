import styled from "styled-components";
import themeGet from "../../utils/themeGet";
import { useState } from "react";
import {Link} from 'react-router-dom'

import CustomColumn from "../../components/CustomColumn";
import CustomFont from "../../components/CustomFont";
import BottomButton from "../../components/BottomButton";
import { BsCaretDownFill } from "react-icons/bs";

function AreaInput() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Wrapper>
      <CustomFont $color={"#8E8E8E"} $font={"22px"} $fontWeight={"bold"}>
        궁금한 지역의 위치를 알려주세요.
      </CustomFont>
      <SelectContainer>
        <StyledSelect>
          <option>시 / 시(자치시, 행정시)</option>
          <option>시 / 시2222(자치시, 행정시)</option>
          <option>시 / 시(3333자치시, 행정시)</option>
        </StyledSelect>
        <StyledSelect>
          <option>구(자치구, 일반구)</option>
        </StyledSelect>
        <StyledSelect>
          <option>읍·면·행정동</option>
        </StyledSelect>
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

const StyledSelect = styled.select`
  width: 100%;
  padding: 18px 20px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.value ? "#fff" : "#8e8e8e")};
  background-color: ${(props) => (props.value ? "#00c985" : "#fff")};
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;

  background-image: BsCaretDownFill;
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 12px;

  &:focus {
    border-color: #00c985;
  }
`;
