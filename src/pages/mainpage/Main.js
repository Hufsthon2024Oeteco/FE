import styled from "styled-components";
import themeGet from "../../utils/themeGet";

import CustomColumn from "../../components/CustomColumn";
import CustomButton from "../../components/CustomButton";
import CustomFont from "../../components/CustomFont";

import KakaoMap from "../../components/kakaomap/KakaoMap";

// components 폴더 내부 컴포넌트들은 아래 예시처럼 활용할 수 있어요.
// 파일 열면 어떤 props를 넘길 수 있는지 알 수 있어욤

const Container = styled.div`
  background-color: ${themeGet("color.blue")};
  color: ${themeGet("color.dark")};
  font-size: ${themeGet("font.h1.size")};
  font-weight: ${themeGet("font.h1.weight")};
`;

function Main() {
  return (
    <CustomColumn $width='100%' $height='100vh' $alignItems='center' $justifyContent='center'>
      <Container>
        <h1>main page</h1>
        <br />
      </Container>

    </CustomColumn>
  );
}

export default Main;
