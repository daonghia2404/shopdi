/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Collapse, Row } from 'antd';

import IconPlus from '@/assets/icons/icon-plus.svg';

import { TFaqProps } from './Faq.types.d';
import './Faq.scss';

const { Panel } = Collapse;

const Faq: React.FC<TFaqProps> = () => {
  const dataFaq = [
    {
      number: '01',
      title: 'Chương trình Shopdi Connect là gì?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque repellat, eum, molestiae doloribus impedit assumenda placeat optio ratione, dolores suscipit id doloremque animi dolore amet aliquam laboriosam vero! Deserunt.',
    },
    {
      number: '02',
      title: 'Điều kiện để trở thành một Connector là gì?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nam quos reiciendis, temporibus porro, dolorum itaque nemo sequi, provident iure vitae. Quis, cumque officia? Eum temporibus eos sed aut iure!',
    },
    {
      number: '03',
      title: 'Làm thế nào để kiếm được mức thưởng lên tới 700 triệu/tháng?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit impedit inventore saepe. Doloribus nesciunt rem voluptas hic suscipit minus reprehenderit consequatur eos labore molestias, atque at accusantium repellendus id impedit.',
    },
  ];
  return (
    <section className="Faq" id="Faq">
      <div className="container">
        <div className="Faq-wrapper">
          <Row align="middle" gutter={[100, 64]}>
            <Col span={24} lg={{ span: 12 }}>
              <h3 className="Faq-subtitle">Q&A</h3>
              <h2 className="Faq-title">Câu hỏi thường gặp</h2>
              <p className="Faq-description">
                Bạn có câu hỏi khác? Hãy truy cập Trung tâm hỗ trợ của Shopdi hoặc gửi phản hồi trực tiếp{' '}
                <a href="#">tại đây</a>
              </p>
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <Collapse
                expandIconPosition="right"
                accordion
                expandIcon={(): React.ReactElement => (
                  <div className="Faq-panel-icon">
                    <img src={IconPlus} alt="" />
                  </div>
                )}
              >
                {dataFaq.map((item, index) => (
                  <Panel
                    key={index}
                    header={
                      <div className="Faq-panel-header flex items-center">
                        <div className="Faq-panel-header-number">{item.number}</div>
                        <h4 className="Faq-panel-header-title">{item.title}</h4>
                      </div>
                    }
                  >
                    <p className="Faq-panel-content">{item.content}</p>
                  </Panel>
                ))}
              </Collapse>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Faq;
