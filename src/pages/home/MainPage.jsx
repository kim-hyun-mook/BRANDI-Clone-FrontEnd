import Banners from './../../components/Banners/Banners';
import { styled } from 'styled-components';
import Card from './../../components/ui/Card/Card';
import MdCard from './../../components/ui/Card/MdCard';
import './MainPage.css';
import { useState } from 'react';
import BenefitCard from '../../components/ui/Card/BenefitCard';

const MainPage = () => {
  const byDayBig = '/bydaybig.png';

  const [page, setPage] = useState(1);
  const limit = 8;
  const offset = (page - 1) * limit;

  const [mdPage, setMdPage] = useState(1);
  const mdLimit = 3;
  const mdOffset = (mdPage - 1) * mdLimit;

  const [benefitPage, setBenefitPage] = useState(1);

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
  ];

  const mdProductsData = [
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
  ];

  const benefitProductsData = [
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
  ];

  const sliceMdData = (data) => {
    if (data) {
      let result = data.slice(mdOffset, mdOffset + mdLimit);
      return result;
    }
  };

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
  const renderMdCard = (product) => {
    return (
      <MdCard
        title={product.title}
        company={product.company}
        dc={product.dc}
        price={product.price}
        img={product.img}
      />
    );
  };
  const renderBenefitCard = (product) => {
    return (
      <BenefitCard
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
  const mdPrevButtonHandler = () => {
    setMdPage((prev) => prev - 1);
  };
  const mdNextButtonHandler = () => {
    setMdPage((prev) => prev + 1);
  };
  const benefitPrevButtonHandler = () => {
    setBenefitPage((prev) => prev - 1);
  };
  const benefitNextButtonHandler = () => {
    setBenefitPage((prev) => prev + 1);
  };

  return (
    <>
      <div>MainPage</div>
      <Banners />
      <div className="main-contents">
        <section className="section">
          <div className="section-title">
            <div className="section-title-text">오늘은 이 상품 어때요?</div>
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
        </section>

        <section className="section">
          <div className="section-title">
            <div className="section2-title">
              <img src={byDayBig} alt="" />
              <div className="section-title-text">상품은 내일 도착!</div>
            </div>
          </div>
          <div className="products-wrap">{productsData.map(renderCard)}</div>
          <button className="see-more">
            <p>하루배송 상품</p>더보기 <img src="/right.svg" alt="" />
          </button>
        </section>

        <section className="main-contents-banner">
          <img src="/b7.jpg" alt="" />
          <img src="/b8.jpg" alt="" />
        </section>

        <section className="section">
          <div className="section-title">
            <div className="section-title-text">TODAY 카테고리 베스트</div>
          </div>
          <div className="list-button-best">
            <button className="list-button">전체</button>
            <button className="list-button">트랜드</button>
            <button className="list-button">브랜드</button>
            <button className="list-button">뷰티</button>
            <button className="list-button">라이프</button>
          </div>
          <div className="products-wrap">{productsData.map(renderCard)}</div>
          <button className="see-more">
            <p>베스트</p>더보기 <img src="/right.svg" alt="" />
          </button>
        </section>

        <section className="section">
          <div className="section-title">
            <div className="section-title-text">신상 모아보기</div>
          </div>
          <div className="list-button-best">
            <button className="list-button">전체</button>
            <button className="list-button">브랜드</button>
            <button className="list-button">뷰티</button>
            <button className="list-button">라이프</button>
          </div>
          <div className="products-wrap">{productsData.map(renderCard)}</div>
          <button className="see-more">
            <p>트렌드 신상</p>더보기 <img src="/right.svg" alt="" />
          </button>
        </section>

        <section className="section">
          <div className="section-title">
            <div className="section-title-text">MD's PICK</div>
            <div className="section-pagination">
              <div className="page-count">{mdPage}/2</div>
              <PrevButton
                className="list-button-prev"
                onClick={mdPrevButtonHandler}
                disabled={mdPage === 1 ? true : false}
              />
              <NextButton
                className="list-button-next"
                onClick={mdNextButtonHandler}
                disabled={mdPage === 2 ? true : false}
              />
            </div>
          </div>
          <div className="md-contents">
            <div className="brandi-pick">
              <div className="upper">
                <p>BRANDI</p>
                <p>MD's PICK</p>
              </div>
              <p className="lower">이 상품 어때요?</p>
            </div>
            <div className="md-products-wrap">
              {sliceMdData(mdProductsData).map(renderMdCard)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <div className="section-title-text">지금 뜨고 있는 브랜디 혜택</div>
            <div className="section-pagination">
              <div className="page-count">{benefitPage}/3</div>
              <PrevButton
                className="list-button-prev"
                onClick={benefitPrevButtonHandler}
                disabled={benefitPage === 1 ? true : false}
              />
              <NextButton
                className="list-button-next"
                onClick={benefitNextButtonHandler}
                disabled={benefitPage === 3 ? true : false}
              />
            </div>
          </div>
          <div className="benefits-wrap">
            {benefitPage === 1 && (
              <>
                <div className="benefit">
                  <div>
                    <img src="/benefit1.png" alt="" />
                  </div>
                  <div className="benefit-products-wrap">
                    {benefitProductsData.map(renderBenefitCard)}
                  </div>
                </div>

                <div className="benefit">
                  <div>
                    <img src="/benefit2.png" alt="" />
                  </div>
                  <div className="benefit-products-wrap">
                    {benefitProductsData.map(renderBenefitCard)}
                  </div>
                </div>
              </>
            )}
            {benefitPage === 2 && (
              <>
                <div className="benefit">
                  <div>
                    <img src="/benefit3.png" alt="" />
                  </div>
                  <div className="benefit-products-wrap">
                    {benefitProductsData.map(renderBenefitCard)}
                  </div>
                </div>

                <div className="benefit">
                  <div>
                    <img src="/benefit4.png" alt="" />
                  </div>
                  <div className="benefit-products-wrap">
                    {benefitProductsData.map(renderBenefitCard)}
                  </div>
                </div>
              </>
            )}
            {benefitPage === 3 && (
              <>
                <div className="benefit">
                  <div>
                    <img src="/benefit5.png" alt="" />
                  </div>
                  <div className="benefit-products-wrap">
                    {benefitProductsData.map(renderBenefitCard)}
                  </div>
                </div>

                <div className="benefit">
                  <div>
                    <img src="/benefit6.png" alt="" />
                  </div>
                  <div className="benefit-products-wrap">
                    {benefitProductsData.map(renderBenefitCard)}
                  </div>
                </div>
              </>
            )}
          </div>

          <button className="see-more">
            <p>더 많은 혜택</p>보러가기 <img src="/right.svg" alt="" />
          </button>
        </section>
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
