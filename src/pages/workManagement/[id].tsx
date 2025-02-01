import React, {useState} from 'react';
import MainLayout from "../../layouts/mainLayout";
import Input from "../../components/input";
import styles from '../workManagement/workManagement.module.css'
import SelectBox from "../../components/selectBox";
import Editor from "../../components/editor";

const id = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isType, setIsType] = useState('');
    const [isTitle, setIsTitle] = useState('');
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
        if (label === 'type') {
            setIsType(e.target.value);

        } else if (label === 'title') {
            setIsTitle(e.target.value);
        }

    };
    const handleChange = (value: string) => {
        setSelectedOption(value);
    };
    return (
        <div className={`${styles['detail-wrap']}`}>
            <div className={`pd-20`}>
                <div className={'fs-24 bold'}>
                    작품 등록 수정
                </div>
                <div className={`fx-column w-100 ${styles['detail-table-wrap']}`}>
                    <div className={`fx-align-items-center w-100 border-bottom`}>
                        <div className={`${styles['detail-table-title']}`}>
                            <div className={`pd-lf-16 medium fs-13 fx-left`}>타입</div>
                        </div>
                        <div className={`${styles['detail-table-value']} w-100`}>
                            <SelectBox
                                options={options}
                                value={selectedOption}
                                onChange={handleChange}
                                placeHolder="직접입력"
                                width={'100%'}
                            />
                        </div>
                    </div>
                    <div className={'fx-align-items-center w-100 border-bottom'}>
                        <div className={`${styles['detail-table-title']}`}>
                            <div className={`pd-lf-16 medium fs-13 fx-left`}>제목</div>
                        </div>
                        <div className={`${styles['detail-table-value']} w-100`}>
                            <Input
                                type="text"
                                value={isTitle}
                                onChange={(e) => handleSearchChange(e, 'title')}
                            />
                        </div>
                    </div>
                    <div className={`fx-align-items-center w-100 border-bottom`}>
                        <div className={`${styles['detail-table-title']}`}>
                            <div className={`pd-lf-16 medium fs-13 fx-left`}>게시물 공개/비공개</div>
                        </div>
                        <div className={`${styles['detail-table-value']} w-100`}>
                            <SelectBox
                                options={options}
                                value={selectedOption}
                                onChange={handleChange}
                                placeHolder="직접입력"
                                width={'100%'}
                            />
                        </div>
                    </div>
                    <div className={'fx-align-items-center w-100 border-bottom'}>
                        <div className={`${styles['detail-table-title']}`}>
                            <div className={`pd-lf-16 medium fs-13 fx-left`}>작품 설명</div>
                        </div>
                        <div className={`${styles['detail-table-value']} w-100`}>
                            <Input
                                type="text"
                                value={isTitle}
                                onChange={(e) => handleSearchChange(e, 'title')}
                            />
                        </div>
                    </div>
                    <div className={'fx-align-items-center w-100 border-bottom'}>
                        <div className={`${styles['detail-table-title']}`}>
                            <div className={`pd-lf-16 medium fs-13 fx-left`}>작품 가격</div>
                        </div>
                        <div className={`${styles['detail-table-value']} w-100`}>
                            <Input
                                type="text"
                                value={isTitle}
                                onChange={(e) => handleSearchChange(e, 'title')}
                            />
                        </div>
                    </div>
                    <div className={'fx-align-items-center w-100 border-bottom'}>
                        <div className={`${styles['detail-table-title']}`}>
                            <div className={`pd-lf-16 medium fs-13 fx-left`}>작품 러닝타임</div>
                        </div>
                        <div className={`${styles['detail-table-value']} w-100`}>
                            <Input
                                type="text"
                                value={isTitle}
                                onChange={(e) => handleSearchChange(e, 'title')}
                            />
                        </div>
                    </div>
                    <div className={'fx-align-items-center w-100 border-bottom'}>
                        <div className={'fx-row h-100 w-100'}>
                        <div className={`${styles['detail-table-title']}`}>
                            <div className={`pd-lf-16 medium fs-13 fx-left`}>작품 설명</div>
                        </div>
                        <div className={`${styles['detail-table-value']} w-100`}>
                            <Editor/>
                        </div>
                        </div>
                    </div>
                    <div className={'fx-align-items-center w-100'}>
                        <div className={`${styles['detail-table-title']}`}>
                            <div className={`pd-lf-16 medium fs-13 fx-left`}>썸네일 첨부</div>
                        </div>
                        <div className={`${styles['detail-table-value']} w-100`}>
                            <Input
                                type="text"
                                value={isTitle}
                                onChange={(e) => handleSearchChange(e, 'title')}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
id.getLayout = function getLayout(page: React.ReactNode) {
    return <MainLayout showHeader={false}>{page}</MainLayout>;
};
export default id;
