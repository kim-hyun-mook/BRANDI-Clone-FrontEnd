import Banners from './../../components/Banners/Banners';
import Card from './../../components/ui/Card/Card';
import MdCard from './../../components/ui/Card/MdCard';
import './MainPage.css';
import styled from 'styled-components'
import {  useState } from 'react';
// import BenefitCard from '../../components/ui/Card/BenefitCard';
import PaginationButton from './../../components/ui/Button/PaginationButton';
import BenefitInfo from './../../components/ui/Card/BenefitInfo';
import useGetTodayProductList from '../../hooks/useGetTodayProductList';
import useGetTomorrowProductList from '../../hooks/useGetTomorrowProductList';

const MainPage = () => {
  const byDayBig = '/bydaybig.png';
  const { entities: todayProductData, error, loading} = useGetTodayProductList()
  const { entities: tomorrowProductData, isError, isLoading} = useGetTomorrowProductList()

  const [page, setPage] = useState(1);
  const limit = 8;
  const offset = (page - 1) * limit;
  
  const [mdPage, setMdPage] = useState(1);
  const mdLimit = 3;
  const mdOffset = (mdPage - 1) * mdLimit;
  
  const [benefitPage, setBenefitPage] = useState(1);

  const [bestIndex, setBestIndex] = useState(0);
  const [newIndex, setNewIndex] = useState(0);
  
  if (loading) return <>로딩중입니다.</>
  if(error) return <>상품 조회중 오류가 발생했습니다.</>



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
        key={product.productId}
        productId={product.productId}
        productData={product}
        title={product.productName}
        company={product.shopName}
        dc={product.discount}
        price={product.price}
        img={product?.productInfoImages && product.productInfoImages[0]}
      />
    );
  };
  const renderMdCard = (product) => {
    return (
      <MdCard
        title={product.productName}
        company={product.shopName}
        dc={product.discount}
        price={product.price}
        img={product?.productInfoImages && product.productInfoImages[0]}
      />
    );
  };
  // const renderBenefitCard = (product) => {
  //   return (
  //     <BenefitCard
  //       title={product.title}
  //       company={product.company}
  //       dc={product.dc}
  //       price={product.price}
  //       img={product.img}
  //     />
  //   );
  // };

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

  const changeBestButton = (event) => {
    setBestIndex(Number(event.target.id));
  };
  const changeNewButton = (event) => {
    setNewIndex(Number(event.target.id));
  };

  return (
    <>
      <Banners />
      <div className="main-contents">
        <section className="section" data-aos="fade-up">
          <div className="section-title">
            <div className="section-title-text">오늘은 이 상품 어때요?</div>
            <PaginationButton
              page={page}
              maxPage={5}
              prevButtonHandler={prevButtonHandler}
              nextButtonHandler={nextButtonHandler}
            />
          </div>
          <div className="products-wrap">
            {sliceData(todayProductData&&todayProductData).map(renderCard)}
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <div className="section2-title">
              <img src={byDayBig} alt="" />
              <div className="section-title-text">상품은 내일 도착!</div>
            </div>
          </div>
          <div className="products-wrap">{tomorrowProductData&&todayProductData.slice(16, 24).reverse().map(renderCard)}</div>
          <button className="see-more">
            <p>하루배송 상품</p>더보기 <img src="/right.svg" alt="" />
          </button>
        </section>

        <section className="main-contents-banner">
          <div className="img">
            <img src="/b7.jpg" alt="" />
          </div>

          <div className="img">
            <img src="/b8.jpg" alt="" />
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <div className="section-title-text">TODAY 카테고리 베스트</div>
          </div>
          <div className="list-button-best">
            <ListSelectButton
              id="0"
              onClick={changeBestButton}
              value={bestIndex}
            >
              전체
            </ListSelectButton>
            <ListSelectButton
              id="1"
              onClick={changeBestButton}
              value={bestIndex}
            >
              트랜드
            </ListSelectButton>
            <ListSelectButton
              id="2"
              onClick={changeBestButton}
              value={bestIndex}
            >
              브랜드
            </ListSelectButton>
            <ListSelectButton
              id="3"
              onClick={changeBestButton}
              value={bestIndex}
            >
              뷰티
            </ListSelectButton>
            <ListSelectButton
              id="4"
              onClick={changeBestButton}
              value={bestIndex}
            >
              라이프
            </ListSelectButton>
          </div>
          <div className="products-wrap">{tomorrowProductData.slice(8, 16).map(renderCard)}</div>
          <button className="see-more">
            <p>베스트</p>더보기 <img src="/right.svg" alt="" />
          </button>
        </section>

        <section className="section">
          <div className="section-title">
            <div className="section-title-text">신상 모아보기</div>
          </div>
          <div className="list-button-best">
            <ListSelectButton id="0" onClick={changeNewButton} value={newIndex}>
              전체
            </ListSelectButton>
            <ListSelectButton id="1" onClick={changeNewButton} value={newIndex}>
              브랜드
            </ListSelectButton>
            <ListSelectButton id="2" onClick={changeNewButton} value={newIndex}>
              뷰티
            </ListSelectButton>
            <ListSelectButton id="3" onClick={changeNewButton} value={newIndex}>
              라이프
            </ListSelectButton>
          </div>
          <div className="products-wrap">{todayProductData.slice(16, 24).map(renderCard)}</div>
          <button className="see-more">
            <p>트렌드 신상</p>더보기 <img src="/right.svg" alt="" />
          </button>
        </section>

        <section className="section">
          <div className="section-title">
            <div className="section-title-text">MD's PICK</div>

            <PaginationButton
              page={mdPage}
              maxPage={2}
              prevButtonHandler={mdPrevButtonHandler}
              nextButtonHandler={mdNextButtonHandler}
            />
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
              {sliceMdData(tomorrowProductData).map(renderMdCard)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <div className="section-title-text">지금 뜨고 있는 브랜디 혜택</div>
            <PaginationButton
              page={benefitPage}
              maxPage={3}
              prevButtonHandler={benefitPrevButtonHandler}
              nextButtonHandler={benefitNextButtonHandler}
            />
          </div>
          <div className="benefits-wrap">
            {benefitPage === 1 && (
              <>
                <BenefitInfo src={'/benefit1.png'} />
                <BenefitInfo src={'/benefit2.png'} />
              </>
            )}
            {benefitPage === 2 && (
              <>
                <BenefitInfo src={'/benefit3.png'} />
                <BenefitInfo src={'/benefit4.png'} />
              </>
            )}
            {benefitPage === 3 && (
              <>
                <BenefitInfo src={'/benefit5.png'} />
                <BenefitInfo src={'/benefit6.png'} />
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

const ListSelectButton = styled.button`
  border: 1px solid #c1c7ce;
  border-radius: 50px;
  padding: 0.8rem 1.7rem;
  color: #8b939d;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 1rem;

  ${(props) =>
    props.value === Number(props.id) &&
    ` background-color: #ff365d;
      color: white;
      border: 1px solid #ff365d;`}
`;
