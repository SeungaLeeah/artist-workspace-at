import styles from './header.module.css';
import React from 'react';
import {useRouter} from "next/router";

interface HeaderProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    menu?: { name: string, path: string }[];
    fontSize?:string;
    img?:string;
    logoImage?:string;
}

const Header: React.FC<HeaderProps> = ({
    type = 'button',
    onClick,
    className = '',
    fontSize='14px',
    menu = [],
    img='100px',
    logoImage
}) => {
    const router = useRouter();
    console.log(router.pathname,'router.pathname')
    return (
        <div className={`${styles['header-wrap']}`}>
            <div className={`medium fs-20 ${styles['header-logo']}`} onClick={()=>router.push('/menuManagement')}>Artist Workspace </div>
            <div className={`fx-row ${styles['menu-list-wrap']}`}>
                {menu.map((item, index) => (
                    <div key={index} className={`${styles['menu-item']} ${router.pathname === item.path ? 'bold' : 'regular'}`} onClick={()=>router.push(item.path)}  style={{fontSize:fontSize}}>{item.name}</div>
                ))}
            </div>
        </div>
    );
};

export default Header;
