import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Images from '@components/Images';
import Bigimg from '../images/Bigimg01.jpeg';
import Bigimg02 from '../images/Bigimg02.jpeg';
import Bigimg03 from '../images/Bigimg03.jpeg';
import Bigimg04 from '../images/Bigimg04.jpeg';

const DetailPicture = ({productImg }) => {
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
    <PictureContents defaultImg={productImg} >
      <div>
        <Slider {...sliderSettings}>
          <div>
            <Images imgSrc={productImg[0]} />
          </div>

          <div>
            <Images imgSrc={productImg[1]} />
          </div>

          <div>
            <Images imgSrc={productImg[2]} />
          </div>

          <div>
            <Images imgSrc={productImg[3]} />
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
    background: url(${(props) => props.defaultImg});
    font-size: 0px;
    opacity: 0.35;
  }
  ${(props) =>
    props.defaultImg &&
    props.defaultImg
      .map(
        (img, index) => `
    .slick-dots li:nth-child(${index + 1}) button:before {
      background: url(${img});
    }
  `
      )
      .join('')}

  .slick-dots li.slick-active button:before {
    opacity: 0.95;
  }
`;
