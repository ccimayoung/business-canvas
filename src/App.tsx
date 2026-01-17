import './App.css';
import { Route, Routes } from 'react-router-dom';

import { PrivatePage } from './pages/PrivatePage';
import { UndifinedPage } from './pages/UndifinedPage';
import { UserListPage } from './pages/UserListPage';
import { AllAccessRoute } from './router/AllAccessRoute';
import { PrivateAccessRoute } from './router/PrivateAccessRoute';

function App() {
  const allAccess = [
    {
      path: '/*',
      component: <UndifinedPage />,
    },
    {
      path: '/userList',
      component: <UserListPage />,
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
            element={<AllAccessRoute>{page.component}</AllAccessRoute>}
          />
        );
      })}
      {privateAccess.map((page) => {
        return (
          <Route
            key={page.path}
            path={page.path}
            element={<PrivateAccessRoute>{page.component}</PrivateAccessRoute>}
          />
        );
      })}
    </Routes>
  );
}

export default App;
