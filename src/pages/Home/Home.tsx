import React from 'react';

import Download from '@/containers/Download';
import Introduction from '@/containers/Introduction';
import Benefit from '@/containers/Benefit';
import PrivacyPolicy from '@/containers/PrivacyPolicy';
import Register from '@/containers/Register';
import Faq from '@/containers/Faq';
import Programs from '@/containers/Programs';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Introduction />
      <Benefit />
      <PrivacyPolicy />
      <Register />
      <Programs />
      <Faq />
      <Download />
    </div>
  );
};

export default Home;
