import styles from './button.module.css';
import React from 'react';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset'; // 버튼 타입
    onClick?: () => void; // 클릭 이벤트 핸들러
    className?: string; // 추가적인 클래스명
    disabled?: boolean; // 버튼 비활성화 여부
    children: React.ReactNode; // 버튼에 표시될 내용 (텍스트 또는 JSX)
    loading?: boolean; // 로딩 상태 표시 여부
}

const Button: React.FC<ButtonProps> = ({
        type = 'button',
        onClick,
        className = '',
        disabled = false,
        children,
        loading = false,
    }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.button} ${loading ? `${styles.loading}` : ''} ${disabled ? `${styles.disabled}` : ''} ${className ? className : styles.buttonBg}`}
            disabled={disabled || loading}
        >
            {children}
        </button>
    );
};

export default Button;
