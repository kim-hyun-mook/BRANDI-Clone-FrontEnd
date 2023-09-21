import React, { useState } from "react";
import styled from "styled-components";
import dayDelivery from "../images/dayDelivery.png";
import dayDeliveryBig from "../images/dayDeliveryBig.png";
import RightArrow from "../images/rightArrorw.png";
import iClogoNpay from "../images/iClogoNpay.png";
import cartIco from "../images/cartIco.png";
import likeIco from "../images/likeIco.png";

const PurchaseDelivery = () => {
  //토글
  const [isOpen, setIsOpen] = useState(false);
  const [optionIsOpen, setOptionIsOpen] = useState(false);
  const [optionSizeIsOpen, setOptionSizeIsOpen] = useState(false);

  //토글
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleOptionDropdown = () => {
    setOptionIsOpen(!optionIsOpen);
  };

  const toggleOptionSizeDropdown = () => {
    setOptionSizeIsOpen(!optionSizeIsOpen);
  };

  return (
    <ShippingInforWrap>
      <div className="deliveryInfor">
        <p>
          <span className="infor">배송정보</span>
          <span class="ScheduledArrive">내일(목) 도착예정</span>
          <span className="dayDelivery">하루배송</span>
          <span className="freeShipping">무료배송</span>
        </p>
        <a
          className={isOpen ? "Toggle active" : "Toggle"}
          onClick={toggleDropdown}
        ></a>
        {isOpen && (
          <div className="conTent">
            <p class="deliveryLocation">
              <span className="tiTle">서울지역</span>
              <span className="Text">
                <i>오늘(수) 저녁 8시 전 도착 예정 (앱 전용 서비스)</i>
                하루배송 상품 지금 주문 시 적용
              </span>
            </p>

            <p class="deliveryLocation">
              <span className="tiTle">전체 지역</span>
              <span className="Text">
                <i>내일(목) 도착 예정</i>
                하루배송 상품 지금 주문 시 적용
              </span>
            </p>
          </div>
        )}
      </div>

      <div className="shippingOption">
        <div className="oneDayOption">
          <input type="checkbox" />
          <span className="oneDaybg">하루배송</span>
          <label>옵션만 보기</label>
        </div>

        <div className="optionSelectBox">
          <div className="optionSelectColor">
            <div className="flexBox">
              <span className="colorText">[컬러]를 선택하세요.</span>
              <a
                className={optionIsOpen ? "Toggle active" : "Toggle"}
                onClick={toggleOptionDropdown}
              ></a>
            </div>

            {optionIsOpen && (
              <div className="conTent">
                <ul>
                  <li className="oneDayColor">
                    <span className="tiTle">블랙</span>
                    <span className="oneDay">
                      <i className="oneDayBg">하루배송</i>
                      <i className="colorText">내일(목) 도착 예정</i>
                    </span>
                  </li>

                  <li className="oneDayColor">
                    <span className="tiTle">블랙</span>
                    <span className="oneDay">
                      <i className="oneDayBg">하루배송</i>
                      <i className="colorText">내일(목) 도착 예정</i>
                    </span>
                  </li>

                  <li>
                    <span className="tiTle">블랙</span>
                    <span className="standardDelivery">일반배송</span>
                  </li>

                  <li>
                    <span className="tiTle">베이지</span>
                    <span className="standardDelivery">일반배송</span>
                  </li>

                  <li>
                    <span className="tiTle">베이지</span>
                    <span className="standardDelivery">일반배송</span>
                  </li>

                  <li>
                    <span className="tiTle">베이지</span>
                    <span className="standardDelivery">일반배송</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="optionSelectColor">
            <div className="flexBox">
              <span className="colorText">[사이즈]를 선택하세요.</span>
              <a
                className={optionSizeIsOpen ? "Toggle active" : "Toggle"}
                onClick={toggleOptionSizeDropdown}
              ></a>
            </div>

            {optionSizeIsOpen && (
              <div className="conTent size">
                <ul>
                  <li className="oneDayColor">
                    <span className="tiTle">Free</span>
                    <span className="oneDay">
                      <i className="oneDayBg">하루배송</i>
                      <i className="colorText">내일(목) 도착 예정</i>
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="totalPrice">
        <span className="tiTle">총 상품 금액</span>
        <span className="priCe">
          0<i>원</i>
        </span>
      </div>

      <div className="payPurchaseBox">
        <a className="buyNow">바로구매</a>
        <a className="buyNowPay">
          <i className="text">구매</i>
        </a>
        <a className="cartNow"></a>
        <a className="likeNow"></a>
      </div>
    </ShippingInforWrap>
  );
};

export default PurchaseDelivery;

const ShippingInforWrap = styled.div`
  padding: 20px 0 0 0;

  .deliveryInfor {
    border-top: solid 1px #e1e1e1;
    border-bottom: solid 1px #e1e1e1;
    padding: 20px 0;
    box-sizing: border-box;
    position: relative;
  }
  .deliveryInfor p {
    display: flex;
  }
  .deliveryInfor p span {
    display: inline-block;
  }
  .deliveryInfor p span.infor {
    padding: 2px 25px 0 0;
  }

  .deliveryInfor p span.ScheduledArrive {
    color: #0080e0;
    font-weight: bold;
    position: relative;
    padding: 2px 10px 0 0;
  }
  .deliveryInfor p span.ScheduledArrive:after {
    content: "";
    width: 1px;
    height: 18px;
    background: #e1e1e1;
    position: absolute;
    top: 2px;
    right: 0;
  }
  .deliveryInfor p span.dayDelivery {
    padding: 0 0 0 10px;
    text-indent: -9999px;
    width: 80px;
    height: 25px;
    background: url(${dayDelivery}) no-repeat 7px -3px;
  }
  .deliveryInfor p span.freeShipping {
    background-color: #ebeef2;
    padding: 5px 5px;
    color: #808893;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
  }
  .deliveryInfor a.Toggle {
    width: 20px;
    height: 20px;
    background: url(${RightArrow}) no-repeat;
    display: block;
    background-size: 20px;
    position: absolute;
    top: 23px;
    right: 20px;
    transform: rotate(90deg);
    transition: all ease 0.5s 0s;
    cursor: pointer;
  }

  .deliveryInfor a.Toggle.active {
    transform: rotate(270deg);
  }

  .deliveryInfor .conTent {
    background: #f7f7f7;
    padding: 20px 20px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .conTent .deliveryLocation {
    padding-bottom: 20px;
    display: flex;
    justify-content: flex-start;
  }

  .conTent .deliveryLocation:last-child {
    padding-bottom: 0px;
  }

  .conTent .deliveryLocation .tiTle {
    width: 15%;
    color: #808893;
    font-size: 15px;
  }
  .conTent .deliveryLocation .Text {
    width: 80%;
    line-height: 130%;
    color: #acb3bd;
    font-size: 14px;
  }
  .conTent .deliveryLocation .Text i {
    color: #808893;
    display: block;
  }
  .shippingOption {
    padding: 20px 0 0 0;
    box-sizing: border-box;
  }
  .shippingOption .oneDayOption {
    display: flex;
    justify-content: flex-start;
  }
  .shippingOption .oneDayOption input[type="checkbox"] {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .shippingOption .oneDayOption .oneDaybg {
    width: 103px;
    height: 29px;
    background: url(${dayDeliveryBig}) 0px -7px no-repeat;
    background-size: 103px;
    text-indent: -9999px;
    margin-left: 10px;
  }

  .shippingOption .oneDayOption label {
    vertical-align: middle;
    padding: 2px 20px 0 10px;
    display: inline-block;
  }
  div.optionSelectBox {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0 0 0;
  }

  div.optionSelectBox div.optionSelectColor {
    border: solid 1px #e1e1e1;
    border-radius: 5px;
    padding: 20px 0px;
    box-sizing: border-box;
  }

  div.optionSelectBox div.optionSelectColor:last-child {
    margin-top: 10px;
  }

  div.optionSelectBox div.optionSelectColor div.flexBox {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
  }

  div.optionSelectBox div.optionSelectColor a.Toggle {
    width: 20px;
    height: 20px;
    background: url(${RightArrow}) no-repeat;
    display: block;
    background-size: 20px;
    transform: rotate(90deg);
    transition: all ease 0.5s 0s;
    cursor: pointer;
  }

  div.optionSelectBox div.optionSelectColor a.Toggle.active {
    transform: rotate(270deg);
  }

  div.optionSelectColor div.conTent {
    flex-flow: wrap;
    width: 100%;
    padding-top: 15px;
    overflow-y: scroll;
    height: 300px;
  }

  div.optionSelectColor div.conTent.size {
    flex-flow: wrap;
    width: 100%;
    padding-top: 15px;
    overflow: inherit;
    height: auto;
  }

  div.optionSelectColor div.conTent ul {
    width: 100%;
  }
  div.optionSelectColor div.conTent ul li {
    border-bottom: solid 1px #e1e1e1;
    padding: 15px 20px;
    box-sizing: border-box;
  }

  div.optionSelectColor div.conTent ul li:first-child {
    border-top: solid 1px #e1e1e1;
  }

  div.optionSelectColor div.conTent ul li.oneDayColor {
    background: rgba(30, 136, 229, 0.03);
  }

  div.optionSelectColor div.conTent ul li span.tiTle {
    display: block;
  }
  div.optionSelectColor div.conTent ul li span.oneDay {
    display: block;
    padding: 10px 0 0 0;
  }
  div.optionSelectColor div.conTent ul li span.oneDay i.oneDayBg {
    width: 50px;
    height: 25px;
    background: url(${dayDelivery}) no-repeat;
    background-size: 50px;
    text-indent: -9999px;
    display: inline-block;
  }
  div.optionSelectColor div.conTent ul li span.oneDay i.colorText {
    font-size: 13px;
    color: #0080e0;
  }

  span.standardDelivery {
    color: #626161;
    font-size: 14px;
    padding: 10px 0 0 0;
    display: block;
  }

  div.totalPrice {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 0 0 0;
    box-sizing: border-box;
  }

  div.totalPrice .tiTle {
    font-size: 18px;
    color: #202429;
    font-weight: 500;
  }

  div.totalPrice .priCe {
    font-size: 30px;
    color: #ff204b;
    font-weight: bold;
  }
  div.totalPrice .priCe i {
    font-style: normal;
    font-size: 18px;
    display: inline-block;
    font-weight: 500;
  }

  div.payPurchaseBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0 0 0;
    box-sizing: border-box;
  }

  div.payPurchaseBox a {
    display: inline-block;
  }

  div.payPurchaseBox a.buyNow {
    width: 40%;
    background-color: #1e1e1e;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
  }

  div.payPurchaseBox a.buyNowPay {
    width: 40%;
    background-color: #00c73c;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
  }
  div.payPurchaseBox a.buyNowPay i.nPayBg {
    width: 100px;
    height: 57px;
    background: url(${iClogoNpay}) no-repeat;
    background-size: 100px;
    display: inline-block;
  }
  div.payPurchaseBox a.buyNowPay i.text {
    display: block;
    position: relative;
    padding: 0 0 0 70px;
  }
  div.payPurchaseBox a.buyNowPay i.text:before {
    content: "";
    width: 80px;
    height: 57px;
    background: url(${iClogoNpay}) no-repeat;
    background-size: 80px;
    position: absolute;
    top: -8px;
    left: 51px;
  }

  a.cartNow {
    width: 11%;
    height: 58px;
    background: url(${cartIco}) no-repeat center;
    background-size: 33px;
    border: solid 1px #e1e1e1;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
  }

  a.likeNow {
    width: 11%;
    height: 58px;
    background: url(${likeIco}) no-repeat center;
    background-size: 33px;
    border: solid 1px #e1e1e1;
    border-radius: 5px;
    cursor: pointer;
  }
`;
