import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

function TaskCard({ item, setEditItem }) {
  return (
    <Card className="my-2" body>
      Task Name: {item.task}
      Task Category: {item.category}
      Frequency: {item.frequency}
      Effort Level: {item.effort}
      <Button variant="info" onClick={() => setEditItem(item)}>Edit</Button>
    </Card>
  );
}

TaskCard.propTypes = {
  item: PropTypes.shape({
    task: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    effort: PropTypes.string.isRequired,
  }).isRequired,
  setEditItem: PropTypes.func.isRequired,
};

export default TaskCard;
