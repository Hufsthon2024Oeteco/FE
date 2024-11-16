import CustomButton from "../../../components/CustomButton";
import StyledImg from "../../../components/StyledImg";

function MapPing({ onClick }) {
	return (
		<CustomButton $width='auto' $backgroundColor='transparent' onClick={onClick}>
			<StyledImg src={'/icon_mapPing.svg'} $width='40px' $height='60px' />
		</CustomButton>
	);
}

export default MapPing;
