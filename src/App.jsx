import AddTodo from "./components/AddTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <div className="App">
      <h1 className="2xl font-bold bg-slate-600 text-white p-5">My Todo App</h1>

      <AddTodo />
      <ListTodos />
    </div>
  );
}

export default App;
