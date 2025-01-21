import React from 'react';
import Header from '../components/header'

interface MainLayoutProps {
    children: React.ReactNode;
    showHeader?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children,showHeader = true }) => {
    const menu= [
            {name: '메뉴관리', path: '/menuManagement'},
            {name: '전시관리', path: '/exhibitionManagement'},
            {name: '작품관리', path: '/workManagement'},
            {name: '프로필관리', path: '/profileManagement'}
        ]

    return (
        <div>
            {showHeader &&
                <Header menu={menu}/>
            }
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
