import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  task: '',
  category: '',
  frequency: '',
  effort: '',
};

function Form({ obj, addTask, setEditItem }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (obj.task) {
      setFormInput({
        task: obj.task,
        category: obj.category,
        frequency: obj.frequency,
        effort: obj.effort,
      });
    }
  }, [obj]);

  const resetForm = () => {
    setFormInput({ ...initialState });
    setEditItem({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (obj.task) {
      resetForm();
    } else {
      addTask(formInput);
      resetForm();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 d-flex">
            <label htmlFor="task" className="form-label visually-hidden">
              Task
            </label>
            <input className="form-control form-control-lg me-1" type="text" id="task" name="task" value={formInput.task} onChange={handleChange} placeholder="ADD A TASK" required />
            <label htmlFor="category" className="form-label visually-hidden">
              Category
            </label>
            <input className="form-control form-control-lg me-1" type="text" id="category" name="category" value={formInput.category} onChange={handleChange} placeholder="ADD A CATEGORY" required />
            <label htmlFor="frequency" className="form-label visually-hidden">
              Frequency
            </label>
            <input className="form-control form-control-lg me-1" type="text" id="frequency" name="frequency" value={formInput.frequency} onChange={handleChange} placeholder="ADD A FREQUENCY" required />
            <label htmlFor="effort" className="form-label visually-hidden">
              Effort
            </label>
            <input className="form-control form-control-lg me-1" type="text" id="effort" name="effort" value={formInput.effort} onChange={handleChange} placeholder="ADD AN EFFORT LEVEL" required />
            <button className="btn btn-success" type="submit">
              {obj.task ? 'Update' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  obj: PropTypes.shape({
    task: PropTypes.string,
    category: PropTypes.string,
    frequency: PropTypes.string,
    effort: PropTypes.string,
  }),
  addTask: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

Form.defaultProps = {
  obj: initialState,
};

export default Form;
