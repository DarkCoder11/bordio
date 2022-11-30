import styled from 'styled-components';

import {Link} from '~/components';

export const Wrapper = styled.aside`
  z-index: 4;
  min-width: 154px;
  height: 100vh;
  overflow: hidden;
  background-color: #f5f8fa;
`;

export const Header = styled.div`
  padding: 24px 16px 26px;
  font-size: 18px;
  line-height: 21px;
  color: #222222;
`;

export const ToolsLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  width: 100%;
`;

export const Item = styled.div`
  padding: 10px 11px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 16px;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  position: relative;
  width: 100%;
  max-width: 138px;

  ${(props: {currentRoute: boolean}) =>
    props.currentRoute &&
    `
      background: #FFFFFF !important;
      color: #0094FF !important;

      svg path {
        fill: #0094FF;
       }

      ::before {
        content: "";
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        background: #0094FF;
        border-radius: 0 10px 10px 0;
        width: 4.12px;
       }
    `}
`;

export const Text = styled.div`
  color: ${(props: {currentRoute: boolean}) => (props.currentRoute ? '#0094FF' : '#222222')};
`;
