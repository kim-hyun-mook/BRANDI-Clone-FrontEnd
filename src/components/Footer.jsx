import React from 'react';
import styled from 'styled-components';
import './FontStyle.css';
import questionIco from '../images/questionIco.png';
import plusFriendIco from '../images/plusFriendIco.png';
import fbIco from '../images/fbIco.png';
import instaIco from '../images/instaIco.png';
import CertificationMark01 from '../images/CertificationMark01.png';
import CertificationMark02 from '../images/CertificationMark02.png';

const Footer = () => {
  return (
    <FooterWrap>
      <footer>
        <div className="footerLayout">
          <div className="privacyFlex">
            <div className="pricacyLink">
              <a href="#n">이용약관</a>
              <a className="bold" href="#n">
                개인정보처리방침
              </a>
              <a href="#n">사업자정보확인</a>
              <a href="#n">인재채용</a>
              <a href="#n">입점문의</a>
              <a href="#n">셀러어드민</a>
            </div>

            <ul className="snsLink">
              <li>
                <a href="#n">자주묻는 질문</a>
              </li>

              <li>
                <a href="#n">플러스친구</a>
              </li>

              <li>
                <a href="#n">페이스북</a>
              </li>

              <li>
                <a href="#n">인스타그램</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="line"></div>

        <div className="footerLayout">
          <div className="coptRightBox">
            <div className="infor">
              <span className="title">(주)브랜디</span>
              <span className="text">
                대표이사 : 서정민 사업자등록번호 : 220-88-93187 통신판매업신고 :
                2016-서울강남-00359 <br />
                호스팅사업자 : (주)브랜디 주소 : 서울 성동구 왕십리로 125,
                11층(성수동1가, 케이디타워) 브랜디는 통신판매중개자로서 통신판매
                당사자가 아니며, 판매자가 등록한 상품정보 및 거래에 브랜디는
                책임을 지지 않습니다.
              </span>
            </div>

            <div className="customerServiceBox">
              <span className="title">고객센터 1566-6575</span>
              <div className="dateInfor">
                <p>
                  <span className="title">영업시간</span>
                  <span className="text">
                    {' '}
                    AM 10:00 ~ PM 17:00 (주말 및 공휴일 휴무)
                  </span>
                </p>

                <p>
                  <span className="title">점심시간 </span>
                  <span className="text">PM 12:30 ~ PM 13:30</span>
                </p>

                <p>
                  <span className="title">고객문의</span>
                  <span className="text">brandics@brandi.co.kr</span>
                </p>
              </div>
            </div>
          </div>

          <p className="SafeText">
            <span>
              안전거래센터<a href="#">신고하기</a>
            </span>
          </p>

          <div className="CertificationBox">
            <div className="Certificat">
              <div className="CertificationContents">
                <span>
                  <i className="title">인증범위</i>
                  <i>
                    온라인 쇼핑몰 서비스 운영 (브랜디, 하이버, 플레어,
                    서울스토어) (심사받지 않은 물리적 인프라 제외)
                  </i>
                </span>

                <span>
                  <i className="title">유효기간</i>
                  <i>2022-12-07 ~ 2025-12-06</i>
                </span>
              </div>

              <div className="CertificationContents02">
                <span>
                  당사는 고객님의 안전거래를 위해 관련 법률에 의거하여
                  나이스페이먼츠의 에스크로 서비스를 적용하고 있습니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterWrap>
  );
};

export default Footer;
const FooterWrap = styled.div`
  width: 100%;
  padding-bottom: 50px;
  background: rgba(242, 244, 247, 0.6);
  margin-top: 40px;
  footer {
    width: 100%;
    font-family: 'Noto Sans KR';
  }
  div.footerLayout {
    width: 1200px;
    margin: 0 auto;
  }

  div.privacyFlex {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    position: relative;
  }

  div.privacyFlex a {
    color: #5f6773;
    text-decoration: none;
  }

  div.pricacyLink {
    display: flex;
    justify-content: flex-start;
  }
  div.pricacyLink a {
    padding: 10px 20px 0 20px;
    display: inline-block;
    position: relative;
    font-weight: 400;
    font-size: 14px;
    color: #5f6773;
  }
  div.pricacyLink a:after {
    content: '';
    width: 1px;
    height: 13px;
    background: #b3b2b2;
    position: absolute;
    top: 10px;
    right: 0;
  }
  div.pricacyLink a:last-child:after {
    content: none;
  }
  div.pricacyLink a.bold {
    font-weight: bold;
  }

  ul.snsLink {
    display: flex;
    justify-content: flex-start;
  }
  ul.snsLink li a {
    display: inline-block;
    padding: 10px 10px 0 40px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
    position: relative;
  }

  ul.snsLink li:last-child a {
    padding: 10px 0px 0 40px;
  }

  ul.snsLink li a:before {
    content: '';
    width: 35px;
    height: 35px;
    background: url(${questionIco}) no-repeat;
    position: absolute;
    top: 0;
    left: 0;
  }

  ul.snsLink li:nth-child(2) a:before {
    background: url(${plusFriendIco}) no-repeat;
  }

  ul.snsLink li:nth-child(3) a:before {
    background: url(${fbIco}) no-repeat;
  }

  ul.snsLink li:nth-child(4) a:before {
    background: url(${instaIco}) no-repeat;
  }

  div.line {
    border-bottom: 1px solid #ebeef2;
    padding-top: 10px;
  }

  div.coptRightBox {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 40px 0 0 0;
  }

  div.infor {
    width: 60%;
  }

  div.infor span.title {
    font-size: 18px;
    font-weight: 500;
    display: block;
  }

  div.infor span.text {
    line-height: 150%;
    font-size: 14px;
    color: #5f6773;
    padding: 15px 0 0 0;
    display: block;
  }

  div.customerServiceBox {
    width: 30%;
  }
  div.customerServiceBox span.title {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 15px;
    display: block;
  }
  div.customerServiceBox div.dateInfor p {
    display: flex;
    justify-content: flex-start;
  }
  div.customerServiceBox div.dateInfor p span {
    display: inline-block;
    padding-bottom: 7px;
    padding-right: 5px;
  }
  div.customerServiceBox div.dateInfor p span.title {
    font-size: 14px;
    color: #5f6773;
  }
  div.customerServiceBox div.dateInfor p span.text {
    font-size: 14px;
    color: #5f6773;
    font-weight: 300;
  }

  p.SafeText {
    padding: 20px 0 0 0;
  }

  p.SafeText span {
    font-size: 14px;
    color: #5f6773;
    font-weight: 600;
  }
  p.SafeText span a {
    text-decoration: underline;
    font-size: 14px;
    font-weight: 300;
    color: #5f6773;
    display: inline-block;
    padding: 0 0 0 7px;
  }

  div.CertificationBox {
    width: 100%;
    padding: 20px 0 0 0;
    box-sizing: border-box;
  }
  div.Certificat div.CertificationContents {
    position: relative;
    padding: 9px 0 40px 44px;
    display: block;
  }

  div.Certificat div.CertificationContents:before {
    content: '';
    width: 37px;
    height: 36px;
    background: url(${CertificationMark01}) no-repeat;
    position: absolute;
    top: 5px;
    left: 0;
  }
  div.Certificat div.CertificationContents span {
    display: flex;
    justify-content: flex-start;
    color: #989ca1;
  }

  div.Certificat div.CertificationContents span i {
    font-size: 12px;
    padding-bottom: 5px;
  }

  div.Certificat div.CertificationContents span i.title {
    font-style: normal;
    display: inline-block;
    padding: 0 10px 0 0px;
    font-weight: 600;
  }

  div.Certificat div.CertificationContents02 {
    position: relative;
    padding: 5px 0 40px 44px;
    display: block;
  }

  div.Certificat div.CertificationContents02:before {
    content: '';
    width: 37px;
    height: 36px;
    background: url(${CertificationMark02}) no-repeat;
    position: absolute;
    top: 0;
    left: 0;
  }

  div.Certificat div.CertificationContents02 span {
    color: #989ca1;
    font-size: 12px;
  }

  @media all and (max-width: 1200px) {
    div.footerLayout {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }

    div.pricacyLink {
      flex-flow: wrap;
    }

    ul.snsLink {
      flex-flow: wrap;
    }
    ul.snsLink li a {
      padding-bottom: 20px;
    }
  }

  @media all and (max-width: 680px) {
    div.privacyFlex {
      flex-flow: wrap;
    }

    div.pricacyLink {
      width: 100%;
    }

    div.pricacyLink a:after {
      content: none;
    }

    div.pricacyLink a:first-child {
      padding: 10px 20px 0 0px;
    }

    div.pricacyLink a:nth-child(5) {
      padding: 10px 20px 0 0px;
    }

    ul.snsLink {
      width: 100%;
      padding-top: 20px;
    }

    div.coptRightBox {
      flex-flow: wrap;
    }

    div.infor {
      width: 100%;
    }

    div.customerServiceBox {
      width: 100%;
    }

    div.customerServiceBox span.title {
      padding: 20px 0 15px 0;
    }

    div.customerServiceBox div.dateInfor p span {
      padding: 0px 0 15px 0;
    }

    div.customerServiceBox div.dateInfor p span.text {
      padding: 0 0 0 10px;
    }
  }
`;
