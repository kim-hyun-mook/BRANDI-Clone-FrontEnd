import Banners from './../../components/Banners/Banners';
import { styled } from 'styled-components';
import Card from './../../components/ui/Card/Card';
import './MainPage.css';
import { useState } from 'react';

const MainPage = () => {
  const [page, setPage] = useState(1);
  const limit = 8;
  const offset = (page - 1) * limit;

  const productsData = [
    {
      title: '[예뻐요] 이플 반목 셔링 반팔 티(4color)_니드어린',
      company: '니드어린',
      dc: '10%',
      price: 24930,
      img: '/p1.jpg',
    },
    {
      title:
        '~2XL,4Col[기장선택/인생롱와이드]속밴딩 자신만만 워싱 롱와이드 극찬핏 청바지 데님팬츠_복플레이스',
      company: '복플레이스',
      dc: '10%',
      price: 28440,
      img: '/p2.jpg',
    },
    {
      title: '[예뻐요] 이플 반목 셔링 반팔 티(4color)_니드어린',
      company: '니드어린',
      dc: '10%',
      price: 24930,
      img: '/p1.jpg',
    },
    {
      title:
        '~2XL,4Col[기장선택/인생롱와이드]속밴딩 자신만만 워싱 롱와이드 극찬핏 청바지 데님팬츠_복플레이스',
      company: '복플레이스',
      dc: '10%',
      price: 28440,
      img: '/p2.jpg',
    },
    {
      title: '[예뻐요] 이플 반목 셔링 반팔 티(4color)_니드어린',
      company: '니드어린',
      dc: '10%',
      price: 24930,
      img: '/p1.jpg',
    },
    {
      title:
        '~2XL,4Col[기장선택/인생롱와이드]속밴딩 자신만만 워싱 롱와이드 극찬핏 청바지 데님팬츠_복플레이스',
      company: '복플레이스',
      dc: '10%',
      price: 28440,
      img: '/p2.jpg',
    },
    {
      title: '[예뻐요] 이플 반목 셔링 반팔 티(4color)_니드어린',
      company: '니드어린',
      dc: '10%',
      price: 24930,
      img: '/p1.jpg',
    },
    {
      title:
        '~2XL,4Col[기장선택/인생롱와이드]속밴딩 자신만만 워싱 롱와이드 극찬핏 청바지 데님팬츠_복플레이스',
      company: '복플레이스',
      dc: '10%',
      price: 28440,
      img: '/p2.jpg',
    },
    {
      title:
        '~2XL,4Col[기장선택/인생롱와이드]속밴딩 자신만만 워싱 롱와이드 극찬핏 청바지 데님팬츠_복플레이스',
      company: '복플레이스',
      dc: '10%',
      price: 28440,
      img: '/p2.jpg',
    },
    {
      title: '[예뻐요] 이플 반목 셔링 반팔 티(4color)_니드어린',
      company: '니드어린',
      dc: '10%',
      price: 24930,
      img: '/p1.jpg',
    },
  ];

  const sliceData = (data) => {
    if (data) {
      let result = data.slice(offset, offset + limit);
      return result;
    }
  };

  const renderCard = (product) => {
    return (
      <Card
        title={product.title}
        company={product.company}
        dc={product.dc}
        price={product.price}
        img={product.img}
      />
    );
  };

  const prevButtonHandler = () => {
    setPage((prev) => prev - 1);
  };
  const nextButtonHandler = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <div>MainPage</div>
      <Banners />
      <div className='main-contents'>
        <div className="section">
          <h2 className="section-title">오늘은 이 상품 어때요?</h2>
          <div className="section-pagination">
            <div className="page-count">{page}/5</div>
            <PrevButton
              className="list-button-prev"
              onClick={prevButtonHandler}
              disabled={page === 1 ? true : false}
            />
            <NextButton
              className="list-button-next"
              onClick={nextButtonHandler}
              disabled={page === 5 ? true : false}
            />
          </div>
        </div>
        <div className="products-wrap">
          {sliceData(productsData).map(renderCard)}
        </div>
      </div>
    </>
  );
};

export default MainPage;

const PrevButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' /%3E%3C/svg%3E%0A");
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebeef3;
  background-color: white;
  cursor: pointer;

  &:disabled {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none'  viewBox='0 0 24 24' stroke-width='1.5' stroke='gray' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' /%3E%3C/svg%3E%0A");
    cursor: auto;
  }
`;
const NextButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' /%3E%3C/svg%3E%0A");
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebeef3;
  background-color: white;
  cursor: pointer;

  &:disabled {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='gray' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' /%3E%3C/svg%3E%0A");
    cursor: auto;
  }
`;
