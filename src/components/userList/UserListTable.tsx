import { Table, type TableProps } from 'antd';
import { useMemo, useState } from 'react';

import { initUserData } from '../../constants/initUserData';
import type {
    userFiilterStateType,
    userFilterKeyType,
} from '../../types/userDataFilterType';
import type { UserDataType } from '../../types/userDataType';
import { useUserTableColumns } from '../../hooks/useUserTableColumns';

//todo : init 데이터에 env 설정에 따라 데이터 변경
export const UserListTable = () => {
    const [userData, setUserData] = useState<UserDataType[]>(initUserData);
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
            console.log('values: ', values);
            setFilters((prev) => ({ ...prev, [key]: values }));
        };

    const handleUserInfoDelete = (key: string) => {
        console.log('삭제', key);
    };

    const handleUserInfoEdit = (key: string) => {
        console.log('수정', key);
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
        handleUserInfoEdit,
        handleUserInfoDelete,
    });

    return (
        <Table
            rowSelection={rowSelection}
            columns={userTableColumns}
            dataSource={filteredUserData}
            pagination={false}
            //todo : 테이블 스타일 확인
        />
    );
};
