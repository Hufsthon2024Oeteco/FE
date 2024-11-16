import styled from "styled-components";
import CustomBox from "../../../components/CustomBox";
import CustomRow from "../../../components/CustomRow";
import CustomFont from "../../../components/CustomFont";
import CustomColumn from "../../../components/CustomColumn";
import { BsGeoAltFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const StyledCustomBox = styled(CustomBox)`
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

function MapModal() {
	return (
		<StyledCustomBox $width="20rem" $backgroundColor="white" $borderRadius="1rem" $padding="15px">
			<CustomColumn $width='100%' $alignItems='flex-start' $justifyContent='center' $gap='1rem'>
				<CustomRow $width="auto" $alignItems="center" $justifyContent="flex-start" $gap="1rem">
					<BsGeoAltFill style={{ color: "#00D4AC", fontSize: "1.5rem" }} />
					<CustomFont $color="#8E8E8E" $fontWeight="bold" $font='1rem'>
						경기도 용인시
					</CustomFont>
				</CustomRow>

				<CustomColumn $width='100%' $alignItems='flex-start' $justifyContent='center' $gap='0.7rem'>
					<CustomRow $width="auto" $alignItems="center" $justifyContent="flex-start" $gap="1rem">
						<GoDotFill style={{ fontSize: "0.8rem" }} />
						<CustomFont $color="#black" $fontWeight="bold" $font='1rem'>
							세대수: 100000
						</CustomFont>
					</CustomRow>

					<CustomRow $width="auto" $alignItems="center" $justifyContent="flex-start" $gap="1rem">
						<GoDotFill style={{ fontSize: "0.8rem" }} />
						<CustomFont $color="#black" $fontWeight="bold" $font='1rem'>
							세대수: 100000
						</CustomFont>
					</CustomRow>

					<CustomRow $width="auto" $alignItems="center" $justifyContent="flex-start" $gap="1rem">
						<GoDotFill style={{ fontSize: "0.8rem" }} />
						<CustomFont $color="#black" $fontWeight="bold" $font='1rem'>
							세대수: 100000
						</CustomFont>
					</CustomRow>
				</CustomColumn>
			</CustomColumn>
		</StyledCustomBox>
	);
}

export default MapModal;
