import type { UserDataType } from './userDataType';

export type userFilterKeyType = Exclude<keyof UserDataType, 'key'>;

export type userFiilterStateType = Record<userFilterKeyType, string[]>;

export type filterOptionType = {
    label: string;
    value: string;
};

export type filterOptionListType = Record<
    userFilterKeyType,
    filterOptionType[]
>;
