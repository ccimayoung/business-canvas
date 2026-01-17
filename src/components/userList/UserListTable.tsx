import { Table, type TableProps } from 'antd';
import { useMemo, useState } from 'react';
import { css } from '@emotion/react';

import { useUserTableColumns } from '../../hooks/useUserTableColumns';
import type {
    userFiilterStateType,
    userFilterKeyType,
} from '../../types/userDataFilterType';
import type { UserDataType } from '../../types/userDataType';
import { handleFontStyle } from '../../styles/globalFont';

interface UserListTableProps {
    userData: UserDataType[];
    onClickUserEdit: (key: string) => void;
    onClickUserDelete: (key: string) => void;
}

export const UserListTable = ({
    userData,
    onClickUserEdit,
    onClickUserDelete,
}: UserListTableProps) => {
    const [filters, setFilters] = useState<userFiilterStateType>({
        name: [],
        address: [],
        memo: [],
        signUpDate: [],
        job: [],
        agreeEmail: [],
    });

    const rowSelection: TableProps<UserDataType>['rowSelection'] = {
        getCheckboxProps: (record: UserDataType) => ({
            name: record.name,
        }),
    };

    const handleFilterChange =
        (key: userFilterKeyType) => (values: string[]) => {
            setFilters((prev) => ({ ...prev, [key]: values }));
        };

    const filteredUserData = useMemo(() => {
        return userData.filter((user) => {
            for (const key of Object.keys(filters) as userFilterKeyType[]) {
                const oneFiledFilter = filters[key];

                if (oneFiledFilter.length === 0) continue;

                if (key === 'agreeEmail') {
                    const agreeLabel = user.agreeEmail ? '선택됨' : '선택 안함';
                    if (!oneFiledFilter.includes(agreeLabel)) return false;
                    continue;
                }
                const recordVal = user[key];

                if (
                    typeof recordVal === 'string' &&
                    !oneFiledFilter.includes(recordVal)
                )
                    return false;
            }
            return true;
        });
    }, [userData, filters]);

    const { userTableColumns } = useUserTableColumns({
        userData,
        filters,
        handleFilterChange,
        handleUserInfoEdit: onClickUserEdit,
        handleUserInfoDelete: onClickUserDelete,
    });

    return (
        <Table
            rowSelection={rowSelection}
            columns={userTableColumns}
            dataSource={filteredUserData}
            pagination={false}
            css={css`
                /* 테이블 헤더(컬럼 제목) 폰트 스타일 */
                .ant-table-thead > tr > th {
                    font-family: Pretendard-Regular;
                    font-size: 14px;
                    line-height: 22px;
                    font-weight: 400;
                }
                
                /* 테이블 셀 내용 폰트 스타일 */
                .ant-table-tbody > tr > td {
                    font-family: Pretendard-Regular;
                    font-size: 14px;
                    line-height: 22px;
                    font-weight: 400;
                }
            `}
            //todo : 테이블 스타일 확인
        />
    );
};
