import React, { FC, ReactElement, useEffect } from 'react';
import './appLayout.less';
import { history } from "src/router";


const AppLayout: FC = (props): ReactElement => {

    console.log(" =========== AppLayout 组件渲染 =========== ");

    const {children} = props;

    const userInfo = localStorage.getItem('userInfo');

    useEffect(() => {
        if (!userInfo) {
            history.push(`/`)
        }
    }, []);

    return (
        <div className="layout-root">
            <div className="layout-main">
                {children}
            </div>
        </div>
    )
}


export default AppLayout;
