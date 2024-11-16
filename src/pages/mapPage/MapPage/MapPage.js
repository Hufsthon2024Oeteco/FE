import styled from "styled-components";
import KakaoMap from "../../../components/kakaomap/KakaoMap";
import MapBadge from "./MapBadge";
import MapPing from "./MapPing";
import MapModal from "./MapModal";
import MapHeader from "./MapHeader";
import { useState } from "react";

function MapPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <>
      <MapHeader />
      <Wrapper>
        <KakaoMap />
        <BadgeWrapper>
          <MapBadge />
        </BadgeWrapper>
        <PingWrapper>
          <MapPing onClick={toggleModal} />
          {isModalVisible && (
            <ModalWrapper>
              <MapModal />
            </ModalWrapper>
          )}
        </PingWrapper>
      </Wrapper>
    </>
  );
}

export default MapPage;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

const PingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
`;

const ModalWrapper = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
`;
