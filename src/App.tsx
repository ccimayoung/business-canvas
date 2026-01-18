import './App.css';
import { Route, Routes } from 'react-router-dom';

import { AllAccessRoute } from './components/router/AllAccessRoute';
import { PrivateAccessRoute } from './components/router/PrivateAccessRoute';
import { PrivatePage } from './pages/PrivatePage';
import { UndifinedPage } from './pages/UndifinedPage';
import { UserListPage } from './pages/UserListPage';

function App() {
    const allAccess = [
        {
            path: '/',
            component: <UserListPage />,
        },
        {
            path: '/userList',
            component: <UserListPage />,
        },
        {
            path: '/*',
            component: <UndifinedPage />,
        },
    ];

    const privateAccess = [
        //추후 로그인 토큰 확장을 위해 프라이빗 라우트 추가
        {
            path: '/private',
            component: <PrivatePage />,
        },
    ];

    return (
        <Routes>
            {allAccess.map((page) => {
                return (
                    <Route
                        key={page.path}
                        path={page.path}
                        element={
                            <AllAccessRoute>{page.component}</AllAccessRoute>
                        }
                    />
                );
            })}
            {privateAccess.map((page) => {
                return (
                    <Route
                        key={page.path}
                        path={page.path}
                        element={
                            <PrivateAccessRoute>
                                {page.component}
                            </PrivateAccessRoute>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
