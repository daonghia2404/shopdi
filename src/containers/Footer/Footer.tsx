/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Col, Row } from 'antd';
import { Link } from '@reach/router';

import LogoLight from '@/assets/images/logo-light.svg';
import ImageBct from '@/assets/images/image-bct.svg';
import ImageDownloadAppStore from '@/assets/images/image-download-app-store.svg';
import ImageDownloadGooglePlay from '@/assets/images/image-download-google-play.svg';
import IconFacebook from '@/assets/icons/icon-facebook.svg';
import IconMedium from '@/assets/icons/icon-medium.svg';
import IconTelegram from '@/assets/icons/icon-telegram.svg';
import IconTwitter from '@/assets/icons/icon-twitter.svg';
import IconYoutube from '@/assets/icons/icon-youtube.svg';
import IconZalo from '@/assets/icons/icon-zalo.svg';
import IconVisa from '@/assets/icons/icon-visa.svg';
import IconMomo from '@/assets/icons/icon-momo.svg';
import IconZaloPay from '@/assets/icons/icon-zalopay.svg';
import IconVnPay from '@/assets/icons/icon-vnpay.svg';
import IconMasterCard from '@/assets/icons/icon-mastercard.svg';
import IconJcb from '@/assets/icons/icon-jcb.svg';

import { Paths } from '@/pages/routers';

import { TFooterProps } from './Footer.types.d';
import './Footer.scss';

const Footer: React.FC<TFooterProps> = () => {
  const dataMenuSupport = [
    { link: '#', title: 'Hotline và chat trực tuyến (24/7)' },
    { link: '#', title: 'Trung tâm hỗ trợ' },
    { link: '#', title: 'Gửi yêu cầu hỗ trợ' },
    { link: '#', title: 'Hỗ trợ khách hàng: support@shopdi.io' },
    { link: '#', title: 'Hướng dẫn đặt hàng và thanh toán' },
    { link: '#', title: 'Quy chế hoạt động website' },
    { link: '#', title: 'Điều khoản sử dụng' },
  ];

  const dataMenuShopdi = [
    { link: '#', title: 'Thông tin dự án' },
    { link: '#', title: 'Chính sách đổi Shopdi Xu' },
    { link: '#', title: 'Chính sách bảo mật' },
    { link: '#', title: 'Chính sách quyền riêng tư' },
    { link: '#', title: 'Chính sách kiểm hàng, đổi trả và hoàn tiền' },
  ];

  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-wrapper">
          <Row gutter={[24, 24]}>
            <Col span={24} lg={{ span: 5 }} md={{ span: 12 }}>
              <div className="Footer-wrapper-item">
                <Link to={Paths.Home}>
                  <div className="Footer-logo">
                    <img src={LogoLight} alt="" />
                  </div>
                </Link>

                <h4 className="Footer-title">Công ty cổ phần SHOPDI</h4>
                <p>
                  Công ty Cổ phần Shopdi Địa chỉ trụ sở: số 4 Trần Nhật Duật, P. Tân Định, Q.1, TP. Hồ Chí Minh Mã số
                  thuế 0317185857 Giấy Chứng nhận đăng ký Doanh nghiệp lần đầu ngày 07/03/2022 cấp bởi Phòng Đăng ký
                  kinh doanh, Sở Kế hoạch và Đầu tư TP.HCM
                </p>

                <div className="Footer-bct">
                  <img src={ImageBct} alt="" />
                </div>
              </div>
            </Col>
            <Col span={24} lg={{ span: 4 }} md={{ span: 12 }}>
              <div className="Footer-wrapper-item">
                <h4 className="Footer-title">HỖ TRỢ KHÁCH HÀNG</h4>
                <ul>
                  {dataMenuSupport.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col span={24} lg={{ span: 4 }} md={{ span: 12 }}>
              <div className="Footer-wrapper-item">
                <h4 className="Footer-title">VỀ SHOPDI</h4>
                <ul>
                  {dataMenuShopdi.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col span={24} lg={{ span: 6 }} md={{ span: 12 }}>
              <div className="Footer-wrapper-item">
                <h4 className="Footer-title">TẢI ỨNG DỤNG</h4>
                <div className="Footer-download flex flex-wrap">
                  <a
                    href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Jul0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Jul0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700059410214883_creativeid_485682226069_device_c&gclid=CjwKCAjwgaeYBhBAEiwAvMgp2l2F5Hbor5uHbDXRzAW4khNkk5EebHB3lsl8ZdYrwLi9pUiu97ojjhoCP3wQAvD_BwE&gclsrc=aw.ds"
                    target="_blank"
                    rel="noreferrer"
                    className="Footer-download-item"
                  >
                    <img src={ImageDownloadAppStore} alt="" />
                  </a>

                  <a
                    href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Jul0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Jul0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700059410214883_creativeid_485682226069_device_c&gclid=CjwKCAjwgaeYBhBAEiwAvMgp2l2F5Hbor5uHbDXRzAW4khNkk5EebHB3lsl8ZdYrwLi9pUiu97ojjhoCP3wQAvD_BwE&gclsrc=aw.ds"
                    target="_blank"
                    rel="noreferrer"
                    className="Footer-download-item"
                  >
                    <img src={ImageDownloadGooglePlay} alt="" />
                  </a>
                </div>
                <h4 className="Footer-title">KẾT NỐI VỚI CHÚNG TÔI</h4>
                <div className="Footer-socials flex flex-wrap">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="Footer-socials-item">
                    <img src={IconFacebook} alt="" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="Footer-socials-item">
                    <img src={IconYoutube} alt="" />
                  </a>
                  <a href="https://telegram.com" target="_blank" rel="noreferrer" className="Footer-socials-item">
                    <img src={IconTelegram} alt="" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="Footer-socials-item">
                    <img src={IconTwitter} alt="" />
                  </a>
                  <a href="https://zalo.com" target="_blank" rel="noreferrer" className="Footer-socials-item">
                    <img src={IconZalo} alt="" />
                  </a>
                  <a href="https://medium.com" target="_blank" rel="noreferrer" className="Footer-socials-item">
                    <img src={IconMedium} alt="" />
                  </a>
                </div>
              </div>
            </Col>
            <Col span={24} lg={{ span: 5 }} md={{ span: 12 }}>
              <div className="Footer-wrapper-item">
                <h4 className="Footer-title">PHƯƠNG THỨC THANH TOÁN</h4>
                <div className="Footer-payment flex flex-wrap">
                  <a href="https://visa.com" target="_blank" rel="noreferrer" className="Footer-payment-item">
                    <img src={IconVisa} alt="" />
                  </a>
                  <a href="https://momo.com" target="_blank" rel="noreferrer" className="Footer-payment-item">
                    <img src={IconMomo} alt="" />
                  </a>
                  <a href="https://zalopay.com" target="_blank" rel="noreferrer" className="Footer-payment-item">
                    <img src={IconZaloPay} alt="" />
                  </a>
                  <a href="https://vnpay.com" target="_blank" rel="noreferrer" className="Footer-payment-item">
                    <img src={IconVnPay} alt="" />
                  </a>
                  <a href="https://mastercard.com" target="_blank" rel="noreferrer" className="Footer-payment-item">
                    <img src={IconMasterCard} alt="" />
                  </a>
                  <a href="https://jcb.com" target="_blank" rel="noreferrer" className="Footer-payment-item">
                    <img src={IconJcb} alt="" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <div className="Footer-copyright">
            <p>© 2022. Bản quyền Công Ty Cổ Phần Shopdi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
