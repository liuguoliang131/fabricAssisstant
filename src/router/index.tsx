/**
 * 创建人： 徐盼强
 * 功能描述：react-router 包裹
 */
import React, { Suspense, lazy, FC, ReactElement } from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history"; // 锚点模式的history createBrowserHistory  createHashHistory
// 创建一个浏览器历史记录
export const history = createHistory();
import AppLayoutRoutes from './AppLayoutRoutes';

// 登录
const Login = lazy(() => import("../pages/login/components/Login"))

const AppRoutes: FC = (): ReactElement => {
    return (
        <Router history={history}>
            <Suspense fallback={<div className="webLoading">loading...</div>}>
                <Switch>
                    {/* 登录 */}
                    <Route exact path={`/`} component={Login} />
                    {/* 主体 */}
                    <Route path={`/appLayout`} component={AppLayoutRoutes} />
                    <Redirect to={`/`} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default AppRoutes
