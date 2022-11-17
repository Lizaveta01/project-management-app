import styled from 'styled-components';

import { size } from '../../constants/screenSizes';

export const FooterWrapper = styled.div`
  width: auto;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 66px;
  height: 60px;
  padding: 0px 40px;
  p {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }
  svg {
    fill: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    height: auto;
    gap: 30px;
  }
`;

export const MembersInfo = styled.div`
  display: flex;
  gap: 10%;
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    p {
      margin-top: 10px;
    }
  }
`;

export const MemberItem = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }
  a {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }
  svg {
    fill: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }
  @media (max-width: ${size.tablet}) {
    margin-top: 10px;
  }
`;