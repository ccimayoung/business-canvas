import type { TableProps } from 'antd';
import type { UserDataType } from '../types/userDataType';

export const tableStyles: TableProps<UserDataType>['styles'] = {
    header: {
        cell: {
            height: '38px',
            padding: '8px',
            fontFamily: 'Pretendard-Semibold',
            fontSize: '14px',
            lineHeight: '22px',
        },
    },

    body: {
        cell: {
            height: '48px',
            padding: '13px 8px',
            fontFamily: 'Pretendard-Regular',
            fontSize: '14px',
            lineHeight: '22px',
            fontWeight: 400,
        },
    },
};
