import React, { FC, ReactElement, useEffect, useState } from 'react'
import Header from "components/header/Header";
import './customer.less'
import ReactECharts from "echarts-for-react";
import { getData } from "src/ts/requestUtil";
import { CUSTOMER_STATISTICS } from "src/constants/api";

interface DataCustomer {
    customerName: string,
    price: number
}

const Customer: FC = (): ReactElement => {

    console.log(" =========== Customer 客户统计 =========== ");

    const userInfo: any = localStorage.getItem('userInfo')
    const user = JSON.parse(userInfo)
    const companyId = user.userCompanyOut.companyId

    const date = new Date();
    const years = date.getFullYear().toString();
    const months = (date.getMonth() + 1).toString()
    const monthsData = months.length === 1 ? `0${months}` : months

    const [value, setValue] = useState(months)

    const [yearsValue, setYearsValue] = useState(years)

    const onChange = (e: any) => {
        setValue(e.target.value)
        findCustomer(yearsValue, e.target.value)
    }

    const onChangeYears = (e: any) => {
        setYearsValue(e.target.value)
        findCustomer(e.target.value, value)
    }

    useEffect(() => {
        findCustomer(years, monthsData)
    }, []);

    const [xAxis, setXAxis] = useState<string[]>([])
    const [series, setSeries] = useState<number[]>([])


    const findCustomer = async (yearsTime: string, time: string) => {
        try {
            const res: any = await getData(`${CUSTOMER_STATISTICS}?companyId=${companyId}&date=${yearsTime}-${time}`)
            if (res.success) {
                if (res.model) {
                    let x: string[] = [];
                    let y: number[] = []
                    res.model.map((item: DataCustomer) => {
                        x.push(item.customerName)
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


    const getOption = {
        grid: {
            left: 0,
            bottom: 0,
            right: 0,
            containLabel: true
        },
        xAxis: {
            type: 'value',
            show: false
        },
        yAxis: {
            type: 'category',
            data: xAxis,
            boundaryGap: false,
            // y轴
            axisLine: {
                show: false
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
                type: 'bar',
                label: {
                    show: true,
                    formatter: (e: any) => {
                        let data = e.data;
                        return `￥ ${data}`
                    },
                    fontSize: 14,
                    color: '#fff'
                },
                barWidth : 30,
                color: '#7FA9FF',
                smooth: false
            }
        ]
    }

    return (
        <div className="customer">
            <Header>客户统计</Header>
            <div className="main" style={{background: '#ffffff', overflow: 'hidden'}}>
                <div className="customer-content">
                    <div className="customer-search">
                        <div className="title title-black">客户消费排行</div>
                        <div className="customer-searchRight">
                            <div className="select">
                                <select onChange={onChangeYears} value={yearsValue}>
                                    <option label="全部" value="">全部</option>
                                    <option label="2021" value="2021">2021</option>
                                    <option label="2022" value="2022">2022</option>
                                    <option label="2023" value="2023">2023</option>
                                    <option label="2024" value="2024">2024</option>
                                </select>
                                <span></span>
                            </div>
                            <div className="select">
                                <select onChange={onChange} value={value}>
                                    <option label="全部" value="">全部</option>
                                    <option label="1月" value="01">1月</option>
                                    <option label="2月" value="02">2月</option>
                                    <option label="3月" value="03">3月</option>
                                    <option label="4月" value="04">4月</option>
                                    <option label="5月" value="05">5月</option>
                                    <option label="6月" value="06">6月</option>
                                    <option label="7月" value="07">7月</option>
                                    <option label="8月" value="08">8月</option>
                                    <option label="9月" value="09">9月</option>
                                    <option label="10月" value="10">10月</option>
                                    <option label="11月" value="11">11月</option>
                                    <option label="12月" value="12">12月</option>
                                </select>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="customer-main">
                        {
                            series.length
                                ?
                                <ReactECharts
                                    option={getOption}
                                    style={{width: '100%', height: 200 + 40*series.length}}
                                />
                                :
                                <div className="noData">暂无数据</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
