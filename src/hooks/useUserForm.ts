import { zodResolver } from '@hookform/resolvers/zod';
import { message } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
    userInfoSchema,
    type UserFormDataType,
} from '../schemas/userInfoSchema';
import type { UserDataType } from '../types/userDataType';


interface UseUserFormProps {
    isUserInfoModalOpen: boolean;
    onClickUserSubmit: (data: Omit<UserDataType, 'key'>) => void;
    handleCloseModal: () => void;
    initialData?: UserDataType | null;
}

export const useUserForm = ({
    isUserInfoModalOpen,
    onClickUserSubmit,
    handleCloseModal,
    initialData,
}: UseUserFormProps) => {
    const isEditMode = !!initialData;

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        reset,
    } = useForm<UserFormDataType>({
        mode: 'onChange',
        resolver: zodResolver(userInfoSchema),
        defaultValues: {
            name: '',
            address: '',
            memo: '',
            signUpDate: undefined,
            job: '개발자',
            agreeEmail: false,
        },
    });

    useEffect(() => {
        if (!isUserInfoModalOpen) {
            reset();
        } else if (isUserInfoModalOpen && initialData) {
            reset({
                name: initialData.name,
                address: initialData.address,
                memo: initialData.memo,
                signUpDate: dayjs(initialData.signUpDate),
                job: initialData.job,
                agreeEmail: initialData.agreeEmail,
            });
        } else if (isUserInfoModalOpen && !initialData) {
            reset({
                name: '',
                address: '',
                memo: '',
                signUpDate: undefined,
                job: '개발자',
                agreeEmail: false,
            });
        }
    }, [isUserInfoModalOpen, initialData, reset]);

    const handleCancel = () => {
        reset();
        handleCloseModal();
    };

    const onFormSubmit = async (data: UserFormDataType) => {
        try {
            onClickUserSubmit({
                name: data.name,
                address: data.address || '',
                memo: data.memo || '',
                signUpDate: dayjs(data.signUpDate).format('YYYY-MM-DD'),
                job: data.job || '',
                agreeEmail: data.agreeEmail,
            });
            message.success(isEditMode ? '수정 완료' : '추가 완료');
            reset();
            handleCloseModal();
        } catch (error) {
            message.error('오류가 발생했습니다.');
            console.error(error);
        }
    };

    const hasErrors = Object.keys(errors).length > 0;

    const isSubmitDisabled = !isValid || hasErrors;

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
