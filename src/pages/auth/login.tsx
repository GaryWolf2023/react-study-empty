// import { useEffect } from "react";
import { Button, Form, Input, Space } from 'antd';
import type { FormProps } from 'antd';
import React, { memo, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {useTranslation} from 'react-i18next'

import SvgCaptcha from './components/svgCaptcha.tsx';
import './login.scss';
import classNames from 'classnames';
import Locale from '@/common/componnets/i18n/changeLocal.tsx';

type LoginType = {
    username: string;
    password: string;
    captcha: string;
};

const Login: React.FC = memo(() => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const params = useParams();
    console.log(params);
    const [loginLoading, setLoginLoading] = useState<any>(false); // 登陆动画
    const [formData, setFormData] = useState<LoginType>({
        username: '',
        password: '',
        captcha: ''
    })
    const onFinish: FormProps<LoginType>['onFinish'] = (values) => {
        console.log('Success:', values);
        loginBtn()
    }
    
    const onFinishFailed: FormProps<LoginType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const loginBtn = () => {
        console.log(formData)
        setLoginLoading(true);
        const timer = setTimeout(() => {
            setLoginLoading(false);
            clearTimeout(timer)
            // navigate('/home');
        }, 3000)
        // login({}).then((res:any) => {
        //     console.log(res);
        // })
    }
    return (
        <div className={`h-full w-full relative login overflow-hidden`}>
            <Locale top={'40px'} right={'50px'} />
            <div className={classNames('left-box overflow-hidden grid grid-cols-1', loginLoading?'left-[-60px] transition duration-700 ease-in-out':'')}>
                <img
                    className={`w-full h-full`}
                    src="https://copyright.bdstatic.com/vcg/creative/1434d89b9eca5356a80fc06124ef6c50.jpg@h_1280" alt=""
                />
            </div>
            <div className={classNames('right-box overflow-hidden grid grid-cols-1', loginLoading?'right-[-60px] transition duration-700 ease-in-out':'')}>
                <img
                    className={`w-full h-full`}
                    src="https://p2.itc.cn/images01/20230706/d244f2647c7643cb9eb5be8fa95bcbfb.jpeg" alt=""
                />
            </div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                disabled={loginLoading}
                className={
                    `login-form min-w-[460px] z-50 absolute top-[50%] left-[80%] p-[30px] pr-[60px] translate-x-[-50%] translate-y-[-50%] rounded-[30px] bg-[rgba(216,216,216,0.14)]
                     backdrop-blur-[1px] backdrop-filter backdrop-filter-blur-[1px] shadow-[0_10px_10px_rgba(0,0,0,0.1)]
                    `
                }
            >
                <Form.Item<LoginType>
                    label={t('login.用户名')}
                    name="username"
                    rules={[{ required: true, message: t('login.请输入用户名') }]}
                >
                    <Input
                        value={formData.username}
                        onInput={(e: any) => {
                            setFormData({
                                ...formData,
                                username: e.target.value
                            })
                        }}
                    />
                </Form.Item>

                <Form.Item<LoginType>
                    label={t('login.密码')}
                    name="password"
                    rules={[{ required: true, message: t('login.请输入密码') }]}
                >
                    <Input.Password
                        value={formData.password}
                        onInput={(e: any) => {
                            setFormData({
                                ...formData,
                                password: e.target.value
                            })
                        }}
                    />
                </Form.Item>

                <Form.Item<LoginType>
                    label={t('login.验证码')}
                    name="captcha"
                    rules={[
                        { required: true, message: t('login.请输入密码') },
                        {
                            validator: (_, value) => {
                                if (value && value.length === 6) {

                                }
                            }
                        }
                    ]}
                >
                    <Space.Compact style={{ width: '100%' }}>
                        <Input
                            className={`min-w-[120px]`}
                            value={formData.password}
                            onInput={(e: any) => {
                                setFormData({
                                    ...formData,
                                    password: e.target.value
                                })
                            }}
                        />
                        <SvgCaptcha></SvgCaptcha>
                    </Space.Compact>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className={`w-full`}>
                        {t('login.登录')}
                    </Button>
                    <p
                        className={`w-full text-right underline text-xs font-set`}
                        onClick={() => {
                            navigate('/register')
                        }}
                    >
                        {t('login.注册')}
                    </p>
                </Form.Item>
            </Form>
        </div>
    )
})

export default Login;