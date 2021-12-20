import "./App.css";
import { useReducer } from "react";

const initialTodos = [
  {
    id: "a",
    task: "Learn React",
    complete: false,
  },
  {
    id: "b",
    task: "Learn Firebase",
    complete: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "DO_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: true } : todo
      );
    case "UNDO_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: false } : todo
      );
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const handleToggle = (todo) => {
    dispatch({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id,
    });
  };

  return (
    <div className="App">
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => handleToggle(todo)}
          />
          {todo.task}
        </div>
      ))}
    </div>
  );
}

export default App;
