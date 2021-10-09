import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const removeTaskHandler = (id) => {
        props.deleteTaskHandler(id);
    }

    const renderTaskList = props.tasks.map((task) => {
        return (
            <Task task={task} removeTaskHandler={removeTaskHandler} key={task.id} />
        );
    })
    return (
        <div>
            {renderTaskList}
        </div>
    );
}

export default TaskList;