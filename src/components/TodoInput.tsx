import * as React from 'react';

export default function TodoInput({ setTodos, todos }: any) {
  // event listeners
  // state update
  const [todo, setTodo] = React.useState('');

  const handleButtonClick = () => {
    // get the data in the input => TWO WAY DATA BINDING
    // format the payload to match the task object
    const NEW_TODO = {
      id: todos.length + 1,
      title: todo,
      status: 'Incomplete',
    };

    // update our todos
    setTodos([...todos, NEW_TODO]);
    // clear my input state
    setTodo('');
  };

  // TWO WAY DATA BINDING
  // const handleInputChange = (e: any) => {
  //   setTodo(e.target.value);
  // };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => handleButtonClick()}>Submit</button>
    </div>
  );
}
