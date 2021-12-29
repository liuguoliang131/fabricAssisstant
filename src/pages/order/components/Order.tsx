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
    categoryName: string | null,
    checkCount: number,
    contacts: string | null,
    customerName: string | null,
    cutCount: number,
    ironingCount: number,
    orderCount: number,
    orderId: number,
    produceCount: number,
    uuid: string,
    name: string
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
    const [pageSize, setPageSize] = useState<number>(10)

    const [data, setData] = useState<Data>({
        lastPage: false,
        pageNo: 0,
        pageSize: 0,
        startIndex: 0,
        sumPage: 0,
        sumRow: 0,
        data: []
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
            const res: any = await getData(`${SELECT_ORDER_COUNT}?companyId=${companyId}`)
            if (res.success) {
                setDataNum(res.model)
            } else {
                alert(res.msg)
            }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }

    const [dom, setDom] = useState<any>(null);

    // 监听页面滚动
    const handleOnScroll = () => {
        if (dom) {
            const contentScrollTop = dom.scrollTop; //滚动条距离顶部
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

    return (
        <div className="order">
            <Header>订单监控</Header>
            <div className="main" style={{background: '#ffffff', overflow: 'hidden'}}>
                <div className="order-content">
                    <div className="order-search">
                        <div className="input">
                            <input type="text" placeholder="请输入企业名称" value={nameVal} onChange={onNameChange} />
                        </div>
                        <div className="input order-input">
                            <img className="searchImg" src={require('../../../components/assets/search.png')} />
                            <input type="text" placeholder="请输入订单号" value={orderVal} onChange={onOrderChange} />
                        </div>
                        <div className="order-screening" onClick={screening}>筛选</div>
                    </div>
                    <div className="order-order">订单数量：<span style={{fontWeight: 'bold'}}>{dataNum}</span></div>
                    <div
                        className="order-main" ref={(dom) => {
                        setDom(dom)
                    }} onScrollCapture={() => handleOnScroll()}
                    >
                        {
                            data.data.length
                                ?
                                data.data.map((item, index) => {
                                    return <div className="order-con" key={index}>
                                        <div className="order-conLeft">
                                            <div>{item.customerName}-{item.contacts}</div>
                                            <div>{item.name}x{item.orderCount}</div>
                                        </div>
                                        <div className="order-conRight">
                                            <div className="order-conRightBg1">裁剪{item.cutCount}</div>
                                            <div className="order-conRightBg2">生产{item.produceCount}</div>
                                            <div className="order-conRightBg3">整烫{item.ironingCount}</div>
                                            <div className="order-conRightBg4">检验{item.checkCount}</div>
                                            {/*{*/}
                                            {/*    <div className="order-conRightBg5">发货</div>*/}
                                            {/*}*/}
                                        </div>
                                    </div>
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
