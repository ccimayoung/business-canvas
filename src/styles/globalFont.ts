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

//* 기본 폰트. 반응형에서 긴 text는 잘림. antD 테이블이 height가 반응형이라 축약형은 고려하지 않음
export const Font = styled.p<fontProps>`
    ${({ fontType }) => handleFontStyle(fontType)};
    margin: ${(props) => props.m};
    color: ${(props) => (props.color ? props.color : palette.basic.black)};
    width: ${(props) => (props.w ? props.w : 'fit-content')};
    height: ${(props) => props.h};
`;
