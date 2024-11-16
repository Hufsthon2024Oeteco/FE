import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CustomBox from "../../../components/CustomBox";
import StyledImg from "../../../components/StyledImg";
import CustomButton from "../../../components/CustomButton";
import { IoIosArrowBack } from "react-icons/io";

function MapHeader() {
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1);
	};

	return (
		<HeaderWrapper>
			<CustomButton
				$backgroundColor="transparent"
				$width="auto"
				onClick={handleBackClick}
			>
				<BackIcon />
			</CustomButton>
			<Logo src="/icon_headerLogo.png" alt="Logo" />
		</HeaderWrapper>
	);
}

export default MapHeader;

const HeaderWrapper = styled(CustomBox)`
  position: relative;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4rem;
`;

const BackIcon = styled(IoIosArrowBack)`
  position: absolute;
  left: 1rem;
  font-size: 2rem;
  color: #00d4ac;
`;

const Logo = styled(StyledImg)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
`;
