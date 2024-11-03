import { Outlet } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;

    flex-wrap: wrap;
    /* gap:1vw; */
`;

const Content = styled.div`
    position: relative;
    width: 100%;
    /* max-width: 428px; */
    max-width: 393px;
    min-height: 100vh;
    /* min-height: 844px; */
    overflow: auto;
    box-shadow: 0px 0px 32px #0000002f;
    background-color: #ffffff;
`;

const Mobile = () => {
    
    return (
        <>
            <Container>
                <Content>
                    <Outlet />
                </Content>
            </Container>
        </>
    );
};

export default Mobile;