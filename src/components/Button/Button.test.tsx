import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  const renderButton = () => screen.getByText('Test Button');

  it('버튼이 기본 색으로 노출 된다.', () => {
    render(<Button>Test Button</Button>);
    expect(renderButton().getAttribute('class')).toContain('text-blue-500');
  });

  it('버튼이 지정한 색으로 노출 된다.', () => {
    render(<Button color="red">Test Button</Button>);
    expect(renderButton().getAttribute('class')).toContain('text-red-500');
  });
});
