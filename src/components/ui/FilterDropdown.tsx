import { css } from '@emotion/react';
import { columnFlexCSS, rowFlexCSS } from '../../styles/globalDiv';
import palette from '../../styles/palette';
import { Font, handleFontStyle } from '../../styles/globalFont';
import Checkbox from 'antd/es/checkbox/Checkbox';

interface FilterDropdownProps {
    optionList: { label: string; value: string }[];
    selectedList: string[];
    onChangeOption: (options: string[]) => void;
}
export const FilterDropdown = ({
    optionList,
    selectedList,
    onChangeOption,
}: FilterDropdownProps) => {
    const handleChange = (value: string, checked: boolean) => {
        if (checked) {
            onChangeOption([...selectedList, value]);
        } else {
            onChangeOption(selectedList.filter((v) => v !== value));
        }
    };

    return (
        <div css={styles.wrapper}>
            {optionList.map((option) => (
                <label css={styles.item} key={option.value}>
                    <Checkbox
                        checked={selectedList.includes(option.value)}
                        onChange={(e) =>
                            handleChange(option.value, e.target.checked)
                        }
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
};

const styles = {
    wrapper: columnFlexCSS({
        bgColor: palette.basic.white,
        rGap: '8px',
    }),
    item: css`
        ${rowFlexCSS({
            w: '134px',
            h: '32px',
            padding: '5px 12px',
            justify: 'start',
            cGap: '8px',
        })}
        ${handleFontStyle('base_normal')}
    `,

    divider: css`
        width: 100%;
        height: 1px;
        background-color: ${palette.gray.gray000};
    `,
};
