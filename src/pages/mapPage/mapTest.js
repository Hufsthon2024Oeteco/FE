import KakaoMap from "../../components/kakaomap/KakaoMap";
import styled from "styled-components";
import { useState, useEffect } from "react";

const MapContainer = styled.div`
  position: relative;
  width: 390px;
  height: 390px;
  overflow: hidden; /* Ensures content stays within the box */
`;

const IconOverlay = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MapTest() {
  const [iconPosition, setIconPosition] = useState(null);

  const handleMapClick = (e) => {
    const { clientX, clientY } = e;
    const mapRect = e.currentTarget.getBoundingClientRect();
    const offsetX = clientX - mapRect.left;
    const offsetY = clientY - mapRect.top;
    setIconPosition({ top: offsetY, left: offsetX });
  };

  useEffect(() => {
    if (iconPosition) {
      console.log(iconPosition);
    }
  }, [iconPosition]);

  return (
    <MapContainer onClick={handleMapClick}>
      <KakaoMap style={{ width: "100%", height: "100%" }} />{" "}
      {/* Ensure the map fills the container */}
      {iconPosition && (
        <IconOverlay top={iconPosition.top} left={iconPosition.left}>
          <div style={{ position: "relative" }}>
            <img
              src="/radialPoint.svg"
              alt="Radial Point"
              width="50"
              height="60"
              style={{ position: "absolute", top: -30, left: -25 }}
            />
          </div>
        </IconOverlay>
      )}
    </MapContainer>
  );
}

export default MapTest;
