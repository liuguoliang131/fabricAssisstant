import React, { FC, ReactElement } from 'react'
import Header from "components/header/Header"
import { useHistory } from "react-router-dom"
import './account.less'

const Account: FC = (): ReactElement => {

    console.log(" =========== Account 帐号管理 =========== ");

    let history = useHistory();
    const userInfo: any = localStorage.getItem('userInfo')
    const user = JSON.parse(userInfo)
    const companyId = user.userCompanyOut.companyId

    const userInfos: any = localStorage.getItem('userInfos')
    const users = JSON.parse(userInfos)

    const onClick = (item: any) => {
        localStorage.setItem('userInfo', JSON.stringify(item));
        history.replace(`/appLayout/home`)
    }
    const login = () => {
        console.log(history)
        localStorage.removeItem('userInfo');
        history.replace(`/`)
    }

    return (
        <div className="account">
            <Header>帐号管理</Header>
            <div className="main">
                {
                    users.map((item: any) => {
                        return (
                            <div className="box account-box" key={item.userCompanyOut.companyId} onClick={() => onClick(item)}>
                                <div className="account-boxImg">
                                    <img src={item.logoPath ? item.logoPath : require('../assets/default.png')} className="account-avatar" />
                                    {item.userCompanyOut.companyName}
                                </div>
                                {
                                    item.userCompanyOut.companyId === companyId
                                        ?
                                        <img src={require('../assets/selected.png')} className="account-selected" />
                                        :
                                        null
                                }
                            </div>
                        )
                    })
                }
                <div className="box account-box" onClick={login}>
                    <div className="account-boxImg">
                        <img src={require('../assets/defaultImg.png')} className="account-avatar" />
                        添加帐号
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
