import React from 'react';
import { styled } from 'styled-components';

const MdCard = ({ title, price, img }) => {
  return (
    <CardUI>
      <ImgDiv>
        <ProductImg src={img} alt="" />
      </ImgDiv>
      <ProductTitle>{title}</ProductTitle>
      <InfoPrice>
        <SellingPrice>{price}원</SellingPrice>
      </InfoPrice>
    </CardUI>
  );
};

export default MdCard;

const CardUI = styled.div`
  width: 15rem;
  height: 21rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  width: 15rem;
  height: 16rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductImg = styled.img`
  height: 100%;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const InfoPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 1.2rem;
`;

const SellingPrice = styled.div`
  font-weight: bold;
`;
const ProductTitle = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 1.1rem;
  margin-top: 0.5rem;
`;
