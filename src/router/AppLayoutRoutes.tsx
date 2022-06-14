/**
 * 创建人： 徐盼强
 * 功能描述：布局路由设置
 */
import React, { FC, lazy, ReactElement, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppLayout from "../pages/appLayout/components/AppLayout";
import NoMatch from "../pages/stateCode/components/NoMatch";

// 首页
const Home = lazy(() => import("../pages/home/components/Home"))
const Order = lazy(() => import("../pages/order/components/Order"))
const Income = lazy(() => import("../pages/income/components/Income"))
const Customer = lazy(() => import("../pages/customer/components/Customer"))
const Inventory = lazy(() => import("../pages/inventory/components/Inventory"))
const Account = lazy(() => import("../pages/account/components/Account"))
const Performance = lazy(() => import("../pages/performance/components/Performance"))
const PerformanceDetails = lazy(() => import("../pages/performance/components/PerformanceDetails"))
const Equipment = lazy(() => import("../pages/equipment/components/Equipment"))
const Product = lazy(() => import("../pages/product/Product"))
const Repertory = lazy(() => import("../pages/repertory/Repertory"))
const Clientele = lazy(() => import("../pages/clientele/Clientele"))
const Tailor = lazy(() => import("../pages/tailor/Tailor"))
const Platemaking = lazy(() => import("../pages/platemaking/Platemaking"))
const Production = lazy(() => import("../pages/production/Production"))
const Examine = lazy(() => import("../pages/examine/Examine"))
const Shipments = lazy(() => import("../pages/shipments/Shipments"))
const Artisan = lazy(() => import("../pages/artisan/Artisan"))

const AppLayoutRoutes: FC = (): ReactElement => {

    return (
        <AppLayout>
            <Suspense fallback={<div className="webLoading">加载中...</div>}>
                <Switch>
                    <Route exact path={`/appLayout/home`} component={Home} />
                    <Route path={`/appLayout/order`} component={Order} />
                    <Route path={`/appLayout/income`} component={Income} />
                    <Route path={`/appLayout/customer`} component={Customer} />
                    <Route path={`/appLayout/inventory`} component={Inventory} />
                    <Route path={`/appLayout/performance`} component={Performance} />
                    <Route path={`/appLayout/performanceDetails/:userId`} component={PerformanceDetails} />
                    <Route path={`/appLayout/equipment`} component={Equipment} />
                    {/* /appLayout/product */}
                    <Route path={`/appLayout/product`} component={Product} />
                    <Route path={`/appLayout/account`} component={Account} />
                    <Route path={`/appLayout/repertory`} component={Repertory} />
                    <Route path={`/appLayout/clientele`} component={Clientele} />
                    <Route path={`/appLayout/tailor`} component={Tailor} />
                    <Route path={`/appLayout/platemaking`} component={Platemaking} />
                    <Route path={`/appLayout/production`} component={Production} />
                    <Route path={`/appLayout/examine`} component={Examine} />
                    <Route path={`/appLayout/shipments`} component={Shipments} />
                    <Route path={`/appLayout/artisan`} component={Artisan} />
                    <Redirect to={`/appLayout/home`} />
                </Switch>
            </Suspense>
        </AppLayout>
    );
}

export default AppLayoutRoutes
