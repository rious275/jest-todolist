import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';
import { RecoilRoot } from 'recoil';

describe('<Input />', () => {
  const renderComponent = () =>
    render(
      <RecoilRoot>
        <Input />
      </RecoilRoot>
    );

  it('placeholder가 제대로 노출 된다.', () => {
    renderComponent();
    screen.getByPlaceholderText('할 일을 입력해주세요');
  });

  it('입력창에 사용자가 입력한 값으로 value가 잘 변경된다.', () => {
    renderComponent();
    const input = screen.getByRole('todo-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toEqual('test');
  });
});
