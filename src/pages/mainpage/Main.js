import styled from "styled-components";
import themeGet from "../../utils/themeGet";

import {Link} from 'react-router-dom';

import CustomColumn from "../../components/CustomColumn";
import CustomButton from "../../components/CustomButton";
import CustomFont from "../../components/CustomFont";

import KakaoMap from "../../components/kakaomap/KakaoMap";

// import Logo from './Logo.svg';

// components 폴더 내부 컴포넌트들은 아래 예시처럼 활용할 수 있어요.
// 파일 열면 어떤 props를 넘길 수 있는지 알 수 있어욤

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100%;

  color: ${themeGet("color.dark")};
  
  background-color: ${themeGet("color.light_gray")};

  font-size: ${themeGet("font.h1.size")};

  img{
    width: 250px;
    height: 250px;

    margin-top: 166px;
  }

  span{
    font-weight: 700;
  }
`;

const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
`;

const Header=styled.p`
  font-size: 48px;
  color: ${themeGet('color.black')};
  font-weight: 700;
`;

const Info=styled.div`
  color: ${themeGet('color.black')};
  font-size: 18px;
  font-weight: 400;

  span{
    font-weight: 600;
  }
`;

const StartButton=styled.button`
  text-align: center;

  width: 329px;
  height: 50px;

  border-radius: 8px;
  border: none;

  color: ${themeGet('color.white')};
  background-color: ${themeGet('color.green')};

  font-size: ${themeGet('font.sub_head.size')};
  font-weight:${themeGet('font.sub_head.weight')};

  &:hover{
    background-color: #06967B;
    transition: all 0.3s;
  }
`;

function Main() {
  return (
    <CustomColumn $width='100%' $height='100vh' $alignItems='center' $justifyContent='center'>
      <Container>
        <img src="./Logo.svg"  />
        <Wrapper>
          <Header>별자리</Header>
          <Info><span>스타</span>트업 <span>자리</span> 정보</Info>
        </Wrapper>
        <Link to={'/arealocation'}>
          <StartButton>시작하기</StartButton>
        </Link>
      </Container>

    </CustomColumn>
  );
}

export default Main;
