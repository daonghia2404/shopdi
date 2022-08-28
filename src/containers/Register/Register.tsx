/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Row } from 'antd';

import { TRegisterProps } from './Register.types.d';
import './Register.scss';

const Register: React.FC<TRegisterProps> = () => {
  const dataRegister = [
    {
      number: '01',
      title: 'Đăng ký để trở thành Shopdi Connector',
      list: [
        <>
          Truy cập <a href="#">APP Store</a> hoặc <a href="#">CH Play</a> để download ứng dụng Shopdi
        </>,
        <>
          Truy cập <a href="#">Dashboard Shopdi Connector</a> để nhận mã giới thiệu và theo dõi tiến độ các chương
          trình.
        </>,
      ],
    },
    {
      number: '02',
      title: 'Sao chép và chia sẻ đường link giới thiệu của bạn',
      description: 'Copy ID Mã giới thiệu , Link giới thiệu , Hoặc chia sẻ mã QR của bạn đến người được giới thiệu',
    },
    {
      number: '03',
      title: 'Nhận thưởng lên đến 25%',
      description:
        'Khi người dùng tạo tài khoản bằng liên kết giới thiệu của bạn và sử dụng xu để click xem giá bí mật/giá giảm không giới hạn, bạn sẽ nhận được thưởng từ mỗi giao dịch họ thực hiện. Bạn có thể chia sẻ phần trăm lợi nhuận với người được giới thiệu. ',
    },
  ];

  return (
    <section className="Register" id="Register">
      <div className="container">
        <div className="Register-wrapper">
          <div className="Register-header">
            <h3 className="Register-subtitle">Đăng ký</h3>
            <h2 className="Register-title">Nhận thưởng với 3 bước vô cùng dễ dàng</h2>
          </div>

          <div className="Register-list">
            <Row gutter={[48, 128]}>
              {dataRegister.map((item, index) => (
                <Col key={index} span={24} lg={{ span: 8 }}>
                  <div className="Register-card">
                    <div className="Register-card-square-overlay" />
                    <div className="Register-card-square" />
                    <div className="Register-card-number">{item.number}</div>
                    <h4 className="Register-card-title">{item.title}</h4>
                    {item.description && <p className="Register-card-description">{item.description}</p>}
                    {item.list && (
                      <ul className="Register-card-line">
                        {item.list.map((list, listIdx) => (
                          <li key={listIdx}>{list}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
