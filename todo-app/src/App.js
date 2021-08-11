import React, { useState, useRef, useCallback } from "react";
// useCallback: 컴포넌트가 최초 랜더링시에만 한번 함수를 만들고, 리렌더링 시에는 재사용 가능하다.
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback( text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
  }, [todos]);

  return (
  <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos}></TodoList>
  </TodoTemplate>
  );
};

export default App;
