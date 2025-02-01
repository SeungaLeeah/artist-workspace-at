import React from 'react';
import styles from './table.module.css';
import { useRouter } from "next/router";

interface TableProps {
    columns: Array<{ value: string; header: string }>;
    data: Array<{ [key: string]: any }>;
    onClick?: () => void;
    pageRouter?: string;
    pageSizeOptions?:string;
}

const Table: React.FC<TableProps> = ({ columns, data, pageRouter, pageSizeOptions= 'width=800,height=600,scrollbars=yes,resizable=yes'}: TableProps) => {
    return (
        <table className={styles['table-wrap']}>
            <thead>
            <tr>
                {columns.map((col) => (
                    <th key={col.header} className={styles['table-th']}>{col.header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data?.map((row, rowIndex) => (
                <tr key={rowIndex} onClick={() => {
                    if (pageRouter) {
                        const url = `/${pageRouter}/detail/${row.id}`;
                        const windowOptions = pageSizeOptions;
                        window.open(url, '_blank', windowOptions); // 새 창 크기 설정
                    }
                }}>
                    {columns.map((col) => (
                        <td
                            key={String(col.value)}
                            className={styles['table-td']}
                        >
                            {row[col.value]}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;
