import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { Layout } from '../components/layouts/Layout';
import { UserListTable } from '../components/userList/UserListTable';
import { rowFlexCSS } from '../styles/globalDiv';
import { Font } from '../styles/globalFont';
import palette from '../styles/palette';

export const UserListPage = () => {
  return (
    <Layout>
      <header css={Style.header}>
        <Font fontType="heading_heading5">회원 목록</Font>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          iconPlacement={'start'}
          style={{ color: palette.basic.white }}
        >
          추가
        </Button>

      </header>

      <section>
        <UserListTable />
      </section>

  
    </Layout>
  );
};

const Style = {
  header: rowFlexCSS({
    w: '100%',
    h: '48px',
    padding: '8px 14px',
    justify: 'space-between',
  }),
};
