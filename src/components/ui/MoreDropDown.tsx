import { css } from '@emotion/react';

import { columnFlexCSS } from '../../styles/globalDiv';
import { handleFontStyle } from '../../styles/globalFont';
import palette from '../../styles/palette';

interface MoreDropDownProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export const MoreDropDown = ({ onEdit, onDelete }: MoreDropDownProps) => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.item(false)} onClick={onEdit}>
        수정
      </div>
      <div css={styles.divider} />
      <div css={styles.item(true)} onClick={onDelete}>
        삭제
      </div>
    </div>
  );
};

const styles = {
  wrapper: css`
    ${columnFlexCSS({
      w: '181px',
      h: '80px',
      padding: '4px',
    })}
    border-radius: 10px;
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
    cursor: pointer;
    &:hover {
      background-color: ${palette.gray.gray000};
    }
  `,

  divider: css`
    width: 100%;
    height: 1px;
    background-color: ${palette.gray.gray000};
  `,
};
