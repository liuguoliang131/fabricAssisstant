/**
 * 创建人： 徐盼强
 * 功能描述：入口文件
 */
import 'lib-flexible'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

/**
 * 为了实现js的热替换，此时需要在入口文件的执行代码最开始处配置一下 module.hot.accept 逻辑（css不需要配置，因为之后要配置的 css-loader 已经实现了这块逻辑）
 */
if (module && module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')

)
