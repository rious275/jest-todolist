'use client';

import { useState } from 'react';
import Button from '../Button';
import { useRecoilState } from 'recoil';
import { todosAtom } from '@/recoil';

const Input = () => {
  const [value, setValue] = useState('');

  const [todos, setTodos] = useRecoilState(todosAtom);

  const createTodo = () => {
    if (!value) return;

    const todo = {
      id: todos.length + 1,
      todo: value,
      done: false,
    };
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <input
        role="todo-input"
        type="text"
        className="my-8 mr-3 w-80 bg-gray-50 p-2 px-4 outline-none rounded-lg"
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button color="blue" onClick={createTodo}>
        등록
      </Button>

      <Button color="blue" onClick={() => setTodos([])}>
        -리셋
      </Button>
    </div>
  );
};

export default Input;
