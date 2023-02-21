export const Task = (props) => {
  return (
    <div style={{ backgroundColor: props.completed ? "green" : "white" }}>
      <h3>
        {props.data + " "}
        <button onClick={() => props.completeData(props.id)}>complete</button>
        <button onClick={() => props.deleteData(props)}>x</button>
      </h3>
    </div>
  );
};
