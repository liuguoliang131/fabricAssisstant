import React, { Component } from 'react'


interface State {
    left: number | undefined
}

export class Slide extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            left: props.left || 0
        };
    }

    prepareTurn(e: any) {
        const t = e.touches[0]
        const that: any = this
        that.touch = {x: t.clientX, y: t.clientY}
    }

    turnLeftOrRight(e: any) {
        const t = e.changedTouches[0]
        const that: any = this
        // 移动角度要在45度以内才算
        if (t && that.touch && Math.abs(that.touch.y - t.clientY) < Math.abs(that.touch.x - t.clientX) && Math.abs(that.touch.x - t.clientX) > 45) {
            if (that.touch.x < t.clientX) {
                // 手指向右移动
                this.turnLeft()
            } else {
                this.turnRight()
            }
        }
    }

    turnLeft() {
        this.setState((prevState: any) => {
            const that: any = this
            const {children} = that.props
            const length = (children || []).length
            let newLeft = prevState.left - 1
            if (newLeft == -1) {
                newLeft = length - 1
            }
            return {
                left: newLeft
            }
        })
    }

    turnRight() {
        this.setState((prevState: any) => {
            const that: any = this
            const {children} = that.props
            const length = (children || []).length
            let newLeft = prevState.left + 1
            if (newLeft == length) {
                newLeft = 0
            }
            return {
                left: newLeft
            }
        })
    }

    render() {
        const that: any = this
        const {left} = that.state;
        const {children = []} = that.props
        const length = children.length
        return (
            <div className='my-slide'>
                {
                    length > 0 && children.map((child: any, index: number) => {
                        return (
                            <span
                                className={`${index == left ? 'leftScale' : (index == (left + 1) % length ? 'top' : (index == (left + 2) % length ? 'rightScale' : 'bottom'))}`}
                                key={index}
                            >
                                <div
                                    className='block'
                                    onTouchStart={this.prepareTurn.bind(this)}
                                    onTouchEnd={this.turnLeftOrRight.bind(this)}
                                >
                                  {child}
                                </div>
                            </span>
                        )
                    })
                }
            </div>
        );
    }
}

export default Slide;
