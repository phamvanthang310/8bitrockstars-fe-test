import React from 'react';
import { FontIcon } from 'material-ui';

const Footer = () => {
  return (
    <footer>
      <div className='caption'>
        Make with <FontIcon className='fa fa-heart' style={{color: 'red', fontSize: '16px'}}/> by <strong>Thang
        Pham</strong>
      </div>
    </footer>
  );
};

export default Footer;