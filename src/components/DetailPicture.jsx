import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Images from '@components/Images';
import Bigimg from '../images/Bigimg01.jpeg';
import Bigimg02 from '../images/Bigimg02.jpeg';
import Bigimg03 from '../images/Bigimg03.jpeg';
import Bigimg04 from '../images/Bigimg04.jpeg';

const DetailPicture = () => {
  const sliderSettings = {
    dots: true, // 점(도트) 표시 여부
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <PictureContents>
      <div>
        <Slider {...sliderSettings}>
          <div>
            <Images imgSrc={Bigimg} />
          </div>

          <div>
            <Images imgSrc={Bigimg02} />
          </div>

          <div>
            <Images imgSrc={Bigimg03} />
          </div>

          <div>
            <Images imgSrc={Bigimg04} />
          </div>
        </Slider>
      </div>
    </PictureContents>
  );
};

export default DetailPicture;

const PictureContents = styled.div`
  width: 45%;
  img {
    width: 100%;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    height: auto;
  }

  .slick-slide img {
    width: 100%;
    height: 100%;
  }

  .slick-dots {
    display: flex !important;
    justify-content: flex-start;
    position: relative;
    bottom: -10px;
  }

  .slick-dots li {
    width: 95px;
    height: auto;
    margin: 0 0px;
    padding: 0 15px 0 0;
  }

  .slick-dots li button {
    width: auto;
    height: auto;
  }

  .slick-dots li button:before {
    width: 100px;
    height: 100px;
    background-size: 100px !important;
    background: url(${Bigimg});
    font-size: 0px;
    opacity: 0.35;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.95;
  }

  .slick-dots li:nth-child(2) button:before {
    background: url(${Bigimg02});
  }

  .slick-dots li:nth-child(3) button:before {
    background: url(${Bigimg03});
  }

  .slick-dots li:nth-child(4) button:before {
    background: url(${Bigimg04});
  }
`;
