import React, { FC, ReactElement, useEffect, useState } from 'react'
import Header from "components/header/Header"
import { withRouter, RouteComponentProps } from "react-router-dom"
import './performance.less'
import { getData } from "src/ts/requestUtil";
import { FIND_STAFF_PROCEDURE_ALL, FIND_STAFF_RATIO_ALL } from "src/constants/api";

interface IProps {
    match: {
        params: {
            userId: string,
            userName: string
        }
    }
}

interface DataDay {
    // 全部数量
    allCount: number,
    // 平均用时 （秒）
    avgTime: number,
    // 标准用时-平均用时 （秒）
    freeTime: number,
    // 超时 数量
    overCount: number,
    // 超时时间 （秒）
    overTime: number,
    // 工序名称
    procedureName: string,
    // 标准用时 （秒）
    standardTime: string
}

interface DataAll {
    // 完成总数
    count: number,
    // 完成用时 -秒
    finishSecondAll: number,
    // 空闲时长（秒）
    freeSecondAll: number,
    // 超时总数
    overCount: number,
    // 超时时长（秒
    overSecondAll: number,
    userName: string
}

/**
 * 格式化日期格式为 xxxx-xx-xx
 * @param targetDate
 * @param fullYear
 * @param month
 */
function getFullDate(targetDate: number, fullYear: number, month: number) {
    let D, y, m, d;
    if (targetDate) {
        D = new Date(targetDate);
        y = D.getFullYear();
        m = D.getMonth() + 1;
        d = D.getDate();
    } else {
        y = fullYear;
        m = month;
        d = 0;
    }
    m = m > 9 ? m : '0' + m;
    d = d > 9 ? d : '0' + d;
    return y + '-' + m + '-' + d;
}


const PerformanceDetails: FC<IProps & RouteComponentProps> = (props): ReactElement => {

    console.log(" =========== PerformanceDetails 绩效工作详情 =========== ");

    const userInfo: any = localStorage.getItem('userInfo')
    const user = JSON.parse(userInfo)
    const companyId = user.userCompanyOut.companyId

    const nowDate = new Date();
    const months = (nowDate.getMonth() + 1).toString()
    const monthsData = months.length === 1 ? `0${months}` : months
    const day = nowDate.getDate().toString()

    const fullYear = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1; // getMonth 方法返回 0-11，代表1-12月
    const endOfMonth = new Date(fullYear, month, 0).getDate(); // 获取本月最后一天
    const endDate = getFullDate(nowDate.setDate(endOfMonth), fullYear, month);//当月最后一天
    const startDate = getFullDate(nowDate.setDate(1), fullYear, month);//当月第一天

    console.log(day)
    const dayData = day.length === 1 ? `0${day}` : day


    const {match} = props
    const {params} = match
    const {userId} = params

    useEffect(() => {
        findPerformanceDay()
        findPerformanceYear()
        findPerformanceAll()
    }, []);

    const [dataDay, setDataDay] = useState<DataAll[]>([])
    const [dataYear, setDataYear] = useState<DataAll[]>([])
    const [dataAll, setDataAll] = useState<DataDay[]>([])

    const findPerformanceDay = async () => {
        try {
            const res: any = await getData(`${FIND_STAFF_PROCEDURE_ALL}?userId=${userId}&companyId=${companyId}&startDate=${fullYear}-${monthsData}-${dayData} 00:00:00&endDate=${fullYear}-${monthsData}-${dayData} 23:59:59`)
            if (res.success) {
                setDataDay(res.model)
            } else {
                alert(res.msg)
            }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }

    const findPerformanceYear = async () => {
        try {
            const res: any = await getData(`${FIND_STAFF_PROCEDURE_ALL}?userId=${userId}&companyId=${companyId}&startDate=${startDate} 00:00:00&endDate=${endDate} 23:59:59`)
            if (res.success) {
                setDataYear(res.model)
            } else {
                alert(res.msg)
            }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }

    const findPerformanceAll = async () => {
        try {
            const res: any = await getData(`${FIND_STAFF_RATIO_ALL}?userId=${userId}&companyId=${companyId}&startDate=${fullYear}-${monthsData}-${dayData} 00:00:00&endDate=${fullYear}-${monthsData}-${dayData} 23:59:59`)
            if (res.success) {
                setDataAll(res.model)
            } else {
                alert(res.msg)
            }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }

    return (
        <div className="performance">
            <Header>绩效工作详情</Header>
            <div className="main">
                {
                    dataDay.length || dataYear.length
                        ?
                        <div className="box">
                            {
                                dataDay.map((item, index) => {
                                    return (
                                        <div className="performance-work" key={index}>
                                            <div
                                                className="performance-workTit"
                                            >{item.userName}{monthsData}月{dayData}日工作情况
                                            </div>
                                            <div className="performance-workCon">
                                                <div>空闲时间：{item.freeSecondAll}</div>
                                                <div>超长时长：<span style={{color: '#FF4F2C'}}>{item.overSecondAll}</span>
                                                </div>
                                            </div>
                                            <div className="performance-workCon">
                                                <div>工作时间：{item.finishSecondAll}</div>
                                                <div>工序总数：{item.count}</div>
                                            </div>
                                            <div className="performance-workCon">
                                                <div>超时总数：{item.overCount}</div>
                                                <div></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {
                                dataYear.map((item, index) => {
                                    return (
                                        <div className="performance-work" key={index}>
                                            <div className="performance-workTit">{item.userName}{monthsData}月工作情况</div>
                                            <div className="performance-workCon">
                                                <div>空闲时间：{item.freeSecondAll}</div>
                                                <div>超长时长：<span style={{color: '#FF4F2C'}}>{item.overSecondAll}</span>
                                                </div>
                                            </div>
                                            <div className="performance-workCon">
                                                <div>工作时间：{item.finishSecondAll}</div>
                                                <div>工序总数：{item.count}</div>
                                            </div>
                                            <div className="performance-workCon">
                                                <div>超时总数：{item.overCount}</div>
                                                <div></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        null
                }
                {
                    dataAll.length
                        ?
                        <div className="box">
                            {
                                dataAll.map((item, index) => {
                                    return (
                                        <div className="performance-work" key={index}>
                                            <div
                                                className="performance-workTit" style={{textAlign: 'left'}}
                                            >{item.procedureName}</div>
                                            <div className="performance-workCon">
                                                <div>平时用时：{item.avgTime}</div>
                                                <div>标准用时：{item.standardTime}</div>
                                            </div>
                                            <div className="performance-workCon">
                                                <div>
                                                    <img
                                                        src={require(item.freeTime > 0 ? '../assets/rising.png' : '../assets/falling.png')}
                                                        className="performance-falling"
                                                    />{item.freeTime}
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="performance-workCon">
                                                <div>超时时间：{item.overTime}</div>
                                                <div>超时个数：{item.overCount}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default withRouter(PerformanceDetails)
