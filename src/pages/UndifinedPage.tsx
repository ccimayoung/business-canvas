import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/layouts/Layout';

//todo : 메인 페이지로 이동 버튼 추가

//* 없는 페이지 접근 시 렌더링되는 페이지
export const UndifinedPage = () => {
  const navigate = useNavigate();

  const onClickUserListBtn = () => {
    navigate('/userList');
  };

  return (
    <Layout>
      <div>찾을 수 없는 페이지 입니다.</div>
      <button onClick={onClickUserListBtn}>유저 리스트 페이지로 이동</button>
    </Layout>
  );
};
