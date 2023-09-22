import styled from 'styled-components';
import DetailPicture from '../../components/DetailPicture';
import DetailPurchase from '../../components/DetailPurchase';
import { useLocation } from 'react-router-dom';

const ProductDetailPage = () => {
  const { data: productData } = useLocation().state;
  return (
    <DeTailWrap>
      <div className="deTailPageContents">
        <div className="deTailPageFlex">
          <DetailPicture productImg={productData?.productInfoImages } />
          <DetailPurchase productData={ productData} />
        </div>
      </div>
    </DeTailWrap>
  );
};

export default ProductDetailPage;

const DeTailWrap = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media all and (max-width: 1200px) {
    width: 100%;

    div.payPurchaseBox {
      justify-content: flex-start;
      flex-flow: wrap;
    }

    div.payPurchaseBox a.buyNow {
      width: 48%;
    }

    div.payPurchaseBox a.buyNowPay {
      width: 48%;
    }

    div.payPurchaseBox a.buyNowPay i.text:before {
      width: 60px;
      background-size: 60px;
      top: -4px;
    }

    a.cartNow {
      margin-top: 10px;
    }

    a.likeNow {
      margin-top: 10px;
    }

    .slick-slider .slick-track,
    .slick-slider .slick-list {
      height: 100%;
    }
  }

  @media all and (max-width: 1000px) {
    div.payPurchaseBox a.buyNowPay i.text:before {
      left: 22px;
    }

    .finalFlexWrap {
      flex-flow: wrap;
    }

    .deliveryInfor p {
      flex-flow: wrap;
    }
  }

  .deTailPageFlex {
    display: flex;
    justify-content: space-between;
  }

  @media all and (max-width: 768px) {
    .deTailPageFlex {
      flex-flow: wrap;
    }
  }
`;
