import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
          placeholder="Add task"
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & time</label>
        <input
          type="text"
          value={day}
          onChange={e => {
            setDay(e.target.value);
          }}
          placeholder="Add day and time"
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={e => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
