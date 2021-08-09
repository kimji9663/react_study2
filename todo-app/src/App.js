import React from "react";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";

const App = () => {
  return (
  <TodoTemplate>
      <TodoInsert></TodoInsert>
      <TodoList></TodoList>
  </TodoTemplate>
  );
};

export default App;
