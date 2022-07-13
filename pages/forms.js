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
      {tasks.map((person) => (
        <TaskCard key={person.name} person={person} setEditItem={setEditItem} />
      ))}
      <Form obj={editItem} addPerson={addTask} setEditItem={setEditItem} />
    </>
  );
}
