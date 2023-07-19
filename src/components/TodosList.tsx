import * as React from 'react';

export default function TodosList({ todos }: any) {
  return (
    <div>
      {JSON.stringify(todos)}
      <ul>
        {todos.map((todo: any, index: number) => (
          <li key={index}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
