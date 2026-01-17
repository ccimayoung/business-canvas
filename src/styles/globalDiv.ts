import { css } from '@emotion/react';

import type { divProps } from '../types/styleType';


//* row 로 여러 컴포넌트를 감쌀 때 사용하는 div.
export const rowFlexCSS = (props: divProps) => css`
  width: ${props.w ?? 'fit-content'};
  height: ${props.h};
  min-height: ${props.h};
  margin: ${props.m};
  display: flex;
  column-gap: ${props.cGap};
  justify-content: ${props.justify ?? 'center'};
  align-items: ${props.align ?? 'center'};
  position: relative;
  background-color: ${props.bgColor};
  padding: ${props.padding};
`;

// column 로 여러 컴포넌트를 감쌀 때 사용하는 div
export const columnFlexCSS = (props: divProps) => css`
  width: ${props.w ?? 'fit-content'};
  height: ${props.h};
  min-height: ${props.h};
  margin: ${props.m};
  display: flex;
  flex-direction: column;
  row-gap: ${props.rGap};
  justify-content: ${props.justify ?? 'center'};
  align-items: ${props.align ?? 'center'};
  position: relative;
  background-color: ${props.bgColor};
  padding: ${props.padding};
`;
