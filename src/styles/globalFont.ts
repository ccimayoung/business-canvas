import styled from '@emotion/styled';

import type { fontHandleType, fontProps } from '../types/styleType';

import palette from './palette';

export const handleFontStyle = (fontType: fontHandleType) => {
  switch (fontType) {
    case 'heading_heading5':
      return 'font-family :Pretendard-Semibold ; font-size : 16px ; line-height: 24px; font-weight: 600;';
    case 'base_strong':
      return 'font-family :Pretendard-Semibold; font-size : 14px ; line-height: 22px; font-weight: 600;';
    case 'base_normal':
      return 'font-family :Pretendard-Regular; font-size : 14px ; line-height: 22px; font-weight: 400;';
  }
};

// 기본 폰트. 반응형에서 긴 text는 잘림. 축약형을 원하면 ListFont 사용
export const Font = styled.p<fontProps>`
  ${({ fontType }) => handleFontStyle(fontType)};
  margin: ${(props) => props.m};
  color: ${(props) => (props.color ? props.color : palette.basic.black)};
  width: ${(props) => (props.w ? props.w : 'fit-content')};
  height: ${(props) => props.h};
`;

//* 반응형 대응 폰트. 길면 .. 으로 축약
export const ListFont = styled(Font)`
  ${({ fontType }) => handleFontStyle(fontType)};
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding: ${(props) => (props.padding ? props.padding : '0 5px')};
`;
