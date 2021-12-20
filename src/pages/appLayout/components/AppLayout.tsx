import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './appLayout.less'
import { postData } from "src/ts/requestUtil";


const AppLayout: FC = (props): ReactElement => {

    console.log(" =========== AppLayout 组件渲染 =========== ");

    const {children} = props;
    let history = useHistory();

    useEffect(() => {

    }, []);


    return (
        <div className="hn_root">
            <div className="hn_main">
                {children}
            </div>
        </div>
    )
}


export default AppLayout;
