import { zodResolver } from '@hookform/resolvers/zod';
import { message } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { userFormFieldsConfig } from '../types/schemas/userFormField';
import {
    userInfoSchema,
    type UserFormDataType,
} from '../types/schemas/userInfoSchema';
import type { UserDataOmitKeyType, UserDataType } from '../types/userDataType';

interface UseUserFormProps {
    isUserInfoModalOpen: boolean;
    onClickUserSubmit: (data: UserDataOmitKeyType) => void;
    handleCloseModal: () => void;
    initialData?: UserDataType | null;
}

// 필드 타입별 기본값 생성
const getDefaultValue = (
    type: string,
    selectOptions?: Array<{ value: string; label: string }>
) => {
    if (type === 'date') return undefined;
    if (type === 'checkbox') return false;
    if (type === 'select' && selectOptions?.[0]) return selectOptions[0].value;
    return '';
};

export const useUserForm = ({
    isUserInfoModalOpen,
    onClickUserSubmit,
    handleCloseModal,
    initialData,
}: UseUserFormProps) => {
    const isEditMode = !!initialData;

    const defaultValues = useMemo(() => {
        const obj = {};
        userFormFieldsConfig.forEach(({ name, type, selectOptions }) => {
            const defaultValue = getDefaultValue(type, selectOptions);
            (obj as Record<string, unknown>)[name] = defaultValue;
        });
        return obj;
    }, []);

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        reset,
    } = useForm<UserFormDataType>({
        mode: 'onChange',
        resolver: zodResolver(userInfoSchema),
        defaultValues,
    });

    const hasErrors = Object.keys(errors).length > 0;
    const isSubmitDisabled = !isValid || hasErrors;

    const onFormSubmit = async (data: UserFormDataType) => {
        const submitData: Record<string, unknown> = {};
        userFormFieldsConfig.forEach(({ name, type }) => {
            const value = data[name as keyof UserFormDataType];

            if (type === 'date') {
                submitData[name] = dayjs(value as dayjs.Dayjs).format(
                    'YYYY-MM-DD'
                );
            } else if (type === 'checkbox') {
                submitData[name] = value ?? false;
            } else {
                submitData[name] = value || '';
            }
        });

        onClickUserSubmit(submitData as UserDataOmitKeyType);
        message.success(isEditMode ? '수정 완료' : '추가 완료');
        reset();
        handleCloseModal();
    };

    const handleCancel = () => {
        reset();
        handleCloseModal();
    };

    useEffect(() => {
        if (!isUserInfoModalOpen) {
            reset();
            return;
        }

        if (!isEditMode) {
            reset(defaultValues);
            return;
        }

        // 수정 모드일때
        const beforeValues: Record<string, unknown> = {};
        userFormFieldsConfig.forEach(({ name, type }) => {
            const value = initialData[name as keyof UserDataType];
            beforeValues[name] = type === 'date' ? dayjs(String(value)) : value;
        });
        reset(beforeValues as UserFormDataType);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUserInfoModalOpen, initialData, defaultValues]);

    return {
        control,
        errors,
        isSubmitting,
        handleSubmit: handleSubmit(onFormSubmit),
        handleCancel,
        isEditMode,
        isSubmitDisabled,
    };
};
