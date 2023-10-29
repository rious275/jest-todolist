import { render, screen } from '@testing-library/react';
import Title from './Title';

test('Todolist 타이틀이 노출된다.', () => {
  render(<Title />);
  screen.getByText('Todolist');
});
