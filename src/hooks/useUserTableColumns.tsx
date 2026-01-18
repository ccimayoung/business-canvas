import { css } from '@emotion/react';
import { type TableColumnsType } from 'antd';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { useMemo } from 'react';

import { TableFilterPopover } from '../components/ui/TableFilterPopover';
import { TableMorePopover } from '../components/ui/TableMorePopover';
import { rowFlexCSS } from '../styles/globalDiv';
import { userFormFieldsConfig } from '../types/schemas/userFormField';
import type {
    filterOptionListType,
    userFiilterStateType,
    userFilterKeyType,
} from '../types/userDataFilterType';
import type { UserDataType } from '../types/userDataType';

interface useUserTableColumnsProps {
    userData: UserDataType[];
    filters: userFiilterStateType;
    handleFilterChange: (key: userFilterKeyType) => (options: string[]) => void;
    handleUserInfoEdit: (key: string) => void;
    handleUserInfoDelete: (key: string) => void;
}

export const useUserTableColumns = ({
    userData,
    filters,
    handleFilterChange,
    handleUserInfoEdit,
    handleUserInfoDelete,
}: useUserTableColumnsProps) => {
    const userTableColumns: TableColumnsType<UserDataType> = useMemo(() => {
        const getFieldWidth = (name: string, type: string) => {
            if (type === 'date') return 160;
            if (type === 'select') return 360;
            return 249;
        };

        // 필터 옵션 생성
        const filterOptions = {} as filterOptionListType;
        userFormFieldsConfig.forEach(({ name, type }) => {
            const key = name as userFilterKeyType;
            const uniqueValues = new Set<string>();
            userData.forEach((user) => {
                const value = user[key];
                uniqueValues.add(
                    type === 'checkbox'
                        ? value
                            ? '선택됨'
                            : '선택 안함'
                        : (value as string)
                );
            });
            filterOptions[key] = Array.from(uniqueValues).map((val) => ({
                label: val,
                value: val,
            }));
        });

        const columns: TableColumnsType<UserDataType> =
            userFormFieldsConfig.map(({ name, label, type }) => {
                const key = name as userFilterKeyType;
                const baseColumn = {
                    title: (
                        <span css={styles.titleBox}>
                            {label}
                            <TableFilterPopover
                                optionList={filterOptions[key]}
                                selectedList={filters[key]}
                                onChangeOption={handleFilterChange(key)}
                            />
                        </span>
                    ),
                    dataIndex: key,
                    width: getFieldWidth(name, type),
                };

                return type === 'checkbox'
                    ? {
                          ...baseColumn,
                          render: (value: boolean) => (
                              <Checkbox checked={value} />
                          ),
                      }
                    : baseColumn;
            });

        columns.push({
            title: '',
            dataIndex: 'setting',
            width: 48,
            render: (_: unknown, record: UserDataType) => (
                <TableMorePopover
                    onEdit={() => handleUserInfoEdit(record.key)}
                    onDelete={() => handleUserInfoDelete(record.key)}
                />
            ),
        });

        return columns;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData, filters]);

    return { userTableColumns };
};

const styles = {
    titleBox: css`
        ${rowFlexCSS({
            w: '100%',
            h: '100%',
            justify: 'space-between',
            align: 'center',
        })}
    `,
};
