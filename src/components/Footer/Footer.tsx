import { HandySvg } from 'handy-svg';

import { FooterWrapper } from './Footer.styled';
import { Contacts } from './data';
import rssLogo from '../../assets/svg/rssLogo.svg';

export const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <a href="https://rs.school/react/">
          <HandySvg src={rssLogo} width="116" height="42" />
        </a>
      </div>
      <Contacts />
      <p>2022</p>
    </FooterWrapper>
  );
};
