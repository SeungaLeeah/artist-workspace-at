import React, {useState} from 'react';
import styles from './join.module.css';
import Input from "../../components/input";
import Button from "../../components/button";
import {useRouter} from "next/router";
import SelectBox from '../../components/selectBox';

const index = () => {
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleChange = (value: string) => {
        setSelectedOption(value);
    };

    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleCheckPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckPassword(e.target.value);
    };


    const cancelBtn = () => {
        router.push(`/`);
    };
    const findPwClick = () => {
        console.log('id 찾기')
    };

    return (
        <div className={`${styles.joinWrap}`}>
            <div className={`${styles.joinBox}`}>
                <div className={`mg-bt-13 fs-20 bold pd-bt-4 ${styles.title}`}>회원가입
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <Input
                        label={'실명'}
                        type="text"
                        value={password}
                        onChange={handlePwChange}
                    />
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <Input
                        label={'작가명'}
                        type="text"
                        value={checkPassword}
                        onChange={handleCheckPwChange}
                    />
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <div className={'fs-14 semi-bold mg-bt-8'}>아이디</div>
                    <div className={'fx-space-between'}>
                        <Input
                            type="text"
                            value={password}
                            onChange={handlePwChange}
                        />
                        <Button
                            onClick={findPwClick}
                            className={`${styles.checkBtn} mg-lf-4`}
                        >
                            {'중복확인'}
                        </Button>
                    </div>
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <Input
                        label={'비밀번호'}
                        type="text"
                        value={checkPassword}
                        onChange={handleCheckPwChange}
                    />
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <Input
                        label={'비밀번호 확인'}
                        type="text"
                        value={password}
                        onChange={handlePwChange}
                    />
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <div className={'fs-14 semi-bold mg-bt-8'}>이메일</div>
                    <div className={'fx-space-between'}>
                        <Input
                            type="text"
                            value={checkPassword}
                            onChange={handleCheckPwChange}
                        />
                    </div>
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <Input
                        label={'휴대폰 번호'}
                        type="text"
                        value={checkPassword}
                        onChange={handleCheckPwChange}
                    />
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <Input
                        label={'홈페이지 명'}
                        type="text"
                        value={checkPassword}
                        onChange={handleCheckPwChange}
                    />
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <div className={'fs-14 semi-bold mg-bt-8'}>SNS</div>
                    <div>
                        <div className={'fx-row'}>
                            <SelectBox
                                options={options}
                                value={selectedOption}
                                onChange={handleChange}
                                placeHolder="직접입력"
                            />
                            <Input
                                type="text"
                                value={checkPassword}
                                onChange={handleCheckPwChange}
                            />
                            <Button
                                onClick={cancelBtn}
                                fontSize={'14px'}
                                className={`${styles.addBtn} mg-rt-4`}
                            >
                                {'추가'}
                            </Button>
                        </div>
                        <div>
                            <Input
                                type="text"
                                value={checkPassword}
                                onChange={handleCheckPwChange}
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                value={checkPassword}
                                onChange={handleCheckPwChange}
                            />
                        </div>
                    </div>
                </div>
                <div className={`mg-tp-14 ${styles.btnWrap}`}>
                    <Button
                        onClick={cancelBtn}
                        className={`${styles.loginBtn} mg-rt-4`}
                    >
                        {'취소'}
                    </Button>
                    <Button
                        onClick={findPwClick}
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
