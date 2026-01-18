## 목차

-   [기술 스택](#기술-스택)
-   [프로젝트 구조](#프로젝트-구조)
-   [설치 및 실행](#설치-및-실행)
-   [기능과 특이사항](#기능과-특이사항)

## 기술 스택

-   **React** `^19.2.0`
-   **TypeScript** `~5.9.3`
-   **Vite** `^7.2.4`

### UI 라이브러리

-   **Ant Design** `^6.2.0`
-   **Emotion** `^11.14.0` - CSS-in-JS

    -   `@emotion/react`
    -   `@emotion/styled`
    -   `@emotion/babel-plugin`

    ### Form

-   **React Hook Form** `^7.71.1` - 폼 상태 관리
-   **Zod** `^4.3.5` - 스키마 검증
-   **@hookform/resolvers** `^5.2.2` - React Hook Form과 Zod 통합

### 라우팅

-   **React Router DOM** `^7.9.2`

### 유틸리티

-   **Day.js** `^1.11.11` - AntD 의 날짜 포맷으로 설치

### 개발 도구

-   **ESLint** `^9.39.1` - 코드 린팅
-   **TypeScript ESLint** `^8.46.4` - TypeScript 린팅
-   **Playwright** `^1.57.0` - E2E 테스팅

## 프로젝트 구조

```
business-canvas-1/
├── public/                 # 정적 파일
├── src/
│   ├── assets/            # 이미지, 폰트 등 리소스
│   │   └── fonts/
│   │       ├── PRETENDARD-REGULAR.OTF
│   │       └── PRETENDARD-SEMIBOLD.OTF
│   ├── components/
│   │   ├── layouts/       # 레이아웃 컴포넌트
│   │   │   └── Layout.tsx
│   │   ├── ui/            # UI 컴포넌트
│   │   │   ├── FilterDropdown.tsx
│   │   │   ├── MoreDropDown.tsx
│   │   │   ├── TableFilterPopover.tsx
│   │   │   └── TableMorePopover.tsx
│   │   ├── userInfoModal/
│   │   │   ├── FieldRenderer.tsx
│   │   │   └── UserInfoModal.tsx
│   │   └── userList/
│   │       └── UserListTable.tsx
│   ├── constants/         # 상수 정의
│   │   ├── initUserData.ts
│   │   └── zIndex.ts
│   ├── hooks/             # 커스텀 훅
│   │   ├── useUserForm.ts
│   │   └── useUserTableColumns.tsx
│   ├── pages/             # 페이지
│   │   ├── PrivatePage.tsx
│   │   ├── UndifinedPage.tsx
│   │   └── UserListPage.tsx
│   ├── router/            # 라우팅 설정
│   │   ├── AllAccessRoute.tsx
│   │   └── PrivateAccessRoute.tsx
│   ├── schemas/           # Zod, field 정의
│   │   ├── userFormField.ts
│   │   └── userInfoSchema.ts
│   ├── styles/            # 스타일 정의
│   │   ├── globalDiv.ts
│   │   ├── globalFont.ts
│   │   ├── palette.ts
│   │   └── tableStyle.ts
│   ├── types/             # 타입 정의
│   │   ├── styleType.ts
│   │   ├── userDataFilterType.ts
│   │   ├── userDataType.ts
│   │   └── userFiledType.ts
│   ├── utils/             # 유틸리티 함수
│   │   └── storage.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── .eslintrc.js           # ESLint 설정
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## 설치 및 실행

### 설치

```bash
pnpm install
npm install
```

### 개발 서버 실행

```bash
pnpm run dev
npm run dev
```

### 코드 품질

-   `npm run lint` - ESLint로 코드 검사
-   `npm run lint:fix` - ESLint 자동 수정

## 기능 및 특이사항

### 사용자 관리

-   사용자 목록 조회 및 필터링
-   사용자 정보 추가/수정/삭제
-   React Hook Form과 Zod를 활용한 폼 검증

### 라우팅

-   React Router DOM을 사용한 클라이언트 사이드 라우팅
-   접근 권한에 따른 라우트 보호 (PrivateAccessRoute, AllAccessRoute)

### 스타일링

-   Emotion을 사용한 CSS-in-JS 스타일링
-   Ant Design 컴포넌트 활용
-   글로벌 스타일 및 팔레트 관리

### 폼 관리

-   React Hook Form으로 폼 상태 관리
-   Zod 스키마로 타입 안전한 검증
-   동적 필드 렌더링

### 고려사항

-   확장성 있는 구조 : 필드 추가를 위해서는 UserDataType, zod, table 컬럼 추가만 하면 확장되는 구조로 생성
-   text의 max-length : 피그마의 유저 정보 input의 에러메세지를 띄우기 위해 max-length에 도달해도 입력 불가 처리하지 않음.
