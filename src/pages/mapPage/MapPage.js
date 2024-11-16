import styled from "styled-components";
import themeGet from "../../utils/themeGet";

import CustomColumn from "../../components/CustomColumn";
import CustomFont from "../../components/CustomFont";

function MapPage() {
  return (
    <CustomColumn
      $width="100%"
      $height="100vh"
      $alignItems="center"
      $justifyContent="center"
    >
      <CustomFont $color="black">여기는 mapPage</CustomFont>
    </CustomColumn>
  );
}

export default MapPage;
