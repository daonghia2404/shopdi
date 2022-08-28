/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import classNames from 'classnames';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';

import ImageProgram from '@/assets/images/image-programs.png';
import ImageRank1 from '@/assets/images/image-rank-1.png';
import ImageRank2 from '@/assets/images/image-rank-2.png';
import ImageRank3 from '@/assets/images/image-rank-3.png';
import IconLoadMore from '@/assets/icons/icon-dots.svg';
import BgNumber from '@/assets/images/bg-rank.svg';
import { TRootState } from '@/redux/reducers';

import { EKeyTabProgram } from './Programs.enums';
import { dataTabsPrograms } from './Programs.data';
import { TProgramsProps } from './Programs.types.d';
import './Programs.scss';

const Programs: React.FC<TProgramsProps> = () => {
  const [activeKeyTab, setActiveKeyTab] = useState(EKeyTabProgram.TOP);

  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);

  const handleChangeKeyTab = (key: EKeyTabProgram): void => {
    setActiveKeyTab(key);
  };

  return (
    <section className="Programs" id="Programs">
      <div className="Programs-background" />
      <div className="container">
        <div className="Programs-wrapper">
          <div className="Programs-header">
            <h3 className="Programs-subtitle">Chương trình </h3>
            <h2 className="Programs-title">SHOPDI CHIÊU ĐÃI NGƯỜI DÙNG NHIỀU CHƯƠNG TRÌNH HẤP DẪN</h2>
            <p className="Programs-description">ĐƯỢC CẬP NHẬT THƯỜNG XUYÊN</p>
          </div>
          <div className="Programs-image">
            <img src={ImageProgram} alt="" />
          </div>
          <div className="Programs-table">
            <div className="Programs-tabs">
              <Row gutter={isMobile ? [8, 8] : [32, 32]} wrap={false}>
                {dataTabsPrograms.map((item) => (
                  <Col>
                    <div
                      key={item.value}
                      className={classNames('Programs-tabs-item', { active: item.value === activeKeyTab })}
                      onClick={(): void => handleChangeKeyTab(item.value)}
                    >
                      {item.label}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <p className="Programs-table-description">
              Đường đua Shopdi Connector được cập nhật mỗi tháng. Hãy cùng nhìn lại các tay đua Shopdi Connector giai
              đoạn 1/9 - 30/9/2022 nhé!
            </p>
            <table>
              <thead>
                <tr>
                  <td>Hạng</td>
                  <td>Người tham gia</td>
                  <td>Phần thưởng</td>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <tr>
                    <td>
                      <div className="Programs-table-image">
                        {item === 1 && <img src={ImageRank1} alt="" />}
                        {item === 2 && <img src={ImageRank2} alt="" />}
                        {item === 3 && <img src={ImageRank3} alt="" />}
                        {![1, 2, 3].includes(item) && (
                          <>
                            <img src={BgNumber} alt="" />
                            <span>{item}</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td>
                      <span>@user123</span>
                      <br />
                      <span>2.000.000 shopdi</span>
                    </td>
                    <td>Iphone 14 Pro Max</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="Programs-table-loadmore flex justify-center">
              <img src={IconLoadMore} alt="" />
            </div>

            <div className="Programs-news">
              <h3 className="Programs-news-title">Ưu đãi hấp dẫn, tham gia ngay</h3>
              <div className="Programs-news-list">
                <Row gutter={[64, 48]}>
                  {[1, 2].map((item) => (
                    <Col key={item} span={24} md={{ span: 12 }}>
                      <div className="Programs-news-list-item">
                        <div className="Programs-news-list-item-image" />
                        <div className="Programs-news-list-item-info">
                          <h4 className="Programs-news-list-item-title">
                            <a href="#">SHOPDI CHÀO BẠN MỚI - TẢI APP NHẬN SHOPDIXU! </a>
                          </h4>
                          <p className="Programs-news-list-item-description">
                            Số lượng có hạn! Bạn mới gia nhập Shopdi nhận ngay 15k Shopdi Xu (tương đương 15k) khi hoàn
                            thiện thông tin cá nhân tại tài khoản Shopdi.
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="Programs-news-list-item-date">Ngày hết hạn: 30/12/2022</p>
                            <a href="#" className="Programs-news-list-item-link">
                              Xem chi tiết
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
