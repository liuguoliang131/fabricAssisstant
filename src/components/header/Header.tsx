import React, { FC, ReactElement } from 'react';
import './header.less';
import { useHistory } from "react-router-dom";

interface IProps {
    exitHide?: boolean,
    children: any
}

const Header: FC<IProps> = (props): ReactElement => {

    console.log(" =========== Header 组件渲染 =========== ");

    let history = useHistory();
    const {children, exitHide} = props;

    const exit = () => {
        localStorage.clear()
        history.replace(`/`)
    }

    return (
        <div className="header">
            <img className="return" src={require('../assets/return.png')} onClick={() => history.goBack()} />
            <div>{children}</div>
            {
                exitHide
                ?
                    <div />
                    :
                    <img className="exit" src={require('../assets/exit.png')}  onClick={exit}/>
            }

        </div>
    )
}


export default Header;
