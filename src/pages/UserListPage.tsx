import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState, useEffect } from 'react';

import { Layout } from '../components/layouts/Layout';
import { UserInfoModal } from '../components/userInfoModal/UserInfoModal';
import { UserListTable } from '../components/userList/UserListTable';
import { rowFlexCSS } from '../styles/globalDiv';
import { Font } from '../styles/globalFont';
import palette from '../styles/palette';
import type { UserDataType } from '../types/userDataType';
import { loadUserData, saveUserData } from '../utils/storage';

export const UserListPage = () => {
    const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
    const [userData, setUserData] = useState<UserDataType[]>(() =>
        loadUserData()
    );
    const [editingUser, setEditingUser] = useState<UserDataType | null>(null);

    const onClickUserSubmit = (data: Omit<UserDataType, 'key'>) => {
        if (editingUser) {
            setUserData((prev) =>
                prev.map((user) =>
                    user.key === editingUser.key
                        ? { ...data, key: editingUser.key }
                        : user
                )
            );
            setEditingUser(null);
        } else {
            const newUser: UserDataType = {
                ...data,
                key: String(Date.now()),
            };
            setUserData((prev) => [...prev, newUser]);
        }
        setIsUserInfoModalOpen(false);
    };

    const onClickUserEdit = (key: string) => {
        const userToEdit = userData.find((user) => user.key === key);
        if (userToEdit) {
            setEditingUser(userToEdit);
            setIsUserInfoModalOpen(true);
        }
    };

    const onClickUserDelete = (key: string) => {
        setUserData((prev) => prev.filter((user) => user.key !== key));
    };

    const onClickUserAdd = () => {
        setEditingUser(null);
        setIsUserInfoModalOpen(true);
    };

    useEffect(() => {
        saveUserData(userData);
    }, [userData]);

    return (
        <Layout>
            <header css={Style.header}>
                <Font fontType="heading_heading5">회원 목록</Font>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    iconPlacement={'start'}
                    style={{ color: palette.basic.white }}
                    onClick={onClickUserAdd}
                >
                    추가
                </Button>
            </header>

            <section>
                <UserListTable
                    userData={userData}
                    onClickUserEdit={onClickUserEdit}
                    onClickUserDelete={onClickUserDelete}
                />
            </section>

            <UserInfoModal
                isUserInfoModalOpen={isUserInfoModalOpen}
                setIsUserInfoModalOpen={setIsUserInfoModalOpen}
                onClickUserSubmit={onClickUserSubmit}
                initialData={editingUser}
            />
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
