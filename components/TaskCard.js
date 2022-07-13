import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

function TaskCard({ task, setEditTask }) {
  return (
    <Card className="my-2" body>
      {task.task}: {task.category}
      <Button variant="info" onClick={() => setEditTask(task)}>Edit</Button>
    </Card>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    task: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    effort: PropTypes.string.isRequired,
  }).isRequired,
  setEditTask: PropTypes.func.isRequired,
};

export default TaskCard;
