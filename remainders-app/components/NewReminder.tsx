import React, { useState } from "react";
interface INewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: INewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
  };

  return (
    <form className="py-3" onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary rounded-pill my-2">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
