import React from 'react';

import TaskForm from '../../containers/TaskForm';
import TaskList from '../TaskList';

const Main = () => (
  <div>
    <TaskForm />
    <TaskList />
  </div>
);

export default Main;