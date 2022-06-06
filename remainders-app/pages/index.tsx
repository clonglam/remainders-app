import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Home.module.css";
import ReminderList from "../components/ReminderList";
import IReminder from "../models/reminder";
import reminderService from "./api/reminder";
import NewReminder from "../components/NewReminder";
const Home: NextPage = () => {
  const [reminders, setReminders] = useState<IReminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    setReminders(
      reminders.filter((reminder) => {
        return reminder.id !== id;
      })
    );
    console.log(id);
  };

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <p className="fs-1 fw-bold"> Reminder App</p>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemvoeReminder={removeReminder} />
      <button className="btn btn-primary"> Click Me</button>
    </div>
  );
};

export default Home;
