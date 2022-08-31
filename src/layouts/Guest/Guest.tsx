import React, { useEffect } from 'react';

import { TGuestProps } from '@/layouts/Guest/Guest.types';
import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import { getQueryParam } from '@/utils/functions';

const Guest: React.FC<TGuestProps> = ({ children }) => {
  useEffect(() => {
    const sdiaf = getQueryParam('sdiaf');
    if (sdiaf) {
      localStorage.setItem('shopdi-connect', sdiaf);
    }
  }, []);

  return (
    <div className="Guest">
      <Header />
      <div className="Guest-body">{children}</div>
      <div className="Guest-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Guest;
