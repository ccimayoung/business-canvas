import { FilterFilled } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Popover } from 'antd';

import palette from '../../styles/palette';

import { FilterDropdown } from './FilterDropdown';

interface TableFilterPopoverProps {
    optionList: { label: string; value: string }[];
    selectedList: string[];
    onChangeOption: (options: string[]) => void;
}
export const TableFilterPopover = ({
    optionList,
    selectedList,
    onChangeOption,
}: TableFilterPopoverProps) => {
    const isFiltered = selectedList.length > 0;

    return (
        <Popover
            content={
                <FilterDropdown
                    optionList={optionList}
                    selectedList={selectedList}
                    onChangeOption={onChangeOption}
                />
            }
            trigger="click"
            placement="bottomRight"
            arrow={false}
            styles={{ container: { padding: 0 } }}
        >
            <FilterFilled
                css={css`
                    cursor: pointer;
                    color: ${isFiltered
                        ? palette.color.primary
                        : palette.gray.gray100};

                    &:hover {
                        color: ${palette.color.primary};
                    }
                `}
            />
        </Popover>
    );
};
