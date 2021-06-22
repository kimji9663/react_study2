import React, { Component } from 'react';

class Counter extends Component {
    // constructor: 컴포넌트 생성자 메서드
    constructor(props){
        super(props); //필수! 현재 클래스형 컴포넌트가 상속하고 있는 리액트의 Component클래스가 지닌 생성자 함수를 호출

        // state의 초깃값 설정하기
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
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