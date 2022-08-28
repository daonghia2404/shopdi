import React from 'react';
import { Col, Row } from 'antd';

import Table from '@/components/Table';

import { TPrivacyPolicyProps } from './PrivacyPolicy.types.d';
import './PrivacyPolicy.scss';

const PrivacyPolicy: React.FC<TPrivacyPolicyProps> = () => {
  const columns = [
    {
      key: 'connector',
      dataIndex: 'connector',
      title: 'Connector',
      fixed: true,
    },
    {
      key: 'basic',
      dataIndex: 'basic',
      title: 'Basic',
      className: 'text-center',
    },
    {
      key: 'gold',
      dataIndex: 'gold',
      title: 'Gold',
      className: 'text-center',
    },
    {
      key: 'diamond',
      dataIndex: 'diamond',
      title: 'Diamond',
      className: 'text-center',
    },
    {
      key: 'platinum',
      dataIndex: 'platinum',
      title: 'Platinum',
      className: 'text-center',
    },
  ];

  const dataSources = [
    {
      connector: 'Mức thưởng',
      basic: '10%',
      gold: '15%',
      diamond: '20%',
      platinum: '25%',
    },
    {
      connector: 'Số người đã giới thiệu',
      basic: '',
      gold: '300',
      diamond: '500',
      platinum: '700',
    },
    {
      connector: 'Doanh thu click/ tháng',
      basic: '',
      gold: '200.000.000',
      diamond: '500.000.000',
      platinum: '700.000.000',
    },
  ];

  return (
    <section className="PrivacyPolicy" id="PrivacyPolicy">
      <div className="PrivacyPolicy-background" />
      <div className="container">
        <div className="PrivacyPolicy-wrapper">
          <div className="PrivacyPolicy-header">
            <Row gutter={[24, 32]}>
              <Col span={24} lg={{ span: 12 }}>
                <h3 className="PrivacyPolicy-subtitle">Chính sách</h3>
                <h2 className="PrivacyPolicy-title">Chính sách Shopdi Connector </h2>
              </Col>
              <Col span={24} lg={{ span: 12 }}>
                <p className="PrivacyPolicy-description">
                  Tỷ lệ hoa hồng lên đến 25%. Không giới hạn mức thu nhập bạn có thể kiếm được
                </p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="PrivacyPolicy-link">
                  Xem thêm chi tiết
                </a>
              </Col>
            </Row>
          </div>

          <div className="PrivacyPolicy-table">
            <Table columns={columns} dataSources={dataSources} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
