import React, { FC, ReactElement, useEffect, useState } from 'react'
import { getData } from "src/ts/requestUtil";
import { JOIN_HOUSE_COUNT_BY_UUID } from "src/constants/api";
import './Popup.less'

interface IProps {
    close: Function,
    categoryName: string,
    categoryUuid: string,
    num: number,
    companyId: number
}

interface ListItem {
    joinHouseCount: number,
    num: number,
    orderCustomerName: string,
    sendNum: number
}

const Popup: FC<IProps> = (props): ReactElement => {
    const close = props.close
    const title = props.categoryName
    const categoryUuid = props.categoryUuid
    const companyId = props.companyId
    const handleClose = () => {
        close()
    }
    const [list, setList] = useState<ListItem[]>([])
    useEffect(() => {
        getList()
    }, []);
    const getList = async () => {
        try {
            const res = await getData(`${JOIN_HOUSE_COUNT_BY_UUID}?categoryUuid=${categoryUuid}&companyId=${companyId}`)
            setList(res.model)
        } catch (error) {
            throw error
        }
    }
    return (
        <div className="Popup">
            <div className="center-view">
                <div className="title-row">
                    <span>{title}</span>
                    <img src={require('../../assets/close@2x.png')} alt="close" onClick={handleClose} />
                </div>
                <div className="view">
                    <div className="thead">
                        <div className="tr">
                            <div className="th">客户名称</div>
                            <div className="th">入库累计</div>
                            <div className="th">发货累计</div>
                            <div className="th">下单数量</div>
                        </div>
                    </div>
                    <div className="tbody">
                        {
                            list ? list.map(item => (
                                <div className="tr">
                                    <div className="td">{item.orderCustomerName}</div>
                                    <div className="td">{item.joinHouseCount}</div>
                                    <div className="td">{item.sendNum}</div>
                                    <div className="td">{item.num}</div>
                                </div>
                            )) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
