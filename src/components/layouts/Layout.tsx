import { css } from '@emotion/react';
import { type PropsWithChildren } from 'react';
import palette from '../../styles/palette';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div css={Style.background}>
      <div css={Style.wrapper}>{children} </div>
    </div>
  );
};

const Style = {
  background: css`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  `,

  wrapper: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${palette.basic.white};
  `,
};
