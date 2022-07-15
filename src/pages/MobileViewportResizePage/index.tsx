import { useEffect, useState } from 'react';
import styled from 'styled-components';

/**
 * 모바일 브라우저에서는 스크롤시 height의 viewport가 달라진다.
 * 모달 등의 background-color를 100vh로 채우기 위해서는 아래와 같은 이벤트 리스너가 필요하다.
 * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
const MobileViewportResizePage = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const resizeHeight = () => {
      setHeight(window.innerHeight);
    };

    resizeHeight();

    window.addEventListener('resize', resizeHeight);

    return () => {
      window.removeEventListener('resize', resizeHeight);
    };
  }, []);

  return (
    <Container>
      <ViewportContainer style={{ height }}>
        <PercentBox>20%</PercentBox>
        <PercentBox>40%</PercentBox>
        <PercentBox>60%</PercentBox>
        <PercentBox>80%</PercentBox>
        <PercentBox>100%</PercentBox>
      </ViewportContainer>
    </Container>
  );
};

const Container = styled.div`
  /* 스크롤이 가능하도록 */
  height: 500vh;
`;

const ViewportContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  /* 초기값 */
  height: 100vh;
  pointer-events: none;
  background-color: #00000016;
`;

const PercentBox = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid green;
  box-sizing: border-box;
`;

export default MobileViewportResizePage;
