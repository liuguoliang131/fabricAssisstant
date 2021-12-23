import React, { FC, ReactElement, useEffect, useState } from 'react';
import './home.less';
import { useHistory, Link } from "react-router-dom";
import { getData } from "src/ts/requestUtil";
import { TODAY_ORDER_STATISTICS } from "src/constants/api";

interface Data {
    todayOrderCount: number,
    todayPrice: number | null,
    todayOrderOutList: List[] | []
}

interface List {
    categoryName: string,
    toDayOrder: number
}

const Home: FC = (): ReactElement => {

    console.log(" =========== Home 首页 =========== ");

    const userInfo: any = localStorage.getItem('userInfo')
    const user = JSON.parse(userInfo)
    const companyId = user.userCompanyOut.companyId
    const companyName = user.userCompanyOut.companyName
    const logoPath = user.logoPath

    let history = useHistory();
    const [data, setData] = useState<Data>({
        todayOrderCount: 0,
        todayPrice: null,
        todayOrderOutList: []
    })

    useEffect(() => {
        findTodayOrder()
    }, []);

    const findTodayOrder = async () => {
        try {
            const res: any = await getData(`${TODAY_ORDER_STATISTICS}?companyId=${companyId}`)
            if (res.success) {
                setData(res.model)
            } else {
                alert(res.msg)
            }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }

    const exit = () => {
        localStorage.clear()
        history.push(`/`)
    }

    const account = () => {
        history.push(`/appLayout/account`)
    }


    return (
        <div className="home">
            <div className="home-header">
                <div className="home-headerLeft" onClick={account} >
                    <img src={logoPath} className="home-avatar"/>
                    {companyName}
                </div>
                <div>
                    <img src={require('../assets/exit.png')} className="exit" onClick={exit} />
                </div>
            </div>
            <div className="home-main">
                <div className="home-statistical">
                    <div className="title">今日统计</div>
                    <div className="home-statisticalCon">
                        <div className="home-statisticalConLeft">
                            <div>
                                <span className="home-money">￥</span>
                                <span className="home-number">{data.todayPrice || 0}</span>
                            </div>
                            <div className="home-today">今日收入</div>
                        </div>
                        <div className="home-statisticalConRight">
                            <div>
                                <span className="home-number">{data.todayOrderCount || 0}</span>
                            </div>
                            <div className="home-today">今日订单</div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="title title-black">订单量</div>
                    <div className="home-order">
                        {
                            data.todayOrderOutList.length ? data.todayOrderOutList.map((item: List) => {
                                return (<span key={item.categoryName}>{item.categoryName}：{item.toDayOrder}</span>)
                            }) : null
                        }
                    </div>
                </div>
                <div className="content">
                    <Link to={`/appLayout/order`}>
                        <img src={require('../assets/banner.png')} className="home-banner" />
                    </Link>
                </div>
                <div className="box">
                    <div className="title title-black">统计查询</div>
                    <div className="home-query">
                        <Link to={`/appLayout/income`}>
                            <img src={require('../assets/income.png')} className="home-income" />
                            <div className="home-queryText">收入统计</div>
                        </Link>
                        <Link to={`/appLayout/customer`}>
                            <img src={require('../assets/customer.png')} className="home-customer" />
                            <div className="home-queryText">客户统计</div>
                        </Link>
                        <Link to={`/appLayout/inventory`}>
                            <img src={require('../assets/inventory.png')} className="home-inventory" />
                            <div className="home-queryText">库存统计</div>
                        </Link>
                    </div>
                    <div className="home-query">
                        <Link to={`/appLayout/performance`}>
                            <img src={require('../assets/performance.png')} className="home-performance" />
                            <div className="home-queryText">绩效统计</div>
                        </Link>
                        <Link to={`/appLayout/equipment`}>
                            <img src={require('../assets/equipment.png')} className="home-equipment" />
                            <div className="home-queryText">设备管理</div>
                        </Link>
                        <a></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home
