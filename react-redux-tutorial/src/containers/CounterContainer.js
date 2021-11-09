import React from "react";
import { bindActionCreate } from 'react-redux';
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
    dispatch => 
    bindActionCreate(
        {
            // 임시 함수
            increase,
            decrease,
        },
        dispatch
    ),
)(CounterContainer);