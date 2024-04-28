export default function List(props) {
  return (
    <ul className="list">
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.status}
                onChange={(e) => {
                  props.tc(todo.id, e.target.checked);
                }}
              />
              {todo.title}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => {
                props.dt(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
