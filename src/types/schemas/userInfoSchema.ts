import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import z from 'zod';

export const userInfoSchema = z.object({
    name: z.string().min(1, '이름은 필수값입니다.'),
    address: z.string().max(20, '글자수 20을 초과할 수 없습니다.').optional(),
    memo: z.string().max(50, '글자수 50을 초과할 수 없습니다.').optional(),
    signUpDate: z.custom<Dayjs>((val) => val && dayjs.isDayjs(val), {
        message: '가입일은 필수값입니다.',
    }),
    job: z.string().optional(),
    agreeEmail: z.boolean(),
});

export type UserFormDataType = z.infer<typeof userInfoSchema>;
