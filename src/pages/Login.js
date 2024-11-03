import styled from 'styled-components';
import themeGet from '../utils/themeGet';

const Container=styled.div`
    width: 100%;
    height: 100%;

    background-color: ${themeGet('color.green')};
    color:${themeGet('color.dark')};
    font-size: ${themeGet('font.h1.size')};
    font-weight: ${themeGet('font.h1.weight')};
`;

function Login(){

    return(
        <>
            <Container>
                <h1>login page</h1>
            </Container>
        </>
    )
}

export default Login;