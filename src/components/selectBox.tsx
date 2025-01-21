import React from 'react';
import styles from './selectBox.module.css';

interface SelectBoxProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
    height?: string;
    placeHolder?: string;
    width?:string;
}

const selectBox: React.FC<SelectBoxProps> = ({
    options,
    value,
    onChange,
    label,
    disabled,
    className = '',
    height = '36px',
    placeHolder,
    width='100px'
}) => {
    return (
        <div style={{height: height, width:width}} className={`${styles['select-box']} ${className}`}>
            <select
                className={`${styles.select}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                aria-label={label}
            >
                <option value="" disabled>
                    {placeHolder}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default selectBox;
