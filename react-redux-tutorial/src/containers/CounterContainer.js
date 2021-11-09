import React from "react";
import { connect } from 'react-redux'; //connect 함수 추가
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        // connect 함수가 내부적으로 bindActionCreators 작업을 대신해 줌
        increase,
        decrease,
    },
)(CounterContainer);