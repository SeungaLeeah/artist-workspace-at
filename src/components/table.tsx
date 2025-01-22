import React from 'react';
import styles from './table.module.css'

interface TableProps {
    columns: Array<{ value: string; header: string }>;
    data:[];
}

const Table: React.FC<TableProps> =({ columns, data }: TableProps) => {
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
                <tr key={rowIndex}>
                    {columns.map((col) => (
                        <td key={String(col.value)} className={styles['table-td']}>
                            {row[col.value] as React.ReactNode}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;
