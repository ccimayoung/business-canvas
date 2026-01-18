import { useEffect, useState, type PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateAccessRoute = ({ children }: PropsWithChildren) => {
    const [isChecking, setIsChecking] = useState(true);
    const [canAccess, setCanAccess] = useState(true);

    useEffect(() => {
        const checkLogin = async () => {
            // 추후 로그인 로직 확인. 현재는 프라이빗 라우터 접근 불가로 임의 설정
            setIsChecking(false);
            setCanAccess(false);
        };

        checkLogin();
    }, []);

    // 체크 중이면 아무것도 렌더링하지 않음
    if (isChecking) {
        return null;
    }

    // 접근불가시 userList 페이지로 이동
    if (!canAccess) {
        return <Navigate to="/userList" />;
    }

    // 로그인 정보 있으면 children 렌더링
    return <>{children}</>;
};
