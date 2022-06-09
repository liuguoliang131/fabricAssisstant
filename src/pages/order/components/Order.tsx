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

    const onNameChange = (e: any) => {
        setNameVal(e.target.value)
    }

    const onOrderChange = (e: any) => {
        setOrderVal(e.target.value)
    }

    useEffect(() => {
        findOrderNum()
        findOrder(nameVal, orderVal, 1)
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

    const findOrder = async (name: string, order: string, page: number) => {
        try {
            const res: any = await getData(`${ORDER_MONITOR}?pageNo=${page}&pageSize=${pageSize}&companyId=${companyId}&orderNo=${order}&customerName=${name}`)
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
                    findOrder(nameVal, orderVal, pageNo + 1);
                }
            }
        }
    };

    const screening = () => {
        if (dom) {
            dom.scrollTop = 0
        }

        findOrder(nameVal, orderVal, 1)
    }

    const formatDate = (t: any) => {
        let v = new Date(t);
        console.log(t.replace(/-/g, "/"), v.getDate() + 1 < 10)
        if(v){
            // 将Date()对象转成YYYY-MM-DD HH:MM:SS格式
            const year = v.getFullYear()
            const month = v.getMonth() + 1 < 10 ? `0${v.getMonth() + 1 }`: v.getMonth()
            const day = v.getDate() + 1 <= 10 ? `0${v.getDate()}`: v.getDate()
            const hour = v.getHours() < 10 ? `0${v.getHours()}`: v.getHours()
            const minute = v.getMinutes() < 10 ? `0${v.getMinutes()}`: v.getMinutes()
            const second = v.getSeconds() < 10 ? `0${v.getSeconds()}`: v.getSeconds()
            return `${year}-${month}-${day} ${hour}:${minute}:${second}`
        }
        return ''
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
                    <div className="order-order">订单数量：<span style={{fontWeight: 'bold'}}>{data.sumRow}</span></div>
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
                                                                className="order-conRightBg1"
                                                            >裁剪{order.produceDetailOutList.cutCount || 0}</div>
                                                            <div
                                                                className="order-conRightBg2"
                                                            >生产{order.produceDetailOutList.produceCount || 0}</div>
                                                            <div
                                                                className="order-conRightBg3"
                                                            >制版{order.produceDetailOutList.plateCount || 0}</div>
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
