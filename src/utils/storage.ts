import { initUserData } from '../constants/initUserData';
import type { UserDataType } from '../types/userDataType';

const STORAGE_KEY = 'user-data';

export type StorageType = 'in-memory' | 'local-storage';

/**
 * 환경 변수에서 저장소 타입 읽어오기. 기본값 in-memory
 */
export const getStorageType = (): StorageType => {
    const storageType = import.meta.env.VITE_STORAGE;
    if (storageType === 'local-storage' || storageType === 'in-memory') {
        return storageType;
    }
    return 'in-memory';
};

export const loadUserData = (): UserDataType[] => {
    const storageType = getStorageType();

    if (storageType === 'in-memory') return [...initUserData];

    // local-storage
    try {
        const localStroageData = localStorage.getItem(STORAGE_KEY);
        if (localStroageData) {
            const parsed = JSON.parse(localStroageData) as UserDataType[];
            return [...parsed];
        } else {
            return [...initUserData]; // Local Storage가 비어있으면 샘플 데이터 반환
        }
    } catch {
        return [...initUserData];
    }
};

export const saveUserData = (userData: UserDataType[]): void => {
    const storageType = getStorageType();

    if (storageType === 'in-memory') return;

    // local-storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
};
