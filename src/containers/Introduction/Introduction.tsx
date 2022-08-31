import React from 'react';
import { Col, Row } from 'antd';

import ImageIntroduction from '@/assets/images/image-introduction.png';
import Button from '@/components/Button';

import IntroductionBackground from '@/containers/Introduction/IntroductionBackground';

import { TIntroductionProps } from './Introduction.types.d';
import './Introduction.scss';

const Introduction: React.FC<TIntroductionProps> = () => {
  return (
    <section className="Introduction" id="Introduction">
      <div className="Introduction-background">
        <IntroductionBackground />
      </div>

      <div className="container">
        <div className="Introduction-wrapper flex items-center">
          <Row>
            <Col span={24} lg={{ span: 14 }}>
              <h1 className="Introduction-title">Shopdi Connect</h1>
              <p>
                Từ ngày 01/09/2022, nhận ngay lợi nhuận không giới hạn khi giới thiệu thành công người dùng tải ứng dụng
                Shopdi. Giới thiệu bạn bè, nhận thưởng hấp dẫn và lan tỏa giá trị thực đến cộng đồng của bạn
              </p>
              <div className="Introduction-btn flex">
                <Button title="TRỞ THÀNH SHOPDI CONNECTOR NGAY!" />
              </div>
            </Col>
            <Col span={24} lg={{ span: 10 }}>
              <div className="Introduction-image">
                <img src={ImageIntroduction} alt="Shopdi Connect" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
