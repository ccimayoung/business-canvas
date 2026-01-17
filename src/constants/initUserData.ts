import type { UserDataType } from '../types/userDataType';

export const initUserData: UserDataType[] = [
    {
        key: '1',
        name: 'John Doe',
        address: '서울 강남구',
        memo: '외국인',
        signUpDate: '2024-10-02',
        job: '개발자',
        agreeEmail: true,
    },
    {
        key: '2',
        name: 'Foo Bar',
        address: '서울 서초구',
        memo: '한국인',
        signUpDate: '2024-10-01',
        job: 'PO',
        agreeEmail: false,
    },
];
