import React from "react";

class Drag extends React.Component {
    constructor() {
        super();
        this.state = {
            /*定义两个值用来存放当前元素的left和top值*/
            needX: 0,
            needY: 0
        };
        /*定义两个值用来存放鼠标按下的地方距离元素上侧和左侧边界的值*/
        this.disX = 0;
        this.disY = 0;
    }

    /**
     * 功能描述：提示
     */
    static getDerivedStateFromProps(np, ns) {
        // console.log(np, ns)
        // ns.needX = 0;
        // ns.needY = 0;
        return null;
    }

    componentDidMount() {
        //获取鼠标右击
        document.addEventListener('contextmenu', this._handleContextMenu);
    };

    _handleContextMenu = (e) => {
        // e.preventDefault();
        console.log(e);
        /*定义鼠标移动事件*/
        document.ontouchmove = null;
        /*定义鼠标抬起事件*/
        document.ontouchend = null;
    };

    /*定义鼠标下落事件*/
    fnDown(e) {
        console.log('下落',e);
        /*事件兼容*/
        /*事件源对象兼容*/
        let target = e.target;
        let touch = e.targetTouches[0];

        /*获取鼠标按下的地方距离元素左侧和上侧的距离*/
        this.disX = touch.clientX - target.offsetLeft;
        this.disY = touch.clientY - target.offsetTop;
        /*定义鼠标移动事件*/
        document.ontouchmove = this.fnMove.bind(this);
        /*定义鼠标抬起事件*/
        document.ontouchend = this.fnUp.bind(this);
    }

    /*定义鼠标移动事件*/
    fnMove(e) {
        console.log('移动',e);
        /*事件兼容*/
        let touch = e.targetTouches[0];
        // 元素位置 = 现在鼠标位置 - 元素的偏移值
        let left = touch.clientX - this.disX;
        let top = touch.clientY - this.disY;
        this.setState({
            needX: left,
            needY: top
        });
    }

    fnUp() {
        document.ontouchmove = null;
        document.ontouchend = null;
    }

    render() {
        console.log("=========== Drag 组件渲染===========");
        /*返回元素*/
        return(
            <div
                style={{
                    width: this.props.style.width,
                    height: this.props.style.height,
                    position: this.props.style.position,
                    left: this.state.needX,
                    top: this.state.needY,
                    zIndex: 999
                }}
                onTouchStart={this.fnDown.bind(this)}
            >
                111
            </div>
        );
    }
}

export default Drag;
