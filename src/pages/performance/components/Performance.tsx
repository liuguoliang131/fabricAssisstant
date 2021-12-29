import React, { FC, ReactElement, useEffect, useState } from 'react'
import Header from "components/header/Header";
import './performance.less'
import { getData } from "src/ts/requestUtil";
import { FIND_STAFF_RATIO } from "src/constants/api";
import { useHistory } from "react-router-dom";

interface Data {
    list: List[] | [],
    userId: number,
    userName: string
}

interface List {
    endTaskTime: string,
    startTaskTime: string,
    finishSecond: number,
    freeSecond: number,
    overSecond: number
}

const Performance: FC = (): ReactElement => {

    console.log(" =========== Performance 绩效统计 =========== ");

    const userInfo: any = localStorage.getItem('userInfo')
    const user = JSON.parse(userInfo)
    const companyId = user.userCompanyOut.companyId

    const date = new Date();
    const years = date.getFullYear();
    const months = (date.getMonth() + 1).toString()
    const monthsData = months.length === 1 ? `0${months}` : months
    const day = date.getDate().toString()
    const dayData = day.length === 1 ? `0${day}` : day

    let history = useHistory()

    useEffect(() => {
        findPerformance()
    }, []);

    const [data, setData] = useState<Data[]>([])

    const findPerformance = async () => {
        try {
            const res: any = await getData(`${FIND_STAFF_RATIO}?companyId=${companyId}&startDate=${years}-${monthsData}-${dayData} 00:00:00&endDate=${years}-${monthsData}-${dayData} 23:59:59`)
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

    const handToClick = (item: Data) => {
        history.push(`/appLayout/performanceDetails/${item.userId}`)
    }

    return (
        <div className="performance">
            <Header>绩效统计</Header>
            <div className="main performance-main" style={{overflow: 'hidden'}}>
                <div className="performance-classification">
                    <span>工作中</span>
                    <span className="performance-workBox" />
                    <span>超时</span>
                    <span className="performance-timeoutBox" />
                    <span>空闲</span>
                    <span className="performance-freeBox" />
                </div>
                <div className="performance-main">
                    {
                        data.length
                            ?
                            data.map((item, ind) => {
                                return (
                                    <div className="performance-con" key={ind} onClick={() => handToClick(item)}>
                                        <div className="performance-conLeft">{item.userName}</div>
                                        <div className="performance-conRight">
                                            {
                                                item.list.map((m, index) => {
                                                    return (
                                                        <div
                                                            style={{flex: m.finishSecond + m.freeSecond + m.overSecond}}
                                                            key={index}
                                                        >
                                                            <span
                                                                className="performance-workBox"
                                                                style={{flex: m.finishSecond}}
                                                            />
                                                            <span
                                                                className="performance-timeoutBox"
                                                                style={{flex: m.overSecond}}
                                                            />
                                                            <span
                                                                className="performance-freeBox"
                                                                style={{flex: m.freeSecond}}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div className="noData">暂无数据</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Performance
