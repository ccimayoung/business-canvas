import styled from '@emotion/styled';
import type { divProps } from '../types/styleTypes';

//* row 로 여러 컴포넌트를 감쌀 때 사용하는 div.
export const RowFlexDiv = styled.div<divProps>`
  width: ${(props) => (props.w ? props.w : 'fit-content')};
  margin: ${(props) => props.m};
  min-height: ${(props) => props.h};
  height: ${(props) => props.h};
  display: flex;
  column-gap: ${(props) => props.cGap};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  position: relative;
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.padding};

  .profileDiv {
    position: absolute;
    right: 0;
    bottom: 8px;
  }
`;

// column 로 여러 컴포넌트를 감쌀 때 사용하는 div
export const ColumnFlexDiv = styled.div<divProps>`
  width: ${(props) => (props.w ? props.w : 'fit-content')};
  margin: ${(props) => props.m};
  min-height: ${(props) => props.h};
  height: ${(props) => props.h};
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.rGap};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  position: relative;
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.padding};
`;
