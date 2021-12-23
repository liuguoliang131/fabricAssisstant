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


const Income: FC = (): ReactElement => {

    console.log(" =========== Income 收入统计 =========== ");

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

    const companyId = '436'

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
            right: 0,
            bottom: 0,
            top: 20,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            // boundaryGap: false,
            data: xAxis,
            // y轴刻度线
            axisTick: {
                show: false
            }
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
            }
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
                    <div className="title title-black">收入情况</div>
                    <div className="income-statistics">
                        <span>支付宝：{dataIncome.zhifubao || 0}</span>
                        <span>微信：{dataIncome.weixin || 0}</span>
                        <span>银行：{dataIncome.bank || 0}</span>
                        <span>现金：{dataIncome.money || 0}</span>
                        <span>合计：{dataIncome.totalPrice || 0}</span>
                        <div className="income-img">
                            <img src={require('../assets/income-income.png')} className="income-balance" />
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="title title-black title-account">账户余额</div>
                    <div className="income-statistics">
                        <span>支付宝：{dataBalance.zhifubao || 0}</span>
                        <span>微信：{dataBalance.weixin || 0}</span>
                        <span>银行：{dataBalance.bank || 0}</span>
                        <span>现金：{dataBalance.money || 0}</span>
                        <span>合计：{dataBalance.totalPrice || 0}</span>
                        <span></span>
                        <span>余额消费：{dataIncome.balance}</span>
                        <span>总余额：{dataBalance.balanceAll || 0}</span>
                        <div className="income-img">
                            <img src={require('../assets/income-balance.png')} className="income-income" />
                        </div>
                    </div>
                </div>
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
