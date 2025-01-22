import React from 'react';
import styles from './pagination.module.css'
interface PaginationProps {
    totalData: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
   totalData,
   pageSize,
   currentPage,
   onPageChange,
}) => {
    const totalPages = Math.ceil(totalData / pageSize);


    const pageGroupPre = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const pageGroupNext = Math.min(pageGroupPre + 4, totalPages);

    const pageNumbers = Array.from(
        { length: pageGroupNext - pageGroupPre + 1 },
        (_, index) => pageGroupPre + index
    );

    const handlePrevGroup = () => {
        onPageChange(pageGroupPre - 1);
    };

    const handleNextGroup = () => {
        onPageChange(pageGroupNext + 1);
    };

    return (
        <div className="pagination">
            <button
                className={styles.button}
                onClick={handlePrevGroup}
                disabled={pageGroupPre === 1}
            >
                이전
            </button>

            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                    className={`${styles['page-number']} ${currentPage === pageNumber ? styles.active : ''}`}
                >
                    {pageNumber}
                </button>
            ))}

            <button
                className={styles.button}
                onClick={handleNextGroup}
                disabled={pageGroupNext === totalPages}
            >
                다음
            </button>
        </div>
    );
};

export default Pagination;
