import React, {useState} from 'react';
import MainLayout from "../../layouts/mainLayout";
import Table from '../../components/table'
import styles from '../workManagement/workManagement.module.css'
import SelectBox from "../../components/selectBox";
import Button from "../../components/button";
import Pagination from "../../components/pagination";
import {useRouter} from "next/router";
import {WorkManagement} from '../../store/workManagement'
import Input from "../../components/input";

const index = () => {
    const items = Array.from({length: 100}, (_, i) => `Item ${i + 1}`); // 예시 데이터
    const pageSize = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const currentItems = items.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );
    const {
        fetchSearch,
    } = WorkManagement();
    const router = useRouter();
    const columns = [
        {value: 'id', header: 'ID'},
        {value: 'name', header: 'Name'},
        {value: 'email', header: 'Email'},
    ];

    const data = [
        {id: 1, name: 'John Doe', email: 'john@example.com'},
        {id: 2, name: 'Jane Doe', email: 'jane@example.com'},
        {id: 3, name: 'Mark Smith', email: 'mark@example.com'},
    ];
    const [isType, setIsType] = useState('');
    const [isTitle, setIsTitle] = useState('');
    const [selectedOption, setSelectedOption] = useState<string>('');
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const handleChange = (value: string) => {
        setSelectedOption(value);
    };
    const handleReset = () => {
        setIsType('');
        setIsTitle('');
    };
    const handleSearch = async () => {
        console.log('s')
        fetchSearch(selectedOption);
    };
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
        if (label === 'type') {
            setIsType(e.target.value);

        } else if (label === 'title') {
            setIsTitle(e.target.value);
        }

    };
    return (
        <div className={'pd-40'}>
            <div className={'bold fs-36 mg-bt-20'}>작품관리</div>
            <div className={'fx-space-between w-100'}>
                <div className={'fx-row w-100'}>
                    <div className={'fx-align-items-center w-50'}>
                        <div className={`search-title medium fs-13 center`}>타입</div>
                        <div className={`search-value w-100`}>
                            <Input
                                type="text"
                                value={isType}
                                onChange={(e) => handleSearchChange(e, 'type')}
                            />
                        </div>
                    </div>
                    <div className={'fx-align-items-center w-50'}>
                        <div className={`search-title medium fs-13 center`}>제목</div>
                        <div className={`search-value w-100`} style={{borderRight: '1px solid #ccc'}}>
                            <Input
                                type="text"
                                value={isTitle}
                                onChange={(e) => handleSearchChange(e, 'title')}
                            />
                        </div>
                    </div>
                </div>
                <div className={'fx-right mg-lf-8'}>
                    <Button
                        onClick={handleReset}
                        fontSize={'14px'}
                        className={`mg-rt-8 ${styles['add-btn']}`}
                        width={'60px'}
                        height={'42px'}
                    >
                        {'초기화'}
                    </Button>
                    <Button
                        onClick={handleSearch}
                        fontSize={'14px'}
                        className={`${styles['add-btn']}`}
                        width={'60px'}
                        height={'42px'}
                    >
                        {'검색'}
                    </Button>
                </div>
            </div>
            <div className={'pd-tp-20'}>
                <SelectBox options={options} placeHolder="직접입력" value={selectedOption} onChange={handleChange}/>
            </div>
            <Table columns={columns} data={data}/>
            <div className={'center mg-tp-30'}>
                <Pagination
                    totalData={data.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};
index.getLayout = function getLayout(page: React.ReactNode) {
    return <MainLayout showHeader={true}>{page}</MainLayout>;
};
export default index;
