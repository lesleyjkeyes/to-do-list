import React, { useState } from 'react';
import Form from '../components/Form';
import TaskCard from '../components/TaskCard';

export default function Forms() {
  const [tasks, setTasks] = useState([]);
  const [editItem, setEditItem] = useState({});

  const addTask = (newTask) => {
    setTasks((prevState) => [...prevState, newTask]);
  };

  return (
    <>
      {tasks.map((item) => (
        <TaskCard key={item.task} item={item} setEditItem={setEditItem} />
      ))}
      <Form obj={editItem} addTask={addTask} setEditItem={setEditItem} />
    </>
  );
}
