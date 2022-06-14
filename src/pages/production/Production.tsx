import React, { FC, ReactElement, useEffect, useState } from 'react'
import Header from "components/header/Header";
import Popup from './components/Popup/Popup'
import './production.less'
import { postData } from "src/ts/requestUtil";
import { ORDER_CUT_PLATE_PRODUCT } from "src/constants/api";
import { useHistory } from "react-router-dom";

interface List {
    endTaskTime: string,
    startTaskTime: string,
    finishSecond: number,
    freeSecond: number,
    overSecond: number
}

interface tableItem {
    createTime: string,
    finishCount: number | null,
    finishTime: string,
    id: number,
    name: string,
    noRepairCount: number | null,
    orderCount: number | null,
    orderCustomerName: string,
    orderNo: string,
    repairCount: number | null
}

interface Res {
    code: string,
    error: boolean,
    model: tableItem[],
    msg: string,
    success: boolean,
    traceId: string
}

interface Data {
    data: tableItem[],
    lastPage: boolean,
    pageNo: number,
    pageSize: number,
    startIndex: number,
    sumPage: number,
    sumRow: number
}

const Product: FC = (): ReactElement => {

    console.log(" =========== Tailor 裁剪统计 =========== ");

    const userInfo: any = localStorage.getItem('userInfo')
    const user = JSON.parse(userInfo)
    const companyId = user.userCompanyOut.companyId
    // const companyId = 538
    // 搜索框
    const [customerName, setCustomerName] = useState<string>('')
    const [data, setData] = useState<Data>({
        lastPage: false,
        pageNo: 0,
        pageSize: 0,
        startIndex: 0,
        sumPage: 0,
        sumRow: 0,
        data: []
    })
    // 弹窗
    const [show, setShow] = useState<boolean>(false)

    const [popupProps, setPopupProps] = useState<any>({})

    const [pageNo, setPageNo] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(20)
    let history = useHistory()


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

    const [dom, setDom] = useState<any>(null);

    useEffect(() => {
        findProductList(customerName, 1, yearsValue, monthsValue, dayValue, toYearsValue, toMonthsValue, toDayValue)
    }, []);

    // 统计列表
    const findProductList = async (customerName: string, page: number, yearsTime = '', monthsTime = '', dayTime = '', toYearsTime = '', toMonthsTime = '', toDayTime = '') => {
        const params = {
            companyId,
            type: 3,
            likeValue: customerName,
            startTime: `${yearsTime}-${monthsTime}-${dayTime} 00:00:00`,
            endTime: `${toYearsTime}-${toMonthsTime}-${toDayTime} 23:59:59`,
            pageNo: page,
            pageSize: pageSize
        }
        if (dom && page === 1) {
            dom.scrollTop = 0
        }
        try {
            const res: any = await postData(`${ORDER_CUT_PLATE_PRODUCT}`, params)
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
    // 搜索框输入事件
    const handleChange = (e: any): void => {
        setCustomerName(e.target.value)
    }
    const handleSearch = (): void => {
        findProductList(customerName, 1, yearsValue, monthsValue, dayValue, toYearsValue, toMonthsValue, toDayValue)
    }

    // 打开详情
    const handleShowDetail = (idx: number): void => {
        const item = JSON.parse(JSON.stringify(data.data[idx]))
        item.companyId = companyId
        setPopupProps(item)
        // setShow
        setShow(true)
    }
    // 关闭弹窗
    const close = () => {
        setShow(false)
    }

    // 监听页面滚动
    const handleOnScroll = () => {
        if (dom) {
            const contentScrollTop = dom.scrollTop + 1; //滚动条距离顶部
            const clientHeight = dom.clientHeight; //可视区域
            const scrollHeight = dom.scrollHeight; //滚动条内容的总高度
            if (contentScrollTop + clientHeight >= scrollHeight) {
                if (pageNo + 1 <= data.sumPage) {
                    findProductList(customerName, pageNo + 1, yearsValue, monthsValue, dayValue, toYearsValue, toMonthsValue, toDayValue);
                }
            }
        }
    };

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
            findProductList(customerName, 1, e.target.value, monthsData, '01', e.target.value, monthsData, lastDay.toString())
        } else {
            setMonthsValue(toMonthsValue)
            setToMonthsValue(toMonthsValue)
            findProductList(customerName, 1, e.target.value, toMonthsValue, '01', e.target.value, toMonthsValue, lastDay.toString())
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
            findProductList(customerName, 1, years, e.target.value, '01', years, e.target.value, lastDay.toString())
        } else {
            setYearsValue(yearsValue)
            setToYearsValue(yearsValue)
            findProductList(customerName, 1, yearsValue, e.target.value, '01', yearsValue, e.target.value, lastDay.toString())
        }
    }

    const handTime = (data: string) => {
        setYearsValue(years)
        setMonthsValue(monthsData)
        setDayVal(data)
        if (data === 'today') {
            findProductList(customerName, 1, years, monthsData, dayData, years, monthsData, dayData)
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
            findProductList(customerName, 1, years, monthsData, dayTo, yearTo, monthTo, dayData)
        }
    }

    return (
        <div className="production">
            {show ? <Popup {...popupProps} close={close} /> : null}
            <Header exitHide={true}>生产统计</Header>
            <div className="order-statistics">
                <div className="order-statistics-title">
                    统计数量
                </div>
                <div className="order-statistics-num">
                    {data.sumRow}
                </div>
            </div>
            <div className="order-content">
                <div className="order-search">
                    <div className="input">
                        <input type="text" placeholder="请输入订单名称或客户" value={customerName} onChange={handleChange} />
                    </div>
                    <div className="order-screening" onClick={handleSearch}>筛选</div>
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
                    {/*<div className="order-order">个数：<span style={{fontWeight: 'bold'}}>{data.sumRow}</span></div>*/}
                </div>
                <div className="tablebox">
                    {

                        <div className='table'>
                            <div className="thead">
                                <div className="th">订单名称</div>
                                <div className="th">客户</div>
                                <div className="th">数量</div>
                                <div className="th">完成数</div>
                                <div className="th">下单时间</div>
                                <div className="th">完成时间</div>
                            </div>
                            <div
                                className="tbody" ref={(dom) => {
                                setDom(dom)
                            }} onScrollCapture={() => handleOnScroll()}
                            >
                                {
                                    data.data.length > 0 ? (
                                        data.data.map((item, idx) => (
                                            <div className="tr">
                                                <div className="td">{item.name}</div>
                                                <div className="td">{item.orderCustomerName}</div>
                                                <div className="td">{item.orderCount || 0}</div>
                                                <div className="td">{item.finishCount || 0}</div>
                                                <div className="td">{item.createTime.substr(0, 10)}</div>
                                                <div className="td">{item.finishTime}</div>
                                            </div>
                                        ))) : (
                                        <div className="empty">暂无数据</div>
                                    )
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
