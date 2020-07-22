import React from 'react';

import { HeaderWrapper, Heading, RightHeader } from './skins';

const Header = () => {
  const redirectTo = () => {
    if (window.location.pathname !== '/activitylog') {
      window.location.replace('/activitylog');
    }
  }

  return (
    <HeaderWrapper>
      <Heading>
        <p>User Lists</p>
      </Heading>
      <RightHeader>
        <div onClick={redirectTo}>Home</div>
      </RightHeader>
    </HeaderWrapper>
  );
}

export default Header;

