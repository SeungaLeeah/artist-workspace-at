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
                <div className={`mg-bt-13 fs-20 pd-bt-4 fx-space-between ${styles.title}`}>
                    <div className={'bold'}>회원가입</div>
                    <div className={'thin fs-10'}><span className={'red'}>* </span>표시된 항목은 필수 입력 항목입니다.</div>
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
                            className={'w-100'}
                            placeholder="16자 미만으로 작성이 가능합니다"
                        />
                        <Button
                            onClick={findPwClick}
                            fontSize={'14px'}
                            className={`mg-lf-4 ${styles.addBtn}`}
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
                        placeholder="문자+특수문자+숫자 포함(최소 8자 최대 16자리)"
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
                            className={'w-100'}
                            type="text"
                            value={checkPassword}
                            onChange={handleCheckPwChange}
                        />
                        <SelectBox
                            options={options}
                            value={selectedOption}
                            onChange={handleChange}
                            placeHolder="직접입력"
                            className={`mg-lf-8`}
                            width={'200px'}
                        />
                    </div>
                </div>
                <div className={'w-100 mg-bt-10'}>
                    <Input
                        label={'휴대폰 번호'}
                        type="tel"
                        value={checkPassword}
                        onChange={handleCheckPwChange}
                        placeholder="'-'없이 작성해주세요"
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

                    <div className={'fx-space-between'}>
                        <SelectBox
                            options={options}
                            value={selectedOption}
                            onChange={handleChange}
                            placeHolder="직접입력"
                            width={'33.3%'}
                        />
                        <Input
                            type="text"
                            value={checkPassword}
                            onChange={handleCheckPwChange}
                            placeholder="아이디"

                        />
                        <div style={{width: '26%'}} className={'fx-space-between'}>
                            <Button
                                onClick={cancelBtn}
                                fontSize={'14px'}
                                className={`${styles.addBtn}`}
                                width={'60px'}
                            >
                                {'추가'}
                            </Button>
                            <Button
                                onClick={cancelBtn}
                                fontSize={'14px'}
                                className={`${styles.addBtn}`}
                                width={'60px'}
                            >
                                {'삭제'}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={`mg-tp-14 ${styles.btnWrap}`}>
                    <Button
                        onClick={cancelBtn}
                        className={`${styles.loginBtn} mg-rt-4`}
                        width={'220px'}
                        height={'36px'}
                    >
                        {'취소'}
                    </Button>
                    <Button
                        onClick={findPwClick}
                        className={`${styles.loginBtn} mg-lf-4`}
                        width={'220px'}
                        height={'36px'}
                    >
                        {'찾기'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default index;
