import React, { Component } from 'react';

class Counter extends Component {

    // constructor를 선언하지 않고도 state의 초깃값 설정이 가능(주 사용방식)
    state = {
        number: 0,
        fixedNumber: 0
    };

    // state를 constructor에서 꺼내고 constructor는 삭제

    render() {
        const { number, fixedNumber } = this.state; // state를 조회할때는 this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: { fixedNumber }</h2>
                <button
                // onClick을 통해 버튼이 클릭되었을때 호출할 함수 지정
                onClick={() => {
                    // this.setState를 통해 state에 새로운 값을 넣을 수 있다.
                    this.setState({ number: number + 1 });
                }}
                >
                    +1
                </button>
            </div>
        )
    }
}

export default Counter;