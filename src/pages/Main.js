import styled from "styled-components";
import themeGet from "../utils/themeGet";

const Container = styled.div`
  background-color: ${themeGet("color.blue")};
  color: ${themeGet("color.dark")};
  font-size: ${themeGet("font.h1.size")};
  font-weight: ${themeGet("font.h1.weight")};
`;

function Main() {
  return (
    <>
      <Container>
        <h1>main page</h1>
        <br />
      </Container>
    </>
  );
}

export default Main;
