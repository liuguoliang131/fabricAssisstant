/*文件上传通用地址url地址*/
/*文件下载url地址*/
import { API_BASE_URL, BASE_URL } from "./baseUrl";

/*文件上传url地址*/
export const FILE_UPLOAD_URL = API_BASE_URL + '/file/upload';


// 登陆
export const LOGIN = '/orderStatistics/login';

export const ORDER_CATEGORY_COUNT = '/orderStatistics/orderCategoryCount'

// 订单监控
export const ORDER_MONITOR = '/orderStatistics/orderMonitor';

// 查询订单数量
export const SELECT_ORDER_COUNT = '/orderStatistics/selectOrderCount';

// 客户统计
export const CUSTOMER_STATISTICS = '/orderStatistics/customerStatistics';

// 技工效率图 （1）
export const FIND_STAFF_RATIO = '/orderStatistics/findStaffRatio';

// 技工效率图工序统计 （3）
export const FIND_STAFF_PROCEDURE_ALL = '/orderStatistics/findStaffProcedureAll';

// 技工效率图统计  (2)
export const FIND_STAFF_RATIO_ALL = '/orderStatistics/findStaffRatioAll';

// 库存统计
export const STOCK_STATISTICS = '/orderStatistics/stockStatistics';

// 收入统计-收益趋势
export const REVENUE_TREND = '/orderStatistics/revenueTrend';

// 收入统计-余额情况
export const TODAY_ORDER_BALANCER = '/orderStatistics/todayOrderBalancer';

// 收入统计-收入情况
export const TODAY_ORDER_INCOMER = '/orderStatistics/todayOrderIncomer';

// 今日订单统计 下单量
export const TODAY_ORDER_STATISTICS = '/orderStatistics/todayOrderStatistics';

// 所有设备
export const ALL_EQUIPMENT_LIST = '/orderStatistics/allEquipmentList';

// 今日订单数量
export const TODAY_ORDER_COUNT = '/orderStatistics/todayOrderCount'

// 成品统计列表
export const JOIN_HOUSE_COUNT = '/orderStatistics/joinHouseCount'

// 查询成品入库发货统计（根据服装品类查询）  
export const JOIN_HOUSE_COUNT_BY_UUID = '/orderStatistics/joinHouseCountByUuid'
