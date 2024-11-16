import styled from "styled-components";
import CustomColumn from "../../components/CustomColumn";
import CustomButton from "../../components/CustomButton";
import CustomFont from "../../components/CustomFont";

import KakaoMap from "../../components/kakaomap/KakaoMap";

function MapPage() {
  return (
    <CustomColumn $width='100%' $height='100vh' $alignItems='center' $justifyContent='center'>
      <KakaoMap />
    </CustomColumn>
  );
}

export default MapPage;
