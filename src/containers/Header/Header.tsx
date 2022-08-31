import React, { useEffect, useState } from 'react';
import { Link, useLocation } from '@reach/router';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import IconApple from '@/assets/icons/icon-apple.svg';
import IconAndroid from '@/assets/icons/icon-android.svg';
import IconAppleDark from '@/assets/icons/icon-apple-dark.svg';
import IconAndroidDark from '@/assets/icons/icon-android-dark.svg';
import IconMenu from '@/assets/icons/icon-menu.svg';
import IconX from '@/assets/icons/icon-x.svg';
import Logo from '@/assets/images/logo.png';
import { Paths } from '@/pages/routers';
import { TRootState } from '@/redux/reducers';

import { THeaderProps } from './Header.types.d';
import './Header.scss';

const Header: React.FC<THeaderProps> = () => {
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const location = useLocation();
  const { hash } = location;

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

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const sections: any = document.querySelectorAll('section');
      sections.forEach((item: any, index: number) => {
        const id = item?.id;
        const link: any = document.querySelector(`a[href="#${id}"`);
        if (
          window.scrollY >= item.offsetTop - 100 &&
          window.scrollY < (sections[index + 1]?.offsetTop || Number.MAX_SAFE_INTEGER) - 100
        ) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
  }, []);

  useEffect(() => {
    if (visibleMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [visibleMenu]);

  const renderContactAndDownloadSection = (): React.ReactElement => {
    return (
      <div className="Header-top-wrapper flex items-center justify-between">
        <div className="Header-top-wrapper-item">
          Hỗ trợ | Hotline: <a href="tel: 19006789">1900 6789</a>
        </div>
        <div className="Header-top-wrapper-item flex items-center flex items-center">
          Download App
          <a href="https://apps.apple.com/us/app/shopdi/id1625578140" target="_blank" rel="noreferrer">
            <img src={isMobile ? IconAppleDark : IconApple} alt="Shopdi App App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=io.shopdi.app" target="_blank" rel="noreferrer">
            <img src={isMobile ? IconAndroidDark : IconAndroid} alt="Shopdi App Google Play" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      {!isMobile && (
        <div className="Header-top">
          <div className="container">{renderContactAndDownloadSection()}</div>
        </div>
      )}

      <header className="Header">
        <div className="Header-bottom">
          <div className="container">
            <div className="Header-bottom-wrapper flex items-center justify-between">
              <Link to={Paths.Home} className="Header-logo">
                <img src={Logo} alt="Shopdi Logo" />
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
                      <a
                        className={classNames({ active: hash === item.link })}
                        href={item.link}
                        onClick={(): void => setVisibleMenu(false)}
                      >
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
    </>
  );
};

export default Header;
