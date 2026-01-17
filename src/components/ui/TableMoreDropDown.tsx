import { css } from '@emotion/react';

import { columnFlexCSS } from '../../styles/globalDiv';
import { handleFontStyle } from '../../styles/globalFont';
import palette from '../../styles/palette';

export const TableMoreDropDown = () => {
    return (
        <div css={styles.wrapper}>
            <div css={styles.item(false)}>수정</div>
            <div css={styles.divider} />
            <div css={styles.item(true)}>삭제</div>
        </div>
    );
};

const styles = {
    wrapper: css`
        ${columnFlexCSS({
            w: '181px',
            h: '80px',
            padding: '4px',
            bgColor: palette.basic.white,
        })}
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `,

    item: (isDelete: boolean) => css`
        ${columnFlexCSS({
            w: '173px',
            h: '32px',
            padding: '5px 12px',
            align: 'start',
            bgColor: palette.basic.white,
        })}
        ${handleFontStyle('base_normal')}
        color: ${isDelete ? palette.color.error : palette.basic.black};
    `,

    divider: css`
        width: 100%;
        height: 1px;
        background-color: ${palette.gray.gray000};
    `,
};
