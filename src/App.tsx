import * as React from 'react';
import './style.css';
import TodoInput from './components/TodoInput';
import TodosList from './components/TodosList';
// state and event listeners
// state management => LATER

export default function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: 'Task One',
      status: 'Incomplete',
    },
    // {
    //   id: 2,
    //   title: 'Task Two',
    //   status: 'Incomplete',
    // },
    // {
    //   id: 3,
    //   title: 'Task Three',
    //   status: 'Incomplete',
    // },
  ]);

  return (
    <div>
      <h1>Welcome to my task manager</h1>
      <TodoInput setTodos={setTodos} todos={todos} />

      <section>
        <TodosList todos={todos} />
      </section>
    </div>
  );
}
