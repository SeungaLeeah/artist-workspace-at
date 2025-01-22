import React, {useState} from 'react';
import MainLayout from "../../layouts/mainLayout";
import Table from '../../components/table'
import styles from '../workManagement/workManagement.module.css'
import SelectBox from "../../components/selectBox";
import Button from "../../components/button";
import {useRouter} from "next/router";
import {WorkManagement} from '../../store/workManagement'
import Input from "../../components/input";

const index = () => {
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
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [selectedOption, setSelectedOption] = useState<string>('');
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const handleChange = (value: string) => {
        setSelectedOption(value);
    };
    const cancelBtn = () => {
        router.push(`/`);
    };
    const handleSearch = async () => {
        console.log('s')
        fetchSearch(selectedOption);
    };
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
        if (label === ' type') {
            setType(e.target.value);
        } else if (label === ' title') {
            setTitle(e.target.value);
        }

    };
    return (
        <div className={'pd-40'}>
            <div className={'bold fs-36'}>작품관리</div>
            <div>
                <div className={'fx-row'}>
                    <Button
                        onClick={cancelBtn}
                        fontSize={'14px'}
                        className={`${styles['add-btn']}`}
                        width={'60px'}
                    >
                        {'초기화'}
                    </Button>
                    <Button
                        onClick={handleSearch}
                        fontSize={'14px'}
                        className={`${styles['add-btn']}`}
                        width={'60px'}
                    >
                        {'검색'}
                    </Button>
                </div>
                <div className={'fx-align-items-center'}>
                    <div>
                        <div>타입</div>
                        <div>
                            <Input
                                type="text"
                                value={type}
                                onChange={(e) => handleSearchChange(e, 'type')}
                            />
                        </div>
                    </div>
                    <div>
                        <div>제목</div>
                        <div>
                            <Input
                                type="text"
                                value={type}
                                onChange={(e) => handleSearchChange(e, 'title')}
                            />
                        </div>
                    </div>
                    <Button
                        onClick={cancelBtn}
                        fontSize={'14px'}
                        className={`${styles['add-btn']}`}
                        width={'60px'}
                    >
                        {'등록'}
                    </Button>
                </div>
            </div>
            <div>
                <SelectBox options={options} value={selectedOption} onChange={handleChange}/>
            </div>
            <Table columns={columns} data={data}/>
        </div>
    );
};
index.getLayout = function getLayout(page: React.ReactNode) {
    return <MainLayout showHeader={true}>{page}</MainLayout>;
};
export default index;
