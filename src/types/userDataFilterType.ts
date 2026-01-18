import type { UserDataOmitKeyType } from './userDataType';

export type userFilterKeyType = keyof UserDataOmitKeyType;

export type userFiilterStateType = Record<userFilterKeyType, string[]>;

export type filterOptionType = {
    label: string;
    value: string;
};

export type filterOptionListType = Record<
    userFilterKeyType,
    filterOptionType[]
>;
