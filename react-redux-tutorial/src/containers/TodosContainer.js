import React from "react";
import { connect } from 'react-redux'; //connect 함수 추가
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const CounterContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
    return (
        <Todos input={input} todos={todos} onchangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />
    );
};

export default connect(
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        // connect 함수가 내부적으로 bindActionCreators 작업을 대신해 줌
        changeInput,
        insert,
        toggle,
        remove,
    },
)(CounterContainer);