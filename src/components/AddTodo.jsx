const AddTodo = () => {
  return (
    <div className="flex flex-col px-5 py-10">
      <input
        className="p-2 border-2 rounded-md self-start"
        type="text"
        placeholder="Add todo..."
      />
      <button className="px-5 py-2 bg-blue-400 text-white rounded-lg self-start mt-5">
        Submit
      </button>
    </div>
  );
};

export default AddTodo;
