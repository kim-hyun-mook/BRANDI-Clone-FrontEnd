import React from 'react';
import BenefitCard from './BenefitCard';

const BenefitInfo = ({src}) => {
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
  return (
    <div className="benefit">
      <div>
        <img src={src} alt="" />
      </div>
      <div className="benefit-products-wrap">
        {benefitProductsData.map(renderBenefitCard)}
      </div>
    </div>
  );
};

export default BenefitInfo;
