import React, {useState} from 'react';
import styles from './login.module.css';
import { useRouter } from "next/router";
import Input from "../../components/input";
import Button from "../../components/button";
import MainLayout from "../../layouts/mainLayout";
import index from "../join";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleClick = () => {
        router.push(`/menuManagement`);
    };

    const goToPage = (type:string) => {
        router.push(`/${type}`);
    };

    return (
        <div className={`${styles['login-wrap']}`}>
            <div className={'loginBox'}>
                <div className={`mg-bt-13 fs-20 bold pd-bt-4 ${styles.title}`}>로그인
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <Input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="이메일을 입력하세요"
                    />
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <Input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="비밀번호를 입력하세요"
                    />
                </div>
                <div className={`${styles['login-info']}`}>
                    <div className={'fs-12 pd-rt-6 cp'} onClick={() => goToPage('join')}>회원가입</div>
                    <div className={`fs-12 pd-rt-6 pd-lf-6 cp ${styles['lf-line']}`} onClick={() => goToPage('findId')}>아이디
                        찾기
                    </div>
                    <div className={`fs-12 pd-lf-6 cp ${styles['lf-line']}`} onClick={() => goToPage('findPw')}>비밀번호 찾기
                    </div>
                </div>

                <Button
                    onClick={handleClick}
                    className={`${styles['login-btn']}`}
                >
                    {'로그인'}
                </Button>

            </div>
        </div>
    );
}
index.getLayout = function getLayout(page: React.ReactNode) {
    return <MainLayout showHeader={false}>{page}</MainLayout>;
};
export default Login;
