import styled from 'styled-components';
import themeGet from '../utils/themeGet';

const Container=styled.div`
    background-color: ${themeGet('color.red')};
    color:${themeGet('color.dark')};
    font-size: ${themeGet('font.h1.size')};
    font-weight: ${themeGet('font.h1.weight')};
`;

function Signup(){

    return(
        <>
            <Container>
                <h1>signup page</h1>
            </Container>
        </>
    )
}

export default Signup;