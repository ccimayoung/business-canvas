import type { FieldConfigType } from '../userFiledType';

export const JOB_OPTIONS = [
    { value: '개발자', label: '개발자' },
    { value: 'PO', label: 'PO' },
    { value: '디자이너', label: '디자이너' },
];

/**
 * 회원 폼 필드 설정
 * 향후 사용자가 필드를 추가/수정/삭제할 수 있도록 확장 가능한 구조
 */
export const userFormFieldsConfig: FieldConfigType[] = [
    {
        name: 'name',
        type: 'text',
        label: '이름',
        required: true,
        placeholder: '이름을 입력하세요',
    },
    {
        name: 'address',
        type: 'text',
        label: '주소',
        placeholder: '주소를 입력하세요',
    },
    {
        name: 'memo',
        type: 'textarea',
        label: '메모',
        placeholder: '메모를 입력하세요',
    },
    {
        name: 'signUpDate',
        type: 'date',
        label: '가입일',
        required: true,
        placeholder: '날짜를 선택하세요',
    },
    {
        name: 'job',
        type: 'select',
        label: '직업',
        placeholder: '직업을 선택하세요',
        selectOptions: JOB_OPTIONS,
    },
    {
        name: 'agreeEmail',
        type: 'checkbox',
        label: '이메일 수신 동의',
    },
];
