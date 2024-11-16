import styled from "styled-components";
import StyledImg from "../../components/StyledImg";
import CustomFont from "../../components/CustomFont";
import CustomColumn from "../../components/CustomColumn";
import MapBadge from "../mapPage/MapPage/MapBadge";

function LoadingPage() {

	return (
		<CustomColumn $width='100%' $height='100vh' $alignItems='center' $justifyContent='center'>
			<StyledImg src={'/Logo.svg'} $width='200px' $height='200px' />
			<MapBadge />

			<CustomColumn $width='auto' $gap='0.5rem'>
				<CustomFont $color='black' $font='1rem' $fontWeight='bold'>자리 정보를 찾았어요!</CustomFont>
				<CustomFont $color='black' $font='1rem'>잠시만 기다려주세요...</CustomFont>
			</CustomColumn>
		</CustomColumn>
	);
}

export default LoadingPage;

