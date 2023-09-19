import styled from "styled-components";
import DetailPicture from "../../components/DetailPicture";
import DetailPurchase from "../../components/DetailPurchase";
import { Reset } from "styled-reset";

const ProductDetailPage = () => {
  return (
    <DeTailWrap>
      <Reset />
      <div className="deTailPageContents">
        <div className="deTailPageFlex">
          <DetailPicture />
          <DetailPurchase />
        </div>
      </div>
    </DeTailWrap>
  );
};

export default ProductDetailPage;

const DeTailWrap = styled.div`
  width: 1200px;
  margin: 0 auto;

  .deTailPageFlex {
    display: flex;
    justify-content: space-between;
  }
`;
