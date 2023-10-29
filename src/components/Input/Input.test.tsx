import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('<Input />', () => {
  it('placeholder가 제대로 노출 된다.', () => {
    render(<Input />);
    screen.getByPlaceholderText('할 일을 입력해주세요');
  });

  it('사용자가 입력한 값으로 value가 잘 변경된다.', () => {
    render(<Input />);
    const input = screen.getByRole('todo-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toEqual('test');
  });
});
