import { css } from '@emotion/react';
import { type TableColumnsType } from 'antd';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { useMemo } from 'react';

import { TableFilterPopover } from '../components/ui/TableFilterPopover';
import { TableMorePopover } from '../components/ui/TableMorePopover';
import { rowFlexCSS } from '../styles/globalDiv';
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
    const makeFilterOptionFunc: filterOptionListType = useMemo(() => {
        const makeUniqueList = (key: userFilterKeyType) => {
            const noDuplicateValues = new Set<string>();

            userData.forEach((user) => {
                const fieldValue = user[key];

                if (key === 'agreeEmail') {
                    noDuplicateValues.add(fieldValue ? '선택됨' : '선택 안함');
                } else {
                    noDuplicateValues.add(fieldValue as string);
                }
            });

            return Array.from(noDuplicateValues).map((v) => ({
                label: v,
                value: v,
            }));
        };

        return {
            name: makeUniqueList('name'),
            address: makeUniqueList('address'),
            memo: makeUniqueList('memo'),
            signUpDate: makeUniqueList('signUpDate'),
            job: makeUniqueList('job'),
            agreeEmail: makeUniqueList('agreeEmail'),
        };
    }, [userData]);

    const createCommonColumn = (
        title: string,
        key: userFilterKeyType,
        width = 249
    ) => ({
        title: (
            <span css={styles.titleBox}>
                {title}
                <TableFilterPopover
                    optionList={makeFilterOptionFunc[key]}
                    selectedList={filters[key]}
                    onChangeOption={handleFilterChange(key)}
                />
            </span>
        ),
        dataIndex: key,
        width,
    });

    const userTableColumns: TableColumnsType<UserDataType> = [
        createCommonColumn('이름', 'name', 120),
        createCommonColumn('주소', 'address'),
        createCommonColumn('메모', 'memo'),
        createCommonColumn('가입일', 'signUpDate', 200),
        createCommonColumn('직업', 'job'),

        {
            title: (
                <span css={styles.titleBox}>
                    이메일 수신 동의
                    <TableFilterPopover
                        optionList={makeFilterOptionFunc.agreeEmail}
                        selectedList={filters.agreeEmail}
                        onChangeOption={handleFilterChange('agreeEmail')}
                    />
                </span>
            ),
            dataIndex: 'agreeEmail',
            width: 150,
            render: (value: boolean) => <Checkbox checked={value} />,
        },
        {
            title: '',
            dataIndex: 'setting',
            width: 48,
            render: (_, record) => (
                <TableMorePopover
                    onEdit={() => handleUserInfoEdit(record.key)}
                    onDelete={() => handleUserInfoDelete(record.key)}
                />
            ),
        },
    ];

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
