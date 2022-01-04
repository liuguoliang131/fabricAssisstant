import React, { FC, ReactElement, useEffect, useState } from 'react'
import Header from "components/header/Header";
import ReactECharts from "echarts-for-react";
import './income.less'
import { getData } from "src/ts/requestUtil";
import { REVENUE_TREND, TODAY_ORDER_BALANCER, TODAY_ORDER_INCOMER } from "src/constants/api";

interface DataIncome {
    balance: number,
    bank: number,
    money: number,
    totalPrice: number,
    weixin: number,
    zhifubao: number
}

interface DataBalance {
    balanceAll: number,
    bank: number,
    money: number,
    totalPrice: number,
    weixin: number,
    zhifubao: number
}

interface DataEarnings {
    date: string,
    price: number
}

function getDay (num: number) {
    let myDate = new Date(); //获取今天日期
    const years = myDate.getFullYear();
    const months = (myDate.getMonth() + 1).toString()
    const monthsData = months.length === 1 ? `0${months}` : months
    const day = myDate.getDate().toString()
    const dayData = day.length === 1 ? `0${day}` : day
    myDate.setDate(myDate.getDate() - (num - 1));//setDate() 方法用于设置一个月的某一天。
    let dateArray = [];
    let dateTemp;
    let flag = 1;
    for (let i = 1; i < num; i++) {
        const day = myDate.getDate().toString()
        const dayData = day.length === 1 ? `0${day}` : day
        dateTemp = `${years}-${monthsData}-${dayData}`;
        dateArray.push(dateTemp);
        myDate.setDate(myDate.getDate() + flag);
    }
    dateArray.push(`${years}-${monthsData}-${dayData}`);
    return dateArray;
}



const Income: FC = (): ReactElement => {

    console.log(" =========== Income 收入统计 =========== ");

    const userInfo: any = localStorage.getItem('userInfo')
    const user = JSON.parse(userInfo)
    const companyId = user.userCompanyOut.companyId
    const date = new Date();
    const years = date.getFullYear();
    const months = (date.getMonth() + 1).toString()
    const monthsData = months.length === 1 ? `0${months}` : months
    const day = date.getDate().toString()
    const dayData = day.length === 1 ? `0${day}` : day


    const [dataIncome, setDataIncome] = useState<DataIncome>({
        balance: 0,
        bank: 0,
        money: 0,
        totalPrice: 0,
        weixin: 0,
        zhifubao: 0
    })

    const [dataBalance, setDataBalance] = useState<DataBalance>({
        balanceAll: 0,
        bank: 0,
        money: 0,
        totalPrice: 0,
        weixin: 0,
        zhifubao: 0
    })

    useEffect(() => {
        findIncome()
        findBalance()
        findEarnings()
    }, []);

    const findIncome = async () => {
        try {
            const res: any = await getData(`${TODAY_ORDER_INCOMER}?companyId=${companyId}`)
            if (res.success) {
                setDataIncome(res.model)
            } else {
                alert(res.msg)
            }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }

    const findBalance = async () => {
        try {
            const res: any = await getData(`${TODAY_ORDER_BALANCER}?companyId=${companyId}`)
            if (res.success) {
                setDataBalance(res.model)
            } else {
                alert(res.msg)
            }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }


    const [xAxis, setXAxis] = useState<string[]>([])
    const [series, setSeries] = useState<number[]>([])
    let seriesY = JSON.parse(JSON.stringify(series))

    const findEarnings = async () => {
        try {
            const res: any = await getData(`${REVENUE_TREND}?companyId=${companyId}`)
            if (res.success) {
                if (res.model) {
                    let x: string[] = [];
                    let y: number[] = []
                    res.model.map((item: DataEarnings) => {
                        x.push(item.date)
                        y.push(item.price)
                    })
                    setXAxis(x)
                    setSeries(y)
                }
            } else {
                alert(res.msg)
            }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }

    console.log(xAxis,series)
    const getOption = {
        grid: {
            left: 0,
            right: 20,
            bottom: 0,
            top: 20,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            // boundaryGap: false,
            data: xAxis.length ? xAxis : getDay(7),
            // y轴刻度线
            axisTick: {
                show: false
            },
            scale:true,
        },
        yAxis: {
            type: 'value',
            // y轴
            axisLine: {
                show: true
            },
            // y轴刻度线
            axisTick: {
                show: false
            },
            // 网格线
            splitLine: {
                show: false
            },
            min: 0,
            max: series.length ? (seriesY.sort(function (a: number, b: number) {return b - a}))[0] : 8000
        },
        series: [
            {
                data: series,
                type: 'line',
                label: {
                    show: true,
                    position: 'top'
                },
                // symbol: 'none',
                color: '#3376FF',
                smooth: true
            }
        ]
    }

    return (
        <div className="income">
            <Header>收入统计</Header>
            <div className="main">
                <div className="box">
                    <div className="title title-black">收入情况  {years}/{monthsData}/{dayData}</div>
                    <div className="income-statistics">
                        <span>支付宝：￥ {dataIncome.zhifubao || 0}</span>
                        <span>微信：￥ {dataIncome.weixin || 0}</span>
                        <span>银行：￥ {dataIncome.bank || 0}</span>
                        <span>现金：￥ {dataIncome.money || 0}</span>
                        <span>合计：￥ {dataIncome.totalPrice || 0}</span>
                        <div className="income-img">
                            <img src={require('../assets/income-income.png')} className="income-balance" />
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="title title-black title-account">账户余额  {years}/{monthsData}/{dayData}</div>
                    <div className="income-statistics">
                        <span>支付宝：￥ {dataBalance.zhifubao || 0}</span>
                        <span>微信：￥ {dataBalance.weixin || 0}</span>
                        <span>银行：￥ {dataBalance.bank || 0}</span>
                        <span>现金：￥ {dataBalance.money || 0}</span>
                        <span>合计：￥ {dataBalance.totalPrice || 0}</span>
                        <span />
                        <span>余额消费：￥ {dataIncome.balance}</span>
                        <span>总余额：￥ {dataBalance.balanceAll || 0}</span>
                        <div className="income-img">
                            <img src={require('../assets/income-balance.png')} className="income-income" />
                        </div>
                    </div>
                </div>
                <div className="income-trend">今日收入趋势</div>
                <div className="box">
                    <ReactECharts
                        option={getOption}
                        className="charts"
                    />
                </div>
            </div>
        </div>
    )
}

export default Income
