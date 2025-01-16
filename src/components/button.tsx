import styles from './button.module.css';
import React from 'react';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
    loading?: boolean;
    fontSize?:string
}

const Button: React.FC<ButtonProps> = ({
        type = 'button',
        onClick,
        className = '',
        disabled = false,
        children,
        loading = false,
        fontSize='16px'
    }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            style={{fontSize:fontSize}}
            className={`${styles.button} ${loading ? `${styles.loading}` : ''} ${disabled ? `${styles.disabled}` : ''} ${className ? className : styles.buttonBg}`}
            disabled={disabled || loading}
        >
            {children}
        </button>
    );
};

export default Button;
