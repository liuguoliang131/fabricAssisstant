import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getData } from "src/ts/requestUtil";
import './login.less';
import { LOGIN } from "src/constants/api";


const Login: FC = (): ReactElement => {

    console.log(" =========== Login 首页 =========== ");

    let history = useHistory();

    useEffect(() => {
        const userInfo: any = localStorage.getItem('userInfo')
        if (userInfo) {
            history.push(`/appLayout/home`)
        }
    }, []);

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const onNameChange = (e: any): void => {
        setName(e.target.value)
    }

    const onPassChange = (e: any): void => {
        setPass(e.target.value)
    }

    const handelSubmit = async (e: any) => {
        // 一点提交就会刷新，阻止submit事件
        e.preventDefault();
        if (name === '') {
            return alert('请输入厚鸟账号')
        } else if (pass === '') {
            return alert('请输入密码')
        }
        try {
            const res: any = await getData(`${LOGIN}?userName=${name}&password=${pass}`)
            if (res.success) {
                const userInfos: any = localStorage.getItem('userInfos')
                if (userInfos) {
                    const users = JSON.parse(userInfos)
                    const companyId = res.model.userCompanyOut.companyId
                    if (users.length) {
                        const repeat = users.filter((item: any) => item.userCompanyOut.companyId === companyId)
                        if (repeat.length === 0) {
                            localStorage.setItem('userInfos', JSON.stringify([...users, res.model]));
                        }
                    }
                } else {
                    localStorage.setItem('userInfos', JSON.stringify([res.model]));
                }
                localStorage.setItem('userInfo', JSON.stringify(res.model));
                history.push(`/appLayout/home`)
            } else {
                alert('帐号或密码错误')
            }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }

    return (
        <div className="login">
            <img
                className="login-bg"
                src={require('../assets/bg.jpg')}
            />
            <div className="login-con">
                <div className="login-name">厚鸟助手</div>
                <div className="login-form">
                    <form onSubmit={handelSubmit}>
                        <div className="login-formInput">
                            <img className="login-formUserName" src={require('../assets/userName.png')} />
                            <input
                                className="login-formUserInput"
                                type="text"
                                placeholder="请输入厚鸟账号"
                                value={name}
                                onChange={onNameChange}
                            />
                        </div>
                        <div className="login-formInput">
                            <img className="login-formUserName" src={require('../assets/password.png')} />
                            <input
                                className="login-formUserInput"
                                type="password"
                                placeholder="请输入密码"
                                value={pass}
                                onChange={onPassChange}
                            />
                        </div>
                        <input type="submit" value="提交" className="login-submit" />
                    </form>
                </div>
                <div className="login-agreement">
                    登录代表您已同意
                    <span><Link to={`/agreement`}>厚鸟用户协议、隐私协议</Link></span>
                </div>
            </div>
        </div>
    )
}


export default Login
