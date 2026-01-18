### 고려사항

-   확장성 있는 구조 : 필드 추가를 위해서는 UserDataType, zod, table 컬럼 추가만 하면 확장되는 구조로 생성
-   text의 max-length : 피그마의 유저 정보 input의 에러메세지를 띄우기 위해 max-length에 도달해도 입력 불가 처리하지 않음.

## 기술 스택

-   **React** `^19.2.0`
-   **TypeScript** `~5.9.3`
-   **Vite** `^7.2.4`

### 라우팅

-   **React Router DOM** `^7.9.2`

### UI 라이브러리

-   **Ant Design** `^6.2.0`
-   **Emotion** `^11.14.0` - CSS-in-JS

### Form

-   **React Hook Form** `^7.71.1` - 폼 상태 관리
-   **Zod** `^4.3.5` - 스키마 검증
-   **@hookform/resolvers** `^5.2.2` - React Hook Form과 Zod 통합

### 유틸리티

-   **Day.js** `^1.11.11` - AntD 의 날짜 포맷으로 설치

### 개발 도구

-   **ESLint** `^9.39.1` - 코드 린팅
-   **TypeScript ESLint** `^8.46.4` - TypeScript 린팅
-   **Playwright** `^1.57.0` - E2E 테스팅

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

## 기능

### 사용자 관리

-   사용자 목록 조회 및 필터링
-   사용자 정보 추가/수정/삭제
-   React Hook Form과 Zod를 활용한 폼 검증

### 라우팅

-   접근 권한에 따른 라우트 보호 (PrivateAccessRoute, AllAccessRoute)

### 스타일링

-   Emotion을 사용한 CSS-in-JS 스타일링
-   Ant Design 컴포넌트 활용
-   글로벌 스타일 및 팔레트 관리

### 폼 관리

-   React Hook Form으로 폼 상태 관리
-   Zod 스키마로 타입 안전한 검증
-   동적 필드 렌더링
