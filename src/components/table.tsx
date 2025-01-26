import React from 'react';
import styles from './table.module.css';
import { useRouter } from "next/router";

interface TableProps {
    columns: Array<{ value: string; header: string }>;
    data: Array<{ [key: string]: any }>;
    onClick?: () => void;
    pageRouter?: string;
}

const Table: React.FC<TableProps> = ({ columns, data, pageRouter }: TableProps) => {
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
                        const url = `/${pageRouter}/${row.id}`;
                        const windowOptions = "width=800,height=600,scrollbars=yes,resizable=yes";
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
