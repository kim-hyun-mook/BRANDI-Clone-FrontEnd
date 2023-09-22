import styled from 'styled-components';
import PurchasePrice from './PurchasePrice';

const DetailPurchase = ({productData }) => {
  return (
    <PurchaseContents>
      <PurchasePrice productData={productData} />
    </PurchaseContents>
  );
};

export default DetailPurchase;

const PurchaseContents = styled.div`
  font-family: 'Noto Sans', sans-serif;
  width: 55%;
  height: auto;
  padding: 0 0 0 50px;

  @media all and (max-width: 768px) {
    width: 100%;
    padding: 150px 20px 0px 20px;
    box-sizing: border-box;
  }
`;
