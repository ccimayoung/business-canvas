export type UserDataType = {
    key: string;
    name: string;
    address: string;
    memo: string;
    signUpDate: string;
    job: string;
    agreeEmail: boolean;
};

export type UserDataOmitKeyType = Omit<UserDataType, 'key'>;
