import React from 'react';
import { Col, Row } from 'antd';

import ImageShopdiDownload from '@/assets/images/image-shopdi-download.png';
import ImageDownloadAppStoreDark from '@/assets/images/image-download-app-store-dark.png';
import ImageDownloadGooglePlayDark from '@/assets/images/image-download-google-play-dark.png';

import { TDownloadProps } from './Download.types.d';
import './Download.scss';

const Download: React.FC<TDownloadProps> = () => {
  return (
    <section className="Download" id="Download">
      <div className="Download-background" />
      <div className="container">
        <div className="Download-wrapper">
          <Row>
            <Col span={24} lg={{ span: 10 }}>
              <div className="Download-image">
                <img src={ImageShopdiDownload} alt="" />
              </div>
            </Col>
            <Col span={24} lg={{ span: 14 }}>
              <h3 className="Download-subtitle">Tải xuống</h3>
              <h2 className="Download-title">LAN TỎA GIÁ TRỊ THỰC ĐẾN CỘNG ĐỒNG CỦA BẠN</h2>
              <p>
                Giới thiệu bạn bè, nhận thưởng hấp dẫn và lan tỏa giá trị thực đến cộng đồng của bạn với các sản phẩm
                chất lượng tại Shopdi
              </p>
              <div className="Download-download flex">
                <a
                  href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Jul0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Jul0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700059410214883_creativeid_485682226069_device_c&gclid=CjwKCAjwgaeYBhBAEiwAvMgp2l2F5Hbor5uHbDXRzAW4khNkk5EebHB3lsl8ZdYrwLi9pUiu97ojjhoCP3wQAvD_BwE&gclsrc=aw.ds"
                  target="_blank"
                  rel="noreferrer"
                  className="Download-download-item"
                >
                  <img src={ImageDownloadGooglePlayDark} alt="" />
                </a>
                <a
                  href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Jul0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Jul0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700059410214883_creativeid_485682226069_device_c&gclid=CjwKCAjwgaeYBhBAEiwAvMgp2l2F5Hbor5uHbDXRzAW4khNkk5EebHB3lsl8ZdYrwLi9pUiu97ojjhoCP3wQAvD_BwE&gclsrc=aw.ds"
                  target="_blank"
                  rel="noreferrer"
                  className="Download-download-item"
                >
                  <img src={ImageDownloadAppStoreDark} alt="" />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Download;
