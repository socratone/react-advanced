import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useEffect, useRef, useState } from 'react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { NavigationOptions } from 'swiper/types/components/navigation';

SwiperCore.use([Navigation, Pagination]);

const colors = ['dodgerblue', 'gold', 'tomato', 'green', 'hotpink', 'skyblue'];

/**
 * Swiper 사용 예제
 */
const SwiperPage = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigation, setNavigation] = useState<NavigationOptions>({
    prevEl: null,
    nextEl: null,
  });

  /**
   * swiper의 navigation.prevEl과 nextEl에 들어가는 초기 값은 null이고
   * 그럴 경우 custom navigation 버튼이 동작하지 않는 이슈가 있다.
   * 따라서 이 부분을 state로 바꿔주고 rendering이 끝나는 시점에 state 업데이트를 하게 했다.
   */
  useEffect(() => {
    setNavigation({
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    });
  }, []);

  return (
    <Container>
      <div>
        <Swiper spaceBetween={10} slidesPerView={3} navigation={navigation}>
          {colors.map((color) => (
            <SwiperSlide key={color}>
              <Card $color={color} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ButtonContainer>
        <Button ref={prevRef}>이전</Button>
        <Button ref={nextRef}>다음</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Card = styled.article<{ $color: string }>`
  height: 300px;
  background-color: ${({ $color }) => $color};
  color: white;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px auto;
`;

const Button = styled.button`
  color: white;
  background: gray;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  font-weight: 700;
`;

export default SwiperPage;
