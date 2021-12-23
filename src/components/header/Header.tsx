import React, { FC, ReactElement } from 'react';
import './header.less';
import { useHistory } from "react-router-dom";


const Header: FC = (props): ReactElement => {

    console.log(" =========== Header 组件渲染 =========== ");

    let history = useHistory();
    const {children} = props;

    const exit = () => {
        localStorage.clear()
        history.replace(`/`)
    }

    return (
        <div className="header">
            <img className="return" src={require('../assets/return.png')} onClick={() => history.goBack()} />
            <div>{children}</div>
            <img className="exit" src={require('../assets/exit.png')}  onClick={exit}/>
        </div>
    )
}


export default Header;
