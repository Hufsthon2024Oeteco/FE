import styled from "styled-components";
import CustomBox from "../../../components/CustomBox";
import CustomRow from "../../../components/CustomRow";
import CustomFont from "../../../components/CustomFont";
import { BsGeoAltFill } from "react-icons/bs";

const StyledCustomBox = styled(CustomBox)`
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

function MapBadge() {
	return (
		<StyledCustomBox $width="auto" $backgroundColor="white" $borderRadius="10rem" $padding="18px 20px">
			<CustomRow $width="100%" $alignItems="center" $justifyContent="center" $gap="1rem">
				<BsGeoAltFill style={{ color: "#00D4AC", fontSize: "1.5rem" }} />
				<CustomFont $color="#3A3A3A" $fontWeight="bold" $font='1rem'>
					경기도 용인시
				</CustomFont>
			</CustomRow>
		</StyledCustomBox>
	);
}

export default MapBadge;
