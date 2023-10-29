import Input from '@/components/Input';
import Title from '@/components/Title';
import TodoList from '@/components/TodoList';

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <Title />
      <Input />
      <TodoList />
    </main>
  );
};

export default Home;
