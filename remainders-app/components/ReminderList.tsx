import React from "react";
import IReminder from "../models/reminder";

interface IReminderListProps {
  items: IReminder[];
  onRemvoeReminder: (id: number) => void;
}

function ReminderList({ items, onRemvoeReminder }: IReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex flex-row justify-content-between px-5"
        >
          <div>{item.title}</div>
          <div>
            <button
              className="btn btn-outline-danger mx-2 rounded-pill "
              onClick={() => {
                onRemvoeReminder(item.id);
              }}
            >
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
