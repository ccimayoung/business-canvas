import { css } from '@emotion/react';
import { Form, Modal } from 'antd';

import { useUserForm } from '../../hooks/useUserForm';
import { handleFontStyle } from '../../styles/globalFont';
import palette from '../../styles/palette';
import { userFormFieldsConfig } from '../../types/schemas/userFormField';
import type { UserFormDataType } from '../../types/schemas/userInfoSchema';
import type {
    UserDataOmitKeyType,
    UserDataType,
} from '../../types/userDataType';

import { FieldRenderer } from './FieldRenderer';

interface UserInfoModalProps {
    isUserInfoModalOpen: boolean;
    setIsUserInfoModalOpen: (isOpen: boolean) => void;
    onClickUserSubmit: (data: UserDataOmitKeyType) => void;
    initialData?: UserDataType | null;
}

export const UserInfoModal = ({
    isUserInfoModalOpen,
    setIsUserInfoModalOpen,
    onClickUserSubmit,
    initialData,
}: UserInfoModalProps) => {
    const handleCloseModal = () => {
        setIsUserInfoModalOpen(false);
    };

    const {
        control,
        errors,
        isSubmitting,
        handleSubmit,
        handleCancel,
        isEditMode,
        isSubmitDisabled,
    } = useUserForm({
        isUserInfoModalOpen,
        onClickUserSubmit,
        handleCloseModal,
        initialData,
    });

    return (
        <Modal
            width={520}
            title={initialData ? '회원 수정' : '회원 추가'}
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isUserInfoModalOpen}
            cancelText="취소"
            okText={isEditMode ? '수정' : '추가'}
            loading={isSubmitting}
            onOk={handleSubmit}
            okButtonProps={{ disabled: isSubmitDisabled }}
            mask={{ blur: false }}
            onCancel={handleCancel}
        >
            <Form
                layout="vertical"
                onFinish={handleSubmit}
                css={css`
                    margin-top: 16px;
                    &.ant-form-vertical .ant-form-item {
                        margin-bottom: 20px;
                    }
                    &.ant-form-vertical .ant-form-item.ant-form-item-has-error {
                        margin-bottom: 42px;
                    }
                    &.ant-form-vertical .ant-form-item .ant-form-item-explain {
                        margin-top: 4px;
                    }
                    &.ant-form-vertical .ant-form-item-label > label {
                        color: ${palette.gray.gray200};
                        ${handleFontStyle('base_strong')}
                    }
                `}
            >
                <>
                    {userFormFieldsConfig.map((fieldConfig) => {
                        const { name, label, required } = fieldConfig;
                        const error = errors[name as keyof UserFormDataType];

                        const customLabel = (
                            <span>
                                {label}
                                {required && (
                                    <span
                                        style={{
                                            color: palette.color.error,
                                            marginLeft: 4,
                                        }}
                                    >
                                        *
                                    </span>
                                )}
                            </span>
                        );

                        return (
                            <Form.Item
                                key={name}
                                label={customLabel}
                                validateStatus={error ? 'error' : ''}
                                help={error?.message}
                            >
                                <FieldRenderer
                                    fieldConfig={fieldConfig}
                                    control={control}
                                />
                            </Form.Item>
                        );
                    })}
                </>
            </Form>
        </Modal>
    );
};
