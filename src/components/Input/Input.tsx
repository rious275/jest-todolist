'use client';

import { useState } from 'react';
import Button from '../Button';

const Input = () => {
  const [value, setValue] = useState('');

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
      <Button color="blue">등록</Button>
    </div>
  );
};

export default Input;
