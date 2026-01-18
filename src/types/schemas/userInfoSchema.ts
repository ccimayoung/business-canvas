import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import z from 'zod';

// 타입별 maxLength 상수
const MAX_LENGTH = {
    text: 20,
    textarea: 50,
} as const;

// text, textarea 타입 스키마 생성 헬프 함수
const stringField = (
    type: 'text' | 'textarea',
    options?: { required?: boolean; label?: string }
) => {
    const maxLength = MAX_LENGTH[type];
    const base = z
        .string()
        .max(maxLength, `글자수 ${maxLength}을 초과할 수 없습니다.`);

    return options?.required
        ? base.min(1, `${options?.label}은 필수값입니다.`)
        : base.optional();
};

export const userInfoSchema = z.object({
    name: stringField('text', { required: true, label: '이름' }),
    address: stringField('text'),
    memo: stringField('textarea'),
    signUpDate: z.custom<Dayjs>((val) => val && dayjs.isDayjs(val), {
        message: '가입일은 필수값입니다.',
    }),
    job: z.string().optional(),
    agreeEmail: z.boolean(),
});

export type UserFormDataType = z.infer<typeof userInfoSchema>;
