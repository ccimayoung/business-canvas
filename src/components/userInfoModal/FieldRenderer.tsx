import { Input, DatePicker, Select, Checkbox } from 'antd';
import locale from 'antd/locale/ko_KR';
import type { Dayjs } from 'dayjs';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';

import type { UserFormDataType } from '../../types/schemas/userInfoSchema';
import type { FieldConfigType } from '../../types/userFiledType';

interface FieldRendererProps {
    fieldConfig: FieldConfigType;
    control: Control<UserFormDataType>;
}

/**
 * 필드 타입에 따라 컴포넌트 반환
 */
export const FieldRenderer = ({ fieldConfig, control }: FieldRendererProps) => {
    const { name, type, placeholder, options } = fieldConfig;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                switch (type) {
                    case 'text': {
                        const value = field.value as string | undefined;
                        return (
                            <Input
                                {...field}
                                value={value}
                                placeholder={placeholder}
                            />
                        );
                    }

                    case 'textarea': {
                        const value = field.value as string | undefined;
                        return (
                            <Input.TextArea
                                {...field}
                                value={value}
                                placeholder={placeholder}
                            />
                        );
                    }

                    case 'date': {
                        const value = field.value as Dayjs | null | undefined;
                        return (
                            <DatePicker
                                value={value || undefined}
                                onChange={(date) => {
                                    field.onChange(date || null);
                                }}
                                placeholder={placeholder}
                                style={{ width: '160px' }}
                                format="YYYY-MM-DD"
                                locale={locale.DatePicker}
                            />
                        );
                    }

                    case 'select': {
                        const value = field.value as string | undefined;
                        return (
                            <Select
                                {...field}
                                value={value}
                                placeholder={placeholder}
                                options={options?.selectOptions}
                                style={{ width: '360px' }}
                            />
                        );
                    }

                    case 'checkbox': {
                        const value = field.value as boolean | undefined;
                        return (
                            <Checkbox
                                checked={value}
                                onChange={(e) =>
                                    field.onChange(e.target.checked)
                                }
                            />
                        );
                    }

                    default:
                        return <></>;
                }
            }}
        />
    );
};
