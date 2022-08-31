import React from 'react';
import { Col, Row } from 'antd';

import ImageShopdiDownload from '@/assets/images/image-shopdi-download.png';
import ImageDownloadAppStoreDark from '@/assets/images/image-download-app-store-dark.png';
import ImageDownloadGooglePlayDark from '@/assets/images/image-download-google-play-dark.png';
import ImageCircleBackground from '@/assets/images/image-circle-background.png';

import { TDownloadProps } from './Download.types.d';
import './Download.scss';

const Download: React.FC<TDownloadProps> = () => {
  return (
    <section className="Download" id="Download">
      <div className="Download-background">
        <img src={ImageCircleBackground} alt="" />
      </div>
      <div className="container">
        <div className="Download-wrapper">
          <Row>
            <Col span={24} lg={{ span: 10 }}>
              <div className="Download-image">
                <img src={ImageShopdiDownload} alt="Tải xuống Shopdi App" />
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
                  href="https://play.google.com/store/apps/details?id=io.shopdi.app"
                  target="_blank"
                  rel="noreferrer"
                  className="Download-download-item"
                >
                  <img src={ImageDownloadGooglePlayDark} alt="Shopdi App Google Play" />
                </a>
                <a
                  href="https://apps.apple.com/us/app/shopdi/id1625578140"
                  target="_blank"
                  rel="noreferrer"
                  className="Download-download-item"
                >
                  <img src={ImageDownloadAppStoreDark} alt="Shopdi App App Store" />
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
