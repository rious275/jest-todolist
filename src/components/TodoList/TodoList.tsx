'use client';

import React from 'react';
import Button from '../Button';
import { useRecoilState } from 'recoil';
import { todosAtom } from '@/recoil';

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosAtom);

  const deleteTodo = (id: number) => {
    const filterTodo = todos.filter(todo => id !== todo.id);
    setTodos(filterTodo);
  };

  return (
    <div>
      <ul className="w-screen max-w-md">
        {todos.map(({ id, todo }) => (
          <li
            key={id}
            className="flex gap-10 justify-between px-6 py-3 hover:drop-shadow"
          >
            <div>{todo}</div>
            <Button color="red" onClick={() => deleteTodo(id)}>
              삭제
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
