import React, {useState} from 'react';
import styles from './findId.module.css';
import Input from "../../components/input";
import Button from "../../components/button";
import {useRouter} from "next/router";

const index = () => {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };


    const cancelBtn =  () => {
        router.push(`/`);
    };
    const findIdClick =  () => {
        console.log('id 찾기')
    };

    return (
        <div className={`${styles.loginWrap}`}>
            <div className={'loginBox'}>
                <div className={`mg-bt-13 fs-20 bold pd-bt-4 ${styles.title}`}>아이디 찾기
                </div>
                <div className={'width100 mg-bt-10'}>
                <Input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="이메일을 입력하세요"
                    />
                </div>
                <div className={styles.btnWrap}>
                    <Button
                        onClick={cancelBtn}
                        className={`${styles.loginBtn} mg-rt-4`}
                    >
                        {'취소'}
                    </Button>
                    <Button
                        onClick={findIdClick}
                        className={`${styles.loginBtn} mg-lf-4`}
                    >
                        {'찾기'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default index;
