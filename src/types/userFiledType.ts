import type { userFilterKeyType } from './userDataFilterType';

export type FieldType = 'text' | 'textarea' | 'date' | 'select' | 'checkbox';

export type FieldConfigType = {
    name: userFilterKeyType;
    type: FieldType;
    label?: string;
    required?: boolean;
    placeholder?: string;
    options?: {
        maxLength?: number;
        selectOptions?: Array<{ value: string; label: string }>;
    };
};
