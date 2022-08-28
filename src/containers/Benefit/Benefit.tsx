/* eslint-disable react/no-array-index-key */
import React from 'react';

import ImageBenefit1 from '@/assets/images/image-benefit-1.png';
import ImageBenefit2 from '@/assets/images/image-benefit-2.png';
import ImageBenefit3 from '@/assets/images/image-benefit-3.png';

import { TBenefitProps } from './Benefit.types.d';
import './Benefit.scss';

const Benefit: React.FC<TBenefitProps> = () => {
  const dataBenefit = [
    {
      image: ImageBenefit1,
      title: 'Giá trị thực cho cộng đồng của bạn',
      description:
        'Shopdi là nền tảng Thương mại Điện tử Thế hệ Mới dành riêng cho sản phẩm cao cấp và sản phẩm phiên bản giới hạn. Thông qua cơ chế giá bí mật, giá bán của các sản phẩm trên Shopdi được quyết định bởi số lượng người quan tâm. Các sản phẩm được bán trên nền tảng thương mại điện tử Shopdi là hàng sản xuất chính hãng.',
    },
    {
      image: ImageBenefit2,
      title: 'Lợi nhuận hấp dẫn',
      description:
        'Nhận ngay lợi nhuận không giới hạn khi giới thiệu thành công người dùng click xem giá bí mật và giá giảm không giới hạn tại Shopdi. Giới thiệu càng nhiều, thu nhập càng khủng.',
    },
    {
      image: ImageBenefit3,
      title: 'Nhiều phần thưởng hơn',
      list: [
        'Nhận giải thưởng lên đến 30 triệu đồng mỗi tháng khi tham gia vào các chương trình đường đua F1',
        'Tham gia các sự kiện độc quyền dành cho các Shopdi Connectors với nhiều phần quà hấp dẫn.',
      ],
    },
  ];

  return (
    <section className="Benefit" id="Benefit">
      <div className="container">
        <div className="Benefit-wrapper">
          <div className="Benefit-header">
            <h3 className="Benefit-subtitle">Lợi ích</h3>
            <h2 className="Benefit-title">
              Tại sao bạn nên trở thành một <br /> <span>Shopdi Connector</span>
            </h2>
          </div>

          <div className="Benefit-list">
            {dataBenefit.map((item, index) => (
              <div key={index} className="Benefit-list-item flex items-center flex-wrap">
                <div className="Benefit-list-item-info">
                  <h4 className="Benefit-list-item-info-title">{item.title}</h4>
                  {item.description && <p className="Benefit-list-item-info-description">{item.description}</p>}
                  {item.list && (
                    <ul className="Benefit-list-item-info-line">
                      {item.list.map((list, listIdx) => (
                        <li key={listIdx}>{list}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="Benefit-list-item-image">
                  <img src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
