/**
 * 创建人： 徐盼强
 * 功能描述：路由包裹
 */
import React, { FC, ReactElement } from 'react'
import "./app.less";
import AppRoutes from "./router";

const App: FC = (): ReactElement => {

    return (
        <AppRoutes />
    )
}

export default App
