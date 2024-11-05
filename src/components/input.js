import React, { useState } from "react";
import styled from "styled-components";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import themeGet from "../utils/themeGet";

const Wrapper = styled.div`
  width: 300px;
  height: 60px;
  border: 1px solid;
  border-color: ${(props) =>
    props.error ? themeGet("color.red") : themeGet("color.light_gray")};
  border-radius: ${themeGet("radius.main")};
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const InputField = styled.input`
  font-size: ${themeGet("font.body.size")};
  font-weight: ${themeGet("font.body.weight")};
  color: ${(props) =>
    props.error ? themeGet("color.red") : themeGet("color.dark_gray")};
  border: none;
  outline: none;
  flex: 1;

  ::placeholder {
    color: ${themeGet("color.light_gray")};
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  color: ${(props) =>
    props.error ? themeGet("color.red") : themeGet("color.dark_gray")};
`;

function Input({ label, type = "text", placeholder, value, onChange, error }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Wrapper error={error}>
      <InputField
        type={type === "password" && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      />
      {type === "password" && (
        <IconWrapper onClick={toggleShowPassword} error={error}>
          {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
        </IconWrapper>
      )}
    </Wrapper>
  );
}

export default Input;

// 사용예시

// import Input from "../components/input";
// import React, { useState } from "react";

// const [id, setId] = useState("");
// const [password, setPassword] = useState("");
// const [confirmPassword, setConfirmPassword] = useState("");
// const [passwordMatch, setPasswordMatch] = useState(true);

// const handleIdChange = (e) => {
//   setId(e.target.value);
// };

// const handlePasswordChange = (e) => {
//   setPassword(e.target.value);
// };

// const handleConfirmPasswordChange = (e) => {
//   setConfirmPassword(e.target.value);
//   setPasswordMatch(e.target.value === password);
// };

//       <Input
//         label="아이디"
//         placeholder="아이디를 입력해주세요."
//         value={id}
//         onChange={handleIdChange}
//       />
//       <Input
//         label="비밀번호"
//         type="password"
//         placeholder="비밀번호를 입력해주세요."
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <Input
//         label="비밀번호 확인"
//         type="password"
//         placeholder="비밀번호를 다시 입력해주세요."
//         value={confirmPassword}
//         onChange={handleConfirmPasswordChange}
//         error={!passwordMatch}
//       />
//       {!passwordMatch && (
//         <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
//       )}
