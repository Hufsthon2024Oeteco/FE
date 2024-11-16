import React from "react";
import instance from "../api/axios";

const ApiTest = () => {
  const sendCoordinates = async (x, y) => {
    try {
      const response = await instance.post("/coordinates", {
        x: x,
        y: y,
      });
      console.log("response 데이터:", response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  // 사용예시
  const handleButtonClick = () => {
    sendCoordinates(10, 20);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Send Coordinates</button>
    </div>
  );
};

export default ApiTest;
