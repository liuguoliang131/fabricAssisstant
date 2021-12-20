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

const AppLayoutRoutes: FC = (): ReactElement => {

    return (
        <AppLayout>
            <Suspense fallback={<div className="webLoading">loading...</div>}>
                <Switch>
                    <Route exact path={`/appLayout/home`} component={Home} />
                    <Route component={NoMatch} />
                    <Redirect to={`/appLayout/home`} />
                </Switch>
            </Suspense>
        </AppLayout>
    );
}

export default AppLayoutRoutes
