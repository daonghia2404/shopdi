import React, { useState } from 'react';
import { Link } from '@reach/router';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import IconApple from '@/assets/icons/icon-apple.svg';
import IconAndroid from '@/assets/icons/icon-android.svg';
import IconAppleDark from '@/assets/icons/icon-apple-dark.svg';
import IconAndroidDark from '@/assets/icons/icon-android-dark.svg';
import IconMenu from '@/assets/icons/icon-menu.svg';
import IconX from '@/assets/icons/icon-x.svg';
import Logo from '@/assets/images/logo.svg';
import { Paths } from '@/pages/routers';
import { TRootState } from '@/redux/reducers';

import { THeaderProps } from './Header.types.d';
import './Header.scss';

const Header: React.FC<THeaderProps> = () => {
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

  const handleToggleVisibleMenu = (): void => {
    setVisibleMenu(!visibleMenu);
  };

  const dataMenu = [
    {
      activePaths: [],
      link: '#Introduction',
      title: 'Trang chủ',
    },
    {
      activePaths: [],
      link: '#Benefit',
      title: 'Lợi ích',
    },
    {
      activePaths: [],
      link: '#PrivacyPolicy',
      title: 'Chính sách',
    },
    {
      activePaths: [],
      link: '#Register',
      title: 'Đăng ký',
    },
    {
      activePaths: [],
      link: '#Programs',
      title: 'Chương trình ',
    },
    {
      activePaths: [],
      link: '#Faq',
      title: 'FAQ',
    },
    {
      activePaths: [],
      link: '#Download',
      title: 'Tải xuống',
    },
  ];

  const renderContactAndDownloadSection = (): React.ReactElement => {
    return (
      <div className="Header-top-wrapper flex items-center justify-between">
        <div className="Header-top-wrapper-item">
          Hỗ trợ | Hotline: <a href="tel: 19006789">1900 6789</a>
        </div>
        <div className="Header-top-wrapper-item flex items-center flex items-center">
          Download App
          <a
            href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Jul0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Jul0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700059410214883_creativeid_485682226069_device_c&gclid=CjwKCAjwgaeYBhBAEiwAvMgp2l2F5Hbor5uHbDXRzAW4khNkk5EebHB3lsl8ZdYrwLi9pUiu97ojjhoCP3wQAvD_BwE&gclsrc=aw.ds"
            target="_blank"
            rel="noreferrer"
          >
            <img src={isMobile ? IconAppleDark : IconApple} alt="" />
          </a>
          <a
            href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Jul0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Jul0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700059410214883_creativeid_485682226069_device_c&gclid=CjwKCAjwgaeYBhBAEiwAvMgp2l2F5Hbor5uHbDXRzAW4khNkk5EebHB3lsl8ZdYrwLi9pUiu97ojjhoCP3wQAvD_BwE&gclsrc=aw.ds"
            target="_blank"
            rel="noreferrer"
          >
            <img src={isMobile ? IconAndroidDark : IconAndroid} alt="" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <header className="Header">
      {!isMobile && (
        <div className="Header-top">
          <div className="container">{renderContactAndDownloadSection()}</div>
        </div>
      )}

      <div className="Header-bottom">
        <div className="container">
          <div className="Header-bottom-wrapper flex items-center justify-between">
            <Link to={Paths.Home} className="Header-logo">
              <img src={Logo} alt="" />
            </Link>
            {isMobile && (
              <div className="Header-icon" onClick={handleToggleVisibleMenu}>
                <img src={visibleMenu ? IconX : IconMenu} alt="" />
              </div>
            )}
            <nav className={classNames('Header-list-wrapper', { active: visibleMenu })}>
              <ul className="Header-list flex items-center">
                {dataMenu.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index} className="Header-list-item">
                    <a href={item.link} onClick={handleToggleVisibleMenu}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>

              {isMobile && renderContactAndDownloadSection()}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;