import React, {useState} from 'react';
import styles from './findPw.module.css';
import Input from "../../components/input";
import Button from "../../components/button";
import {useRouter} from "next/router";
import MainLayout from "../../layouts/mainLayout";

const index = () => {
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const router = useRouter();

    const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleCheckPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckPassword(e.target.value);
    };


    const cancelBtn =  () => {
        router.push(`/`);
    };
    const findPwClick =  () => {
        console.log('id 찾기')
    };

    return (
        <div className={`${styles['login-wrap']}`}>
            <div className={'loginBox'}>
                <div className={`mg-bt-13 fs-20 bold pd-bt-4 ${styles.title}`}>비밀번호 변경하기
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <Input
                        label={'새 비밀번호'}
                        type="password"
                        value={password}
                        onChange={handlePwChange}
                        placeholder="문자+특수문자+숫자 포함(최소 8자 최대 16자리)"
                    />
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <Input
                        label={'새 비밀번호 확인'}
                        type="password"
                        value={checkPassword}
                        onChange={handleCheckPwChange}
                    />
                </div>
                <div className={`mg-tp-14 ${styles['btn-wrap']}`}>
                    <Button
                        onClick={cancelBtn}
                        className={`${styles['login-btn']} mg-rt-4`}
                    >
                        {'취소'}
                    </Button>
                    <Button
                        onClick={findPwClick}
                        className={`${styles['login-btn']} mg-lf-4`}
                    >
                        {'찾기'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
index.getLayout = function getLayout(page: React.ReactNode) {
    return <MainLayout showHeader={false}>{page}</MainLayout>;
};
export default index;
