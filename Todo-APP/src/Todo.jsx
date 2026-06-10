import { useState } from "react";
import "./Todo.css";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([
        ...todos,a
        { text: newTodo.trim(), completed: false, id: Date.now() },
      ]);
      setNewTodo("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h1 className="todo-title">✨ Todo List</h1>

        <div className="stats">
          <span>{todos.length} Total</span>
          <span>{completedCount} Done</span>
        </div>

        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input"
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <span
                className="todo-text"
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.text}
              </span>
              <div className="todo-actions">
                <button
                  onClick={() => toggleComplete(todo.id)}
                  className="complete-btn"
                  title="Toggle complete"
                >
                  {todo.completed ? "↩️" : "✓"}
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="delete-btn"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <div className="empty-state">
            <p>No todos yet! Add one above ☝️</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
