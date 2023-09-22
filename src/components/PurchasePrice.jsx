import React, { useState } from 'react';
import styled from 'styled-components';
import Images from '@components/Images';
import HomeIco from '../images/homeIco.png';
import RightArrow from '../images/rightArrorw.png';
import icnPdpbPay from '../images/icn-pdp-bpay.png';
import iconStar from '../images/icon-star.png';
import PurchaseDelivery from './PurchaseDelivery';

const PurchasePrice = ({ productData }) => {
  //토글
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    //쿠폰받기confirm
    const result = window.confirm(
      '로그인이 필요한 서비스입니다.\n로그인 페이지로 이동하시겠습니까?'
    );
    if (result) {
      alert('로그인 페이지로 이동합니다.');
    } else {
      alert('취소를 눌렀습니다.');
    }
  };

  //토글
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <PurchasePriceWrap>
        <a className="pageLink">{productData.shopName}</a>
        <span className="pageTitle">{productData.productName}</span>
        <div className="disCount-priCe">
          <p>
            <span className="disCountPercent">
              {productData.discount !== 0 && productData.discount}
              {productData.discount !== 0 && '%'}
            </span>
            <span className="disCountPrices">
              {productData.discount !== 0
                ? (
                    productData.price *
                    ((100 - productData.discount) / 100)
                  ).toLocaleString('ko-KR')
                : productData.price.toLocaleString('ko-KR')}
              원
            </span>
            <span className="priceBeforeDiscount">
              {productData.price.toLocaleString('ko-KR')}
              <i>원</i>
            </span>
          </p>
          <button className="coupon" onClick={handleButtonClick}>
            쿠폰받기
          </button>
        </div>
        <div className="finalExpectedPurchase">
          <div className="finalFlexWrap">
            <span className="tiTile">최종 예상 구매가</span>

            <p className="PriceToggleWrap">
              <span className="FinalPriceText">
                21,190<i>원</i>
              </span>
              <a
                className={isOpen ? 'Toggle active' : 'Toggle'}
                onClick={toggleDropdown}
              ></a>
            </p>
          </div>
          {isOpen && (
            <div className="conTents">
              <p className="basicPrice">
                <span>기본가격</span>
                <span>27,700원</span>
              </p>
              <p className="instantSaleDiscount">
                <span>판매자 즉시 할인</span>
                <span>-2,770원</span>
              </p>
              <p className="couponMaxDiscount">
                <span>쿠폰 최대 할인</span>
                <span>-3,740원</span>
              </p>
            </div>
          )}
        </div>

        <div className="fastPay">
          <Images imgSrc={icnPdpbPay} className="icnPdpbPay" />
          <span>결제 시</span>
        </div>

        <p className="accuMulateText">1% 적립 (249원)</p>

        <div className="reviewPurschaseNumberBox">
          <div className="reviewText">
            <span className="starBox">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>

            <span className="seeReview">192개 리뷰보기</span>
          </div>

          <span className="pursChaseNumber">2,378개 구매중</span>
        </div>
      </PurchasePriceWrap>

      <PurchaseDelivery />
    </>
  );
};

export default PurchasePrice;
const PurchasePriceWrap = styled.div`
  width: 100%;
  a.pageLink {
    text-decoration: none;
    color: #333;
    display: inline-block;
    position: relative;
    padding: 2px 30px 0 30px;
    font-size: 18px;
  }
  a.pageLink:before {
    content: '';
    width: 20px;
    height: 20px;
    background-image: url(${HomeIco});
    position: absolute;
    top: 0;
    left: 0px;
    background-size: 20px;
  }
  a.pageLink:after {
    content: '';
    width: 15px;
    height: 18px;
    background-image: url(${RightArrow});
    background-size: 18px;
    position: absolute;
    top: 2px;
    right: 0;
  }
  span.pageTitle {
    display: block;
    font-size: 26px;
    font-weight: 500;
    padding: 20px 0 0 0;
    box-sizing: border-box;
  }
  .disCount-priCe {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 20px 0;
  }
  .disCountPercent {
    font-size: 30px;
    font-weight: bold;
    color: #ff204b;
  }
  .disCountPrices {
    font-size: 30px;
    font-weight: bold;
    color: #333;
    padding: 0 0 0 10px;
  }
  .priceBeforeDiscount {
    text-decoration: line-through;
    font-size: 20px;
    color: #808893;
    outline-color: rgba(42, 116, 200, 0.9);
    padding: 0 0 0 10px;
  }
  .priceBeforeDiscount i {
    font-size: 15px;
    font-style: normal;
  }
  button.coupon {
    padding: 7px 10px;
    background-color: #333;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .finalExpectedPurchase {
    width: 100%;
    border: solid 1px #e1e1e1;
    border-radius: 5px;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .finalFlexWrap {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    transition: max-height 0.3s ease-in-out;
  }
  span.tiTile {
    font-size: 18px;
    font-weight: bold;
    padding: 5px 0 0 0;
  }
  .FinalPriceText {
    font-size: 30px;
    color: #ff204b;
    font-weight: bold;
  }
  .FinalPriceText i {
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
  }
  .Toggle {
    display: inline-block;
    background-image: url(${RightArrow});
    background-repeat: no-repeat;
    background-position: 11px 0px;
    background-size: 20px;
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
    padding: 0 20px;
    box-sizing: border-box;
    transition: all ease 0.5s 0s;
    cursor: pointer;
  }

  .Toggle.active {
    transform: rotate(270deg);
  }

  .conTents {
    width: 100%;
    border-top: solid 1px #e1e1e1;
  }

  .basicPrice {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 20px 0;
    color: #b4b3b3;
  }
  .instantSaleDiscount {
    display: flex;
    justify-content: space-between;
    padding: 0px 0 20px 0;
    color: #b4b3b3;
  }
  .couponMaxDiscount {
    display: flex;
    justify-content: space-between;
    padding: 0px 0 20px 0;
    color: #b4b3b3;
  }

  .fastPay {
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: flex-start;
  }

  .fastPay img {
    width: 82px;
  }
  .fastPay span {
    display: inline-block;
    padding: 2px 0 0 10px;
  }
  p.accuMulateText {
    background-color: #e7f5ff;
    color: #0080e0;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 8px;
    display: inline-block;
    border-radius: 5px;
  }
  div.reviewPurschaseNumberBox {
    display: flex;
    justify-content: flex-start;
    padding: 20px 0 0 0;
  }
  div.reviewText {
    display: flex;
    justify-content: flex-start;
  }
  div.reviewText span.starBox {
    display: flex;
    justify-content: flex-start;
  }
  div.reviewText span.starBox i {
    display: inline-block;
    width: 17px;
    height: 17px;
    background: url(${iconStar});
    background-repeat: no-repeat;
    background-size: 17px;
    margin: 0 0 0 5px;
    background-position: 0px -1px;
  }
  div.reviewText span.starBox i:first-child {
    margin: 0 0 0 0px;
  }
  span.seeReview {
    padding: 0 10px 0 20px;
    text-decoration: underline;
    cursor: pointer;
    position: relative;
  }
  span.seeReview:after {
    content: '';
    width: 1px;
    height: 16px;
    background: #333;
    position: absolute;
    top: 0;
    right: 0;
  }
  span.pursChaseNumber {
    padding: 0 0 0 10px;
  }
`;
