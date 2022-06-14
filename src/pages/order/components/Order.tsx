import React, { FC, ReactElement, useEffect, useState } from 'react'
import Header from "components/header/Header";
import './order.less'
import { getData } from "src/ts/requestUtil";
import { ORDER_MONITOR, SELECT_ORDER_COUNT } from "src/constants/api";

interface Data {
    lastPage: boolean,
    pageNo: number,
    pageSize: number,
    startIndex: number,
    sumPage: number,
    sumRow: number,
    data: List[] | []
}

interface List {
    orderCount: number,
    name: string,
    createTime: string,
    id: number,
    orderCustomerName: string,
    webOrderTypeOuts: OrderTypeOuts[]
}

interface OrderTypeOuts {
    createTime: string,
    categoryName: string,
    count: number,
    finishCutCount: number,
    id: number,
    produceDetailOutList: DetailOutList
}

interface DetailOutList {
    checkCount: number,
    cutCount: number,
    ironingCount: number,
    plateCount: number,
    produceCount: number,
    sendGoodsCount: number
}

const Order: FC = (): ReactElement => {

    console.log(" =========== Order 订单监控 =========== ");

    const userInfo: any = localStorage.getItem('userInfo')
    const user = JSON.parse(userInfo)
    const companyId = user.userCompanyOut.companyId
    const [nameVal, setNameVal] = useState('')
    const [orderVal, setOrderVal] = useState('')

    const [dayVal, setDayVal] = useState('')

    const date = new Date();
    const years = date.getFullYear().toString();
    const months = (date.getMonth() + 1).toString()
    const monthsData = months.length === 1 ? `0${months}` : months
    const day = date.getDate().toString()
    const dayData = day.length === 1 ? `0${day}` : day

    const lastDay = (new Date(Number(years), Number(months), 0)).getDate();
    // 开始年
    const [yearsValue, setYearsValue] = useState(years)
    // 结束年
    const [toYearsValue, setToYearsValue] = useState(years)
    // 开始月
    const [monthsValue, setMonthsValue] = useState(monthsData)
    // 结束月
    const [toMonthsValue, setToMonthsValue] = useState(monthsData)
    // 开始天
    const [dayValue, setDayValue] = useState('01')
    // 结束天
    const [toDayValue, setToDayValue] = useState(lastDay.toString())

    const onNameChange = (e: any) => {
        setNameVal(e.target.value)
    }

    const onOrderChange = (e: any) => {
        setOrderVal(e.target.value)
    }

    useEffect(() => {
        findOrderNum()
        findOrder(nameVal, orderVal, 1, yearsValue, monthsValue, dayValue, toYearsValue, toMonthsValue, toDayValue)
    }, []);

    const [pageNo, setPageNo] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(20)

    const [data, setData] = useState<Data>({
        lastPage: false,
        pageNo: 0,
        pageSize: 0,
        startIndex: 0,
        sumPage: 0,
        sumRow: 0,
        data: [],
    })

    const findOrder = async (name: string, order: string, page: number, yearsTime = '', monthsTime = '', dayTime = '', toYearsTime = '', toMonthsTime = '', toDayTime = '') => {
        try {
            const res: any = await getData(`${ORDER_MONITOR}?pageNo=${page}&pageSize=${pageSize}&companyId=${companyId}&orderNo=${order}&customerName=${name}&startDate=${yearsTime}-${monthsTime}-${dayTime} 00:00:00&endDate=${toYearsTime}-${toMonthsTime}-${toDayTime} 23:59:59`)
            if (res.success) {
                const params = {
                    lastPage: res.model.lastPage,
                    pageNo: res.model.pageNo,
                    pageSize: res.model.pageSize,
                    startIndex: res.model.startIndex,
                    sumPage: res.model.sumPage,
                    sumRow: res.model.sumRow,
                    data: page === 1 ? res.model.data : [...data.data, ...res.model.data]
                }
                setPageNo(res.model.pageNo)
                setData(params)
            } else {
                alert(res.msg)
            }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }

    const [dataNum, setDataNum] = useState('0')

    const findOrderNum = async () => {
        try {
            // const res: any = await getData(`${SELECT_ORDER_COUNT}?companyId=${companyId}`)
            // if (res.success) {
            //     setDataNum(res.model)
            // } else {
            //     alert(res.msg)
            // }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }

    const [dom, setDom] = useState<any>(null);

    // 监听页面滚动
    const handleOnScroll = () => {
        if (dom) {
            const contentScrollTop = dom.scrollTop + 1; //滚动条距离顶部
            const clientHeight = dom.clientHeight; //可视区域
            const scrollHeight = dom.scrollHeight; //滚动条内容的总高度
            if (contentScrollTop + clientHeight >= scrollHeight) {
                if (pageNo + 1 <= data.sumPage) {
                    findOrder(nameVal, orderVal, pageNo + 1, yearsValue, monthsValue, dayValue, toYearsValue, toMonthsValue, toDayValue);
                }
            }
        }
    };

    const screening = () => {
        if (dom) {
            dom.scrollTop = 0
        }

        findOrder(nameVal, orderVal, 1, yearsValue, monthsValue, dayValue, toYearsValue, toMonthsValue, toDayValue)
    }

    const formatDate = (t: any) => {
        let v = new Date(t);
        console.log(t.replace(/-/g, "/"), v.getDate() + 1 < 10)
        if (v) {
            // 将Date()对象转成YYYY-MM-DD HH:MM:SS格式
            const year = v.getFullYear()
            const month = v.getMonth() + 1 < 10 ? `0${v.getMonth() + 1}` : v.getMonth()
            const day = v.getDate() + 1 <= 10 ? `0${v.getDate()}` : v.getDate()
            const hour = v.getHours() < 10 ? `0${v.getHours()}` : v.getHours()
            const minute = v.getMinutes() < 10 ? `0${v.getMinutes()}` : v.getMinutes()
            const second = v.getSeconds() < 10 ? `0${v.getSeconds()}` : v.getSeconds()
            // return `${year}-${month}-${day} ${hour}:${minute}:${second}`
            return `${year}-${month}-${day}`
        }
        return ''
    }

    const onChangeYears = (e: any) => {
        setYearsValue(e.target.value)
        setToYearsValue(e.target.value)
        setDayVal('')

        const lastDay = (new Date(Number(e.target.value), Number(monthsData), 0)).getDate();
        setDayValue('01')
        setToDayValue(lastDay.toString())
        if (dayVal !== '') {
            setMonthsValue(monthsData)
            setToMonthsValue(monthsData)
            findOrder(nameVal, orderVal, 1, e.target.value, monthsData, '01', e.target.value, monthsData, lastDay.toString())
        } else {
            setMonthsValue(toMonthsValue)
            setToMonthsValue(toMonthsValue)
            findOrder(nameVal, orderVal, 1, e.target.value, toMonthsValue, '01', e.target.value, toMonthsValue, lastDay.toString())
        }

    }

    const onChange = (e: any) => {
        setMonthsValue(e.target.value)
        setToMonthsValue(e.target.value)
        setDayVal('')

        const lastDay = (new Date(Number(years), Number(e.target.value), 0)).getDate();
        setDayValue('01')
        setToDayValue(lastDay.toString())
        if (dayVal !== '') {
            setYearsValue(years)
            setToYearsValue(years)
            findOrder(nameVal, orderVal, 1, years, e.target.value, '01', years, e.target.value, lastDay.toString())
        } else {
            setYearsValue(yearsValue)
            setToYearsValue(yearsValue)
            findOrder(nameVal, orderVal, 1, yearsValue, e.target.value, '01', yearsValue, e.target.value, lastDay.toString())
        }
    }

    const handTime = (data: string) => {
        setYearsValue(years)
        setMonthsValue(monthsData)
        setDayVal(data)
        if (data === 'today') {
            findOrder(nameVal, orderVal, 1, years, monthsData, dayData, years, monthsData, dayData)
        } else {
            let dateTo = new Date();
            dateTo.setDate(dateTo.getDate() - 7);//获取3天前的日期
            let yearTo = (dateTo.getFullYear().toString());
            let monthTo: any = dateTo.getMonth() + 1;
            if (monthTo < 10) {
                monthTo = '0' + monthTo;
            } else {
                monthTo.toString()
            }
            let dayTo: any = dateTo.getDate();
            if (dayTo < 10) {
                dayTo = '0' + dayTo;
            } else {
                dayTo.toString()
            }
            setDayValue(dayTo)
            setToDayValue(dayData)
            findOrder(nameVal, orderVal, 1, years, monthsData, dayTo, yearTo, monthTo, dayData)
        }
    }

    return (
        <div className="order">
            <Header>订单监控</Header>
            <div className="main" style={{background: '#ffffff', overflow: 'hidden'}}>
                <div className="order-content">
                    <div className="order-search">
                        <div className="input">
                            <input type="text" placeholder="请输入企业名称" value={nameVal} onChange={onNameChange} />
                        </div>
                        {/*<div className="input order-input">*/}
                        {/*    <img className="searchImg" src={require('../../../components/assets/search.png')} />*/}
                        {/*    <input type="text" placeholder="请输入订单号" value={orderVal} onChange={onOrderChange} />*/}
                        {/*</div>*/}
                        <div className="order-screening" onClick={screening}>筛选</div>
                    </div>
                    <div className="order-time">
                        <div className="customer-searchRight">
                            <div className="select" style={{marginLeft: 0}}>
                                <select onChange={onChangeYears} value={yearsValue}>
                                    <option label="全部" value="">全部</option>
                                    <option label="2021" value="2021">2021</option>
                                    <option label="2022" value="2022">2022</option>
                                    <option label="2023" value="2023">2023</option>
                                    <option label="2024" value="2024">2024</option>
                                    <option label="2025" value="2025">2025</option>
                                </select>
                                <span />
                            </div>
                            <div className="select">
                                <select onChange={onChange} value={monthsValue}>
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
                                <span />
                            </div>
                        </div>
                        <div className="order-time-data">
                            <span
                                className={dayVal === 'yesterday' ? 'order-time-data-color' : ''}
                                onClick={() => handTime('yesterday')}
                            >
                                近7日
                            </span>
                            {/*<span*/}
                            {/*    className={dayVal === 'today' ? 'order-time-data-color' : ''}*/}
                            {/*    onClick={() => handTime('today')}*/}
                            {/*>*/}
                            {/*    今日*/}
                            {/*</span>*/}
                        </div>
                        <div className="order-order">订单数量：<span style={{fontWeight: 'bold'}}>{data.sumRow}</span></div>
                    </div>
                    <div
                        className="order-main" ref={(dom) => {
                        setDom(dom)
                    }} onScrollCapture={() => handleOnScroll()}
                    >
                        {
                            data.data.length
                                ?
                                data.data.map((item, index) => {
                                    return (
                                        <div className="order-con" key={index}>
                                            <div className="order-con-title">{item.orderCustomerName}-{item.name}</div>
                                            {item.webOrderTypeOuts.map((order, idx) => {
                                                return (
                                                    <div className="order-con-content" key={idx}>
                                                        <div className="order-conLeft">
                                                            <div>{order.categoryName}x{order.count}</div>
                                                            <div>下单时间：{formatDate(item.createTime)}</div>
                                                        </div>
                                                        <div className="order-conRight">
                                                            <div
                                                                className="order-conRightBg3"
                                                            >制版{order.produceDetailOutList.plateCount || 0}</div>
                                                            <div
                                                                className="order-conRightBg1"
                                                            >裁剪{order.produceDetailOutList.cutCount || 0}</div>
                                                            <div
                                                                className="order-conRightBg2"
                                                            >生产{order.produceDetailOutList.produceCount || 0}</div>
                                                            <div
                                                                className="order-conRightBg4"
                                                            >检验{order.produceDetailOutList.checkCount || 0}</div>
                                                            <div
                                                                className="order-conRightBg5"
                                                            >发货{order.produceDetailOutList.sendGoodsCount || 0}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })
                                : <div className="noData">暂无数据</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
