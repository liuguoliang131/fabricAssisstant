import React, { FC, ReactElement, useEffect, useState } from 'react'
import Header from "components/header/Header";
import Popup from './components/Popup/Popup'
import './Product.less'
import { getData } from "src/ts/requestUtil";
import { JOIN_HOUSE_COUNT} from "src/constants/api";
import { useHistory } from "react-router-dom";

interface List {
    endTaskTime: string,
    startTaskTime: string,
    finishSecond: number,
    freeSecond: number,
    overSecond: number
}

interface tableItem {
  categoryName: string,
  categoryUuid: string,
  count: number,
  joinHouseCount: number,
  num: number,
  orderCustomerName: string,
  sendNum: number
}
interface Res {
  code: string,
  error: boolean,
  model: tableItem[],
  msg: string,
  success: boolean,
  traceId: string
}

const Product: FC = (): ReactElement => {

    console.log(" =========== Product 成品统计 =========== ");

    const userInfo: any = localStorage.getItem('userInfo')
    const user = JSON.parse(userInfo)
    // const companyId = user.userCompanyOut.companyId
    const companyId = 538
    // 搜索框
    const [customerName,setCustomerName ] = useState<string>('')
    // 成品入库列表
    const [productList,setProductList] = useState<tableItem[]>([])
    // 弹窗
    const [show,setShow] = useState<boolean>(false)

    const [popupProps,setPopupProps] = useState<any>({})
    let history = useHistory()

    useEffect(() => {
        findProductList(customerName)
    }, []);

    // 统计列表
    const findProductList = async (customerName:string) =>{
      try {
        const res: Res = await getData(`${JOIN_HOUSE_COUNT}?companyId=${companyId}&customerName=${customerName}`)
        if (res.success) {
          setProductList(res.model)
        } else {
            alert(res.msg)
        }
    } catch (e) {
        console.log(e)
        alert(e)
    }
    }
    // 搜索框输入事件
    const handleChange = (e:any) :void => {
        setCustomerName(e.target.value)
    }
    const handleSearch = () :void => {
      findProductList(customerName)
    }

    // 打开详情
    const handleShowDetail = (idx:number):void => {
      const item = JSON.parse(JSON.stringify(productList[idx]))
      item.companyId = companyId
      setPopupProps(item)
      // setShow
      setShow(true)
    }
    // 关闭弹窗
    const close = ()=>{
      setShow(false)
    }

    return (
        <div className="product">
          {show?<Popup {...popupProps} close={close} />:null}
          <Header exitHide={true}>成品统计</Header>
          <div className="product-views">
            <div className="search">
              <input type="text" value={customerName} onChange={handleChange} />
              <button onClick={handleSearch}>筛选</button>
            </div>
          </div>
          <div className="tablebox">
            {
              productList.length>0? (
                <div className='table'>
                  <div className="thead">
                    <div className="th">品类</div>
                    <div className="th">入库</div>
                    <div className="th">发货</div>
                    <div className="th">总数量</div>
                  </div>
                  <div className="tbody">
                    {
                      productList.map((item,idx)=>(
                        <div className="tr">
                          <div className="td">{item.categoryName}</div>
                          <div className="td">{item.joinHouseCount}</div>
                          <div className="td">{item.sendNum}</div>
                          <div className="td bling" onClick={()=>handleShowDetail(idx)}>{item.num}</div>
                        </div>
                      ))
                    }
                    
                  </div>
                </div>
              ):(
                <div className="empty">暂无数据</div>
              )
            }
          </div>
        </div>
    )
}

export default Product
