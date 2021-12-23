import React, { FC, ReactElement, useEffect, useState } from 'react'
import Header from "components/header/Header";
import './equipment.less'
import { postData } from "src/ts/requestUtil";
import { ALL_EQUIPMENT_LIST } from "src/constants/api";

interface Data {
    code: string,
    companyId: number
    createBy: null | string,
    createName: null | string,
    createTime: string,
    del: boolean,
    groupId: number,
    groupName: string,
    id: number,
    location: null | string,
    name: string,
    status: number,
    updateBy: null | string,
    updateName: null | string,
    updateTime: string,
    useStatus: number
    workshopId: number
    workshopName: string
}

const Equipment: FC = (): ReactElement => {

    console.log(" =========== Equipment 设备管理 =========== ");

    const userInfo: any = localStorage.getItem('userInfo')
    const user = JSON.parse(userInfo)
    const companyId = user.userCompanyOut.companyId

    const [value, setValue] = useState('1')

    const onChange = (e: any) => {
        setValue(e.target.value)
        findEquipment(e.target.value)
    }

    const findColor = (status: number, useStatus: number) => {
        let bg = '';
        if (status === 0 && useStatus === 0) {
            bg = '#15CC6F'
        } else if (status === 0 && useStatus === 1) {
            bg = '#3376FF'
        } else if (status === 1) {
            bg = '#FE441F'
        }
        return bg
    }

    const [data, setData] = useState<Data[]>([])

    useEffect(() => {
        findEquipment(value)
    }, []);

    const findEquipment = async (type: string) => {
        try {
            let params: any = {
                companyId: companyId,
            }
            if (type === '1') {
                // // 状态 0正常 1故障
                // status: 1,
                // // 使用状态 0闲置 1使用中
                // useStatus: 1
            } else if (type === '2') {
                params.status = 0
            } else if (type === '3') {
                params.status = 1
            } else if (type === '4') {
                params.useStatus = 0
            } else if (type === '5') {
                params.useStatus = 1
            }
            const res: any = await postData(`${ALL_EQUIPMENT_LIST}`, params)
            if (res.success) {
                setData(res.model)
            } else {
                alert(res.msg)
            }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }

    return (
        <div className="equipment">
            <Header>设备管理</Header>
            <div className="main">
                <div className="select">
                    <select onChange={onChange} value={value}>
                        <option label="全部" value="1">全部</option>
                        <option label="正常" value="2">正常</option>
                        <option label="故障" value="3">故障</option>
                        <option label="闲置" value="4">闲置</option>
                        <option label="使用中" value="5">使用中</option>
                    </select>
                    <span></span>
                </div>
                <div className="equipment-main">
                    {
                        data.length
                        ?
                            data.map(item => {
                                return (
                                    <div className="equipment-mainList" key={item.id}>
                                        <div>
                                            <span style={{background: findColor(item.status, item.useStatus)}} className="equipment-mainListDge"></span>
                                            <span className="equipment-mainListState">{item.status ? '故障' : '正常'}({item.useStatus ? '使用中' : '闲置'})</span>
                                        </div>
                                        <div className="equipment-mainListNameSerial">
                                            <span className="equipment-mainListName">{item.name}</span>
                                            <span className="equipment-mainListSerial">{item.code}</span>
                                        </div>
                                        <div className="equipment-mainListText">{item.workshopName}{item.groupName}</div>
                                    </div>
                                )
                            })
                            :
                            null
                    }
                </div>
            </div>
        </div>
    )
}

export default Equipment
