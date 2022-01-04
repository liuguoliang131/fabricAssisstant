import React, { FC, ReactElement, useEffect, useState } from 'react'
import Header from "components/header/Header";
import './inventory.less'
import { getData } from "src/ts/requestUtil";
import { STOCK_STATISTICS } from "src/constants/api";

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
    bookName: string,
    brandName: string,
    id: number,
    materialArticleNumber: string,
    stockCount: number,
    unit: string
}

const Inventory: FC = (): ReactElement => {

    console.log(" =========== Inventory 订单监控 =========== ");

    const userInfo: any = localStorage.getItem('userInfo')
    const user = JSON.parse(userInfo)
    const companyId = user.userCompanyOut.companyId

    const date = new Date();
    const years = date.getFullYear();
    const months = (date.getMonth() + 1).toString()
    const monthsData = months.length === 1 ? `0${months}` : months

    const [type, setType] = useState('1')
    const [value, setValue] = useState('')

    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    const onChangeType = (e: any) => {
        setType(e.target.value)
        findTable(1, e.target.value)
    }

    const screening = () => {
        if (dom) {
            dom.scrollTop = 0
        }
        findTable(1, type);
    }

    useEffect(() => {
        findTable(1, type)
    }, []);

    const findTable = async (page: number, typeString: string) => {
        try {
            const res: any = await getData(`${STOCK_STATISTICS}?pageNo=${page}&pageSize=${pageSize}&companyId=${companyId}&type=${typeString}&articleNumber=${value}`)
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

    const [dom, setDom] = useState<any>(null);

    // 监听页面滚动
    const handleOnScroll = () => {
        if (dom) {
            const contentScrollTop = dom.scrollTop; //滚动条距离顶部
            const clientHeight = dom.clientHeight; //可视区域
            const scrollHeight = dom.scrollHeight; //滚动条内容的总高度
            if (contentScrollTop + clientHeight >= scrollHeight) {
                console.log(pageNo + 1 <= data.sumPage)
                if (pageNo + 1 <= data.sumPage) {
                    findTable(pageNo + 1, type);
                }
            }
        }
    };

    return (
        <div className="inventory">
            <Header>库存统计</Header>
            <div className="main" style={{background: '#ffffff', overflow: 'hidden'}}>
                <div className="inventory-content">
                    <div className="inventory-search">
                        <div className="select inventorySearch">
                            <select onChange={onChangeType} value={type}>
                                <option label="面料" value="1">面料</option>
                                <option label="商品" value="2">商品</option>
                            </select>
                            <span />
                        </div>
                        <div className="input order-input">
                            <img className="searchImg" src={require('../../../components/assets/search.png')} />
                            <input type="text" placeholder="请输入货号" value={value} onChange={onChange} />
                        </div>
                        <div className="inventory-screening" onClick={screening}>筛选</div>
                    </div>
                </div>
                {
                    data.data.length
                        ?
                        <div className="inventory-tableData">
                            <div className="inventory-table inventory-tableColumns">
                                <div className="inventory-information">商品信息</div>
                                <div>上月结余</div>
                                <div>采购</div>
                                <div>
                                    <div>
                                        <div>消耗</div>
                                        <div>待消耗</div>
                                    </div>
                                </div>
                                <div>库存</div>
                            </div>
                            <div
                                className="inventory-main" ref={(dom) => {
                                setDom(dom)
                            }} onScrollCapture={() => handleOnScroll()}
                            >
                                {
                                    data.data.map((item, index) => {
                                        return (
                                            <div className="inventory-table inventory-tableList" key={index}>
                                                <div className="inventory-information">
                                                    <div className="inventory-title">名称：{item.bookName}</div>
                                                    <div className="inventory-title">品牌：{item.brandName}</div>
                                                    <div
                                                        className="inventory-title"
                                                    >货号：{item.materialArticleNumber}</div>
                                                </div>
                                                <div>
                                                    <div>/</div>
                                                    <div className="inventory-unit"></div>
                                                </div>
                                                <div>
                                                    <div>/</div>
                                                    <div className="inventory-unit"></div>
                                                </div>
                                                <div>
                                                    <div>/</div>
                                                    {/*<div>/</div>*/}
                                                    <div className="inventory-unit"></div>
                                                </div>
                                                <div>
                                                    <div>{item.stockCount | 0}</div>
                                                    <div className="inventory-unit">({item.unit})</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        : <div className="noData">暂无数据</div>
                }
            </div>
        </div>
    )
}

export default Inventory
