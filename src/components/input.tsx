import React, {ChangeEvent} from 'react';
import styles from './input.module.css';
interface InputProps {
    type?: 'text' | 'password' | 'email' | 'number' | 'tel';
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    successText?:string;
    errorText?: string;
    label?: string;
    name?: string;
    required?: boolean;
    autoFocus?: boolean;
    className?:string;
    width?:string;
}

const Input: React.FC<InputProps> = ({
    type = 'text',
    onChange,
    value,
    placeholder,
    disabled = false,
    successText,
    errorText,
    label,
    name,
    required = false,
    autoFocus = false,
    className,
    width=''
                                     }) => {
    const inputClassName = `${styles.inputField} ${errorText ? styles.inputError : ''} `;
    return (
        <div className={`${styles.inputContainer} ${className}`} style={{width:width}}>
            {label && (
                <label htmlFor={name} className={`${styles.inputLabel}`}>
                    {label} 
                    {required && <span className={`${styles.required}`}>*</span>}
                </label>
            )}
            <input
                id={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={inputClassName}
                required={required}
                autoFocus={autoFocus}
            />
            {successText && <span className={`${styles.errorMessage}`}>{successText}</span>}
            {errorText && <span className={`${styles.errorMessage}`}>{errorText}</span>}
        </div>
    );
}

export default Input;
