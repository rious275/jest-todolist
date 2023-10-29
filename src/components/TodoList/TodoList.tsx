import React from 'react';
import Button from '../Button';

const list = [
  { id: 1, todo: '내용asdaskasdaskdjaksd jdkl1' },
  { id: 2, todo: '내용qw fqwdqwd2' },
  { id: 3, todo: '내용3fsdfdfsad' },
  { id: 4, todo: 'lask lfkasldkalsdklas d' },
];

const TodoList = () => {
  return (
    <div>
      <ul>
        {list.map(({ id, todo }) => (
          <li key={id} className="flex gap-10 justify-between mb-3 px-6 py-3">
            <div>{todo}</div>
            <Button color="red">삭제</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
