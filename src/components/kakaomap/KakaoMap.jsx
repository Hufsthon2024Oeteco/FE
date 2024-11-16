import React, { useEffect } from "react";
import styled from "styled-components";
import CustomColumn from "../CustomColumn";
import CustomFont from "../CustomFont";

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid #ddd;
`;

function KakaoMap() {
	useEffect(() => {
		const loadKakaoMap = async () => {
			console.log("API Key:", process.env.REACT_MAP_KAKAOAPI);
			try {
				// console.log("Kakao Maps 로드 시작");

				const loadScript = (url) =>
					new Promise((resolve, reject) => {
						const script = document.createElement("script");
						script.src = url;
						script.async = true;

						script.onload = () => {
							// console.log("Kakao Maps SDK 로드 성공");
							resolve();
						};

						script.onerror = () => {
							// console.error("Kakao Maps SDK 로드 실패");
							reject(new Error("Kakao Maps SDK 로드 실패"));
						};

						document.head.appendChild(script);
					});

				await loadScript(`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_MAP_KAKAOAPI}&autoload=false`);

				window.kakao.maps.load(() => {
					// console.log("Kakao Maps 객체 초기화 완료");

					const container = document.getElementById("map");
					if (!container) {
						console.error("Map container를 찾을 수 없습니다.");
						return;
					}

					const options = {
						center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울 시청
						level: 5, // 줌 레벨
					};

					const map = new window.kakao.maps.Map(container, options);

					window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
						const latLng = mouseEvent.latLng; // 클릭된 좌표
						console.log(`클릭된 좌표: 위도(${latLng.getLat()}), 경도(${latLng.getLng()})`);
					});
				});
			} catch (error) {
				console.error("Kakao Maps 초기화 중 오류:", error);
			}
		};

		loadKakaoMap();
	}, []);

	return (
		<MapContainer id="map" />
	);
}

export default KakaoMap;
