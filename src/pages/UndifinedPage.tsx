import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../components/layouts/Layout';
import { columnFlexCSS } from '../styles/globalDiv';
import { Font } from '../styles/globalFont';

//* 없는 페이지 접근 시 렌더링되는 페이지
export const UndifinedPage = () => {
    const navigate = useNavigate();

    const onClickUserListBtn = () => {
        navigate('/userList');
    };

    return (
        <Layout>
            <section
                css={columnFlexCSS({
                    cGap: '16px',
                    w: '100%',
                    h: '100%',
                    justify: 'center',
                    align: 'center',
                })}
            >
                <Font fontType="heading_heading5">
                    찾을 수 없는 페이지 입니다
                </Font>
                <Button
                    onClick={onClickUserListBtn}
                    type="primary"
                    style={{ marginTop: 16, width: '200px' }}
                >
                    유저 리스트 페이지로 이동
                </Button>
            </section>
        </Layout>
    );
};
