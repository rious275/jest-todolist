'use client';

import React, { useState } from 'react';
import Button from '../Button';
import { useRecoilState } from 'recoil';
import { todosAtom } from '@/recoil';

const Input = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useRecoilState(todosAtom);

  const todoId = Date.now();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const createTodo = () => {
    if (!value) return;

    const todo = {
      id: todoId,
      todo: value,
      done: false,
    };

    setTodos([...todos, todo]);
    setValue('');
  };

  const reset = () => setTodos([]);

  return (
    <div>
      <input
        role="todo-input"
        type="text"
        className="my-8 mr-3 w-80 bg-gray-50 p-2 px-4 outline-none rounded-lg"
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <Button role="button-create" onClick={createTodo}>
        등록
      </Button>
      {' - '}
      <Button role="button-reset" color="red" onClick={reset}>
        리셋
      </Button>
    </div>
  );
};

export default Input;
