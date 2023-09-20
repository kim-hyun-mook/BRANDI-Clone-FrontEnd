import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

function Banners() {
  const banner1 = '/b1.jpg';
  const banner2 = '/b2.jpg';
  const banner3 = '/b3.jpg';
  const banner4 = '/b4.jpg';
  const banner5 = '/b5.jpg';
  const banner6 = '/b6.jpg';
  const play = '/play.svg';
  const pause = '/pause.svg';

  const MAX_SLIDES = 6;
  const TOTAL_SLIDES = MAX_SLIDES + 4;

  const swiperRef = useRef();
  const [swiperCurrentPosition, setSwiperCurrentPosition] = useState(2);
  const [loop, setLoop] = useState();
  const [customInterval, setCustomInterval] = useState(3000);
  const [isInitial, setIsInitial] = useState(true);
  const [isSwipe, setIsSwipe] = useState(true);

  const [bannerState, setBannerState] = useState([]);

  const loadBanners = () => {
    const banners = [
      banner5, //0
      banner6, //1
      banner1, //2
      banner2, //3
      banner3, //4
      banner4, //5
      banner5, //6
      banner6, //7
      banner1, //8
      banner2, //9
    ];
    setBannerState(banners);
  };
  useEffect(() => {
    loadBanners();
  }, []);

  useEffect(() => {
    //페이지7에서 이동 시 0.5초
    //handleButtonLeft에서 3초로 변경
    if (swiperCurrentPosition === 7) {
      setCustomInterval(500);
    } else {
      //그 외 3초
      setCustomInterval(3000);
    }
    if (!isSwipe) {
      //isSwipe가 false이면 자동 슬라이드 정지
      clearTimeout(loop);
      //자동 슬라이드 정지 시에 6 -> 1 부드럽게 이동
      if (swiperCurrentPosition === 8) {
        setSwiperCurrentPosition(2);
      }
    } else {
      //isSwipe가 true이면
      const swiperLoop = setTimeout(() => {
        setSwiperCurrentPosition((prev) => {
          if (prev < 8) {
            return prev + 1;
          } else if (swiperCurrentPosition === 8) {
            //8번배너(두번째 1번이미지)로 이동 시 2번베너(첫번째 1번이미지)로 이동
            return 2;
          }
        });
      }, customInterval);
      setLoop(swiperLoop);
    }
    //1번 배너(첫번째 6번 이미지) 이동 시 7번 배너(두번째 6번이미지)로 이동
    if (swiperCurrentPosition < 2) {
      setSwiperCurrentPosition(7);
    }

    return clearTimeout(loop);
  }, [setSwiperCurrentPosition, swiperCurrentPosition, isSwipe]);

  //스와이퍼 이동
  useEffect(() => {
    if (isInitial) {
      //처음으로 페이지 접속(새로고침)시 애니메이션을 주지 않고 1번 이미지로 이동
      swiperRef.current.style.transform = `translate(-${
        swiperCurrentPosition * 8
      }0vw)`;
      swiperRef.current.style.transition = `none`;
      setIsInitial(false);
      return;
    }
    swiperRef.current.style.transform =
      //8번배너(두번째 1번이미지)로 이동 시 2번베너(첫번째 1번이미지)로 이동
      swiperCurrentPosition === 8
        ? `translate(-80vw)`
        : //1번 배너(첫번째 6번 이미지) 이동 시 7번 배너(두번째 6번이미지)로 이동
        swiperCurrentPosition === 1
        ? `translate(-640vw)`
        : // 그 외엔 한칸씩 이동
          `translate(-${swiperCurrentPosition * 80}vw)`;
    swiperRef.current.style.transition =
      swiperCurrentPosition === 8 || swiperCurrentPosition < 2
        ? //8번 배너와 1번 배너에서 이동할 때 애니메이션 주지 않음
          `none`
        : `0.5s ease-in-out`;
  }, [swiperCurrentPosition]);

  //왼쪽 버튼 클릭 시 interval 3초로 설정
  //애니메이션 중에 버튼 클릭 방지
  const handleBannerLeft = (event) => {
    setCustomInterval(3000);
    setSwiperCurrentPosition((prev) => prev - 1);
    event.target.disabled = true;
    setTimeout(() => {
      event.target.disabled = false;
    }, 500);
  };
  const handleBannerRight = (event) => {
    setSwiperCurrentPosition((prev) => prev + 1);
    event.target.disabled = true;
    setTimeout(() => {
      event.target.disabled = false;
    }, 500);
  };
  //일시정지, 플레이 버튼 클릭 시 true, false 변경
  const handleIsSwipe = () => {
    setIsSwipe((prev) => !prev);
  };

  //pagination 표시 로직
  let pagecnt = swiperCurrentPosition - 1;
  if (swiperCurrentPosition - 1 === 7) pagecnt = 1;

  console.log(swiperCurrentPosition);
  return (
    <NonScroll>
      <Container>
        <ShadeLeft />
        <BannerButtonPrev type="button" onClick={handleBannerLeft} />
        <BannerButtonNext type="button" onClick={handleBannerRight} />
        <Banner ref={swiperRef}>
          {bannerState.map((src, index) => (
            <BannerImg src={src} alt="" key={index}></BannerImg>
          ))}
        </Banner>
        <ShadeRight />
        <SwiperPlayButton type="button" onClick={handleIsSwipe}>
          {isSwipe && <PauseImg src={pause} alt="" />}
          {!isSwipe && <PlayImg src={play} alt="" />}
        </SwiperPlayButton>
        <Pagination>{pagecnt} / 6</Pagination>
      </Container>
    </NonScroll>
  );
}

export default Banners;

const NonScroll = styled.div`
  overflow: hidden;
`;
const Container = styled.div`
  width: 100vw;
  transition: transform 0.5s;
  display: flex;
  justify-content: center;
  position: relative;
`;
const ShadeLeft = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  width: 10.1vw;
  height: 100%;
  left: 0;
`;
const ShadeRight = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  width: 10.1vw;
  height: 100%;
  right: 0;
`;
const BannerButtonPrev = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  z-index: 11;
  width: 3rem;
  height: 3rem;
  border: 1px solid #ffffff;
  border-radius: 100px;
  cursor: pointer;

  left: 8.2vw;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' /%3E%3C/svg%3E%0A");
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-position: 0.6rem center;

  &:disabled {
    background-color: #f0f0f0;
  }
`;
const BannerButtonNext = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  z-index: 11;
  width: 3rem;
  height: 3rem;
  border: 1px solid #ffffff;
  border-radius: 100px;
  cursor: pointer;

  right: 8.2vw;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' /%3E%3C/svg%3E%0A");
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-position: 0.8rem center;

  &:disabled {
    background-color: #f0f0f0;
  }
`;
const Banner = styled.div`
  display: flex;
  width: 80vw;
`;
const BannerImg = styled.img`
  width: 100%;
`;
const SwiperPlayButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 16rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(26, 29, 33, 0.9);
  border-radius: 100px;
  background-color: rgba(26, 29, 33, 0.9);
  cursor: pointer;
`;
const PauseImg = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  filter: invert(99%) sepia(5%) saturate(1%) hue-rotate(330deg) brightness(115%)
    contrast(100%);
`;
const PlayImg = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  margin-left: 0.2rem;
  filter: invert(99%) sepia(5%) saturate(1%) hue-rotate(330deg) brightness(115%)
    contrast(100%);
`;
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  right: 10rem;
  color: white;
  background-color: rgba(26, 29, 33, 0.9);
  width: 5rem;
  height: 2.5rem;
  border: 1px solid rgba(26, 29, 33, 0.9);
  border-radius: 100px;
`;
