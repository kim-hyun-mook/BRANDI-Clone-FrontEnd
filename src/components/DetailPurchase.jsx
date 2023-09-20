import React from "react";
import styled from "styled-components";
import PurchasePrice from "./PurchasePrice";

const DetailPurchase = () => {
  return (
    <PurchaseContents>
      <PurchasePrice />
    </PurchaseContents>
  );
};

export default DetailPurchase;

const PurchaseContents = styled.div`
  font-family: "Noto Sans", sans-serif;
  width: 55%;
  height: auto;
  padding: 0 0 0 50px;
`;
