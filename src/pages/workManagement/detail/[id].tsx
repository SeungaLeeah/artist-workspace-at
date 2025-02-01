import React, {useEffect, useState} from 'react';
import MainLayout from "../../../layouts/mainLayout";
import Input from "../../../components/input";
import styles from '../workManagement.module.css'
import SelectBox from "../../../components/selectBox";
import Editor from "../../../components/editor";
import Button from "../../../components/button";
import {useRouter} from "next/router";

const id = () => {
    const router =useRouter()
    const { id } = router.query;
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isType, setIsType] = useState('');
    const [isTitle, setIsTitle] = useState('');
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const [editorValue, setEditorValue] = useState('');

    useEffect(()=>{
        console.log(id,'id')
    })

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
        if (label === 'type') {
            setIsType(e.target.value);

        } else if (label === 'title') {
            setIsTitle(e.target.value);
        }

    };
    const handleEditorChange = (value: string) => {
        setEditorValue(value);
    };
    const handleChange = (value: string) => {
        setSelectedOption(value);
    };
    const handleCancel = () => {
        window.close();
    };
    const handleSave = () => {
        window.close();
    };
    const handlePreview = (editorValue: string) => {
        const windowOptions = 'width=800,height=600,scrollbars=yes,resizable=yes';
        const previewPage = window.open(`/workManagement/detail/preview?id=${id}`, '_blank', windowOptions);

        if (previewPage) {
            previewPage.onload = () => {
                if (previewPage.opener) {
                    previewPage.opener.editorValue = editorValue;
                }
            };
        }
    };
    return (
        <div className={`${styles['detail-wrap']}`}>
            <div className={`pd-20`}>
                <div className={`fs-24 bold ${styles['detail-table-main-title']}`}>
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
                            <div className={`${styles['detail-table-value']} w-100 mg-tp-3 mg-bt-3`}>
                                <Editor editorValue={editorValue} onChange={handleEditorChange} />
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
                <div className={`mg-tp-14 ${styles['btn-wrap']}`}>
                    <Button
                        onClick={handleCancel}
                        className={`${styles['login-btn']} mg-rt-4`}
                        width={'80px'}
                        height={'36px'}
                    >
                        {'삭제'}
                    </Button>
                    <Button

                        className={`${styles['login-btn']} mg-rt-4`}
                        width={'80px'}
                        height={'36px'}
                    >
                        {'취소'}
                    </Button>
                    <Button
                        onClick={()=>handlePreview(editorValue)}
                        className={`${styles['login-btn']} mg-lf-4`}
                        width={'80px'}
                        height={'36px'}
                    >
                        {'미리보기'}
                    </Button>
                    <Button
                        onClick={handleSave}
                        className={`${styles['login-btn']} mg-lf-4`}
                        width={'80px'}
                        height={'36px'}
                    >
                        {'저장'}
                    </Button>
                </div>
            </div>
        </div>
    );
};
id.getLayout = function getLayout(page: React.ReactNode) {
    return <MainLayout showHeader={false}>{page}</MainLayout>;
};
export default id;
